"use client";
import React from "react";
import ScrollReveal from "../ScrollReveal";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const formations = [
  {
    id: 1,
    titre: "Vidéosurveillance & Sécurité",
    date: "04 Mai 2026", // pour changer la date de la formation
    lieu: "Akwa, Rue Pau, Douala",
    image: "/images/115.jpg",
    desc: "Apprenez à installer et configurer des systèmes de surveillance IP haute définition.",
    whatsapp: "https://wa.me/237689665893?text=Bonjour,%20je%20souhaite%20m'inscrire%20à%20la%20formation%20Vidéosurveillance%20du%2004%20Mai"
  },
  {
    id: 2,
    titre: "Réseaux & Maintenance",
    date: "04 Mai 2026",
    lieu: "Akwa, Rue Pau, Douala",
    image: "/images/100.jpg",
    desc: "Maîtrisez l'infrastructure réseau et la maintenance préventive des parcs informatiques.",
    whatsapp: "https://wa.me/237689665893?text=Bonjour,%20je%20souhaite%20m'inscrire%20à%20la%20formation%20Réseaux%20du%2004%20Mai"
  },
  {
    id: 3,
    titre: "Marketing Digital & Design",
    date: "04 Mai 2026",
    lieu: "Akwa, Rue Pau, Douala",
    image: "/images/36.jpg",
    desc: "Boostez votre visibilité en ligne et apprenez les bases du design graphique pro.",
    whatsapp: "https://wa.me/237689665893?text=Bonjour,%20je%20souhaite%20m'inscrire%20à%20la%20formation%20Marketing%20du%2004%20Mai"
  }
];

export default function Trainings() {
  return (
    <section id="formations" style={{
      padding: "6rem 0 4rem",
      background: "#ffffff",
      color: "#0d1b2a",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Décoration d'arrière-plan pour le Glassmorphism */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "-5%",
        width: "400px",
        height: "400px",
        background: "rgba(0, 118, 206, 0.05)",
        filter: "blur(90px)",
        borderRadius: "50%",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "0%",
        left: "-10%",
        width: "500px",
        height: "500px",
        background: "rgba(209, 213, 219, 0.3)",
        filter: "blur(120px)",
        borderRadius: "50%",
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <ScrollReveal direction="down">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{
              color: "var(--blue)",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "1rem"
            }}>
              FORMATIONS À VENIR
            </p>
            <h2 style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              color: "#0d1b2a",
              lineHeight: 1.2,
              marginBottom: "1rem"
            }}>
              Nos <span style={{ color: "var(--blue)" }}>prochaines</span> sessions de formation
            </h2>
            <p style={{
              color: "var(--gray-600)",
              fontSize: "1.1rem",
              maxWidth: "700px",
              margin: "0 auto"
            }}>
              Rejoignez nos sessions intensives et 100% pratiques. Réservez votre place dès aujourd'hui et donnez un nouvel élan à votre carrière.
            </p>
          </div>
        </ScrollReveal>

        {/* Grille */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }}>
          {formations.map((f, i) => (
            <ScrollReveal key={f.id} direction="up" delay={i * 150}>
              <div className="training-card glass-effect" style={{
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}>
                {/* Image plus petite */}
                <div style={{ width: "100%", height: "180px", overflow: "hidden", position: "relative" }}>
                  <img src={f.image} alt={f.titre} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }} className="card-img" />
                  <div style={{
                    position: "absolute",
                    top: "0.75rem",
                    left: "0.75rem",
                    background: "var(--blue)",
                    color: "#fff",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "50px",
                    fontSize: "0.7rem",
                    fontWeight: 700
                  }}>
                    Formation
                  </div>
                </div>

                {/* Contenu plus compact */}
                <div style={{ padding: "1.5rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1.2rem", marginBottom: "1rem", fontSize: "0.8rem", color: "#64748b" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <Calendar size={14} color="var(--blue)" /> {f.date}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <MapPin size={14} color="var(--blue)" /> {f.lieu}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.75rem", color: "#0d1b2a", lineHeight: 1.3 }}>
                    {f.titre}
                  </h3>

                  <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {f.desc}
                  </p>

                  <a href={f.whatsapp} target="_blank" style={{
                    marginTop: "auto",
                    color: "var(--blue)",
                    textDecoration: "none",
                    fontWeight: 900,
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "gap 0.3s ease"
                  }} className="learn-more">
                    S'inscrire <ArrowRight size={18} strokeWidth={3} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .training-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.6);
          border-color: rgba(0, 118, 206, 0.3) !important;
          box-shadow: 0 15px 40px rgba(0, 118, 206, 0.08);
        }
        .training-card:hover .card-img {
          transform: scale(1.1);
        }
        .learn-more:hover {
          gap: 0.8rem !important;
        }
      `}</style>
    </section>
  );
}
