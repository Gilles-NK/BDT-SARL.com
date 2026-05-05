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
    <>
      <section style={{
        padding: "5rem 2rem 2rem",
        background: "#fff",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: "3rem" }}>

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

          {/* ══ BLOC 4 — Texte d'engagement Style Screenshot (Version Épurée) ══════════════════ */}
          <div style={{ 
            marginTop: "1rem", 
            marginBottom: "5rem",
            textAlign: "center", 
            padding: "0 1.5rem" 
          }}>
            <p style={{ 
              margin: "0 auto", 
              maxWidth: "850px",
              fontSize: "1.25rem", 
              lineHeight: "1.8", 
              color: "#0f172a",
              fontWeight: 400,
              fontFamily: "'Ubuntu', sans-serif"
            }}>
              Avec une équipe d'experts passionnés et des interventions sur{" "}
              <Link href="/contact" style={{ color: "#1b439e", fontWeight: 700, textDecoration: "underline" }}>
                plus de 10 sites stratégiques
              </Link>{" "}
              au Cameroun, BDT s'impose comme un partenaire de confiance en sécurité électronique et informatique. 
              Nous œuvrons chaque jour à la réussite des projets de nos clients.
            </p>
          </div>
        </div>
      </section>
      {/* ── Styles Minimalistes Centrés ────────────────────────────────────── */}
      <style>{`
        /* ── Grille desktop : 4 colonnes égales ── */
        .pres-adesso-chiffres {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: none; /* Supprime la ligne du haut */
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
            align-items: center !important;
            text-align: center !important;
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
            padding: 2rem 1.5rem;
            align-items: center !important;
            text-align: center !important;
          }
          .chiffre-card:last-child {
            border-bottom: none !important;
          }
          .valeur {
            font-size: 2.8rem;
          }
          .desc {
            max-width: 280px;
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

          .vision-section {
            grid-template-columns: 1fr !important;
            padding: 2.5rem 1rem !important;
            gap: 2rem !important;
            text-align: center !important;
          }
          .vision-section div:first-child {
            padding-right: 0 !important;
          }
          .vision-section div:last-child {
            align-items: center !important;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </>
  );
}
