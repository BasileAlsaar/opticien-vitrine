import Image from "next/image";

import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden bg-cream">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
        />
        {product.secondary ? (
          <Image
            src={product.secondary.src}
            alt={product.secondary.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        ) : null}
      </div>
      <div className="mt-6">
        <p className="eyebrow text-ink-soft">{product.brand}</p>
        <h3
          className="mt-2 font-serif text-xl md:text-2xl text-ink"
          style={{ fontWeight: 400, letterSpacing: "-0.015em" }}
        >
          {product.name}
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
