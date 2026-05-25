"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";
import {
  CategoryFilter,
  type FilterValue,
} from "./CategoryFilter";

export function ProductGrid() {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<FilterValue>("all");

  const counts = useMemo(() => {
    const c: Record<FilterValue, number> = {
      all: PRODUCTS.length,
      optique: 0,
      solaire: 0,
      "sur-mesure": 0,
    };
    for (const p of PRODUCTS) c[p.category]++;
    return c;
  }, []);

  const items = useMemo(
    () =>
      filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <div>
      <CategoryFilter value={filter} onChange={setFilter} counts={counts} />

      <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-20">
        <AnimatePresence mode="popLayout">
          {items.map((p) => (
            <motion.div
              key={p.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/collections/${p.slug}`} className="block">
                <ProductCard product={p} />
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
