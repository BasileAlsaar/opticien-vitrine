// Photos éditoriales — URLs Pexels CDN (images.pexels.com)
// Sélection : ambiance atelier, montures vintage, lentilles, mains sur monture.
// Toutes vérifiées sans visage proéminent (cadrage natures-mortes / mains).

const px = (id: string, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  // Atelier / savoir-faire
  atelier: {
    src: px("1438084", 1600),
    alt: "Détail d'une monture posée sur établi d'atelier d'optique.",
    width: 1600,
    height: 1067,
  },
  outils: {
    src: px("9979858", 1600),
    alt: "Outils d'opticien sur un comptoir en bois clair.",
    width: 1600,
    height: 1067,
  },

  // Teasers Collections
  optique: {
    src: px("701877", 1200),
    alt: "Monture optique classique sur fond clair.",
    width: 1200,
    height: 1500,
  },
  solaire: {
    src: px("46710", 1200),
    alt: "Paire de lunettes solaires en écaille, lumière chaude.",
    width: 1200,
    height: 1500,
  },
  surMesure: {
    src: px("343720", 1200),
    alt: "Détail de plaquettes et charnière d'une monture sur mesure.",
    width: 1200,
    height: 1500,
  },

  // Page Maison (longform)
  facade: {
    src: px("2737598", 2000),
    alt: "Façade de boutique à Paris, devanture en bois sombre.",
    width: 2000,
    height: 1333,
  },
  interieur: {
    src: px("6757617", 1800),
    alt: "Intérieur de boutique d'opticien, présentoirs en bois.",
    width: 1800,
    height: 1200,
  },

  // Page Contact (intérieur cabinet d'examen)
  cabinet: {
    src: px("6543612", 1800),
    alt: "Cabinet d'examen de vue, lumière douce.",
    width: 1800,
    height: 1200,
  },

  // Page Services (lentille gros plan)
  lentille: {
    src: px("1212466", 1800),
    alt: "Verre optique en gros plan, reflets bleutés.",
    width: 1800,
    height: 1200,
  },
} as const;

export type ImageKey = keyof typeof IMG;
