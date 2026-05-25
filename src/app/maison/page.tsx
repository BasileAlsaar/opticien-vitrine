import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "La maison",
  description:
    "L'histoire de Maison Lestrange, opticien indépendant rue de Verneuil. Un atelier, un cabinet, un parti pris.",
};

export default function MaisonPage() {
  return (
    <>
      {/* Hero éditorial */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-ivory">
        <Container>
          <div className="max-w-4xl">
            <p className="eyebrow text-ink-soft">La maison</p>
            <h1
              className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl text-ink"
              style={{ letterSpacing: "-0.025em", fontWeight: 300 }}
            >
              Une boutique <span className="italic">qui prend son temps</span>.
            </h1>
            <p className="mt-10 max-w-2xl text-ink-soft text-lg md:text-xl leading-relaxed">
              Maison Lestrange a ouvert rue de Verneuil en 2014. Treize
              mètres carrés, une cinquantaine de montures, un atelier au
              fond, un cabinet à l&apos;étage. Pas de pancarte, pas de
              soldes, pas de réseaux sociaux saturés. Juste la lunette
              comme objet&nbsp;: dessinée, fabriquée, ajustée, portée
              longtemps.
            </p>
          </div>
        </Container>
      </section>

      {/* Photo XXL */}
      <section className="pt-12 pb-24 md:pb-32 bg-ivory">
        <Container>
          <FadeIn>
            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-line overflow-hidden">
              <Image
                src={IMG.facade.src}
                alt={IMG.facade.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-xs text-ink-soft italic">
              14, rue de Verneuil, Paris VII. Devanture d&apos;origine
              restaurée en 2014.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Longform 1 */}
      <section className="pb-24 md:pb-32 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <FadeIn>
                <p className="eyebrow text-accent">Chapitre I</p>
                <p className="mt-3 font-serif text-lg text-ink italic">
                  Le métier
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-5 max-w-2xl">
              <FadeIn>
                <h2
                  className="font-serif text-3xl md:text-4xl text-ink"
                  style={{ letterSpacing: "-0.02em", fontWeight: 400 }}
                >
                  Un opticien d&apos;abord, pas un commerçant.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="mt-8 space-y-6 text-ink-soft text-base md:text-[17px] leading-[1.75]">
                  <p>
                    Pierre Lestrange a appris le métier chez Boucheron
                    optique, puis au Comptoir des lunetiers, avant de
                    passer trois ans à l&apos;atelier Cartier. Il y a
                    appris ce qu&apos;est une charnière, et pourquoi
                    elle compte autant que le dessin.
                  </p>
                  <p>
                    La boutique en garde l&apos;empreinte&nbsp;:{" "}
                    <em className="italic">
                      pas de monture qu&apos;on ne pourrait pas réparer
                      soi-même
                    </em>
                    . Pas de matière qu&apos;on ne saurait pas remplacer
                    si elle venait à faillir. Et un service à vie, sans
                    petite police d&apos;assurance cachée.
                  </p>
                  <p>
                    Le reste — l&apos;accueil, le temps qu&apos;on prend
                    pour essayer, le café qu&apos;on vous sert pendant
                    l&apos;attente — découle de cette idée simple&nbsp;:
                    une paire de lunettes, c&apos;est un objet qu&apos;on
                    porte tous les jours. Elle mérite qu&apos;on s&apos;y
                    arrête.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Pull quote */}
      <section className="py-24 md:py-32 bg-cream">
        <Container>
          <FadeIn>
            <blockquote className="max-w-4xl mx-auto text-center">
              <p
                className="font-serif text-3xl md:text-5xl lg:text-6xl text-ink italic leading-[1.15] text-balance"
                style={{ letterSpacing: "-0.02em", fontWeight: 300 }}
              >
                « Une bonne paire de lunettes, c&apos;est celle qu&apos;on
                ne sent plus, et qu&apos;on garde dix ans. »
              </p>
              <footer className="mt-10 eyebrow text-ink-soft">
                Pierre Lestrange — Opticien
              </footer>
            </blockquote>
          </FadeIn>
        </Container>
      </section>

      {/* Photo + texte 2 */}
      <section className="py-24 md:py-32 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <FadeIn className="md:col-span-7 md:col-start-1">
              <div className="relative aspect-[5/4] bg-line overflow-hidden">
                <Image
                  src={IMG.interieur.src}
                  alt={IMG.interieur.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>

            <div className="md:col-span-4 md:col-start-9">
              <FadeIn>
                <p className="eyebrow text-accent">Chapitre II</p>
                <p className="mt-3 font-serif text-lg text-ink italic">
                  La sélection
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2
                  className="mt-6 font-serif text-3xl md:text-4xl text-ink"
                  style={{ letterSpacing: "-0.02em", fontWeight: 400 }}
                >
                  Cinquante pièces, pas une de plus.
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-8 text-ink-soft text-base md:text-[17px] leading-[1.75]">
                  On ne travaille qu&apos;avec des maisons dont on
                  connaît l&apos;atelier&nbsp;: Lindberg à Aarhus, Mykita
                  à Berlin, Garrett Leight à Los Angeles, Jacques Marie
                  Mage à Hollywood. Chaque pièce a sa raison d&apos;être
                  ici&nbsp;; aucune n&apos;est là par défaut.
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing */}
      <section className="py-24 md:py-32 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-3">
              <FadeIn>
                <p className="eyebrow text-accent">Chapitre III</p>
                <p className="mt-3 font-serif text-lg text-ink italic">
                  L&apos;atelier
                </p>
              </FadeIn>
            </div>
            <div className="md:col-span-7 md:col-start-5 max-w-2xl">
              <FadeIn>
                <h2
                  className="font-serif text-3xl md:text-4xl text-ink"
                  style={{ letterSpacing: "-0.02em", fontWeight: 400 }}
                >
                  Tout se fait ici.
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="mt-8 space-y-6 text-ink-soft text-base md:text-[17px] leading-[1.75]">
                  <p>
                    Le taillage des verres, le montage, l&apos;ajustement
                    : aucun envoi en sous-traitance. La meuleuse
                    numérique est au fond de la boutique, derrière une
                    cloison de chêne. On y entend tourner les disques au
                    moment du café.
                  </p>
                  <p>
                    Pour les pièces sur mesure, on commence par dessiner
                    sur papier, puis par tailler un prototype en acétate
                    transparent. Trois essayages au moins, parfois six.
                    La monture est livrée trois semaines plus tard, dans
                    son étui en feutre cousu à Lyon.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
