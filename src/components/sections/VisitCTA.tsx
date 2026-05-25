import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";

export function VisitCTA() {
  return (
    <section className="bg-ink text-ivory py-28 md:py-40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <FadeIn>
              <p className="eyebrow text-ivory/50">Nous rendre visite</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl text-ivory"
                style={{ letterSpacing: "-0.025em", fontWeight: 300 }}
              >
                14, rue de Verneuil —{" "}
                <span className="italic">Paris VII</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-md text-ivory/75 leading-relaxed">
                Du mardi au samedi, 10h30 — 19h. Le lundi sur rendez-vous.
                Métro Rue du Bac (ligne 12), à cinq minutes du Bon Marché.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.25} className="md:col-span-5 md:text-right">
            <div className="flex flex-col sm:flex-row md:justify-end gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-[12px] tracking-widest uppercase bg-ivory text-ink hover:bg-accent hover:text-ivory transition-colors"
                style={{ letterSpacing: "0.22em" }}
              >
                Prendre rendez-vous
              </Link>
              <a
                href="tel:+33145480000"
                className="inline-flex items-center justify-center px-8 py-4 text-[12px] tracking-widest uppercase border border-ivory/40 text-ivory hover:border-ivory transition-colors"
                style={{ letterSpacing: "0.22em" }}
              >
                +33 (0)1 45 48 00 00
              </a>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
