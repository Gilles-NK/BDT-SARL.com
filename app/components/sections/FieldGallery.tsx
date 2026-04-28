"use client";
import React from "react";
import ScrollReveal from "../ScrollReveal";
import Link from "next/link";

const images = [
  "/images/100.jpg", "/images/101.jpg", "/images/102.jpg", "/images/103.jpg",
  "/images/104.jpg", "/images/105.jpg", "/images/106.jpg", "/images/107.jpg",
  "/images/108.jpg", "/images/109.jpg", "/images/110.jpg", "/images/111.jpg",
  "/images/112.jpg", "/images/113.jpg", "/images/114.jpg", "/images/115.jpg",
  "/images/38.jpg", "/images/1.jpg"
];

export default function FieldGallery() {
  return (
    <section style={{ padding: "2rem 0 2rem", background: "#ffffff" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        <ScrollReveal direction="up">
          <div style={{ textAlign: "left", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#0d1b2a", marginBottom: "1rem" }}>
              Nos Réalisations sur le Terrain
            </h2>
            <p style={{ color: "var(--gray-600)", fontSize: "1.1rem", maxWidth: "600px" }}>
              Découvrez nos interventions récentes : de la pose de caméras haute définition au déploiement de réseaux complexes.
            </p>
          </div>
        </ScrollReveal>

        {/* Grille Effet Rivière (Masonry) */}
        <div style={{
          columnCount: 3,
          columnGap: "1rem",
        }} className="masonry-grid">
          {images.map((img, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 50}>
              <div style={{
                marginBottom: "1rem",
                breakInside: "avoid",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease"
              }} className="gallery-item">
                <img src={img} alt="Réalisation BDT" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bouton Voir Plus */}
        <ScrollReveal direction="up" delay={200}>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/galerie" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1.2rem 2.5rem",
              background: "var(--blue)",
              color: "#fff",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1.05rem",
              boxShadow: "0 10px 25px rgba(0, 82, 204, 0.2)",
              transition: "all 0.3s ease"
            }}>
              Voir plus de réalisations
              <span style={{ fontSize: "1.4rem" }}>→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        .gallery-item:hover {
          transform: translateY(-5px);
        }
        @media (max-width: 900px) {
          .masonry-grid { column-count: 2 !important; }
        }
        @media (max-width: 600px) {
          .masonry-grid { column-count: 2 !important; }
        }
      `}</style>
    </section>
  );
}
