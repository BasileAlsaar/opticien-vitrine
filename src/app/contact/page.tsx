import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { RdvForm } from "./RdvForm";

export const metadata: Metadata = {
  title: "Contact & rendez-vous",
  description:
    "Maison Lestrange — 14, rue de Verneuil, 75007 Paris. Horaires, accès et formulaire de prise de rendez-vous.",
};

const ADDRESS = {
  street: "14, rue de Verneuil",
  zip: "75007",
  city: "Paris",
  country: "FR",
  phone: "+33 (0)1 45 48 00 00",
  phoneHref: "tel:+33145480000",
  email: "bonjour@maison-lestrange.fr",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Optician",
  name: "Maison Lestrange",
  description:
    "Opticien indépendant haut de gamme. Sélection éditoriale, examen de vue, atelier.",
  image: "https://opticien-vitrine.vercel.app/og.jpg",
  url: "https://opticien-vitrine.vercel.app",
  telephone: ADDRESS.phone,
  email: ADDRESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    postalCode: ADDRESS.zip,
    addressLocality: ADDRESS.city,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.857,
    longitude: 2.331,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:30",
      closes: "19:00",
    },
  ],
  priceRange: "€€€",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero address */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="eyebrow text-ink-soft">Visite & rendez-vous</p>
              <h1
                className="mt-6 font-serif text-5xl md:text-7xl lg:text-8xl text-ink"
                style={{ letterSpacing: "-0.025em", fontWeight: 300 }}
              >
                On vous <span className="italic">attend</span>.
              </h1>
              <p className="mt-8 max-w-lg text-ink-soft text-lg leading-relaxed">
                La boutique se visite sans rendez-vous aux heures
                d&apos;ouverture. Pour un examen de vue ou un essayage
                long, un créneau est préférable.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-9 md:text-right">
              <p className="eyebrow text-ink-soft">Coordonnées</p>
              <address className="not-italic mt-6 text-base text-ink leading-relaxed">
                {ADDRESS.street}
                <br />
                {ADDRESS.zip} {ADDRESS.city}
                <br />
                <a
                  href={ADDRESS.phoneHref}
                  className="border-b border-line hover:border-accent transition-colors"
                >
                  {ADDRESS.phone}
                </a>
                <br />
                <a
                  href={`mailto:${ADDRESS.email}`}
                  className="border-b border-line hover:border-accent transition-colors"
                >
                  {ADDRESS.email}
                </a>
              </address>
              <p className="mt-6 text-sm text-ink-soft leading-relaxed">
                Mardi — Samedi · 10h30 — 19h
                <br />
                Lundi sur rendez-vous
                <br />
                Métro Rue du Bac (ligne 12)
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="pb-16 md:pb-24 bg-ivory">
        <Container>
          <FadeIn>
            <div className="relative aspect-[21/9] md:aspect-[21/7] bg-line overflow-hidden border border-line">
              <iframe
                title="Plan d'accès à la boutique"
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.327%2C48.855%2C2.335%2C48.859&layer=mapnik&marker=48.857%2C2.331"
                className="w-full h-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Form */}
      <section className="pb-32 md:pb-44 bg-ivory">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-accent">Formulaire</p>
              <h2
                className="mt-6 font-serif text-3xl md:text-4xl text-ink"
                style={{ letterSpacing: "-0.02em", fontWeight: 400 }}
              >
                Demander un rendez-vous.
              </h2>
              <p className="mt-6 text-ink-soft leading-relaxed text-[15px]">
                Nous vous confirmons un créneau sous 24 h ouvrées par
                téléphone ou par email — au choix.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <RdvForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
