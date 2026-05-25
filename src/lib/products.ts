// Catalogue seed — Pexels n'offre pas de vrais packshots montures isolées.
// TODO: remplacer par packshots dédiés (studio fond uni) avant mise en production réelle.
// Les URLs ci-dessous sont des still-life rapprochés Pexels qui font office d'illustration.

const px = (id: string, w = 1000) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export type Category = "optique" | "solaire" | "sur-mesure";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  category: Category;
  priceFrom: number; // EUR
  image: { src: string; alt: string };
  secondary?: { src: string; alt: string };
  shortNote: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "persol-714",
    name: "714 Steve McQueen",
    brand: "Persol",
    category: "solaire",
    priceFrom: 420,
    image: { src: px("46710"), alt: "Lunettes solaires Persol 714 en écaille." },
    secondary: {
      src: px("701877"),
      alt: "Vue de profil de la même monture.",
    },
    shortNote: "Pliante, acétate honey, verres minéraux polarisés.",
  },
  {
    slug: "lindberg-air-titanium-2901",
    name: "Air Titanium 2901",
    brand: "Lindberg",
    category: "optique",
    priceFrom: 680,
    image: { src: px("343720"), alt: "Monture Lindberg titane sans vis." },
    shortNote: "Titane brossé, sans vis ni soudure, 1,9 gramme.",
  },
  {
    slug: "moscot-lemtosh",
    name: "Lemtosh",
    brand: "Moscot",
    category: "optique",
    priceFrom: 380,
    image: { src: px("1438084"), alt: "Monture ronde Moscot Lemtosh." },
    shortNote: "Acétate noir, forme ronde icône depuis 1950.",
  },
  {
    slug: "garrett-leight-kinney",
    name: "Kinney",
    brand: "Garrett Leight",
    category: "optique",
    priceFrom: 360,
    image: { src: px("9979858"), alt: "Monture Garrett Leight Kinney." },
    shortNote: "Acétate Mazzucchelli, charnière six barillets.",
  },
  {
    slug: "cutler-and-gross-1305",
    name: "1305",
    brand: "Cutler & Gross",
    category: "solaire",
    priceFrom: 460,
    image: { src: px("701877"), alt: "Solaires Cutler & Gross format pantos." },
    shortNote: "Acétate italien, verres minéraux gris G15.",
  },
  {
    slug: "mykita-leica-zm12",
    name: "Leica ZM12",
    brand: "Mykita",
    category: "optique",
    priceFrom: 520,
    image: { src: px("343720"), alt: "Monture Mykita pour Leica." },
    shortNote: "Acier inoxydable, charnière brevetée sans vis.",
  },
  {
    slug: "ray-ban-clubmaster",
    name: "Clubmaster",
    brand: "Ray-Ban",
    category: "solaire",
    priceFrom: 220,
    image: { src: px("46710"), alt: "Clubmaster solaire écaille." },
    shortNote: "Browline classique, verres G15 ou polarisés.",
  },
  {
    slug: "jacques-marie-mage-molino",
    name: "Molino",
    brand: "Jacques Marie Mage",
    category: "sur-mesure",
    priceFrom: 920,
    image: { src: px("1438084"), alt: "Monture Jacques Marie Mage Molino." },
    shortNote: "Édition limitée, acétate japonais, charnière laiton.",
  },
  {
    slug: "atelier-lestrange-no-1",
    name: "Atelier № I",
    brand: "Maison Lestrange",
    category: "sur-mesure",
    priceFrom: 1450,
    image: { src: px("9979858"), alt: "Monture sur mesure Atelier № I." },
    shortNote: "Plaque acétate sélectionnée, façonnée à la main, 6 essayages.",
  },
  {
    slug: "oliver-peoples-gregory-peck",
    name: "Gregory Peck",
    brand: "Oliver Peoples",
    category: "optique",
    priceFrom: 410,
    image: { src: px("701877"), alt: "Monture Oliver Peoples Gregory Peck." },
    shortNote: "Acétate fumé, charnière flexible discrète.",
  },
  {
    slug: "barton-perreira-james",
    name: "James",
    brand: "Barton Perreira",
    category: "optique",
    priceFrom: 540,
    image: { src: px("343720"), alt: "Monture Barton Perreira James." },
    shortNote: "Acétate japonais, lignes ovales contemporaines.",
  },
  {
    slug: "thom-browne-tb-815",
    name: "TB-815",
    brand: "Thom Browne",
    category: "solaire",
    priceFrom: 580,
    image: { src: px("46710"), alt: "Solaires Thom Browne TB-815." },
    shortNote: "Aviateur titane 12k, branches plates.",
  },
];

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
