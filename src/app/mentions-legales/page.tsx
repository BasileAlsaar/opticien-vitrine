import type { Metadata } from "next";

import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="pt-32 md:pt-40 pb-32 md:pb-44 bg-ivory">
      <Container>
        <div className="max-w-2xl">
          <p className="eyebrow text-ink-soft">Informations</p>
          <h1
            className="mt-6 font-serif text-5xl md:text-6xl text-ink"
            style={{ letterSpacing: "-0.025em", fontWeight: 300 }}
          >
            Mentions légales
          </h1>

          <div className="mt-12 space-y-8 text-ink-soft leading-[1.75] text-[15px] md:text-base">
            <div>
              <h2 className="font-serif text-xl text-ink" style={{ fontWeight: 400 }}>
                Éditeur du site
              </h2>
              <p className="mt-3">
                Maison Lestrange, SARL au capital de 10 000 €.
                <br />
                Siège social&nbsp;: 14, rue de Verneuil, 75007 Paris.
                <br />
                RCS Paris [à compléter] · SIRET [à compléter] · TVA FR [à compléter].
                <br />
                Directeur de la publication&nbsp;: Pierre Lestrange.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-ink" style={{ fontWeight: 400 }}>
                Hébergement
              </h2>
              <p className="mt-3">
                Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-ink" style={{ fontWeight: 400 }}>
                Crédits
              </h2>
              <p className="mt-3">
                Vidéo et photos&nbsp;: propriété de Maison Lestrange.
                <br />
                Conception et réalisation&nbsp;: à compléter.
              </p>
            </div>

            <p className="text-xs text-ink-soft pt-8 border-t border-line italic">
              Ce contenu est un gabarit. À compléter avec les informations
              légales effectives avant mise en ligne publique.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
