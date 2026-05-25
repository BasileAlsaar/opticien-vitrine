import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://opticien-vitrine.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Maison Lestrange — Opticien indépendant",
    template: "%s · Maison Lestrange",
  },
  description:
    "Maison Lestrange, opticien indépendant. Sélection de montures éditoriales, examen de vue clinique, atelier d'ajustement. Sur rendez-vous.",
  keywords: [
    "opticien",
    "lunettes",
    "montures",
    "examen de vue",
    "solaire",
    "Persol",
    "Lindberg",
    "Moscot",
  ],
  authors: [{ name: "Maison Lestrange" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Maison Lestrange",
    title: "Maison Lestrange — Opticien indépendant",
    description:
      "Sélection de montures éditoriales, examen de vue clinique, atelier d'ajustement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Lestrange — Opticien indépendant",
    description:
      "Sélection de montures éditoriales, examen de vue clinique, atelier d'ajustement.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
