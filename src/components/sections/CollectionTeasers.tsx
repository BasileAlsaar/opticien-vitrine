import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { IMG } from "@/lib/images";

const TEASERS = [
  {
    label: "Optique",
    href: "/collections?cat=optique",
    title: "Pour le quotidien",
    desc: "Acétates italiens, titanes danois, charnières sans vis. Une lecture précise du regard.",
    image: IMG.optique,
  },
  {
    label: "Solaire",
    href: "/collections?cat=solaire",
    title: "Sous la lumière",
    desc: "Verres minéraux, polarisations choisies, formes intemporelles tirées des archives.",
    image: IMG.solaire,
  },
  {
    label: "Sur mesure",
    href: "/collections?cat=sur-mesure",
    title: "Façonnée pour vous",
    desc: "Une plaque d'acétate, six essayages, trois semaines. La monture qui vous va vraiment.",
    image: IMG.surMesure,
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
              <Link href={t.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-line">
                  <Image
                    src={t.image.src}
                    alt={t.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6">
                  <p className="eyebrow text-accent">{t.label}</p>
                  <h3
                    className="mt-3 font-serif text-2xl md:text-3xl text-ink"
                    style={{ fontWeight: 400, letterSpacing: "-0.015em" }}
                  >
                    {t.title}
                  </h3>
                  <p className="mt-3 text-ink-soft text-sm md:text-base leading-relaxed max-w-sm">
                    {t.desc}
                  </p>
                </div>
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
