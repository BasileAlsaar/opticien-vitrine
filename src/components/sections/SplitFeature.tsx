import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { IMG } from "@/lib/images";

const PILLARS = [
  {
    n: "I",
    title: "Examen mené à part",
    desc: "Cabinet d'examen équipé d'un réfracteur Essilor. Une demi-heure par patient, jamais moins.",
  },
  {
    n: "II",
    title: "Montage à l'atelier",
    desc: "Tous les verres sont taillés sur place. Vous repartez avec une paire ajustée, jamais avant.",
  },
  {
    n: "III",
    title: "Service à vie",
    desc: "Réglages, soudures, plaquettes : pris en charge sans rendez-vous, sans frais, pendant toute la vie de la monture.",
  },
];

export function SplitFeature() {
  return (
    <section className="bg-ivory py-32 md:py-44">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <FadeIn className="md:col-span-6 md:col-start-1">
            <div className="relative aspect-[4/5] bg-line overflow-hidden">
              <Image
                src={IMG.atelier.src}
                alt={IMG.atelier.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <div className="md:col-span-5 md:col-start-8">
            <FadeIn>
              <p className="eyebrow text-ink-soft">Savoir-faire</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-ink"
                style={{ letterSpacing: "-0.02em", fontWeight: 300 }}
              >
                Trois <span className="italic">gestes</span>, sans
                raccourci.
              </h2>
            </FadeIn>

            <ul className="mt-12 space-y-10">
              {PILLARS.map((p, i) => (
                <FadeIn key={p.n} delay={0.05 * i} as="li">
                  <div className="flex gap-8">
                    <span
                      className="font-serif text-2xl text-accent shrink-0 leading-none pt-1"
                      style={{ fontWeight: 400 }}
                    >
                      {p.n}
                    </span>
                    <div>
                      <h3
                        className="font-serif text-xl md:text-2xl text-ink"
                        style={{ fontWeight: 400 }}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-3 text-ink-soft leading-relaxed text-[15px] md:text-base">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
