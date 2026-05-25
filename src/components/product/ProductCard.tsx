import type { Product } from "@/lib/products";

const CATEGORY_LABEL: Record<Product["category"], string> = {
  optique: "Optique",
  solaire: "Solaire",
  "sur-mesure": "Sur mesure",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      {/* Visual block — typographic placeholder until packshots are shot.
          The block keeps the editorial rhythm of the grid without faking a product photo. */}
      <div className="relative aspect-square overflow-hidden bg-cream border border-line">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image.src}
            alt={product.image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <TypographicPlaceholder product={product} />
        )}
      </div>

      <div className="mt-6">
        <p className="eyebrow text-ink-soft">
          {CATEGORY_LABEL[product.category]}
        </p>
        <h3
          className="mt-2 font-serif text-xl md:text-2xl text-ink"
          style={{ fontWeight: 400, letterSpacing: "-0.015em" }}
        >
          {product.model}
        </h3>
        <p className="mt-2 text-ink-soft text-sm leading-relaxed">
          {product.shortNote}
        </p>
        <p className="mt-4 text-ink text-sm">
          À partir de{" "}
          <span className="font-medium">{product.priceFrom} €</span>
        </p>
      </div>
    </article>
  );
}

function TypographicPlaceholder({ product }: { product: Product }) {
  const num = product.model.split("№")[1]?.trim();
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
      aria-hidden="true"
    >
      <span
        className="font-serif text-ink-soft"
        style={{
          fontSize: "clamp(3rem, 12vw, 5.5rem)",
          fontWeight: 300,
          letterSpacing: "-0.04em",
          lineHeight: 0.9,
        }}
      >
        {num ?? product.model.charAt(0)}
      </span>
      <span
        className="mt-4 eyebrow text-ink-soft"
        style={{ letterSpacing: "0.25em" }}
      >
        {product.house}
      </span>
    </div>
  );
}
