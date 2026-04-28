// ═══════════════════════════════════════════════════════════════
//  PAGE D'ACCUEIL — app/page.tsx
//
//  Cette page assemble les sections dans l'ordre d'affichage.
//  Pour modifier une section, ouvrez son fichier correspondant :
//
//  ┌─────────────────────────────────────────────────────────┐
//  │  Section            │  Fichier                          │
//  ├─────────────────────┼───────────────────────────────────┤
//  │  Hero               │  components/sections/Hero.tsx     │
//  │  Présentation       │  components/sections/Presentation.tsx │
//  │  Services           │  components/sections/Services.tsx │
//  │  Processus          │  components/sections/Processus.tsx│
//  │  Formulaire         │  components/ContactSection.tsx    │
//  │  Témoignages        │  components/sections/Temoignages.tsx │
//  │  CTA Final          │  components/sections/CtaFinal.tsx │
//  └─────────────────────┴───────────────────────────────────┘
// ═══════════════════════════════════════════════════════════════

import Hero from "./components/sections/Hero";
import Presentation from "./components/sections/Presentation";
import Services from "./components/sections/Services";
import Processus from "./components/sections/Processus";
import ContactSection from "./components/ContactSection";
import Temoignages from "./components/sections/Temoignages";
import CtaFinal from "./components/sections/CtaFinal";
import Vision from "./components/sections/Vision";
import FieldGallery from "./components/sections/FieldGallery";
import Trainings from "./components/sections/Trainings";
import Pricing from "./components/sections/Pricing";
import { Metadata } from "next";

export default function Home() {
  return (
    <div style={{ background: "#fff" }}>
      {/* 1. L'ACCROCHE : Qui nous sommes en 3 secondes */}
      <Hero />

      {/* Barre d'info SEO Glassmorphism (Déplacée ici) */}
      <div style={{ 
        background: "rgba(255, 255, 255, 0.7)", 
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        color: "var(--blue)", 
        padding: "1rem", 
        textAlign: "center", 
        fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)", 
        fontWeight: 700,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        position: "relative",
        zIndex: 5
      }}>
        Vidéosurveillance, réseaux, cybersécurité et formations professionnelles au Cameroun.
      </div>

      {/* 2. L'OFFRE : Ce que nous faisons (Succinct) */}
      <Services />

      {/* 3. LA CRÉDIBILITÉ : Nos chiffres et notre ADN */}
      <Presentation />

      {/* 4. LA CONFIANCE HUMAINE : Le message des promoteurs (DÉPLACÉ ICI) */}
      <Vision />

      {/* 5. LA PREUVE : Nos travaux réels sur le terrain */}
      <FieldGallery />

      {/* 6. L'EXPERTISE TRANSMISE : Formations et Avenir */}
      <Trainings />

      {/* 6.5 TARIFS : Grille tarifaire des formations */}
      <Pricing />

      {/* 7. LA MÉTHODE : Comment nous travaillons (4 étapes) */}
      <Processus />

      {/* 8. LA PREUVE SOCIALE : Ce que disent nos clients */}
      <Temoignages />

      {/* 9. L'ACTION : Conversion finale */}
      <CtaFinal />

      {/* Styles responsive pour les grilles de la page */}
      <style>{`
        .pres-grid  { grid-template-columns: repeat(4,1fr); }
        .serv-grid  { grid-template-columns: repeat(2,1fr); }
        .steps-grid { grid-template-columns: repeat(4,1fr); }
        @media (max-width: 900px) {
          .pres-grid  { grid-template-columns: repeat(2,1fr) !important; }
          .serv-grid  { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .pres-grid, .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
