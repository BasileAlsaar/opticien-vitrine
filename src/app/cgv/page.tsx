import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  robots: { index: false, follow: true },
};

export default function CGVPage() {
  return (
    <section className="pt-32 md:pt-40 pb-32 md:pb-44 bg-ivory">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-ink-soft">Informations</p>
          <h1
            className="mt-6 font-serif text-5xl md:text-6xl text-ink"
            style={{ letterSpacing: "-0.025em", fontWeight: 300 }}
          >
            Conditions générales
          </h1>

          <div className="mt-12 space-y-8 text-ink-soft leading-[1.75] text-[15px] md:text-base">
            <p>
              Les présentes conditions s&apos;appliquent aux prestations
              fournies en boutique et aux services associés. Elles ne
              régissent pas une activité de vente à distance, Maison
              Lestrange n&apos;effectuant ni vente en ligne ni livraison.
            </p>

            <div>
              <h2 className="font-serif text-xl text-ink" style={{ fontWeight: 400 }}>
                Devis et commandes
              </h2>
              <p className="mt-3">
                Tout achat de monture et / ou de verres correctifs fait
                l&apos;objet d&apos;un devis nominatif remis sur place,
                conforme à la réforme 100&nbsp;% Santé.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-ink" style={{ fontWeight: 400 }}>
                Garantie et service à vie
              </h2>
              <p className="mt-3">
                Toutes les montures vendues bénéficient d&apos;un service
                à vie pour ajustement, réglage, soudure et changement de
                plaquettes, dans la limite des pièces disponibles auprès
                du fabricant.
              </p>
            </div>

            <p className="text-xs text-ink-soft pt-8 border-t border-line italic">
              Document gabarit. À faire valider par un conseil juridique
              avant publication officielle.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
