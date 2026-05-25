# DECISIONS — Maison Lestrange (opticien vitrine)

Choix structurants tracés ici pour mémoire. À mettre à jour à chaque
décision non triviale.

---

## D-001 · Direction visuelle vidéo hero

**Statut :** ✅ tranché autrement — actif client fourni (2026-05-25)

Le client a livré directement `OPTIQUE.mp4` (4K, 13s, 36 Mo). Source
d'origine non documentée mais propriété du client, hors périmètre Pexels.
La question A vs B devient sans objet.

Encodages produits :
- `public/video/hero.mp4` — H.264 1920×1080 CRF 24, sans audio, 2,5 Mo
- `public/video/hero.webm` — VP9 CRF 32, 1,2 Mo (servi en priorité)
- `public/video/hero-poster.jpg` — frame à 5s, 74 Ko

Le script `scripts/fetch-media.ts` reste disponible si on a besoin
d'autres vidéos plus tard.

---

## D-002 · Attribution des marques sur les visuels Pexels

**Statut :** ✅ option (1) retenue — 2026-05-25

Refactor appliqué dans le commit `4a843b8` :
- 12 produits renommés en série interne « Atelier № I-V », « Solaire
  № I-IV », « Sur Mesure № I-III »
- Type `Product` : `brand` retiré, `house: "Maison Lestrange"` ajouté
- BrandStrip conservé en bandeau indépendant, légende « Quelques-unes
  des maisons travaillées en boutique » + mention explicite que les
  visuels présentés sont une composition typographique
- Mentions Persol/Lindberg/Moscot/... retirées du texte longform
  /maison et des keywords/descriptions meta

Réversible quand les vrais packshots et accords commerciaux arriveront :
il suffira d'ajouter `image: {...}` et de réintroduire `brand` dans le
type. Le composant ProductCard détecte déjà la présence d'une image.

---

## D-003 · État actuel des médias (corrigé)

**Statut :** ✅ contamination éliminée — 2026-05-25 (commit `4a843b8`)

État final :
- `src/lib/images.ts` → **vidé** (objet IMG vide en attente de vrais
  visuels boutique)
- `src/lib/products.ts` → **plus aucune URL Pexels**, les cartes produit
  utilisent le placeholder typographique de `ProductCard`
- `public/video/hero.{mp4,webm,jpg}` → **vidéo client OPTIQUE.mp4**
  (cf. D-001), pas Pexels
- Sections homepage (CollectionTeasers, SplitFeature) refondues en
  composition typographique : numéros romains, chiffres clés, sans
  aucune photo
- /maison : 2 photos retirées, remplacées par bandeau « 14, rue de
  Verneuil — Paris VII » typographique et longform sans visuel
- /services : 1 photo retirée, remplacée par bandeau « Mar-Sam ·
  10h30-19h · ... »

Vérification par grep en prod : 0 occurrence de `pexels` dans le HTML
rendu de `/`, `/collections`, `/maison`.

Réversibilité quand les vraies photos boutique arriveront :
1. Déposer les fichiers dans `public/images/`
2. Reconnecter dans `src/lib/images.ts` (déjà typé pour ça)
3. Optionnel : ajouter `image: {...}` aux produits dans
   `src/lib/products.ts` — `ProductCard` détecte automatiquement la
   présence d'une image et bascule du placeholder à la photo.

Pipeline Pexels (`scripts/fetch-media.ts`) reste disponible si on a
besoin de visuels d'ambiance temporaires sourcés proprement via l'API.

---

## D-004 · Stack
- Next.js 16.2.6 (App Router, Turbopack)
- React 19.2, TypeScript strict
- Tailwind CSS v4 + shadcn (base-nova preset, stone)
- motion 13 (ex-framer-motion)
- next/font (Fraunces + Inter)

---

## D-005 · Palette éditoriale
- `--ivory: #f5f1ea` (fond)
- `--ink: #1a1a1a` (texte)
- `--ink-soft: #4a4a4a` (texte secondaire)
- `--accent: #8b3a2e` (terre brûlée, parcimonieuse)
- `--line: #d9d2c5`
- `--cream: #ebe3d4`

---

## D-006 · Service à vie & 100 % Santé

Toutes les pages mentionnent un service après-vente à vie offert et un devis
100 % Santé systématique. Ces engagements sont des choix éditoriaux ; à
valider avec le client réel avant publication non-test.

---

## Historique

- 2026-05-25 — Création du document. Décisions D-001 et D-002 ouvertes
  en attente d'arbitrage utilisateur.
