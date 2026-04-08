"use client";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { useLangue } from "../../lib/LangueContext";

export default function CtaFinal() {
  const { t } = useLangue();
  return (
    <ScrollReveal direction="up">
      <section style={{ padding: "5rem 2rem", background: "var(--grad-section)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(100,150,255,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(100,150,255,0.08)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(1.8rem,4vw,2.6rem)", color: "#fff", fontWeight: 700, marginBottom: "1rem" }}>{t.cta.titre}</h2>
          <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "2.5rem" }}>{t.cta.sousTitre}</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/devis" style={{ display: "inline-flex", alignItems: "center", background: "#fff", color: "var(--blue)", fontWeight: 700, padding: "1rem 2.2rem", borderRadius: 8, fontSize: "1rem", transition: "opacity 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.9"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}>
              {t.cta.btnDevis}
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", background: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, padding: "1rem 2.2rem", borderRadius: 8, border: "1px solid rgba(255,255,255,0.25)", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"}>
              {t.cta.btnContact}
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
