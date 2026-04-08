"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { Camera, Wrench, Lock, GraduationCap, Cloud, BadgeCheck, Crosshair, Zap } from "../components/Icons";
import { useLangue } from "../lib/LangueContext";

const EXPERTISES_ICONS = [Camera, Wrench, Lock, BadgeCheck, Cloud, GraduationCap];
const VALEURS_ICONS = [Crosshair, Zap, BadgeCheck, Lock];

export default function AboutClient() {
  const { t, langue } = useLangue();
  const c = t.apropos;

  return (
    <div style={{ background: "#fdfdfd" }}>
      {/* HERO */}
      <section style={{ position: "relative", height: "clamp(560px, 45vh, 560px)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/11.jpg" alt={c.titre} fill style={{ objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26, 26, 46, 0.7), rgba(0, 102, 255, 0.4))" }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem" }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#fff",
            padding: "1.5rem 3rem",
            borderRadius: "16px",
            display: "inline-block",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}>
            <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
              {c.titre}
            </h1>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem", opacity: 0.9 }}>
              {c.sousTitre}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div className="about-intro-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <ScrollReveal direction="left">
            <div style={{ position: "relative", height: "clamp(300px,45vw,500px)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
              <Image src="/images/12.jpg" alt="Équipe BDT" fill style={{ objectFit: "cover" }} />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div style={{ display: "inline-block", background: "rgba(0, 102, 255, 0.1)", color: "#0066ff", padding: "0.4rem 1rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              {c.tagHistoire}
            </div>

            <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#1a1a2e", marginBottom: "1.5rem", lineHeight: 1.2 }}>
              {c.titreHistoire}
            </h2>

            <p style={{ color: "#64748b", lineHeight: 1.8, marginBottom: "1rem", fontSize: "1.05rem" }}>
              {c.texte1}
            </p>
            <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "1.05rem" }}>
              {c.texte2}
            </p>

            <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", flexWrap: "wrap", borderTop: "1px solid #f1f5f9", paddingTop: "2rem" }}>
              {[
                { val: "10+", lbl: "Sites stratégiques" },
                { val: "Cameroun", lbl: "Couverture" },
                { val: "24h", lbl: "Support" }
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#0066ff" }}>{item.val}</div>
                  <div style={{ color: "#64748b", fontSize: "0.9rem", fontWeight: 600 }}>{item.lbl}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EXPERTISES */}
      <section style={{ padding: "5rem 2rem", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div style={{ display: "inline-block", background: "rgba(0, 102, 255, 0.1)", color: "#0066ff", padding: "0.4rem 1rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                {c.tagComp}
              </div>
              <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#1a1a2e", marginTop: "0.5rem" }}>
                {c.titreComp}
              </h2>
            </div>
          </ScrollReveal>

          <div className="expertise-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {c.expertises && c.expertises.map((titre, i) => {
              const Icon = EXPERTISES_ICONS[i % EXPERTISES_ICONS.length];
              return (
                <ScrollReveal key={i} direction="up" delay={i * 60}>
                  <div className="hover-card" style={{
                    display: "flex", alignItems: "center", gap: "1.2rem", padding: "1.5rem",
                    background: "#fff", borderRadius: "16px", border: "1px solid #f1f5f9",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)", transition: "all 0.3s ease", cursor: "pointer"
                  }}>
                    <div style={{ width: 45, height: 45, borderRadius: "50%", background: "rgba(0, 102, 255, 0.05)", display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center" }}>
                      <Icon size={22} color="#0066ff" strokeWidth={1.8} />
                    </div>
                    <span style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "1rem" }}>{titre}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section style={{ padding: "5rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div style={{ display: "inline-block", background: "rgba(0, 102, 255, 0.15)", color: "#0066ff", padding: "0.4rem 1rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                {c.tagValeurs}
              </div>
              <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#1a1a2e", marginTop: "0.5rem" }}>
                {c.titreValeurs}
              </h2>
            </div>
          </ScrollReveal>

          <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {c.valeurs.map((v, i) => {
              const Icon = VALEURS_ICONS[i % VALEURS_ICONS.length];
              return (
                <ScrollReveal key={i} direction="up" delay={i * 80}>
                  <div className="hover-card" style={{
                    padding: "2rem", background: "#fff", borderRadius: "20px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)", height: "100%",
                    display: "flex", flexDirection: "column", border: "1px solid #f1f5f9"
                  }}>
                    <div style={{ width: 50, height: 50, background: "rgba(0, 102, 255, 0.1)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                      <Icon size={24} color="#0066ff" strokeWidth={1.8} />
                    </div>
                    <h3 style={{ fontWeight: 800, color: "#1a1a2e", marginBottom: "0.8rem", fontSize: "1.1rem" }}>{v.titre}</h3>
                    <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "linear-gradient(135deg, #0066ff 0%, #1a1a2e 100%)", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", color: "#fff", fontWeight: 800, marginBottom: "1rem" }}>
          {c.cta}
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto 2.5rem" }}>
          {c.ctaSub}
        </p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href={`/devis`} className="cta-btn primary" style={{ background: "#fff", color: "#0066ff", fontWeight: 800, padding: "1.1rem 2.5rem", borderRadius: "8px", fontSize: "1rem", transition: "all 0.3s", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", textDecoration: "none" }}>
            {c.btnDevis}
          </Link>
          <Link href={`/contact`} className="cta-btn secondary" style={{ background: "transparent", color: "#fff", fontWeight: 700, padding: "1.1rem 2.5rem", borderRadius: "8px", border: "2px solid rgba(255,255,255,0.3)", fontSize: "1rem", transition: "all 0.3s", textDecoration: "none" }}>
            {c.btnContact}
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08) !important;
          border-color: #cbd5e1 !important;
        }

        .cta-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(255,255,255,0.2) !important;
        }
        
        .cta-btn.secondary:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: #fff !important;
        }

        @media (max-width: 900px) {
          .about-intro-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .expertise-grid { grid-template-columns: 1fr 1fr !important; }
          .values-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .expertise-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </div>
  );
}
