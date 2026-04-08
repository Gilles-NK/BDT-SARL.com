"use client";
import React, { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import { Star } from "lucide-react"; // Utilisation de lucide-react pour la cohérence
import { useLangue } from "../../lib/LangueContext";

export default function Temoignages() {
  const [actif, setActif] = useState(0);
  const { t } = useLangue();
  const items = t.temoignages.items;
  const item  = items[actif];

  return (
    <section style={{ padding: "3.5rem 2rem", background: "var(--gray-50)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        
        {/* En-tête réduit */}
        <ScrollReveal direction="up">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ 
              color: "#0066ff", fontSize: "0.75rem", fontWeight: 800, 
              textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.75rem" 
            }}>
              {t.temoignages.tag}
            </span>
            <h2 style={{ 
              fontFamily: "Ubuntu, sans-serif", fontWeight: 800, 
              fontSize: "clamp(1.5rem, 2.8vw, 2rem)", color: "#0d1b2a", 
              marginTop: "0.5rem", marginBottom: "0.5rem" 
            }}>
              {t.temoignages.titre}
            </h2>
            <p style={{ color: "var(--gray-600)", fontSize: "0.95rem" }}>{t.temoignages.sousTitre}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80}>
          {/* Étoiles */}
          <div style={{ display: "flex", justifyContent: "center", gap: 3, marginBottom: "1.25rem" }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={16} color="#D4AF37" fill="#D4AF37" />)}
          </div>

          {/* Carte de témoignage plus compacte */}
          <div style={{ 
            background: "#fff", 
            padding: "2rem", 
            borderRadius: 14, 
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)", 
            border: "1px solid var(--gray-200)", 
            borderTop: "3px solid #0066ff", 
            position: "relative" 
          }}>
            <span style={{ 
              position: "absolute", top: -10, left: 20, fontSize: "4rem", 
              color: "rgba(0, 102, 255, 0.1)", fontFamily: "Georgia, serif", 
              lineHeight: 1, userSelect: "none" 
            }}>
              &ldquo;
            </span>
            <p style={{ 
              fontSize: "0.98rem", color: "#475569", lineHeight: 1.7, 
              marginBottom: "1.5rem", position: "relative", zIndex: 1, 
              fontStyle: "italic", textAlign: "center" 
            }}>
              {item.texte}
            </p>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem" }}>
              <div style={{ 
                width: 40, height: 40, background: "linear-gradient(135deg, #0066ff, #0052cc)", 
                borderRadius: 8, display: "flex", alignItems: "center", 
                justifyContent: "center", color: "#fff", fontFamily: "Ubuntu, sans-serif", 
                fontWeight: 700, flexShrink: 0, fontSize: "1rem" 
              }}>
                {item.nom.charAt(0)}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: "#0d1b2a", fontSize: "0.9rem" }}>{item.nom}</div>
                <div style={{ color: "#64748b", fontSize: "0.78rem" }}>{item.role}</div>
              </div>
            </div>
          </div>

          {/* Pagination plus fine */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginTop: "1.75rem" }}>
            <button 
              onClick={() => setActif(a => (a - 1 + items.length) % items.length)} 
              style={{ 
                width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--gray-200)", 
                background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", 
                justifyContent: "center", color: "#64748b", transition: "all 0.2s" 
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0066ff"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
            >
              ❮
            </button>
            
            <div style={{ display: "flex", gap: 5 }}>
              {items.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActif(i)} 
                  style={{ 
                    width: i === actif ? 18 : 6, 
                    height: 6, 
                    borderRadius: 3, 
                    border: "none", 
                    background: i === actif ? "#0066ff" : "#cbd5e1", 
                    cursor: "pointer", 
                    transition: "all 0.3s", 
                    padding: 0 
                  }} 
                />
              ))}
            </div>

            <button 
              onClick={() => setActif(a => (a + 1) % items.length)} 
              style={{ 
                width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--gray-200)", 
                background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", 
                justifyContent: "center", color: "#64748b", transition: "all 0.2s" 
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0066ff"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
            >
              ❯
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
