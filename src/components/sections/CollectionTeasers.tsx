import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

const TEASERS = [
  {
    label: "Optique",
    href: "/collections?cat=optique",
    title: "Pour le quotidien",
    desc: "Acétates italiens, titanes danois, charnières sans vis. Une lecture précise du regard.",
    numeral: "I",
    pieces: "5 pièces",
  },
  {
    label: "Solaire",
    href: "/collections?cat=solaire",
    title: "Sous la lumière",
    desc: "Verres minéraux, polarisations choisies, formes intemporelles tirées des archives.",
    numeral: "II",
    pieces: "4 pièces",
  },
  {
    label: "Sur mesure",
    href: "/collections?cat=sur-mesure",
    title: "Façonnée pour vous",
    desc: "Une plaque d'acétate, six essayages, trois semaines. La monture qui vous va vraiment.",
    numeral: "III",
    pieces: "3 pièces",
  },
];

export function CollectionTeasers() {
  return (
    <section className="bg-cream py-28 md:py-36">
      <Container>
        <div className="flex items-end justify-between mb-16 md:mb-20 gap-8">
          <div className="max-w-xl">
            <FadeIn>
              <p className="eyebrow text-ink-soft">Collections</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="mt-6 font-serif text-4xl md:text-6xl text-ink"
                style={{ letterSpacing: "-0.02em", fontWeight: 300 }}
              >
                Trois familles, <span className="italic">une exigence</span>.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} className="hidden md:block">
            <Link
              href="/collections"
              className="text-[12px] tracking-widest uppercase border-b border-ink pb-1 text-ink hover:text-accent hover:border-accent transition-colors"
              style={{ letterSpacing: "0.2em" }}
            >
              Toutes les pièces
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {TEASERS.map((t, i) => (
            <FadeIn key={t.label} delay={0.05 * i}>
              <Link
                href={t.href}
                className="group block h-full border border-line bg-ivory p-10 md:p-12 transition-colors hover:border-ink"
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className="font-serif text-accent"
                    style={{ fontSize: "3rem", fontWeight: 300, lineHeight: 1 }}
                  >
                    {t.numeral}
                  </span>
                  <span className="eyebrow text-ink-soft">{t.pieces}</span>
                </div>

                <p className="mt-10 eyebrow text-accent">{t.label}</p>
                <h3
                  className="mt-4 font-serif text-3xl md:text-4xl text-ink"
                  style={{ fontWeight: 400, letterSpacing: "-0.02em" }}
                >
                  {t.title}
                </h3>
                <p className="mt-5 text-ink-soft text-base leading-relaxed">
                  {t.desc}
                </p>

                <span
                  className="mt-10 inline-block text-[11px] tracking-widest uppercase text-ink border-b border-ink pb-0.5 group-hover:text-accent group-hover:border-accent transition-colors"
                  style={{ letterSpacing: "0.22em" }}
                >
                  Découvrir →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="md:hidden mt-12">
          <Link
            href="/collections"
            className="text-[12px] tracking-widest uppercase border-b border-ink pb-1 text-ink"
            style={{ letterSpacing: "0.2em" }}
          >
            Toutes les pièces
          </Link>
        </div>
      </Container>
    </section>
  );
}
