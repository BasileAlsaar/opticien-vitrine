import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const PILLARS = [
  {
    n: "I",
    title: "Examen mené à part",
    desc: "Cabinet d'examen équipé d'un réfracteur. Une demi-heure par patient, jamais moins.",
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

const STATS = [
  { value: "12 m²", label: "Boutique" },
  { value: "50", label: "Pièces présentées" },
  { value: "45 min", label: "Durée d'un examen" },
  { value: "À vie", label: "Service après-vente" },
];

export function SplitFeature() {
  return (
    <section className="bg-ivory py-32 md:py-44">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left block — chiffres en grille, sans photo */}
          <FadeIn className="md:col-span-6 md:col-start-1">
            <div className="border-y border-line py-6 md:py-8">
              <p className="eyebrow text-accent">La boutique en chiffres</p>
              <dl className="mt-10 grid grid-cols-2 gap-y-12 gap-x-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <dt
                      className="font-serif text-ink"
                      style={{
                        fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.025em",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </dt>
                    <dd className="mt-3 eyebrow text-ink-soft">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
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
