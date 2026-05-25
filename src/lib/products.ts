// Catalogue seed — noms de modèles génériques, sans attribution de marque externe.
// Voir DECISIONS.md D-002 : pas d'association visuel Pexels ↔ marque nommée
// tant que les packshots officiels et / ou les accords commerciaux ne sont pas en place.
//
// Visuels : aucun pour l'instant. Les cartes produit sont rendues en typographie
// pleine (cf. ProductCard). Quand les packshots arriveront, ajouter
// `image: { src, alt }` ici — le composant les utilisera automatiquement.

export type Category = "optique" | "solaire" | "sur-mesure";

export type Product = {
  slug: string;
  model: string; // référence interne, ex. "Atelier № III"
  house: string; // toujours "Maison Lestrange" tant qu'on ne référence pas de marque extérieure
  category: Category;
  priceFrom: number; // EUR
  image?: { src: string; alt: string };
  secondary?: { src: string; alt: string };
  shortNote: string;
};

// Alias rétro-compat : certains composants utilisent encore `product.name` et `product.brand`.
// Map via getters dans le composant si besoin.
export const PRODUCTS: Product[] = [
  {
    slug: "atelier-optique-i",
    model: "Atelier № I",
    house: "Maison Lestrange",
    category: "optique",
    priceFrom: 380,
    shortNote: "Acétate italien noir mat, charnière six barillets, taillage à la main.",
  },
  {
    slug: "atelier-optique-ii",
    model: "Atelier № II",
    house: "Maison Lestrange",
    category: "optique",
    priceFrom: 420,
    shortNote: "Acétate honey, monture pantos, plaquettes fines en titane.",
  },
  {
    slug: "atelier-optique-iii",
    model: "Atelier № III",
    house: "Maison Lestrange",
    category: "optique",
    priceFrom: 460,
    shortNote: "Acétate écaille profonde, charnière flexible, branches affinées.",
  },
  {
    slug: "atelier-optique-iv",
    model: "Atelier № IV",
    house: "Maison Lestrange",
    category: "optique",
    priceFrom: 540,
    shortNote: "Titane brossé danois, soudure invisible, 4 grammes.",
  },
  {
    slug: "atelier-optique-v",
    model: "Atelier № V",
    house: "Maison Lestrange",
    category: "optique",
    priceFrom: 580,
    shortNote: "Acier inoxydable, formes ovales, dessin contemporain.",
  },
  {
    slug: "atelier-solaire-i",
    model: "Solaire № I",
    house: "Maison Lestrange",
    category: "solaire",
    priceFrom: 320,
    shortNote: "Acétate noir, pantos classique, verres minéraux gris G15.",
  },
  {
    slug: "atelier-solaire-ii",
    model: "Solaire № II",
    house: "Maison Lestrange",
    category: "solaire",
    priceFrom: 360,
    shortNote: "Browline acétate écaille, verres polarisés bruns.",
  },
  {
    slug: "atelier-solaire-iii",
    model: "Solaire № III",
    house: "Maison Lestrange",
    category: "solaire",
    priceFrom: 420,
    shortNote: "Pliante en acétate honey, verres minéraux polarisés.",
  },
  {
    slug: "atelier-solaire-iv",
    model: "Solaire № IV",
    house: "Maison Lestrange",
    category: "solaire",
    priceFrom: 480,
    shortNote: "Aviateur titane 12k, branches plates, fil noir.",
  },
  {
    slug: "sur-mesure-i",
    model: "Sur Mesure № I",
    house: "Maison Lestrange",
    category: "sur-mesure",
    priceFrom: 1450,
    shortNote: "Plaque acétate sélectionnée, façonnée à la main, 6 essayages.",
  },
  {
    slug: "sur-mesure-ii",
    model: "Sur Mesure № II",
    house: "Maison Lestrange",
    category: "sur-mesure",
    priceFrom: 1650,
    shortNote: "Acétate japonais, charnière laiton brossé, étui feutre Lyon.",
  },
  {
    slug: "sur-mesure-iii",
    model: "Sur Mesure № III",
    house: "Maison Lestrange",
    category: "sur-mesure",
    priceFrom: 1850,
    shortNote: "Acétate transparent, gabarit dessiné à la main, 4 prototypes.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelated(slug: string, n = 3): Product[] {
  const target = getProduct(slug);
  if (!target) return [];
  return PRODUCTS.filter(
    (p) => p.slug !== slug && p.category === target.category,
  ).slice(0, n);
}

// Maisons travaillées en boutique — liste indépendante, NON associée aux
// visuels des fiches produits. Affichée séparément en BrandStrip.
export const BRANDS = [
  "Persol",
  "Lindberg",
  "Moscot",
  "Garrett Leight",
  "Cutler & Gross",
  "Mykita",
  "Jacques Marie Mage",
  "Oliver Peoples",
  "Barton Perreira",
];
