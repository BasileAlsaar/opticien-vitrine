import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <section className="pt-32 md:pt-40 pb-32 md:pb-44 bg-ivory">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-ink-soft">Informations</p>
          <h1
            className="mt-6 font-serif text-5xl md:text-6xl text-ink"
            style={{ letterSpacing: "-0.025em", fontWeight: 300 }}
          >
            Confidentialité
          </h1>

          <div className="mt-12 space-y-8 text-ink-soft leading-[1.75] text-[15px] md:text-base">
            <div>
              <h2 className="font-serif text-xl text-ink" style={{ fontWeight: 400 }}>
                Données collectées
              </h2>
              <p className="mt-3">
                Le formulaire de prise de rendez-vous collecte vos nom,
                email, téléphone, motif et date souhaitée. Ces
                informations servent uniquement à organiser votre venue
                en boutique.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-ink" style={{ fontWeight: 400 }}>
                Conservation
              </h2>
              <p className="mt-3">
                Les demandes sont conservées trois mois après le rendez-vous.
                Si vous devenez client, le dossier optique est conservé
                conformément aux obligations de la profession (cinq ans).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-ink" style={{ fontWeight: 400 }}>
                Vos droits
              </h2>
              <p className="mt-3">
                Vous disposez à tout moment d&apos;un droit d&apos;accès,
                de rectification et de suppression. Pour exercer ces
                droits, écrivez à{" "}
                <a
                  href="mailto:bonjour@maison-lestrange.fr"
                  className="border-b border-line hover:border-accent transition-colors"
                >
                  bonjour@maison-lestrange.fr
                </a>
                .
              </p>
            </div>

            <p className="text-xs text-ink-soft pt-8 border-t border-line italic">
              Document gabarit. Aucun cookie tiers, aucun outil de
              tracking analytique n&apos;est actuellement déployé.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
