import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function Manifesto() {
  return (
    <section className="bg-ivory py-32 md:py-44">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <p className="eyebrow text-ink-soft">Manifeste</p>
          </FadeIn>
          <FadeIn delay={0.1} y={28}>
            <p
              className="mt-8 font-serif text-3xl md:text-5xl leading-[1.15] text-ink text-balance"
              style={{ letterSpacing: "-0.02em", fontWeight: 300 }}
            >
              Nous croyons qu&apos;une paire de lunettes se choisit comme
              une montre ou une paire de souliers&nbsp;:{" "}
              <span className="italic">avec le temps</span>, et pour le
              porter longtemps.
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <p className="mt-10 text-ink-soft text-base md:text-lg leading-relaxed max-w-xl">
              Ici, pas de murs saturés ni de promotions criardes. Une
              cinquantaine de modèles choisis pour leur dessin, leurs
              matières, leur fabricant. Et le temps qu&apos;il faut pour les
              essayer.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
