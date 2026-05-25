"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

import { HERO_VIDEO } from "@/lib/media";

// Détecte les viewports "mobile" pour ne pas charger la vidéo
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isMobile === true;
}

export function VideoHero() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (reduce || isMobile) return;
    const v = videoRef.current;
    if (v) {
      v.play().catch(() => {
        /* autoplay blocked, fallback to poster */
      });
    }
  }, [reduce, isMobile]);

  // 3 baselines candidates (commentées) — j'ai retenu la première.
  // 1. « L'art de bien voir »  ← retenue : sobre, classique, double sens optique + perception.
  // 2. « Voir, choisir, porter »
  // 3. « Une certaine idée de la lunette »

  return (
    <section className="relative h-hero w-full overflow-hidden bg-ink">
      {/* Media layer */}
      <div className="absolute inset-0">
        {!isMobile && !reduce ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster={HERO_VIDEO.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={HERO_VIDEO.mp4} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={HERO_VIDEO.poster}
            alt={HERO_VIDEO.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-ink/45" aria-hidden />
        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(26,26,26,0.45) 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative h-full container-edge flex flex-col justify-end pb-20 md:pb-28 pt-24 md:pt-32">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="eyebrow text-ivory/70"
          style={{ color: "rgba(245,241,234,0.7)" }}
        >
          Opticien indépendant · Paris VII
        </motion.p>

        <h1
          className="mt-6 max-w-4xl font-serif text-ivory leading-[0.95]"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            letterSpacing: "-0.025em",
            fontWeight: 300,
          }}
        >
          <span className="block overflow-hidden" style={{ paddingBottom: "0.04em" }}>
            <motion.span
              className="inline-block"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              L&apos;art de
            </motion.span>
          </span>
          <span className="block overflow-hidden" style={{ paddingBottom: "0.04em" }}>
            <motion.span
              className="inline-block italic font-light"
              initial={reduce ? false : { y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              bien voir.
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 max-w-md text-ivory/85 text-base md:text-lg leading-relaxed"
        >
          Une sélection de montures façonnées avec soin, un examen de vue
          mené sans précipitation. À deux pas du Bon Marché.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-4 text-[12px] tracking-widest uppercase border border-ivory text-ivory hover:bg-ivory hover:text-ink transition-colors"
            style={{ letterSpacing: "0.2em" }}
          >
            Prendre rendez-vous
          </Link>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center px-7 py-4 text-[12px] tracking-widest uppercase text-ivory/80 hover:text-ivory transition-colors"
            style={{ letterSpacing: "0.2em" }}
          >
            Voir les collections →
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60 text-[10px] tracking-[0.3em] uppercase hidden md:block"
        aria-hidden
      >
        Défilez
      </div>
    </section>
  );
}
