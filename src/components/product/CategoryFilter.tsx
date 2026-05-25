"use client";

import { cn } from "@/lib/utils";

import type { Category } from "@/lib/products";

type FilterValue = "all" | Category;

const OPTIONS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "Toutes" },
  { value: "optique", label: "Optique" },
  { value: "solaire", label: "Solaire" },
  { value: "sur-mesure", label: "Sur mesure" },
];

export function CategoryFilter({
  value,
  onChange,
  counts,
}: {
  value: FilterValue;
  onChange: (v: FilterValue) => void;
  counts: Record<FilterValue, number>;
}) {
  return (
    <div
      role="tablist"
      aria-label="Filtrer par catégorie"
      className="flex flex-wrap gap-2 md:gap-1"
    >
      {OPTIONS.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onChange(opt.value)}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 text-[12px] tracking-widest uppercase transition-colors border",
              active
                ? "bg-ink text-ivory border-ink"
                : "bg-transparent text-ink border-line hover:border-ink",
            )}
            style={{ letterSpacing: "0.18em" }}
          >
            <span>{opt.label}</span>
            <span
              className={cn(
                "text-[10px] tabular-nums",
                active ? "text-ivory/60" : "text-ink-soft",
              )}
            >
              {counts[opt.value]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export type { FilterValue };
