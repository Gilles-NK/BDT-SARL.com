"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLangue } from "../lib/LangueContext";

/**
 * Bouton flottant "Devis gratuit" qui se masque automatiquement
 * lorsque l'utilisateur atteint le footer pour ne pas cacher les liens.
 */
export default function RappelWidget() {
  const { langue } = useLangue();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowH = window.innerHeight;

      // Masque le widget quand le footer est visible à l'écran
      setVisible(footerTop > windowH - 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      bottom: 110,
      right: 30,
      zIndex: 9998,
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? "auto" : "none",
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.3s ease, transform 0.3s ease",
    }}>
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
