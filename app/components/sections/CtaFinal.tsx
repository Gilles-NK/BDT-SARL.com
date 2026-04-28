"use client";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import { useLangue } from "../../lib/LangueContext";

export default function CtaFinal() {
  const { t, langue } = useLangue();
  return (
    <ScrollReveal direction="up">
      <section style={{ 
        width: "100%",
        padding: 0,
        lineHeight: 0,
        overflow: "hidden",
        position: "relative"
      }}>
        {/* Dégradé de fondu au sommet pour l'ancrage */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "150px",
          background: "linear-gradient(to bottom, #ffffff, transparent)",
          zIndex: 2,
          pointerEvents: "none"
        }} />

        <img 
          src="/images/page bas.png" 
          alt="L'équipe BDT SARL" 
          style={{ 
            width: "100%", 
            height: "auto", 
            maxHeight: "800px", 
            objectFit: "cover",
            display: "block"
          }} 
        />
      </section>
    </ScrollReveal>
  );
}
