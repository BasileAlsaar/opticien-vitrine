import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { BRANDS } from "@/lib/products";

// Bandeau "maisons travaillées" — liste textuelle, sans association
// visuelle aux fiches produits (cf. DECISIONS.md D-002).

export function BrandStrip() {
  return (
    <section className="bg-ivory border-y border-line py-16 md:py-24">
      <Container>
        <FadeIn>
          <p className="eyebrow text-ink-soft text-center">
            Quelques-unes des maisons travaillées en boutique
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="font-serif text-xl md:text-2xl text-ink/85"
                style={{ fontWeight: 300, letterSpacing: "-0.01em" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-10 text-center text-xs text-ink-soft italic max-w-2xl mx-auto leading-relaxed">
            Liste non exhaustive. Les visuels présentés sur ce site sont
            une composition typographique en attendant les photos
            officielles des collections boutique.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
