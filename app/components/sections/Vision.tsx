"use client";
import React, { useState } from "react";
import { useLangue } from "../../lib/LangueContext";
import translations from "../../lib/translations";

export default function Vision() {
  const { langue } = useLangue();
  const t = translations[langue].presentation2.vision;
  const promoteurs = t.promoteurs;
  const [index, setIndex] = useState(0);
  const current = promoteurs[index];

  return (
    <section style={{ padding: "0 0 2rem", background: "#fff", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        
        {/* Titre Mobile Uniquement (Caché sur Desktop) */}
        <div className="mobile-only-title" style={{ display: "none", textAlign: "center", marginBottom: "2rem" }}>
          <span style={{
            color: "var(--blue)", 
            fontSize: "0.9rem", 
            fontWeight: 700,
            textTransform: "uppercase", 
            letterSpacing: "0.1em",
            paddingBottom: "5px",
            borderBottom: "1px solid rgba(0, 82, 204, 0.1)"
          }}>
            {t.titre}
          </span>
        </div>

        <div className="vision-section" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
          minHeight: "600px",
          border: "none"
        }}>
          {/* Côté Gauche : Photo */}
          <div className="vision-photo" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "flex-end", height: "100%", overflow: "visible" }}>
            <div style={{
              position: "absolute",
              bottom: "20%",
              left: "5%",
              width: "90%",
              height: "60%",
              backgroundColor: "var(--blue)",
              opacity: 0.05,
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              filter: "blur(80px)",
              zIndex: 1
            }} />

            <div style={{ position: "relative", zIndex: 2, width: "110%", maxWidth: "500px", marginBottom: "-10px" }}>
              <img 
                key={current.image}
                src={current.image} 
                alt={current.nom}
                className="animate-slide-up"
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  display: "block",
                  filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.08))",
                  objectFit: "contain",
                  mixBlendMode: "multiply"
                }} 
              />
            </div>
          </div>

          {/* Côté Droit : Message */}
          <div className="vision-content" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingRight: "3rem", zIndex: 3 }}>
            <div className="desktop-only-title" style={{ marginBottom: "0.5rem" }}>
              <span style={{
                color: "var(--blue)", 
                fontSize: "0.9rem", 
                fontWeight: 700,
                textTransform: "uppercase", 
                letterSpacing: "0.1em",
                display: "inline-block",
                paddingBottom: "5px",
                borderBottom: "1px solid rgba(0, 82, 204, 0.1)"
              }}>
                {t.titre}
              </span>
            </div>
            
            <div className="animate-fade-in" key={current.nom}>
              <div style={{ position: "relative" }}>
                <span style={{ 
                  position: "absolute", top: "-2.5rem", left: "-1.5rem", 
                  fontSize: "6rem", color: "var(--blue)", opacity: 0.08, fontFamily: "serif" 
                }}>"</span>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                  {current.paragraphes.map((para: string, idx: number) => (
                    <p key={idx} style={{ 
                      fontSize: "1.05rem",
                      lineHeight: 1.8,
                      color: "#334155", 
                      margin: 0,
                      fontWeight: 400,
                      textAlign: "justify",
                      maxWidth: "600px"
                    }}>
                      {para.split(/(\*\*.*?\*\*)/).map((part, i) => {
                        if (part.startsWith("**") && part.endsWith("**")) {
                          return <span key={i} style={{ color: "var(--blue)", fontWeight: 700 }}>{part.replace(/\*\*/g, "")}</span>;
                        }
                        return part;
                      })}
                    </p>
                  ))}
                </div>

                <div style={{ marginTop: "2.5rem" }}>
                  <p style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0d1b2a", margin: 0 }}>
                    {current.nom}
                  </p>
                  <p style={{ color: "var(--blue)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "0.2rem" }}>
                    {current.role} — BDT
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.8rem", marginTop: "1.5rem" }}>
              {promoteurs.map((_: any, i: number) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    width: i === index ? "60px" : "15px",
                    height: "4px",
                    borderRadius: "2px",
                    background: i === index ? "var(--blue)" : "#cbd5e1",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          .mobile-only-title { display: block !important; }
          .desktop-only-title { display: none !important; }
          .vision-section {
            display: flex !important;
            flex-direction: column !important;
            text-align: center !important;
            min-height: auto !important;
            gap: 1.5rem !important;
          }
          .vision-content {
            padding-right: 0 !important;
            align-items: center !important;
          }
          .vision-photo {
            margin-bottom: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
