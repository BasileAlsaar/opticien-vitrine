import Link from "next/link";
import { Container } from "./Container";

const NAV = [
  { href: "/collections", label: "Collections" },
  { href: "/maison", label: "La maison" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact & RDV" },
];

const LEGAL = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgv", label: "CGV" },
  { href: "/confidentialite", label: "Confidentialité" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ivory/90 mt-24">
      <Container className="py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl md:text-4xl leading-tight">
              Maison <span className="italic font-light">Lestrange</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
              Opticien indépendant. Sélection éditoriale de montures,
              examen de vue clinique, atelier d&apos;ajustement à demeure.
              Sur rendez-vous.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-ivory/50">La boutique</p>
            <address className="not-italic mt-6 text-sm leading-relaxed text-ivory/80">
              14, rue de Verneuil
              <br />
              75007 Paris
              <br />
              <a
                href="tel:+33145480000"
                className="hover:text-ivory transition-colors"
              >
                +33 (0)1 45 48 00 00
              </a>
              <br />
              <a
                href="mailto:bonjour@maison-lestrange.fr"
                className="hover:text-ivory transition-colors"
              >
                bonjour@maison-lestrange.fr
              </a>
            </address>
            <div className="mt-6 text-xs text-ivory/60 leading-relaxed">
              Mardi — Samedi · 10h30 — 19h
              <br />
              Lundi sur rendez-vous
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-ivory/50">Navigation</p>
            <ul className="mt-6 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/80 hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow text-ivory/50">Légal</p>
            <ul className="mt-6 space-y-3 text-sm">
              {LEGAL.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ivory/80 hover:text-ivory transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-ivory/50">
          <span>© {new Date().getFullYear()} Maison Lestrange. Tous droits réservés.</span>
          <span>Conçu et réalisé à Paris.</span>
        </div>
      </Container>
    </footer>
  );
}
