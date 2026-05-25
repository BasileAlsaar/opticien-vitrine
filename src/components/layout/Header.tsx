"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const NAV = [
  { href: "/collections", label: "Collections" },
  { href: "/maison", label: "La maison" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Visite & RDV" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        solid
          ? "bg-ivory/95 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-edge h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Maison Lestrange — accueil"
          className={cn(
            "font-serif text-lg md:text-xl tracking-tight transition-colors",
            solid ? "text-ink" : "text-ivory",
          )}
        >
          Maison <span className="italic font-light">Lestrange</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13px] tracking-wider uppercase transition-colors",
                solid
                  ? "text-ink hover:text-accent"
                  : "text-ivory/90 hover:text-ivory",
                pathname === item.href && "text-accent",
              )}
              style={{ letterSpacing: "0.15em" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={cn(
            "hidden md:inline-flex items-center text-[12px] tracking-widest uppercase border px-5 py-2.5 transition-colors",
            solid
              ? "border-ink text-ink hover:bg-ink hover:text-ivory"
              : "border-ivory text-ivory hover:bg-ivory hover:text-ink",
          )}
          style={{ letterSpacing: "0.18em" }}
        >
          Prendre RDV
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className={cn(
            "md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 transition-colors",
            solid ? "text-ink" : "text-ivory",
          )}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 bg-ivory transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col h-full px-8 pt-10 pb-12">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-serif text-4xl py-4 border-b border-line text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-auto inline-flex items-center justify-center text-[12px] tracking-widest uppercase border border-ink text-ink py-4"
            style={{ letterSpacing: "0.18em" }}
          >
            Prendre rendez-vous
          </Link>
        </nav>
      </div>
    </header>
  );
}
