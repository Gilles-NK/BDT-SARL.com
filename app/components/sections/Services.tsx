"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";
import {
  Shield,
  Cpu,
  Lock,
  FileText,
  Activity,
  Fingerprint,
  BadgeCheck,
  Cloud,
  Users
} from "lucide-react";
import { useLangue } from "../../lib/LangueContext";
import AdessoSwitch from "../AdessoSwitch";

const getIcon = (index: number) => {
  switch (index) {
    case 0: return Shield;      // Vidéosurveillance
    case 1: return Activity;    // Réseaux / Infra
    case 2: return Fingerprint; // Contrôle d'accès
    case 3: return Lock;        // Cybersécurité
    case 4: return Cloud;       // Cloud
    case 5: return Users;       // Conseil & Audit
    default: return BadgeCheck;
  }
};

export default function Services() {
  const [view, setView] = useState<"services" | "clients">("services");
  const { t } = useLangue();
  const sLocal = t.services;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const CLIENTS = [
    { name: "Serena Gardens", logo: "/images/logo-serena-gardens.png" },
    { name: "Faya Hotel", logo: "/images/logo-faya-hotel.png" },
    { name: "Aston Canal+", logo: "/images/logo-aston-canal.png" },
    { name: "Global Bush", logo: "/images/logo-global-bush.png" },
    { name: "Soft Education", logo: "/images/logo-soft-education.png" },
    { name: "Hotels Serena", logo: "/images/logo-hotels-serena.png" },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable > 0) {
        setScrollProgress((scrollLeft / totalScrollable) * 100);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
      setScrollProgress(0);
    }
  }, [view]);

  return (
    <section style={{ padding: "4rem 0", background: "#fff", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>

        {/* Messages d'en-tête (Tag & Titre) */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <ScrollReveal direction="up">
            <span style={{
              color: "#1b439e", fontSize: "0.75rem", fontWeight: 800,
              textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.75rem"
            }}>
              {sLocal.tag}
            </span>
            <h2 style={{
              fontFamily: "Ubuntu, sans-serif", fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#0d1b2a",
              lineHeight: 1.2, maxWidth: "600px", margin: "0 auto"
            }}>
              {sLocal.titre}
            </h2>
          </ScrollReveal>
        </div>

        {/* Switcher Adesso */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <AdessoSwitch
            leftLabel={sLocal.btnServices}
            rightLabel={sLocal.btnClients}
            active={view === "services" ? "left" : "right"}
            onChange={(val) => setView(val === "left" ? "services" : "clients")}
          />
        </div>

        {/* Conteneur défilant horizontalement */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="horizontal-scroll"
          style={{
            display: "flex",
            gap: "2.5rem",
            overflowX: "auto",
            paddingBottom: "3rem",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
            paddingTop: "0.5rem"
          }}
        >
          {view === "services" ? (
            sLocal.items.map((item: any, i: number) => {
              const Icon = getIcon(i);

              return (
                <Link
                  href={`/services/${item.id}`}
                  key={i}
                  className="service-card"
                  style={{
                    flex: "0 0 280px",
                    padding: "1rem",
                    background: "transparent",
                    transition: "all 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "1.25rem",
                    textDecoration: "none"
                  }}
                >
                  <div className="service-icon" style={{
                    color: "#D4AF37",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <Icon size={44} strokeWidth={1.2} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "Ubuntu, sans-serif", fontSize: "1.1rem", color: "#0d1b2a",
                      marginBottom: "0.75rem", fontWeight: 800, lineHeight: 1.3
                    }}>
                      {item.titre}
                    </h3>
                    <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                      {item.sousTitre}
                    </p>
                  </div>
                </Link>
              );
            })
          ) : (
            CLIENTS.map((c, i) => (
              <div key={i} className="client-card" style={{
                flex: "0 0 200px",
                height: 120,
                padding: "1rem",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease"
              }}>
                <img src={c.logo} alt={c.name} className="client-logo" />
              </div>
            ))
          )}
        </div>

        {/* Barre de progression Curseurs mobile ÉPAIS */}
        <div style={{ maxWidth: 800, margin: "0 auto", height: 2, background: "#f1f5f9", borderRadius: 2, position: "relative" }}>
          <div style={{
            position: "absolute",
            top: -1,
            height: 4,
            background: "#1b439e",
            width: "40%",
            left: `${scrollProgress * 0.6}%`,
            transition: "left 0.15s ease-out",
            borderRadius: 4
          }} />
        </div>
      </div>

      <style>{`
        .horizontal-scroll::-webkit-scrollbar { display: none; }
        
        .service-card:hover .service-icon {
          color: #1b439e !important;
          transform: translateY(-5px);
        }

        .service-card:hover h3 {
          color: #1b439e !important;
        }

        .client-logo {
          max-width: 100%;
          height: auto;
          max-height: 50px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.5;
          transition: all 0.4s ease;
        }

        .client-card:hover .client-logo {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}