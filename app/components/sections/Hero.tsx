"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLangue } from "../../lib/LangueContext";

const SLIDES = [
  {
    img: "/images/15.jpg",
    alt: "À propos de BDT",
    tagFr: "À propos · Notre histoire",
    tagEn: "About us · Our story",
    titleFr: ["À propos de BDT", "une expertise reconnue"],
    titleEn: ["About BDT", "a recognized expertise"],
    subFr: "Depuis Douala, nous mettons notre savoir-faire au service des entreprises et particuliers avec rigueur et engagement.",
    subEn: "From Douala, we bring our expertise to businesses and individuals with rigor and commitment.",
    cta: { fr: "Découvrir BDT", en: "Discover BDT", href: "/about" },
    cta2: { fr: "Contactez-nous", en: "Contact us", href: "/contact" },
  },
  {
    img: "/images/6.jpg",
    alt: "Nos services BDT",
    tagFr: "Nos Services · Solutions sur mesure",
    tagEn: "Our Services · Tailor-made solutions",
    titleFr: ["Des solutions complètes", "pour votre sécurité"],
    titleEn: ["Complete solutions", "for your security"],
    subFr: "Vidéosurveillance, cybersécurité, maintenance informatique, un accompagnement global pour protéger votre entreprise.",
    subEn: "Video surveillance, cybersecurity, IT maintenance, comprehensive support to protect your business.",
    cta: { fr: "Voir nos services", en: "View our services", href: "/services" },
    cta2: { fr: "Demandez un devis", en: "Get a quote", href: "/devis" },
  },
  {
    img: "/images/19.jpg",
    alt: "Contactez BDT",
    tagFr: "Contact · Parlons de votre projet",
    tagEn: "Contact · Let's talk about your project",
    titleFr: ["Un projet ?", "Parlons-en ensemble"],
    titleEn: ["A project?", "Let's talk together"],
    subFr: "Notre équipe est disponible pour vous conseiller, répondre à vos questions et vous proposer une solution adaptée.",
    subEn: "Our team is available to advise you, answer your questions and offer you a tailored solution.",
    cta: { fr: "Nous contacter", en: "Contact us", href: "/contact" },
    cta2: { fr: "À propos de nous", en: "About us", href: "/about" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const { langue } = useLangue();
  const isFr = langue === "fr";

  const goTo = (idx: number) => {
    if (idx === current) return;
    setCurrent(idx);
    setAnimKey(k => k + 1);
  };

  const slide = SLIDES[current];
  const total = SLIDES.length;

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % total);
    }, 15000);
    return () => clearInterval(timer);
  }, [current, total]);

  return (
    <section style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      minHeight: 600,
      maxHeight: 900,
      overflow: "hidden",
      fontFamily: "'Ubuntu', 'Inter', sans-serif",
    }}>

      <style>{`
        @keyframes hFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Images cross-fade ── */}
      {SLIDES.map((s, i) => (
        <div key={i} style={{
          position: "absolute", inset: 0,
          opacity: i === current ? 1 : 0,
          transition: "opacity 1.1s cubic-bezier(0.4,0,0.2,1)",
          zIndex: 0,
        }}>
          <Image
            src={s.img} alt={s.alt}
            fill priority quality={95} sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}

      {/* ── Overlay ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(100deg, rgba(8,16,52,0.88) 0%, rgba(8,16,52,0.58) 50%, rgba(8,16,52,0.08) 100%)",
      }} />

      {/* ── Contenu ── */}
      <div key={animKey} style={{
        position: "absolute", inset: 0, zIndex: 2,
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "0 clamp(1.5rem, 7vw, 6rem)",
        maxWidth: 860,
      }}>

        {/* Tag */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22, animation: "hFadeUp 0.55s 0.00s ease both" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0066ff", boxShadow: "0 0 10px rgba(0, 102, 255, 0.9)", flexShrink: 0 }} />
          <span style={{ fontSize: "0.70rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.68)" }}>
            {isFr ? slide.tagFr : slide.tagEn}
          </span>
        </div>

        {/* Titre */}
        <div style={{ marginBottom: 20, animation: "hFadeUp 0.55s 0.10s ease both" }}>
          {(isFr ? slide.titleFr : slide.titleEn).map((line, i) => (
            <div key={i} style={{ marginBottom: 5 }}>
              <span style={{
                display: "inline", background: "rgba(0,55,170,0.85)", color: "#fff",
                fontWeight: 800, fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)",
                lineHeight: 1.20, padding: "0.12em 0.42em",
                boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" as "clone",
              }}>
                {line}
              </span>
            </div>
          ))}
        </div>

        {/* Sous-titre */}
        <div style={{ marginBottom: 32, animation: "hFadeUp 0.55s 0.20s ease both" }}>
          <span style={{
            display: "inline", background: "rgba(0,0,0,0.46)", color: "rgba(255,255,255,0.92)",
            fontSize: "clamp(0.87rem, 1.5vw, 1.03rem)", lineHeight: 1.72, padding: "0.28em 0.55em",
            boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" as "clone",
          }}>
            {isFr ? slide.subFr : slide.subEn}
          </span>
        </div>

        {/* Boutons */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 12, animation: "hFadeUp 0.55s 0.30s ease both" }}>
          <Link href={slide.cta.href} 
            className="btn-premium hover-lift"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#0066ff", color: "#fff", fontWeight: 700,
              fontSize: "clamp(0.85rem, 1.4vw, 0.98rem)",
              padding: "0.80rem 1.70rem", borderRadius: 4, textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0, 102, 255, 0.40)", transition: "all 0.3s ease",
            }}
          >
            {isFr ? slide.cta.fr : slide.cta.en}
          </Link>

          <Link href={slide.cta2.href} 
            className="hover-lift"
            style={{
              display: "inline-flex", alignItems: "center",
              background: "transparent", color: "#fff", fontWeight: 600,
              fontSize: "clamp(0.85rem, 1.4vw, 0.98rem)",
              padding: "0.80rem 1.70rem", borderRadius: 4, textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.42)", backdropFilter: "blur(6px)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.82)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.42)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >
            {isFr ? slide.cta2.fr : slide.cta2.en}
          </Link>
        </div>
      </div>

      {/* ── Barres de pagination rectangulaires ── */}
      <div style={{
        position: "absolute",
        bottom: 36,
        left: "clamp(1.5rem, 7vw, 6rem)",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        {SLIDES.map((_, i) => {
          const isActive = i === current;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: isActive ? 120 : 80,   /* active = plus large */
                height: 6,                    /* hauteur bien visible */
                borderRadius: 2,              /* rectangle, coins très légèrement adoucis */
                border: "none",
                padding: 0,
                cursor: "pointer",
                flexShrink: 0,
                transition: "width 0.35s ease, background 0.3s ease, box-shadow 0.3s ease",
                /* Couleur : bleu vif pour active, blanc translucide pour les autres */
                background: isActive ? "#0066ff" : "rgba(255,255,255,0.30)",
                boxShadow: isActive ? "0 0 16px rgba(0,102,255,0.75)" : "none",
              }}
            />
          );
        })}
      </div>

    </section>
  );
}
