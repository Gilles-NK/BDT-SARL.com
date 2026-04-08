"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import { useLangue } from "../lib/LangueContext";
import { Search, Shield, Settings, BadgeCheck, Wrench, Lock, ChevronDown, MessageCircle, FileText } from "lucide-react";

function Item({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  const ADESSO_BLUE = "#0066ff";
  const NAVY = "#1a1a2e";
  
  return (
    <div className="faq-item" style={{
      border: isOpen ? `2px solid ${ADESSO_BLUE}` : "1px solid #f1f5f9",
      borderRadius: "16px",
      overflow: "hidden",
      marginBottom: "1.25rem",
      background: "#fff",
      boxShadow: isOpen ? "0 15px 35px rgba(0, 102, 255, 0.08)" : "0 4px 12px rgba(0,0,0,0.02)",
      transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
      transform: isOpen ? "scale(1.01)" : "scale(1)"
    }}>
      <button onClick={onToggle}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "1.5rem 2rem", background: "transparent", border: "none",
          cursor: "pointer", textAlign: "left", gap: "1.5rem", outline: "none"
        }}>
        <span style={{
          fontWeight: 700,
          color: isOpen ? ADESSO_BLUE : NAVY,
          fontSize: "1.1rem",
          fontFamily: "Ubuntu, sans-serif",
          lineHeight: 1.4,
          transition: "color 0.3s ease"
        }}>{q}</span>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          background: isOpen ? ADESSO_BLUE : "rgba(0, 102, 255, 0.05)",
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
        }}>
          <ChevronDown size={20} color={isOpen ? "#fff" : ADESSO_BLUE} />
        </div>
      </button>

      <div style={{
        maxHeight: isOpen ? "400px" : "0px",
        overflow: "hidden",
        opacity: isOpen ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      }}>
        <div style={{ padding: "0 2rem 2rem", color: "#64748b", lineHeight: 1.8, fontSize: "1rem" }}>
          <div style={{ borderTop: "1px solid #f1f5f9", paddingTop: "1.5rem" }}>
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

const getIcon = (id: string) => {
  switch (id) {
    case "services": return Shield;
    case "installation": return Settings;
    case "tarifs": return BadgeCheck;
    case "maintenance": return Wrench;
    case "securite": return Lock;
    default: return Shield;
  }
};

export default function FaqClient() {
  const { t, langue } = useLangue();
  const fLocal = t.faqPage;

  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);

  const ADESSO_BLUE = "#0066ff";
  const NAVY = "#1a1a2e";

  const toggle = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const filtered = fLocal.cats.map(c => ({
    ...c,
    items: c.items.filter(i => !search || i.q.toLowerCase().includes(search.toLowerCase()) || i.a.toLowerCase().includes(search.toLowerCase()))
  })).filter(c => c.items.length > 0);

  const resultCount = filtered.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <div style={{ background: "#fdfdfd", color: NAVY, minHeight: "100vh" }}>
      {/* ─── HERO SECTION ─── */}
      <section style={{ position: "relative", height: "580px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/6.jpg" alt="FAQ BDT" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8, 16, 52, 0.9), rgba(0, 102, 255, 0.4))" }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem", width: "100%", maxWidth: "800px" }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#fff", padding: "3rem", borderRadius: "24px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.25)"
          }}>
            <span style={{ display: "block", color: ADESSO_BLUE, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.8rem", marginBottom: "1rem" }}>
              Besoin d'aide ?
            </span>
            <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, margin: 0, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
              {fLocal.titreHero}
            </h1>
            <p style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.85)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              {fLocal.sousTitreHero}
            </p>

            {/* BARRE DE RECHERCHE DANS LE HERO */}
            <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
              <div style={{ position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)", zIndex: 10 }}>
                <Search size={22} color={ADESSO_BLUE} />
              </div>
              <input type="text" placeholder={fLocal.placeholderHero} value={search} onChange={e => setSearch(e.target.value)}
                className="focus-ring"
                style={{
                  width: "100%", padding: "1.4rem 1.2rem 1.4rem 3.8rem", borderRadius: "16px",
                  border: "none", background: "#fff", fontSize: "1.1rem", outline: "none", color: NAVY,
                  boxShadow: "0 10px 40px rgba(0,0,0,0.15)", fontFamily: "Ubuntu, sans-serif", transition: "all 0.3s"
                }} />
            </div>
            {search && (
              <div style={{ marginTop: "1.25rem", fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
                {resultCount} {fLocal.resultatsTrouves}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── CONTENU FAQ ─── */}
      <section style={{ padding: "6rem 2rem", background: "#fdfdfd", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "6rem 2rem", background: "#fff", borderRadius: "24px", border: "1px solid #f1f5f9", boxShadow: "0 15px 40px rgba(0,0,0,0.03)" }}>
              <div style={{ width: 90, height: 90, background: "rgba(0,102,255,0.05)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
                <Search size={40} color={ADESSO_BLUE} />
              </div>
              <h3 style={{ fontSize: "1.75rem", color: NAVY, fontWeight: 800, marginBottom: "0.75rem" }}>{fLocal.aucunResultatTitre}</h3>
              <p style={{ marginBottom: "3rem", color: "#64748b", fontSize: "1.1rem" }}>{fLocal.aucunResultatDesc} "{search}".</p>
              <Link href={`/contact`} style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: ADESSO_BLUE, color: "#fff", fontWeight: 700, padding: "1.1rem 3rem", borderRadius: "12px", textDecoration: "none", boxShadow: "0 8px 20px rgba(0, 102, 255, 0.3)", transition: "0.3s" }} className="hover-lift">
                {fLocal.poserQuestionBtn}
              </Link>
            </div>
          ) : filtered.map((cat, i) => {
            const CatIcon = getIcon(cat.id);
            return (
              <ScrollReveal key={i} direction="up" delay={i * 60}>
                <div style={{ marginBottom: "5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "2.5rem" }}>
                    <div style={{ width: 50, height: 50, borderRadius: "14px", background: "rgba(0, 102, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(0,102,255,0.05)" }}>
                      <CatIcon size={26} color={ADESSO_BLUE} />
                    </div>
                    <h2 style={{ fontWeight: 800, fontSize: "1.4rem", color: NAVY, letterSpacing: "-0.01em", margin: 0 }}>
                      {cat.title}
                    </h2>
                  </div>
                  <div style={{ display: "grid", gap: "0.25rem" }}>
                    {cat.items.map((item, j) => {
                      const uniqueId = `${i}-${j}`;
                      return (
                        <Item
                          key={j}
                          q={item.q}
                          a={item.a}
                          isOpen={activeId === uniqueId}
                          onToggle={() => toggle(uniqueId)}
                        />
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}

          {/* ─── BANNIÈRE CONTACT FINALE ─── */}
          <ScrollReveal direction="up" delay={200}>
            <div style={{
              background: "#1a1a2e", padding: "4.5rem", textAlign: "center",
              borderRadius: "32px", color: "#fff",
              position: "relative", overflow: "hidden",
              boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
            }}>
              {/* Motifs décoratifs */}
              <div style={{ position: "absolute", top: "-50px", right: "-50px", width: 200, height: 200, background: "rgba(0, 102, 255, 0.15)", borderRadius: "50%", filter: "blur(40px)" }} />
              <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: 150, height: 150, background: "rgba(0, 102, 255, 0.1)", borderRadius: "50%", filter: "blur(30px)" }} />

              <div style={{ position: "relative", zIndex: 2 }}>
                <h3 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "2.2rem", color: "#fff", fontWeight: 800, marginBottom: "1.25rem" }}>
                  {fLocal.banniereTitre}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "3.5rem", fontSize: "1.2rem", maxWidth: 650, margin: "0 auto 3.5rem", lineHeight: 1.6 }}>
                  {fLocal.banniereDesc}
                </p>

                <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <Link href={`/contact`} style={{
                    display: "flex", alignItems: "center", gap: "0.8rem",
                    background: ADESSO_BLUE, color: "#fff", fontWeight: 700,
                    padding: "1.2rem 2.8rem", borderRadius: "12px", textDecoration: "none",
                    fontSize: "1.05rem", boxShadow: "0 10px 25px rgba(0, 102, 255, 0.4)", transition: "all 0.3s"
                  }} className="hover-lift">
                    <MessageCircle size={22} /> {fLocal.btnContact}
                  </Link>
                  <Link href={`/devis`} style={{
                    display: "flex", alignItems: "center", gap: "0.8rem",
                    background: "transparent", color: "#fff", fontWeight: 700,
                    padding: "1.2rem 2.8rem", borderRadius: "12px", border: "2px solid rgba(255,255,255,0.2)",
                    textDecoration: "none", fontSize: "1.05rem", transition: "all 0.3s"
                  }} className="hover-lift">
                    <FileText size={22} /> {fLocal.btnDevis}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .focus-ring:focus {
          box-shadow: 0 0 0 5px rgba(0, 102, 255, 0.25) !important;
          border-color: transparent !important;
        }

        .faq-item:hover {
          border-color: ${ADESSO_BLUE}44 !important;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          filter: brightness(1.1);
        }

        @media (max-width: 768px) {
          .hover-lift { width: 100%; justify-content: center; }
        }
      `}} />
    </div>
  );
}
