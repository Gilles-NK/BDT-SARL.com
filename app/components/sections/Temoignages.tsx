"use client";
import React from "react";
import ScrollReveal from "../ScrollReveal";
import { useLangue } from "../../lib/LangueContext";

export default function Temoignages() {
  const { t } = useLangue();

  // On garde les 3 premiers avis pour l'instant (retirez le .slice(0,3) le jour où vous en voulez plus)
  const items = t.temoignages.items.slice(0, 3);

  // Photos de profil fictives pour l'exemple (à remplacer par de vraies photos dans translations.ts si besoin)
  const defaultAvatars = [
    "/images/Serena.jpg", // Vous pourrez utiliser de vraies photos
    "/images/Faya.jpg",
    "/images/Aston.jpg"
  ];

  return (
    <section style={{ padding: "6rem 2rem", background: "#ffffff", position: "relative", overflow: "hidden" }}>

      {/* Décoration d'arrière-plan pour rendre le Glassmorphism visible */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "10%",
        width: "300px",
        height: "300px",
        background: "rgba(0, 118, 206, 0.08)",
        filter: "blur(80px)",
        borderRadius: "50%",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        right: "5%",
        width: "400px",
        height: "400px",
        background: "rgba(209, 213, 219, 0.4)",
        filter: "blur(100px)",
        borderRadius: "50%",
        zIndex: 0
      }} />

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* En-tête */}
        <ScrollReveal direction="down">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span style={{
              color: "var(--blue)", fontSize: "0.85rem", fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "1rem"
            }}>
              {t.temoignages.tag}
            </span>
            <h2 style={{
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 2.5rem)", color: "#0d1b2a",
              marginBottom: "1rem"
            }}>
              {t.temoignages.titre}
            </h2>
            <p style={{ color: "var(--gray-600)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
              {t.temoignages.sousTitre}
            </p>
          </div>
        </ScrollReveal>

        {/* Mur de Confiance : Grille de 3 cartes */}
        <div className="temoignages-grid">
          {items.map((item: any, i: number) => (
            <ScrollReveal key={i} direction="up" delay={i * 100}>
              <div className="review-card glass-effect">

                {/* Icône de citation subtile */}
                <span className="quote-icon">&quot;</span>

                {/* Texte de l'avis */}
                <p className="review-text">
                  {item.texte}
                </p>

                {/* Profil du client */}
                <div className="client-profile">
                  <div className="client-image-wrapper">
                    <img
                      src={item.image || defaultAvatars[i % 3]}
                      alt={`Client ${item.nom}`}
                      className="client-image"
                    />
                  </div>
                  <div className="client-info">
                    <div className="client-name">{item.nom}</div>
                    <div className="client-role">{item.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      <style jsx>{`
        .temoignages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          justify-content: center;
        }

        @media (max-width: 650px) {
          .temoignages-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem !important;
          }
          .temoignage-card {
            padding: 1.2rem 1rem !important;
          }
          .review-text {
            font-size: 0.75rem !important;
            line-height: 1.4 !important;
            margin-bottom: 1rem !important;
          }
          .client-image-wrapper {
            width: 35px !important;
            height: 35px !important;
          }
          .client-name {
            font-size: 0.7rem !important;
          }
          .client-role {
            font-size: 0.6rem !important;
          }
        }

        .glass-effect {
          /* Effet Transparent / Glassmorphism */
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .glass-effect:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 118, 206, 0.08);
          border-color: rgba(0, 118, 206, 0.3);
          background: rgba(255, 255, 255, 0.6);
        }

        .quote-icon {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          font-size: 5rem;
          font-family: Georgia, serif;
          color: rgba(0, 118, 206, 0.06);
          line-height: 1;
          user-select: none;
        }

        .review-text {
          font-size: 1.05rem;
          color: #334155;
          line-height: 1.7;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 1;
          flex-grow: 1;
        }

        .client-profile {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-top: 1px solid rgba(0, 0, 0, 0.04);
          padding-top: 1.5rem;
        }

        .client-image-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .client-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .client-name {
          font-weight: 800;
          color: #0d1b2a;
          font-size: 1rem;
          margin-bottom: 2px;
        }

        .client-role {
          color: #64748b;
          font-size: 0.85rem;
        }

        @media (max-width: 992px) {
          .temoignages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .temoignages-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
