"use client";
import { useEffect, useRef, useState } from "react";
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
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(target);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
          setCount(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ─────────────────────────────────────────────────────────────────────────────

export default function Presentation() {
  const { t, langue } = useLangue();
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
    const parts = para.split(/(Chez BDT)/g); 
    return (
      <ScrollReveal key={i} direction="up" delay={i * 80}>
        <p style={{
          fontSize: "1.15rem",
          lineHeight: 1.8,
          color: "#000000",
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
        <div className="pres-adesso-chiffres">
          {p.chiffres.map((c: { surtitre: string; valeur: number; prefix?: string; suffix: string; desc: string }, i: number) => (
            <ScrollReveal key={i} direction="up" delay={i * 90}>
              <div className="chiffre-card">
                {/* Surtitre petit gris */}
                <p className="surtitre">
                  {c.surtitre}
                </p>

                {/* Grand chiffre bleu */}
                <div className="valeur">
                  <CountUp target={c.valeur} prefix={c.prefix ?? ""} suffix={c.suffix} />
                </div>

                {/* Description */}
                <p className="desc">
                  {c.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ══ BLOC 3.5 — Texte de conclusion avec lien style Adesso ══════ */}
        <ScrollReveal direction="up" delay={300}>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "#000000",
              maxWidth: 800,
              margin: "0 auto",
              textAlign: "center",
            }}>
              {p.conclusion.avant}{" "}
              <Link
                href={`/contact`}
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
              <Link href={`/services`}
                style={{ padding: "0.7rem 1.4rem", background: "var(--blue)", color: "#fff", fontWeight: 700, fontSize: "0.88rem", borderRadius: "var(--radius)", textDecoration: "none", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
                {p.cta.btnServices}
              </Link>
              <Link href={`/devis`}
                style={{ padding: "0.7rem 1.4rem", background: "transparent", color: "var(--blue)", fontWeight: 700, fontSize: "0.88rem", borderRadius: "var(--radius)", border: "1.5px solid var(--blue)", textDecoration: "none", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--blue-lt)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}>
                {p.cta.btnDevis}
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* ── Styles Minimalistes Centrés ────────────────────────────────────── */}
      <style>{`
        /* ── Grille desktop : 4 colonnes égales ── */
        .pres-adesso-chiffres {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        /* ── Chaque bloc chiffre ── */
        .chiffre-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.4rem;
          padding: 2.5rem 1.5rem;
          background: transparent;
          border: none;
          /* Séparateur vertical entre items en desktop */
          border-right: 1px solid var(--gray-200);
          transition: none;
        }
        .chiffre-card:last-child {
          border-right: none;
        }

        /* Surtitre (ex: "Plus que") */
        .surtitre {
          font-size: 0.82rem;
          color: var(--blue);
          margin: 0;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: none;
        }

        /* Grand chiffre */
        .valeur {
          font-size: clamp(2.8rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--blue);
          line-height: 1;
          letter-spacing: -0.03em;
          margin: 0.25rem 0;
        }

        /* Description sous le chiffre */
        .desc {
          font-size: 0.88rem;
          color: var(--gray-600);
          margin: 0;
          line-height: 1.5;
          font-weight: 400;
          max-width: 180px;
        }

        /* ── Tablette : 2 colonnes ── */
        @media (max-width: 900px) {
          .pres-adesso-top { 
            grid-template-columns: 1fr !important; 
            gap: 2rem !important; 
          }
          .pres-adesso-chiffres { 
            grid-template-columns: repeat(2, 1fr) !important; 
          }
          .chiffre-card {
            border-right: none !important;
            border-bottom: 1px solid var(--gray-200);
            padding: 2.5rem 1rem;
          }
          /* Enlève la bordure basse des 2 derniers */
          .chiffre-card:nth-child(3),
          .chiffre-card:nth-child(4) {
            border-bottom: none;
          }
          .valeur {
            font-size: 3rem;
          }
        }

        /* ── Mobile : 1 colonne (style exact image) ── */
        @media (max-width: 600px) {
          .pres-adesso-chiffres { 
            grid-template-columns: 1fr !important;
          }
          .chiffre-card {
            border-right: none !important;
            border-bottom: 1px solid var(--gray-200) !important;
            padding: 2rem 1rem;
          }
          .chiffre-card:last-child {
            border-bottom: none !important;
          }
          .valeur {
            font-size: 2.8rem;
          }
          .desc {
            max-width: 260px;
          }

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
