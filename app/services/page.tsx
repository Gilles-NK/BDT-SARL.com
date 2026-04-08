"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { useLangue } from "../lib/LangueContext";
import { Video, Monitor, Shield, GraduationCap, CheckCircle2, ChevronRight } from "lucide-react";

const getIcon = (id: string) => {
  switch(id) {
    case "videosurveillance": return Video;
    case "informatique": return Monitor;
    case "cybersecurite": return Shield;
    case "audit": return GraduationCap;
    default: return CheckCircle2;
  }
};

const getImage = (id: string) => {
  switch(id) {
    case "videosurveillance": return "/images/3.jpg";
    case "informatique": return "/images/9.jpg";
    case "cybersecurite": return "/images/8.jpg";
    case "audit": return "/images/10.jpg";
    default: return "/images/4.jpg";
  }
};

const ACCENT = "#0066ff";
const ADESSO_BLUE = "#0066ff";
const NAVY = "#1a1a2e";

export default function Services() {
  const { t } = useLangue();
  const sLocal = t.servicesPage;

  return (
    <div style={{ background: "#fdfdfd", color: NAVY, minHeight: "100vh" }}>
      {/* --- HERO SECTION --- */}
      <section style={{ position: "relative", height: "560px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/6.jpg" alt={sLocal.titre} fill style={{ objectFit: "cover", objectPosition: "center 40%" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26, 26, 46, 0.85), rgba(0, 102, 255, 0.35))" }} />
        </div>
        
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem", width: "100%", maxWidth: "800px" }}>
          <div style={{ 
            background: "rgba(255, 255, 255, 0.1)", 
            backdropFilter: "blur(12px)", 
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#fff", padding: "2.5rem 3.5rem", borderRadius: "20px", 
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}>
            <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "1rem" }}>
              {sLocal.titre}
            </h1>
            <p style={{ fontSize: "1.15rem", opacity: 0.9, margin: 0, lineHeight: 1.5 }}>
              {sLocal.sousTitreHero}
            </p>
          </div>
        </div>
      </section>

      {/* --- MESSAGE EXPERTISE --- */}
      <section style={{ padding: "6rem 2rem 3rem", textAlign: "center", background: "#fdfdfd", position: "relative", zIndex: 10 }}>
        <ScrollReveal direction="up">
          <div style={{ maxWidth: 850, margin: "0 auto", background: "#fff", padding: "4rem 3rem", borderRadius: "24px", border: "1px solid #e2e8f0", boxShadow: "0 10px 40px rgba(0,0,0,0.03)", marginTop: "-10rem", position: "relative" }}>
            <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 60, height: 60, background: "rgba(0, 102, 255, 0.1)", borderRadius: "50%", marginBottom: "1.5rem" }}>
              <Monitor size={30} color={ADESSO_BLUE} />
            </div>
            <h2 style={{ color: ADESSO_BLUE, fontSize: "2.5rem", fontWeight: 800, margin: "0 0 0.5rem", fontFamily: "Ubuntu, sans-serif" }}>
              {sLocal.expertiseTitre}
            </h2>
            <h3 style={{ color: NAVY, fontSize: "1.5rem", fontWeight: 700, margin: "0 0 2rem", opacity: 0.9 }}>
              {sLocal.expertiseSousTitre}
            </h3>
            <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "1.1rem", margin: 0 }}>
              {sLocal.expertiseDesc}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* --- LISTE SERVICES DÉTAILLÉS --- */}
      <section style={{ padding: "4rem 2rem 8rem", background: "#fdfdfd" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto", display: "flex", flexDirection: "column", gap: "8rem" }}>
          {sLocal.items.map((srv, i) => {
            const Icon = getIcon(srv.id);
            const imagePath = getImage(srv.id);
            const isEven = i % 2 === 0;

            return (
              <ScrollReveal key={srv.id} direction="up" delay={50}>
                <div className={`service-row ${isEven ? "" : "reverse"}`} style={{ 
                  display: "flex", alignItems: "center", gap: "4rem", 
                  position: "relative" 
                }}>
                  
                  {/* IMAGE BLOCK */}
                  <div className="img-container" style={{ flex: 1, position: "relative", height: "450px", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}>
                    <Image src={imagePath} alt={srv.titre} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,26,46,0.6), transparent)" }} />
                  </div>

                  {/* TEXT BLOCK */}
                  <div className="txt-container" style={{ flex: 1, padding: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                      <div style={{ width: 50, height: 50, borderRadius: "16px", background: "rgba(212, 175, 55, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={26} color={ACCENT} />
                      </div>
                      <span style={{ color: ADESSO_BLUE, fontSize: "0.9rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>
                        {srv.accroche}
                      </span>
                    </div>
                    
                    <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 800, fontSize: "2.4rem", color: NAVY, margin: "0 0 1.5rem", lineHeight: 1.2 }}>
                      {srv.titre}
                    </h2>
                    
                    <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "2.5rem" }}>
                      {srv.desc}
                    </p>
                    
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem", marginBottom: "3rem" }} className="points-grid">
                      {srv.points.map((p, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.8rem", background: "#fff", padding: "1rem", borderRadius: "12px", border: "1px solid #f1f5f9", boxShadow: "0 4px 10px rgba(0,0,0,0.02)" }}>
                          <CheckCircle2 size={20} color={ADESSO_BLUE} style={{ flexShrink: 0, marginTop: "2px" }} />
                          <span style={{ color: NAVY, fontSize: "0.9rem", fontWeight: 600, lineHeight: 1.4 }}>{p}</span>
                        </div>
                      ))}
                    </div>

                    <Link href="/devis" className="btn-hover" style={{ 
                      display: "inline-flex", alignItems: "center", gap: "0.8rem",
                      background: ADESSO_BLUE, color: "#fff", padding: "1.2rem 2.5rem", 
                      borderRadius: "12px", fontWeight: 700, fontSize: "1rem", 
                      textDecoration: "none", transition: "all 0.3s",
                      boxShadow: "0 10px 25px rgba(0, 102, 255, 0.3)"
                    }}>
                      {sLocal.btnDevis} <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section style={{ padding: "6rem 2rem", background: NAVY, textAlign: "center", color: "#fff", position: "relative", overflow: "hidden" }}>
        {/* Cercles déco en fond */}
        <div style={{ position: "absolute", top: "-100px", left: "-100px", width: 300, height: 300, background: "rgba(0, 102, 255, 0.1)", borderRadius: "50%", filter: "blur(40px)" }} />
        <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: 300, height: 300, background: "rgba(212, 175, 55, 0.05)", borderRadius: "50%", filter: "blur(40px)" }} />
        
        <div style={{ position: "relative", zIndex: 2, maxWidth: 650, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "2.8rem", fontWeight: 800, marginBottom: "1.5rem" }}>
            {sLocal.ctaTitre}
          </h2>
          <p style={{ opacity: 0.9, marginBottom: "3rem", fontSize: "1.15rem", lineHeight: 1.6 }}>
            {sLocal.ctaDesc}
          </p>
          <Link href="/devis" className="btn-hover-white" style={{ 
            background: "#fff", color: ADESSO_BLUE, fontWeight: 800, filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.2))",
            padding: "1.2rem 3.5rem", borderRadius: "12px", fontSize: "1.05rem", display: "inline-block", textDecoration: "none", transition: "0.3s" 
          }}>
            {sLocal.ctaBtn}
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .service-row.reverse {
          flex-direction: row-reverse;
        }

        .btn-hover:hover { 
          background: #0052cc !important; 
          transform: translateY(-3px); 
          box-shadow: 0 15px 30px rgba(0, 102, 255, 0.4) !important;
        }

        .btn-hover-white:hover {
          background: #f8fafc !important;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,255,255,0.2) !important;
        }

        @media (max-width: 900px) {
          .service-row, .service-row.reverse { 
            flex-direction: column !important; 
            gap: 2rem !important; 
          }
          .img-container { width: 100%; height: 300px !important; }
          .txt-container { padding: 0 !important; }
          .points-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </div>
  );
}