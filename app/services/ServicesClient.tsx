"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { useLangue } from "../lib/LangueContext";
import { Video, Monitor, Shield, GraduationCap, CheckCircle2 } from "lucide-react";

const getIcon = (id: string) => {
  switch (id) {
    case "videosurveillance": return Video;
    case "informatique": return Monitor;
    case "cybersecurite": return Shield;
    case "audit": return GraduationCap;
    default: return CheckCircle2;
  }
};

const getImage = (id: string) => {
  switch (id) {
    case "videosurveillance": return "/images/service_video.png";
    case "informatique": return "/images/service_infra.png";
    case "acces": return "/images/service_acces.png";
    case "cybersecurite": return "/images/service_cyber.png";
    case "cloud": return "/images/service_cloud.png";
    case "audit": return "/images/service_audit.png";
    default: return "/images/4.jpg";
  }
};

const ACCENT = "#0066ff";
const ADESSO_BLUE = "#0066ff";
const NAVY = "#1a1a2e";

export default function ServicesClient() {
  const { t, langue } = useLangue();
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

      {/* --- LISTE SERVICES DÉTAILLÉS (GRILLE MODERN CORPORATE) --- */}
      <section style={{ padding: "4rem 2rem 8rem", background: "#f4f4f4" }}> {/* Fond gris très léger comme demandé */}
        <div className="content-grid" style={{ maxWidth: 1140, margin: "0 auto" }}>
          {sLocal.items.map((srv, i) => {
            const imagePath = getImage(srv.id);

            return (
              <ScrollReveal key={srv.id} direction="up" delay={50}>
                <div style={{ height: "100%", display: "flex" }}>
                  <div className="service-card" onClick={() => window.location.href = `/services/${srv.id}`}>
                    <div className="service-image-container">
                      <Image src={imagePath} alt={srv.titre} fill style={{ objectFit: "cover" }} className="service-img" />
                    </div>

                    <div className="service-content">
                      <h3>{srv.titre}</h3>
                      <p style={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 8,
                        WebkitBoxOrient: 'vertical',
                        marginBottom: 'auto'
                      }}>{srv.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>



      <style dangerouslySetInnerHTML={{
        __html: `
        .content-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 colonnes exactes sur ordinateur */
          gap: 30px;
          width: 100%;
        }

        /* --- Style des cartes de Service --- */
        .service-card {
          width: 100%; /* La carte occupe parfaitement l'espace de sa colonne */
          min-height: 480px; /* Uniformité de la hauteur */
          height: 100%;
          background: #ffffff;
          border: 1px solid #eef2f6; 
          border-radius: 0px; /* Coins totalement carrés */
          box-shadow: 0 2px 10px rgba(0,0,0,0.03); 
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          text-decoration: none;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08); 
        }

        .service-card:hover .service-content h3 {
          color: #0066ff;
        }

        .service-image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          height: auto;
          overflow: hidden;
        }

        .service-img {
          transition: transform 0.5s ease;
        }

        .service-card:hover .service-img {
          transform: scale(1.03); 
        }

        .service-content {
          padding: 30px; 
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          background-color: #ffffff;
        }

        .service-content h3 {
          font-family: inherit; 
          font-size: 1.15rem;
          color: #0c2340; 
          margin-bottom: 18px;
          font-weight: 500; 
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          transition: color 0.3s ease;
        }

        .service-content p {
          color: #5c6b7a; 
          font-size: 15px; 
          line-height: 1.8; 
          margin: 0;
          text-align: left;
          font-weight: 400;
        }

        .btn-hover-white:hover {
          background: #f8fafc !important;
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255,255,255,0.2) !important;
        }

        @media (max-width: 1024px) {
          /* Sur tablette : 2 colonnes */
          .content-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          /* Sur mobile : 1 colonne */
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
}
