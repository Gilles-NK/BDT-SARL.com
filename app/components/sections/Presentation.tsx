"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { useLangue } from "../../lib/LangueContext";

// ─── Compteur animé (count-up au scroll) ─────────────────────────────────────
function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 1800,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref     = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // ─── AJOUTEZ CETTE LIGNE ICI ──────────────────────────────────────────
    // Elle met à jour le texte immédiatement si l'animation est déjà finie
    el.textContent = prefix + (started.current ? target : 0) + suffix;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = prefix + target + suffix;
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        obs.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          el.textContent = prefix + Math.floor(ease * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, prefix, duration]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

// ─────────────────────────────────────────────────────────────────────────────

export default function Presentation() {
  const { t } = useLangue();
  const p = t.presentation2;

  return (
    <section style={{
      padding: "5rem 2rem",
      background: "#fff",
      borderBottom: "1px solid var(--gray-100)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: "5rem" }}>

        {/* ══ BLOC 1 — Titre fort + texte ══════════════════════════════════ */}
        <div className="pres-adesso-top" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

          {/* Titre gauche */}
          <ScrollReveal direction="up" delay={0}>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "var(--blue)",
              margin: 0,
            }}>
              {p.titre}
            </h2>
          </ScrollReveal>

          {/* Texte droite */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {p.paragraphes.map((para: string, i: number) => {
    // On vérifie si le texte contient "Chez BDT"
    const parts = para.split(/(Chez BDT)/g); 

    return (
      <ScrollReveal key={i} direction="up" delay={i * 80}>
        <p style={{
          fontSize: "1.15rem",
          lineHeight: 1.8,
          color: "#000000", // Le reste du texte reste noir
          margin: 0,
          textAlign: "justify",
        }}>
          {parts.map((part, index) => 
            part === "Chez BDT" ? (
              <span key={index} style={{ color: "var(--blue)", fontWeight: 700 }}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </p>
      </ScrollReveal>
    );
  })}


          </div>
        </div>

        {/* ══ BLOC 2 — Séparateur ══════════════════════════════════════════ */}
        <ScrollReveal direction="fade" delay={0}>
          <div style={{ height: 1, background: "var(--gray-200)" }} />
        </ScrollReveal>

        {/* ══ BLOC 3 — Chiffres clés style Adesso ═════════════════════════ */}
        <div className="pres-adesso-chiffres" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
          {p.chiffres.map((c: { surtitre: string; valeur: number; prefix?: string; suffix: string; desc: string }, i: number) => (
            <ScrollReveal key={i} direction="up" delay={i * 90}>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                paddingRight: "1.5rem",
                /* Ligne de séparation droite sauf dernier */
                borderRight: i < p.chiffres.length - 1 ? "1px solid var(--gray-200)" : "none",
              }}>
                {/* Surtitre petit gris */}
                <p style={{
                  fontSize: "0.8rem",
                  color: "var(--gray-500)",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 500,
                }}>
                  {c.surtitre}
                </p>

                {/* Grand chiffre bleu */}
                <div style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  color: "var(--blue)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}>
                  <CountUp target={c.valeur} prefix={c.prefix ?? ""} suffix={c.suffix} />
                </div>

                {/* Description */}
                <p style={{
                  fontSize: "0.85rem",
                  color: "var(--gray-600)",
                  margin: 0,
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}>
                  {c.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ══ BLOC 3.5 — Texte de conclusion avec lien style Adesso ══════ */}
        <ScrollReveal direction="up" delay={300}>
  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}> {/* Wrapper pour centrer le bloc */}
    <p style={{
      fontSize: "1.1rem",
      lineHeight: 1.7,
      color: "#000000",
      maxWidth: 800,
      margin: "0 auto",        // Centre le bloc horizontalement
      textAlign: "center",     // Centre le texte à l'intérieur
    }}>
      {p.conclusion.avant}{" "}
      <Link
        href="/contact"
        style={{
          color: "var(--blue)",
          textDecoration: "none",
          fontWeight: 700,
          borderBottom: "2px solid var(--blue)",
          paddingBottom: "1px",
          transition: "opacity 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.7"}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
      >
        {p.conclusion.lien}
      </Link>{" "}
      {p.conclusion.apres}
    </p>
  </div>
        </ScrollReveal>

        {/* ══ BLOC 4 — CTA discret ═════════════════════════════════════════ */}
        <ScrollReveal direction="up" delay={0}>
          <div className="pres-cta" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            padding: "2rem 2.5rem",
            border: "1px solid var(--gray-200)",
            borderRadius: "var(--radius-lg)",
            background: "var(--gray-50)",
          }}>
            <div>
              <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--gray-900)", margin: "0 0 0.3rem" }}>
                {p.cta.titre}
              </p>
              <p style={{ fontSize: "0.88rem", color: "var(--gray-600)", margin: 0 }}>
                {p.cta.desc}
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0, flexWrap: "wrap" }}>
              <Link href="/services"
                style={{ padding: "0.7rem 1.4rem", background: "var(--blue)", color: "#fff", fontWeight: 700, fontSize: "0.88rem", borderRadius: "var(--radius)", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                {p.cta.btnServices}
              </Link>
              <Link href="/devis"
                style={{ padding: "0.7rem 1.4rem", background: "transparent", color: "var(--blue)", fontWeight: 700, fontSize: "0.88rem", borderRadius: "var(--radius)", border: "1.5px solid var(--blue)", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--blue-lt)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}>
                {p.cta.btnDevis}
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* ── Responsive ──────────────────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .pres-adesso-top      { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .pres-adesso-chiffres { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .pres-adesso-chiffres { grid-template-columns: 1fr !important; }
          .pres-cta { 
            flex-direction: column !important; 
            text-align: center !important; 
            padding: 2rem 1.5rem !important;
            gap: 1.5rem !important;
          }
          .pres-cta div:last-child { 
            justify-content: center !important; 
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
