"use client";
import Link from "next/link";
import { Search, Wrench, CheckCircle, Phone } from "lucide-react";
import { useLangue } from "../../lib/LangueContext";

const ICONS = [Search, Wrench, CheckCircle, Phone];

export default function PourquoiBDTCompact() {
  const { t, langue } = useLangue();
  
  return (
    <section className="bdt-compact-section">
      <div className="compact-glass-container">
        
        {/* En-tête compact style Adesso */}
        <div className="header-row">
          <h2 className="compact-tag">{t.processus.tag}</h2>
          <span className="compact-subtitle">{t.processus.titre}</span>
        </div>

        <p className="main-text">
          {t.processus.sousTitre}
        </p>

        {/* Grille des étapes épurée */}
        <div className="steps-mini-grid">
          {t.processus.etapes.map((etape: any, i: number) => {
            const Icon = ICONS[i];
            return (
              <div key={i} className="step-mini-card">
                <div className="icon-wrap">
                  <Icon size={16} strokeWidth={2} color="#0076CE" />
                  <span className="step-number">0{i + 1}</span>
                </div>
                <div className="step-info">
                  <h4>{etape.titre}</h4>
                  <p>{etape.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bouton avec découpe signature */}
        <div className="btn-center">
          <Link href={`/devis`} className="bdt-action-btn">
            {langue === "fr" ? "Lancer mon étude technique" : "Start my technical study"}
          </Link>
        </div>
      </div>

      <style jsx>{`
        .bdt-compact-section {
          padding: 3.5rem 1.5rem;
          display: flex;
          justify-content: center;
          background: url('images/13.jpg') center/cover no-repeat;
          min-height: 400px;
        }

        .compact-glass-container {
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          max-width: 800px;
          padding: 2rem;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .header-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.75rem;
        }

        .compact-tag { color: #0076CE; font-size: 1.4rem; font-weight: 700; margin: 0; }
        .compact-subtitle { color: #0076CE; font-size: 0.8rem; font-weight: 700; opacity: 0.8; }

        .main-text { color: #444; font-size: 0.9rem; line-height: 1.5; margin-bottom: 1.75rem; }

        .steps-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .step-mini-card {
          display: flex;
          gap: 12px;
          padding: 0.75rem;
          background: #fdfdfd;
          border: 1px solid #f1f1f1;
          transition: 0.3s;
        }

        .step-mini-card:hover { transform: translateY(-2px); border-color: #0076CE; }

        .icon-wrap { display: flex; flex-direction: column; align-items: center; min-width: 35px; }
        .step-number { font-size: 0.65rem; font-weight: 800; color: #0076CE; opacity: 0.3; }

        .step-info h4 { font-size: 0.9rem; font-weight: 700; color: #111; margin-bottom: 2px; }
        .step-info p { font-size: 0.78rem; color: #666; line-height: 1.4; }

        .btn-center { text-align: center; margin-top: 2rem; }
        .bdt-action-btn {
          background: #0076CE;
          color: white;
          padding: 0.7rem 1.75rem;
          font-weight: 700;
          font-size: 0.8rem;
          text-decoration: none;
          clip-path: polygon(0 0, 100% 0, 100% 75%, 92% 100%, 0 100%);
          transition: 0.3s;
          display: inline-block;
        }
        
        @media (max-width: 650px) {
          .steps-mini-grid { grid-template-columns: 1fr; }
          .header-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}