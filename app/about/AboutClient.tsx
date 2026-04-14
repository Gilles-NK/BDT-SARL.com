"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { Camera, Wrench, Lock, GraduationCap, Cloud, BadgeCheck, Crosshair, Zap } from "../components/Icons";
import { Shield, Activity, Fingerprint, Lock as LockIcon, Cloud as CloudIcon, Users } from "lucide-react";
import { useLangue } from "../lib/LangueContext";

const EXPERTISES_ICONS = [Shield, Activity, Fingerprint, LockIcon, CloudIcon, Users];
const VALEURS_ICONS = [Crosshair, Zap, BadgeCheck, Lock];

export default function AboutClient() {
  const { t, langue } = useLangue();
  const c = t.apropos;

  return (
    <div style={{ background: "#fdfdfd" }}>
      {/* HERO */}
      <section style={{ position: "relative", height: "clamp(560px, 45vh, 560px)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Image
            src="/images/34.jpg"
            alt={c.titre}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
              filter: "blur(4px)",
              transform: "scale(1.05)"
            }}
          />
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
      <section style={{ padding: "5rem 2rem 2rem", background: "#fff" }}>
        <div className="about-intro-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <ScrollReveal direction="left">
            <div style={{ position: "relative", height: "clamp(300px,45vw,500px)", overflow: "hidden", border: "1px solid #f1f5f9" }}>
              <Image src="/images/36.jpg" alt="Équipe BDT" fill style={{ objectFit: "cover" }} />
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

      {/* EXPERTISES & VALEURS SIDE-BY-SIDE */}
      <section style={{ padding: "0 2rem", background: "#fff" }}>
        <div className="split-cards-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>
          
          {/* COLONNE GAUCHE - EXPERTISES */}
          <ScrollReveal direction="left">
            <div style={{ background: "#f8fafc", padding: "4rem 3rem", height: "100%", borderLeft: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9", minHeight: "600px" }}>
              <div style={{ marginBottom: "2.5rem" }}>
                <div style={{ display: "inline-block", background: "rgba(0, 102, 255, 0.08)", color: "#0066ff", padding: "0.4rem 1.2rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                  {c.tagComp}
                </div>
                <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#1a1a2e", margin: 0 }}>
                  {c.titreComp}
                </h2>
              </div>

              <div style={{ display: "grid", gap: "1rem" }}>
                {c.expertises && c.expertises.map((titre, i) => {
                  const Icon = EXPERTISES_ICONS[i % EXPERTISES_ICONS.length];
                  return (
                    <div key={i} className="hover-lift" style={{ display: "flex", alignItems: "center", gap: "1.2rem", padding: "1.25rem", background: "#fff", borderRadius: "18px", border: "1px solid #f1f5f9", transition: "0.3s" }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(0, 102, 255, 0.05)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={20} color="#0066ff" strokeWidth={2} />
                      </div>
                      <span style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "1.05rem" }}>{titre}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* COLONNE DROITE - VALEURS */}
          <ScrollReveal direction="right">
            <div style={{ background: "#f8fafc", padding: "4rem 3rem", height: "100%", borderLeft: "1px solid #f1f5f9", borderRight: "1px solid #f1f5f9", minHeight: "600px" }}>
              <div style={{ marginBottom: "2.5rem" }}>
                <div style={{ display: "inline-block", background: "rgba(0, 102, 255, 0.08)", color: "#0066ff", padding: "0.4rem 1.2rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
                  {c.tagValeurs}
                </div>
                <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "#1a1a2e", margin: 0 }}>
                  {c.titreValeurs}
                </h2>
              </div>

              <div style={{ display: "grid", gap: "1.25rem" }}>
                {c.valeurs.map((v, i) => {
                  const Icon = VALEURS_ICONS[i % VALEURS_ICONS.length];
                  return (
                    <div key={i} className="hover-lift" style={{ display: "flex", gap: "1.5rem", padding: "1.5rem", background: "#fff", borderRadius: "18px", border: "1px solid #f1f5f9", transition: "0.3s" }}>
                      <div style={{ width: 50, height: 50, background: "rgba(0, 102, 255, 0.08)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={22} color="#0066ff" strokeWidth={2} />
                      </div>
                      <div>
                        <h4 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 800, color: "#1a1a2e", marginBottom: "0.4rem", fontSize: "1.1rem" }}>{v.titre}</h4>
                        <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "2rem 2rem 5rem", background: "linear-gradient(135deg, #0066ff 0%, #1a1a2e 100%)", textAlign: "center" }}>
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
        .hover-lift:hover {
          transform: translateY(-5px);
          border-color: #0066ff33 !important;
          box-shadow: 0 10px 25px rgba(0, 102, 255, 0.05) !important;
        }

        .cta-btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(255,255,255,0.2) !important;
        }
        
        .cta-btn.secondary:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: #fff !important;
        }

        @media (max-width: 992px) {
          .split-cards-grid { grid-template-columns: 1fr !important; }
          .about-intro-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}} />
    </div>
  );
}
