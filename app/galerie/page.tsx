"use client";
import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const allImages = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "7.jpg", "8.jpg", "9.jpg",
  "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "16.jpg", "17.jpg", "18.jpg",
  "30.jpg", "31.jpg", "32.jpg", "33.jpg", "34.jpg", "36.jpg", "37.jpg", "38.jpg", "39.jpg",
  "40.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg",
  "50.jpg", "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", "57.jpg", "58.jpg", "59.jpg"
].map(img => `/images/${img}`);

export default function GaleriePage() {
  return (
    <main style={{ background: "#fff" }}>
      
      {/* Hero Galerie */}
      <section style={{ 
        position: "relative",
        padding: "10rem 2rem 6rem", 
        color: "#fff",
        textAlign: "center",
        overflow: "hidden"
      }}>
        {/* Arrière-plan flouté */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "url('/images/112.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "blur(4px)",
          zIndex: 1,
          transform: "scale(1.05)" // Évite les bords transparents dus au flou
        }} />
        
        {/* Overlay léger pour garantir la lisibilité */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(13, 27, 42, 0.7)",
          zIndex: 2
        }} />

        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 10 }}>
          
          <ScrollReveal direction="up">
            <Link href="/" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "rgba(255, 255, 255, 0.7)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.95rem",
              marginBottom: "2rem",
              padding: "0.5rem 1rem",
              borderRadius: "50px",
              background: "rgba(255, 255, 255, 0.1)",
              transition: "all 0.3s ease"
            }} className="back-btn">
              <ArrowLeft size={18} /> Retour à l'accueil
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, marginBottom: "1.5rem" }}>
              Notre Galerie Terrain
            </h1>
            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.7)", maxWidth: "700px", margin: "0 auto" }}>
              Explorez l'intégralité de nos projets et installations à travers le Cameroun. La preuve de notre expertise par l'image.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grille de toutes les photos */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ 
            columnCount: 4,
            columnGap: "1.5rem",
          }} className="masonry-full">
            {allImages.map((img, i) => (
              <ScrollReveal key={i} direction="up" delay={(i % 8) * 50}>
                <div style={{ 
                  marginBottom: "1.5rem",
                  breakInside: "avoid",
                  borderRadius: "15px", 
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  border: "1px solid #f1f5f9"
                }}>
                  <img src={img} alt={`Réalisation BDT ${i}`} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .back-btn:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          color: #fff !important;
        }
        @media (max-width: 1100px) {
          .masonry-full { column-count: 3 !important; }
        }
        @media (max-width: 800px) {
          .masonry-full { column-count: 2 !important; }
        }
        @media (max-width: 500px) {
          .masonry-full { column-count: 1 !important; }
        }
      `}</style>
    </main>
  );
}
