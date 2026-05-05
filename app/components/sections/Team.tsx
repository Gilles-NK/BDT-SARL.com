"use client";
import React from "react";
import ScrollReveal from "../ScrollReveal";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const teamMembers = [
  {
    nom: "Alex Chiedjo",
    role: "Promoteur & Directeur Général",
    image: "/images/Mr.Alex.PNG",
    social: { linkedin: "#", instagram: "#", twitter: "#" }
  },
  {
    nom: "Erick",
    role: "Formateur",
    image: "/images/Mr.Erick.PNG",
    social: { linkedin: "#", instagram: "#", twitter: "#" }
  },
  {
    nom: "Philippe",
    role: "Technicien Réseaux",
    image: "/images/Phillipe .PNG",
    social: { linkedin: "#", instagram: "#", twitter: "#" }
  },
  {
    nom: "Kevine",
    role: "Secrétaire",
    image: "/images/Kevine.PNG",
    social: { linkedin: "#", instagram: "#", twitter: "#" }
  }
];

export default function Team() {
  return (
    <section id="team" style={{
      padding: "8rem 2rem",
      background: "#ffffff",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Fond avec un motif de points gris très subtil */}
      <div className="bg-pattern" />

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>

        <ScrollReveal direction="down">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <span style={{
              color: "var(--blue)",
              fontSize: "0.85rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "4px",
              display: "block",
              marginBottom: "1rem"
            }}>
              NOTRE ÉQUIPE
            </span>
            <h2 style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              fontWeight: 900,
              color: "#0d1b2a",
              marginBottom: "1.5rem",
              lineHeight: 1.1
            }}>
              Les <span style={{ color: "var(--blue)" }}>architectes</span> du succès
            </h2>
            <div style={{
              width: "60px",
              height: "4px",
              background: "var(--blue)",
              margin: "0 auto",
              borderRadius: "2px"
            }} />
          </div>
        </ScrollReveal>

        <div className="team-grid">
          {teamMembers.map((m, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 150}>
              <div className="m-card">
                <div className="m-img-box">
                  <img src={m.image} alt={m.nom} className="m-img" />
                  <div className="m-gradient" />
                  <div className="m-content">
                    <h3 className="m-title">{m.nom}</h3>
                    <p className="m-subtitle">{m.role}</p>
                    <div className="m-social">
                      <a href={m.social.linkedin} target="_blank" rel="noopener noreferrer" className="s-link"><Linkedin size={16} /></a>
                      <a href={m.social.instagram} target="_blank" rel="noopener noreferrer" className="s-link"><Instagram size={16} /></a>
                      <a href={m.social.twitter} target="_blank" rel="noopener noreferrer" className="s-link"><Twitter size={16} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .bg-pattern {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: radial-gradient(#e2e8f0 1px, transparent 1px);
          background-size: 50px 50px;
          opacity: 0.5;
          pointer-events: none;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* Force 4 colonnes sur desktop */
          gap: 1.5rem;
        }

        .m-card {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          background: #ffffff;
          aspect-ratio: 4 / 7; /* Hauteur maximale pour un effet poster */
          transition: all 0.4s ease;
          border: 1px solid #f1f5f9;
        }

        .m-card:hover {
          transform: translateY(-8px);
          border-color: var(--blue);
          box-shadow: 0 15px 30px rgba(0, 118, 206, 0.1);
        }

        .m-img-box {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .m-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .m-gradient {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 55%;
          background: linear-gradient(to top, rgba(13, 27, 42, 0.9) 10%, transparent 100%);
          z-index: 1;
        }

        .m-content {
          position: absolute;
          bottom: 1.5rem;
          left: 1.5rem;
          right: 1.5rem;
          z-index: 2;
          text-align: left;
        }

        .m-title {
          font-size: 1.4rem; /* Légèrement réduit pour tenir à 4 sur une ligne */
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.2rem;
        }

        .m-subtitle {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--blue);
          margin-bottom: 1rem;
          display: block;
          text-transform: capitalize;
        }

        .m-social {
          display: flex;
          gap: 0.5rem;
        }

        .s-link {
          width: 30px;
          height: 30px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.3s ease;
          background: rgba(0, 0, 0, 0.1);
        }

        .s-link:hover {
          background: var(--blue);
          border-color: var(--blue);
          transform: scale(1.1);
        }

        @media (max-width: 1100px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 600px) {
          .team-grid { 
            grid-template-columns: 1fr; 
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
