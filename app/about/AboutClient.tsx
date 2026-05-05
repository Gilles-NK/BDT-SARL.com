"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { Camera, Wrench, Lock, GraduationCap, Cloud, BadgeCheck, Crosshair, Zap } from "../components/Icons";
import { Shield, Activity, Fingerprint, Lock as LockIcon, Cloud as CloudIcon, Users, Cpu, HardDrive, ArrowRight } from "lucide-react";
import { useLangue } from "../lib/LangueContext";

const EXPERTISES_ICONS = [Shield, Activity, Fingerprint, LockIcon, CloudIcon, Users];
const VALEURS_ICONS = [Crosshair, Zap, BadgeCheck, Lock];

export default function AboutClient() {
  const { t, langue } = useLangue();
  const c = t.apropos;

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

  return (
    <div style={{ background: "#fdfdfd" }}>
      {/* HERO */}
      <section style={{ position: "relative", height: "clamp(560px, 45vh, 560px)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <Image
            src="/images/58.jpg"
            alt={c.titre}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
              filter: "blur(4px)",
              transform: "scale(1.05)"
            }}
          />
        </div>

        <div className="hero-container" style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem", width: "100%" }}>
          <div className="hero-content" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
              padding: "1.5rem 3rem",
              borderRadius: "16px",
              display: "inline-block",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}>
              <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                {c.titre}
              </h1>
              <p style={{ marginTop: "0.5rem", fontSize: "1.1rem", opacity: 0.9 }}>
                {c.sousTitre}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "0", background: "#fff", position: "relative", overflow: "hidden" }}>
        <div className="about-intro-container" style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="about-intro-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", alignItems: "stretch" }}>

            {/* Image Column with Fading Effect - Spans full height */}
            <ScrollReveal direction="left">
              <div style={{ position: "relative", height: "100%", minHeight: "600px", width: "100%" }}>
                <Image
                  src="/images/48.jpg"
                  alt="Équipe BDT"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />

                {/* The "Anchor/Fade" effect to the right */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, transparent 75%, #fff 98%)",
                  pointerEvents: "none"
                }} />
              </div>
            </ScrollReveal>

            {/* Text Column */}
            <ScrollReveal direction="right">
              <div className="about-text-column" style={{ padding: "6rem 4rem 6rem 2rem", display: "flex", flexDirection: "column" }}>
                <p style={{ color: "#1b439e", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.5rem", textTransform: "uppercase" }}>
                  {c.introDetail.surtitre}
                </p>
                <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: "#1a1a2e", marginBottom: "0.8rem" }}>
                  {c.introDetail.titre}
                </h2>

                {/* Decorative bars back again */}
                <div style={{ display: "flex", gap: "6px", marginBottom: "2rem" }}>
                  <div style={{ width: "45px", height: "4px", background: "#1b439e", borderRadius: "2px" }} />
                  <div style={{ width: "35px", height: "4px", background: "#e2e8f0", borderRadius: "2px" }} />
                </div>

                <div className="intro-description-container" style={{ color: "#64748b", lineHeight: 1.7, fontSize: "0.95rem", textAlign: "justify" }}>
                  <p style={{ marginBottom: "1.5rem", whiteSpace: "pre-line", fontWeight: 400 }}>
                    {c.introDetail.description}
                  </p>
                </div>

                <div style={{
                  background: "rgba(0, 102, 255, 0.04)",
                  borderLeft: "4px solid #1b439e",
                  padding: "1.5rem",
                  borderRadius: "0 8px 8px 0",
                  marginBottom: "2rem",
                  color: "#1a1a2e",
                  fontWeight: 500,
                  fontSize: "0.95rem"
                }}>
                  {c.introDetail.garantie}
                </div>

                <p style={{ fontWeight: 700, color: "#1a1a2e", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                  {c.introDetail.listeTitre}
                </p>

                <div className="intro-services-list" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem 1.5rem" }}>
                  {c.introDetail.services.map((service, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "#64748b" }}>
                      <div style={{
                        width: "24px",
                        height: "24px",
                        background: "#1b439e",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </div>
                      <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NOS CLIENTS (Homepage Style) */}
      <section style={{ padding: "4rem 0 6rem", background: "#fff", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div className="client-section-title" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <ScrollReveal direction="up">
              <span style={{ color: "#1b439e", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", display: "block", marginBottom: "0.5rem" }}>
                ILS NOUS FONT CONFIANCE
              </span>
              <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#1a1a2e", lineHeight: 1.2 }}>
                Nos Différents Clients
              </h2>
            </ScrollReveal>
          </div>

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
            {CLIENTS.map((client, i) => (
              <div key={i} className="client-card-home" style={{
                flex: "0 0 220px",
                height: 140,
                padding: "1.5rem",
                background: "#f8fafc",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #f1f5f9",
                transition: "all 0.4s ease"
              }}>
                <img src={client.logo} alt={client.name} className="client-logo-img" style={{
                  maxWidth: "100%",
                  maxHeight: "55px",
                  objectFit: "contain",
                  filter: "grayscale(100%)",
                  opacity: 0.5,
                  transition: "all 0.4s ease"
                }} />
              </div>
            ))}
          </div>

          {/* Progress Bar */}
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
      </section>

      {/* CTA */}
      <section style={{ padding: "8rem 2rem", background: "linear-gradient(135deg, #1b439e 0%, #1a1a2e 100%)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.1, backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.2 }}>
            {c.cta}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "3rem", fontSize: "1.2rem", maxWidth: 600, margin: "0 auto 3rem" }}>
            {c.ctaSub}
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href={`/devis`} className="cta-btn primary" style={{ background: "#fff", color: "#1b439e", fontWeight: 800, padding: "1.2rem 3rem", borderRadius: "12px", fontSize: "1rem", transition: "all 0.3s", boxShadow: "0 10px 25px rgba(0,0,0,0.1)", textDecoration: "none" }}>
              {c.btnDevis}
            </Link>
            <Link href={`/contact`} className="cta-btn secondary" style={{ background: "transparent", color: "#fff", fontWeight: 700, padding: "1.2rem 3rem", borderRadius: "12px", border: "2px solid rgba(255,255,255,0.3)", fontSize: "1rem", transition: "all 0.3s", textDecoration: "none" }}>
              {c.btnContact}
            </Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .horizontal-scroll::-webkit-scrollbar { display: none; }
        
        .client-card-home:hover {
          transform: translateY(-5px);
          border-color: #1b439e33 !important;
          background: #fff !important;
          box-shadow: 0 15px 35px rgba(0, 102, 255, 0.08);
        }

        .client-card-home:hover .client-logo-img {
          filter: grayscale(0%) !important;
          opacity: 1 !important;
          transform: scale(1.05);
        }

        .cta-btn.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
        }
        
        .cta-btn.secondary:hover {
          background: rgba(255,255,255,0.1) !important;
          border-color: #fff !important;
          transform: translateY(-3px);
        }

        @media (max-width: 992px) {
          .about-intro-container {
            max-width: none !important;
            width: 100% !important;
          }

          .about-intro-grid { 
            grid-template-columns: 1fr !important;
            padding: 0 !important;
          }
          
          /* Intro image container: full width and touching hero */
          .about-intro-grid > div:first-child {
            padding: 0 !important;
            display: block !important;
            width: 100vw !important;
            margin-left: calc(50% - 50vw) !important;
            margin-right: calc(50% - 50vw) !important;
          }

          .about-intro-grid > div:first-child > div {
             height: 400px !important;
             width: 100% !important;
             min-height: auto !important;
             border-radius: 0 !important;
          }
          
          .about-intro-grid div:first-child div[style*="linear-gradient"] {
            display: block !important;
            background: linear-gradient(to bottom, transparent 60%, #fff 98%) !important;
          }

          .about-text-column {
            padding: 2.5rem 1rem !important;
            text-align: left !important;
          }

          .intro-description-container {
            text-align: justify !important;
            text-justify: inter-word;
          }

          .intro-services-list {
            grid-template-columns: 1fr !important;
            gap: 1.2rem !important;
            text-align: left !important;
          }
          
          .intro-services-list > div {
            width: 100% !important;
            justify-content: flex-start !important;
          }
          
          .client-section-title {
            text-align: center !important;
          }
        }
      `}} />
    </div>
  );
}
