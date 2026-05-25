// Photos éditoriales — vidées de toute référence Pexels.
// Voir DECISIONS.md D-003.
//
// Tant que les visuels boutique ne sont pas livrés, les sections concernées
// passent en composition typographique pure (cf. SplitFeature, CollectionTeasers,
// /maison). Aucun composant ne doit importer une URL fantôme depuis ce module.
//
// Quand les photos arriveront, ajouter ici :
//   atelier: { src: "/images/atelier.jpg", alt: "...", width: ..., height: ... },
// et les composants concernés se reconnecteront via leurs imports IMG.xxx.

export const IMG: Record<
  string,
  { src: string; alt: string; width: number; height: number }
> = {
  // (vide pour l'instant)
};

export type ImageKey = keyof typeof IMG;
