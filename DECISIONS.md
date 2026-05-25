# DECISIONS — Maison Lestrange (opticien vitrine)

Choix structurants tracés ici pour mémoire. À mettre à jour à chaque
décision non triviale.

---

## D-001 · Direction visuelle vidéo hero

**Statut :** ⏳ en attente d'arbitrage

| Option | Briefing | Choix |
|---|---|---|
| A — Portrait éditorial | Homme 35-55 ans, acétate, regard qui dérive, pas de sourire, cohérent Cubitts/Garrett Leight | ☐ |
| B — Portrait chaleureux | Sourire en coin, lumière naturelle, intérieur boisé/librairie | ☐ |

Le script `scripts/fetch-media.ts` est paramétré pour interroger les
queries correspondantes (`--direction=A` ou `B`).

---

## D-002 · Attribution des marques sur les visuels Pexels

**Statut :** ⏳ en attente d'arbitrage

**Problème** : Pexels ne propose pas de photos officielles des marques (Persol,
Lindberg, Moscot, etc.). Associer un visuel Pexels générique à un nom de
marque dans `lib/products.ts` constitue une fausse représentation
commerciale (risque juridique).

| Option | Effet | Choix |
|---|---|---|
| (1) Effacer les marques sur les fiches produits, garder noms génériques (« Optique Atelier 12 », « Solaire № III ») ; le bandeau `BrandStrip` peut afficher la liste des marques avec un eyebrow « Maisons travaillées » | Refactor `lib/products.ts` : `brand` → `house: "Maison Lestrange"`, ajout `model: "Atelier 12"`. UX produit change peu (l'eyebrow devient le numéro de modèle) | ☐ |
| (2) Déconnexion totale : grille produits = montures génériques, bandeau marques = liste indépendante non liée aux visuels | Plus radical. La carte produit perd son eyebrow marque, remplacé par catégorie ou rien | ☐ |

---

## D-003 · État actuel des médias (à corriger)

**Statut :** ⚠️ contamination active en prod

Inventoriée par `grep` le 2026-05-25, branch `main` (commit `12b5c36`) :

- `src/lib/images.ts` : 9 photos Pexels avec IDs choisis sans API
- `src/lib/products.ts` : 12 produits Pexels avec marques nommées (D-002)
- `public/video/hero.mp4` : Pexels ID 3209828, sélectionné parce que curl 200, contenu non vérifié
- `public/video/hero-poster.jpg` : extrait du fichier ci-dessus

Action en attente : remplacement complet via le pipeline
`scripts/fetch-media.ts` + sélection humaine + écriture
`lib/media.generated.ts`.

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
