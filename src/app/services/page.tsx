import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Examen de vue, ajustement et SAV à vie, montures sur mesure, tiers payant. Les services de Maison Lestrange.",
};

const SERVICES = [
  {
    n: "I",
    title: "Examen de vue",
    duration: "45 minutes",
    price: "55 €",
    desc: "Examen complet en cabinet équipé d'un réfracteur Essilor APH 550. Mesures monoculaires et binoculaires, tests de proximité, conseils d'éclairage. Le compte rendu vous est remis sur papier.",
  },
  {
    n: "II",
    title: "Ajustement & service à vie",
    duration: "Sans rendez-vous",
    price: "Offert",
    desc: "Tout ajustement, ressoudure, changement de plaquettes, polissage de verres et révision des charnières sont offerts à vie sur les montures vendues chez nous. Sans frais, sans formulaire.",
  },
  {
    n: "III",
    title: "Montures sur mesure",
    duration: "3 semaines",
    price: "à partir de 1 450 €",
    desc: "Choix de la plaque d'acétate, dessin du gabarit, prototype d'essayage, taillage, finition main. Six essayages possibles. Étui en feutre cousu à Lyon inclus.",
  },
  {
    n: "IV",
    title: "Tiers payant",
    duration: "Toutes mutuelles",
    price: "Selon contrat",
    desc: "Tiers payant intégral avec la plupart des organismes complémentaires (Almerys, Itelis, Santéclair, Carte Blanche, Kalixia). Devis 100 % Santé fourni systématiquement.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-ivory">
        <Container>
          <div className="max-w-4xl">
            <p className="eyebrow text-ink-soft">Services</p>
            <h1
              className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl text-ink"
              style={{ letterSpacing: "-0.025em", fontWeight: 300 }}
            >
              Quatre <span className="italic">prestations</span>, pensées
              dans la durée.
            </h1>
            <p className="mt-10 max-w-xl text-ink-soft text-lg leading-relaxed">
              L&apos;essentiel du métier, sans options ni suppléments
              cachés. Chaque prestation est tarifée clairement, et
              décrite ci-dessous.
            </p>
          </div>
        </Container>
      </section>

      {/* Photo bandeau */}
      <section className="pb-20 md:pb-28 bg-ivory">
        <Container>
          <FadeIn>
            <div className="relative aspect-[21/9] bg-line overflow-hidden">
              <Image
                src={IMG.lentille.src}
                alt={IMG.lentille.alt}
                fill
                sizes="(max-width: 768px) 100vw, 90vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Cartes services */}
      <section className="pb-32 md:pb-44 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-16">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.n} delay={(i % 2) * 0.08}>
                <article className="flex flex-col h-full p-8 md:p-10 border-t border-ink">
                  <div className="flex items-start justify-between">
                    <span
                      className="font-serif text-accent text-2xl leading-none"
                      style={{ fontWeight: 400 }}
                    >
                      {s.n}
                    </span>
                    <span className="eyebrow text-ink-soft">
                      {s.duration}
                    </span>
                  </div>

                  <h2
                    className="mt-8 font-serif text-3xl md:text-4xl text-ink"
                    style={{ letterSpacing: "-0.02em", fontWeight: 400 }}
                  >
                    {s.title}
                  </h2>

                  <p className="mt-6 text-ink-soft leading-relaxed text-[15px] md:text-base">
                    {s.desc}
                  </p>

                  <div className="mt-auto pt-10 flex items-baseline justify-between">
                    <span className="eyebrow text-ink-soft">Tarif</span>
                    <span
                      className="font-serif text-xl text-ink"
                      style={{ fontWeight: 400 }}
                    >
                      {s.price}
                    </span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
