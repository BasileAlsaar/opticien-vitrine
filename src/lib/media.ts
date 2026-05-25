// Vidéo hero — self-hosted depuis public/video/
// Source originale : Pexels (id 3209828), réencodée 1600px H.264 CRF 28 sans audio (~2,4 Mo).
// Poster extrait à 2s. Le self-hosting évite les 403 du CDN Pexels sur referrer cross-origin.

export const HERO_VIDEO = {
  mp4: "/video/hero.mp4",
  webm: undefined as string | undefined,
  poster: "/video/hero-poster.jpg",
  alt: "Plan rapproché lent dans une ambiance feutrée, lumière chaude.",
  credit: "Vidéo : Pexels",
};
