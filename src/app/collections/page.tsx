import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/product/ProductGrid";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Notre sélection de montures optiques, solaires et sur-mesure. Pièces présentées en boutique, essayables sans rendez-vous.",
};

export default function CollectionsPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-ivory">
        <Container>
          <p className="eyebrow text-ink-soft">Collections</p>
          <h1
            className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl text-ink max-w-4xl"
            style={{ letterSpacing: "-0.025em", fontWeight: 300 }}
          >
            Une sélection, <span className="italic">peu mais bien</span>.
          </h1>
          <p className="mt-8 max-w-xl text-ink-soft text-base md:text-lg leading-relaxed">
            Une cinquantaine de pièces tournent dans la boutique. Voici
            celles présentées en ce moment. Toutes sont visibles et
            essayables sur place, sans rendez-vous.
          </p>
        </Container>
      </section>

      <section className="pb-32 md:pb-40 bg-ivory">
        <Container>
          <ProductGrid />
        </Container>
      </section>
    </>
  );
}
