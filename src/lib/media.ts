// Vidéo hero — actif fourni par le client (source originale 4K 13s).
// Réencodée en 1920×1080 :
//   - WebM VP9 CRF 32 (1,2 Mo) servi en priorité aux navigateurs compatibles
//   - MP4 H.264 CRF 24 (2,5 Mo) fallback (Safari < 14.1)
//   - Sans audio (hero muet, économie de poids et autoplay obligatoire)
// Poster extrait à 5 s (74 Ko).

export const HERO_VIDEO = {
  mp4: "/video/hero.mp4",
  webm: "/video/hero.webm" as string | undefined,
  poster: "/video/hero-poster.jpg",
  alt: "Plan d'atelier d'optique, ambiance feutrée.",
  credit: "Vidéo fournie par Maison Lestrange",
};
