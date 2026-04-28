"use client";
import React, { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { Shield, Network, Code, BarChart3, Palette, FileText, Check, Clock, ArrowRight } from "lucide-react";

const techFormations = [
  { name: "Vidéosurveillance", price: "50 000", duration: "01 Mois", icon: <Shield size={24} />, desc: "Sécurité électronique & IP" },
  { name: "Réseaux Informatique", price: "150 000", duration: "03 Mois", icon: <Network size={24} />, desc: "Admin & Infrastructure" },
  { name: "Développement Web", price: "150 000", duration: "03 Mois", icon: <Code size={24} />, desc: "Fullstack & Applications" },
];

const creativeFormations = [
  { name: "Marketing Digital", price: "120 000", duration: "03 Mois", icon: <BarChart3 size={24} />, desc: "Stratégie & Visibilité" },
  { name: "Design Graphique", price: "120 000", duration: "03 Mois", icon: <Palette size={24} />, desc: "UI/UX & Identité Visuelle" },
  { name: "Secrétariat Bureautique", price: "70 000", duration: "02 Mois", icon: <FileText size={24} />, desc: "Gestion & Bureautique" },
];

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("tech");

  return (
    <section id="pricing" style={{ padding: "2rem 0 3rem", background: "#ffffff", position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>

        <ScrollReveal direction="down">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#0d1b2a", marginBottom: "1rem" }}>
              Nos Tarifs <span style={{ color: "var(--blue)" }}>Formations</span>
            </h2>

            <p style={{
              color: "var(--gray-600)",
              fontSize: "1.1rem",
              maxWidth: "800px",
              margin: "0 auto 2.5rem"
            }}>
              Investissez dans votre avenir avec des programmes 100% pratiques, conçus pour vous rendre opérationnel immédiatement sur le marché de l'emploi.
            </p>

            {/* Sélecteur d'onglets (Tabs) */}
            <div style={{
              display: "inline-flex",
              background: "#f1f5f9",
              padding: "0.5rem",
              borderRadius: "50px",
              marginBottom: "3rem"
            }}>
              <button
                onClick={() => setActiveTab("tech")}
                style={{
                  padding: "0.8rem 2rem",
                  borderRadius: "50px",
                  border: "none",
                  background: activeTab === "tech" ? "var(--blue)" : "transparent",
                  color: activeTab === "tech" ? "#fff" : "#64748b",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem"
                }}>
                TECH & SÉCURITÉ
              </button>
              <button
                onClick={() => setActiveTab("creative")}
                style={{
                  padding: "0.8rem 2rem",
                  borderRadius: "50px",
                  border: "none",
                  background: activeTab === "creative" ? "var(--blue)" : "transparent",
                  color: activeTab === "creative" ? "#fff" : "#64748b",
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem"
                }}>
                DESIGN & BUSINESS
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Grille de cartes (Alignée) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          {(activeTab === "tech" ? techFormations : creativeFormations).map((f, i) => (
            <ScrollReveal key={f.name} direction="up" delay={i * 100}>
              <div style={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }} className="pricing-card glass-effect">

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ color: "var(--blue)", background: "#fff", padding: "0.8rem", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0d1b2a", margin: 0 }}>{f.name}</h3>
                    <p style={{ fontSize: "0.8rem", color: "var(--gray-500)", margin: 0 }}>{f.desc}</p>
                  </div>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                    <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "var(--blue)" }}>{f.price}</span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--gray-400)" }}>FCFA</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "var(--gray-500)", marginTop: "0.5rem" }}>
                    <Clock size={14} /> Durée: <strong>{f.duration}</strong>
                  </div>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                  <li style={{ display: "flex", gap: "0.6rem", fontSize: "0.9rem", color: "#475569" }}>
                    <Check size={16} color="var(--blue)" /> 100% pratique
                  </li>
                  <li style={{ display: "flex", gap: "0.6rem", fontSize: "0.9rem", color: "#475569" }}>
                    <Check size={16} color="var(--blue)" /> Stage offert
                  </li>
                  <li style={{ display: "flex", gap: "0.6rem", fontSize: "0.9rem", color: "#475569" }}>
                    <Check size={16} color="var(--blue)" /> Certificat BDT
                  </li>
                </ul>

                <a
                  href={`https://wa.me/237689665893?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20la%20formation%20${f.name}`}
                  target="_blank"
                  style={{
                    marginTop: "auto",
                    color: "var(--blue)",
                    textDecoration: "none",
                    fontWeight: 900,
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "opacity 0.2s"
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.9"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                >
                  Plus d'informations <ArrowRight size={18} strokeWidth={3} />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bloc Places Limitées style Screenshot (Version Nette) */}
        <ScrollReveal direction="up" delay={400}>
          <div style={{ marginTop: "5rem", textAlign: "center" }}>
            <h3 style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "var(--blue)",
              marginBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}>
              Places limitées
            </h3>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              color: "#475569",
              fontSize: "1rem",
              lineHeight: "2.2",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <li style={{ transform: "translateX(20px)" }}>• Sessions collectives : 15 places max</li>
              <li style={{ transform: "translateX(-20px)" }}>• Coaching particulier : 05 places max</li>
              <li style={{ transform: "translateX(10px)" }}>• Session du 04 Mai : Inscriptions ouvertes</li>
            </ul>
          </div>
        </ScrollReveal>

      </div>

      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          border-radius: 24px;
          padding: 2.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .glass-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 118, 206, 0.08);
          border-color: rgba(0, 118, 206, 0.3);
          background: rgba(255, 255, 255, 0.6);
        }

        .pricing-card:hover {
          transform: translateY(-10px);
          border-color: var(--blue);
          box-shadow: 0 20px 40px rgba(0, 82, 204, 0.08);
        }
      `}</style>
    </section>
  );
}
