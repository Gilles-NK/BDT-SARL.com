"use client";
import Link from "next/link";
import { useLangue } from "../lib/LangueContext";

/**
 * Ce composant était auparavant un widget de rappel avec formulaire.
 * Suite à la demande de l'utilisateur, il a été transformé en un bouton flottant 
 * direct vers la page de devis pour simplifier le parcours client.
 */
export default function RappelWidget() {
  const { langue, t } = useLangue();
  
  return (
    <div style={{ position: "fixed", bottom: 110, right: 30, zIndex: 9998 }}>
      <Link
        href={`/devis`}
        style={{
          background: "#0066ff",
          color: "#fff",
          border: "none",
          borderRadius: 50,
          padding: "0.75rem 1.4rem",
          fontWeight: 700,
          fontSize: "0.9rem",
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,102,204,0.4)",
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          fontFamily: "Ubuntu, sans-serif",
          whiteSpace: "nowrap",
          transition: "all 0.2s ease-in-out",
          textDecoration: "none",
        }}
        onMouseEnter={e => {
          const b = e.currentTarget;
          b.style.transform = "translateY(-3px) scale(1.02)";
          b.style.boxShadow = "0 6px 20px rgba(0,102,204,0.5)";
          b.style.background = "#0076e5";
        }}
        onMouseLeave={e => {
          const b = e.currentTarget;
          b.style.transform = "translateY(0) scale(1)";
          b.style.boxShadow = "0 4px 16px rgba(0,102,204,0.4)";
          b.style.background = "#0066ff";
        }}
      >
        <span style={{ fontSize: "1.1rem" }}>📄</span>
        {langue === "fr" ? "Devis gratuit" : "Free quote"}
      </Link>
    </div>
  );
}
