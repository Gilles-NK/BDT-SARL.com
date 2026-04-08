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

import Hero         from "./components/sections/Hero";
import Presentation from "./components/sections/Presentation";
import Services     from "./components/sections/Services";
import Processus    from "./components/sections/Processus";
import ContactSection from "./components/ContactSection";
import Temoignages  from "./components/sections/Temoignages";
import CtaFinal     from "./components/sections/CtaFinal";
import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      {/* a. Bannière principale avec diaporama */}
      <Hero />

      {/* b. Présentation rapide — 4 points forts */}
      <Presentation />

      {/* c. Services principaux — grille 2×2 */}
      <Services />

      {/* d. Zone de confiance — 4 étapes clé en main */}
      <Processus />

      {/* e. Nos partenaires — logos clients */}
      <ContactSection />

      {/* f. Témoignages — avis clients carousel */}
      <Temoignages />

      {/* g. Appel à l'action final */}
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
