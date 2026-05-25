import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS, getProduct, getRelated, type Product } from "@/lib/products";

const CATEGORY_LABEL: Record<Product["category"], string> = {
  optique: "Optique",
  solaire: "Solaire",
  "sur-mesure": "Sur mesure",
};

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/collections/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return { title: "Pièce introuvable" };
  return {
    title: `${product.model} — ${product.house}`,
    description: `${product.shortNote} À partir de ${product.priceFrom} €. Disponible à l'essayage en boutique, 14 rue de Verneuil, Paris VII.`,
  };
}

export default async function ProductPage(
  props: PageProps<"/collections/[slug]">,
) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = getRelated(slug, 3);
  const num = product.model.split("№")[1]?.trim() ?? product.model.charAt(0);

  return (
    <>
      <article className="pt-32 md:pt-40 pb-20 md:pb-28 bg-ivory">
        <Container>
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="text-[12px] tracking-widest uppercase text-ink-soft"
            style={{ letterSpacing: "0.18em" }}
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Accueil
            </Link>
            <span className="mx-3">·</span>
            <Link
              href="/collections"
              className="hover:text-accent transition-colors"
            >
              Collections
            </Link>
            <span className="mx-3">·</span>
            <span className="text-ink">{product.model}</span>
          </nav>

          {/* Top split: typographic visual + fiche */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            {/* Visual block (typographic placeholder until packshots) */}
            <FadeIn className="md:col-span-7">
              <div className="relative aspect-square bg-cream border border-line flex flex-col items-center justify-center text-center px-8 overflow-hidden">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.image.src}
                    alt={product.image.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <span
                      className="font-serif text-ink-soft"
                      style={{
                        fontSize: "clamp(6rem, 22vw, 14rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.05em",
                        lineHeight: 0.85,
                      }}
                    >
                      {num}
                    </span>
                    <span
                      className="mt-6 eyebrow text-ink-soft"
                      style={{ letterSpacing: "0.28em" }}
                    >
                      {product.house}
                    </span>
                  </>
                )}
              </div>

              <p className="mt-4 text-xs text-ink-soft italic">
                Visuel provisoire. Les packshots dédiés seront publiés avant
                la mise en ligne définitive.
              </p>
            </FadeIn>

            {/* Fiche */}
            <div className="md:col-span-5 md:pt-4">
              <FadeIn>
                <p className="eyebrow text-accent">
                  {CATEGORY_LABEL[product.category]}
                </p>
              </FadeIn>
              <FadeIn delay={0.05}>
                <h1
                  className="mt-4 font-serif text-5xl md:text-6xl lg:text-7xl text-ink"
                  style={{ letterSpacing: "-0.025em", fontWeight: 300 }}
                >
                  {product.model}
                </h1>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="mt-8 text-ink-soft text-base md:text-lg leading-relaxed">
                  {product.shortNote}
                </p>
              </FadeIn>

              {/* Specs table */}
              <FadeIn delay={0.15}>
                <dl className="mt-12 divide-y divide-line border-y border-line">
                  {[
                    ["Catégorie", CATEGORY_LABEL[product.category]],
                    ["Sélection", product.house],
                    ["Disponibilité", "En boutique, à l'essayage"],
                    ["Référence", product.slug],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between py-4"
                    >
                      <dt className="eyebrow text-ink-soft">{k}</dt>
                      <dd className="text-sm text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>

              {/* Price + CTA */}
              <FadeIn delay={0.2}>
                <div className="mt-10 flex items-baseline justify-between">
                  <span className="eyebrow text-ink-soft">À partir de</span>
                  <span
                    className="font-serif text-3xl md:text-4xl text-ink"
                    style={{ fontWeight: 400 }}
                  >
                    {product.priceFrom} €
                  </span>
                </div>

                <p className="mt-3 text-xs text-ink-soft leading-relaxed">
                  Tarif monture seule. Devis verres correctifs établi en
                  cabinet, conforme 100 % Santé.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/contact?motif=Essayage&piece=${encodeURIComponent(
                      `${product.house} ${product.model}`,
                    )}`}
                    className="inline-flex items-center justify-center px-7 py-4 text-[12px] tracking-widest uppercase bg-ink text-ivory hover:bg-accent transition-colors"
                    style={{ letterSpacing: "0.22em" }}
                  >
                    Réserver l&apos;essayage
                  </Link>
                  <a
                    href="tel:+33145480000"
                    className="inline-flex items-center justify-center px-7 py-4 text-[12px] tracking-widest uppercase border border-ink text-ink hover:bg-ink hover:text-ivory transition-colors"
                    style={{ letterSpacing: "0.22em" }}
                  >
                    Nous appeler
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </article>

      {/* Related */}
      {related.length > 0 ? (
        <section className="pb-32 md:pb-44 bg-ivory">
          <Container>
            <div className="border-t border-line pt-16 md:pt-20">
              <div className="flex items-end justify-between mb-12 md:mb-16">
                <div>
                  <p className="eyebrow text-ink-soft">Autres pièces</p>
                  <h2
                    className="mt-4 font-serif text-3xl md:text-4xl text-ink"
                    style={{ letterSpacing: "-0.02em", fontWeight: 400 }}
                  >
                    Dans la même{" "}
                    <span className="italic">famille</span>.
                  </h2>
                </div>
                <Link
                  href="/collections"
                  className="hidden md:inline-block text-[12px] tracking-widest uppercase border-b border-ink pb-1 text-ink hover:text-accent hover:border-accent transition-colors"
                  style={{ letterSpacing: "0.2em" }}
                >
                  Toutes les pièces
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/collections/${p.slug}`}
                    className="block"
                  >
                    <ProductCard product={p} />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
