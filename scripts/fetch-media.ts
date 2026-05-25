/**
 * fetch-media.ts
 * ----------------
 * Interroge l'API Pexels et écrit des candidats dans tmp/pexels-candidates.json.
 *
 * Protocole non-négociable (rappel) :
 * - PEXELS_API_KEY requis (process.env). Absent → exit 1.
 * - Ne sélectionne JAMAIS automatiquement : log les top N pour validation humaine.
 * - Rate-limit ou erreur API → exit. Pas de fallback inventé.
 *
 * Lancement :
 *   PEXELS_API_KEY=... npx tsx scripts/fetch-media.ts --direction=A
 *   PEXELS_API_KEY=... npx tsx scripts/fetch-media.ts --direction=B
 *
 * Sortie :
 *   tmp/pexels-candidates.json   (objet complet pour relecture humaine)
 *   tmp/pexels-candidates.md     (vue lisible avec liens preview)
 *
 * Aucune écriture dans src/lib/. La sélection finale se fait dans un second
 * temps, manuellement, dans lib/media.generated.ts.
 */

import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const API = "https://api.pexels.com";

// ----- Direction A — Portrait éditorial (Cubitts / Garrett Leight) -----
const QUERIES_VIDEO_A = [
  "man portrait glasses",
  "man wearing eyeglasses",
  "stylish man portrait",
  "mature man glasses",
];

// ----- Direction B — Portrait chaleureux -----
const QUERIES_VIDEO_B = [
  "man smiling glasses portrait",
  "happy man eyeglasses",
  "confident man glasses",
];

// ----- Photos produit (cadrage serré) -----
const QUERIES_PRODUCT = [
  "eyeglasses close up",
  "luxury sunglasses still life",
  "acetate glasses detail",
  "tortoise shell eyewear",
  "designer eyeglasses macro",
  "vintage glasses flat lay",
];

// ----- Photos d'ambiance / atelier -----
const QUERIES_AMBIANCE = [
  "optician workshop hands",
  "eyewear craftsman",
  "glasses repair",
  "eye exam phoropter",
  "optometrist consultation",
  "acetate material",
  "glasses lens polishing",
];

type VideoFile = {
  id: number;
  quality: string;
  file_type: string;
  width: number;
  height: number;
  link: string;
};

type PexelsVideo = {
  id: number;
  width: number;
  height: number;
  duration: number;
  url: string;
  image: string;
  video_files: VideoFile[];
  user: { name: string; url: string };
  tags?: string[];
};

type PexelsPhoto = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
  };
  alt: string;
};

function getKey(): string {
  const key = process.env.PEXELS_API_KEY;
  if (!key) {
    console.error(
      "PEXELS_API_KEY manquant. Voir scripts/fetch-media.ts pour le protocole.",
    );
    process.exit(1);
  }
  return key;
}

async function search<T>(
  endpoint: "videos" | "photos",
  query: string,
  params: Record<string, string | number>,
  key: string,
): Promise<{ data: T[]; total: number }> {
  const url = new URL(`${API}/${endpoint}/search`);
  url.searchParams.set("query", query);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { Authorization: key } });
  if (res.status === 429) {
    console.error(`Rate-limit Pexels atteint sur "${query}". Stop.`);
    process.exit(2);
  }
  if (!res.ok) {
    console.error(`Erreur Pexels ${res.status} sur "${query}". Stop.`);
    process.exit(3);
  }
  const body = await res.json();
  const key_data = endpoint === "videos" ? "videos" : "photos";
  return { data: body[key_data] as T[], total: body.total_results };
}

// Filtres "tueurs de stock" pour vidéos selon le brief
function videoPassesCriteria(v: PexelsVideo): boolean {
  if (v.width < 1920 || v.height < 1080) return false;
  if (v.duration < 8 || v.duration > 25) return false;
  return true;
}

async function main() {
  const args = Object.fromEntries(
    process.argv.slice(2).map((a) => {
      const [k, v] = a.replace(/^--/, "").split("=");
      return [k, v ?? "true"];
    }),
  );
  const direction = (args.direction || "A").toUpperCase();
  if (direction !== "A" && direction !== "B") {
    console.error("--direction=A|B requis.");
    process.exit(1);
  }
  const key = getKey();
  const videoQueries = direction === "A" ? QUERIES_VIDEO_A : QUERIES_VIDEO_B;

  const candidates = {
    direction,
    fetchedAt: new Date().toISOString(),
    video: [] as Array<{
      query: string;
      candidate: PexelsVideo;
      passes: boolean;
    }>,
    product: [] as Array<{ query: string; candidate: PexelsPhoto }>,
    ambiance: [] as Array<{ query: string; candidate: PexelsPhoto }>,
  };

  console.error(`[1/3] Vidéos hero (direction ${direction})…`);
  for (const q of videoQueries) {
    const { data } = await search<PexelsVideo>(
      "videos",
      q,
      { orientation: "landscape", size: "large", per_page: 10 },
      key,
    );
    for (const v of data) {
      candidates.video.push({
        query: q,
        candidate: v,
        passes: videoPassesCriteria(v),
      });
    }
  }

  console.error(`[2/3] Photos produit…`);
  for (const q of QUERIES_PRODUCT) {
    const { data } = await search<PexelsPhoto>(
      "photos",
      q,
      { orientation: "portrait", per_page: 8 },
      key,
    );
    for (const p of data) candidates.product.push({ query: q, candidate: p });
  }

  console.error(`[3/3] Photos ambiance…`);
  for (const q of QUERIES_AMBIANCE) {
    const { data } = await search<PexelsPhoto>(
      "photos",
      q,
      { orientation: "landscape", per_page: 6 },
      key,
    );
    for (const p of data) candidates.ambiance.push({ query: q, candidate: p });
  }

  await mkdir("tmp", { recursive: true });
  await writeFile(
    join("tmp", "pexels-candidates.json"),
    JSON.stringify(candidates, null, 2),
  );

  // Vue lisible
  let md = `# Pexels candidates — direction ${direction}\n\nFetched ${candidates.fetchedAt}\n\n`;
  md += `## Vidéos hero — passing criteria (>=1920x1080, 8-25s)\n\n`;
  for (const v of candidates.video.filter((x) => x.passes)) {
    md += `- **${v.candidate.id}** [${v.candidate.width}x${v.candidate.height} · ${v.candidate.duration}s · query: ${v.query}]\n`;
    md += `  - Pexels page : ${v.candidate.url}\n`;
    md += `  - Poster : ${v.candidate.image}\n`;
    md += `  - HD file : ${v.candidate.video_files.find((f) => f.quality === "hd")?.link ?? v.candidate.video_files[0]?.link}\n\n`;
  }
  md += `\n## Photos produit (top 10 par requête)\n\n`;
  const productByQuery = new Map<string, typeof candidates.product>();
  for (const p of candidates.product) {
    const arr = productByQuery.get(p.query) ?? [];
    arr.push(p);
    productByQuery.set(p.query, arr);
  }
  for (const [q, arr] of productByQuery) {
    md += `### ${q}\n\n`;
    for (const p of arr.slice(0, 6)) {
      md += `- **${p.candidate.id}** — ${p.candidate.alt || "(sans alt)"}\n  ${p.candidate.url}\n  ${p.candidate.src.medium}\n\n`;
    }
  }
  md += `\n## Photos ambiance (top 6 par requête)\n\n`;
  const ambByQuery = new Map<string, typeof candidates.ambiance>();
  for (const p of candidates.ambiance) {
    const arr = ambByQuery.get(p.query) ?? [];
    arr.push(p);
    ambByQuery.set(p.query, arr);
  }
  for (const [q, arr] of ambByQuery) {
    md += `### ${q}\n\n`;
    for (const p of arr.slice(0, 4)) {
      md += `- **${p.candidate.id}** — ${p.candidate.alt || "(sans alt)"}\n  ${p.candidate.url}\n  ${p.candidate.src.medium}\n\n`;
    }
  }

  await writeFile(join("tmp", "pexels-candidates.md"), md);

  console.error(
    `OK. ${candidates.video.filter((v) => v.passes).length} vidéos passent les critères. Voir tmp/pexels-candidates.md`,
  );
  console.error(`Aucune écriture dans src/lib/. Sélection à faire à la main.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(99);
});
