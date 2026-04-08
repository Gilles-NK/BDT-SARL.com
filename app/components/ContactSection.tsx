"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLangue } from "../lib/LangueContext"; // On récupère le contexte ici

export default function ContactSection() {
  const { t } = useLangue();
  const [isIndustry, setIsIndustry] = useState(true);

  // Sécurité : si t ou t.formulaire n'est pas encore chargé
  if (!t || !t.formulaire) {
    return null;
  }

  return (
    <section style={{ padding: "6rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <ScrollReveal direction="up">
          <div style={{ marginBottom: "3rem" }}>
            {/* Titre en Jaune Doré - Texte traduit */}
            <h2 style={{
              fontFamily: "Ubuntu, sans-serif",
              fontWeight: 700,
              fontSize: "2rem",
              color: "#0066ff",
              marginBottom: "1rem"
            }}>
              {t.formulaire.titre}
            </h2>
            <p style={{ color: "#333", fontSize: "1.05rem", lineHeight: "1.6", maxWidth: "800px" }}>
              {t.formulaire.sousTitre}
            </p>
          </div>
        </ScrollReveal>

        {/* Sélecteur de type (Toggle) - Textes traduits */}
        <div className="toggle-wrapper">
          <span className={isIndustry ? "label-active" : ""}>
            {t.formulaire.typeProfil.industrie}
          </span>
          <button
            className={`bdt-toggle ${!isIndustry ? "switched" : ""}`}
            onClick={() => setIsIndustry(!isIndustry)}
          >
            <div className="dot" />
          </button>
          <span className={!isIndustry ? "label-active" : ""}>
            {t.formulaire.typeProfil.client}
          </span>
        </div>

        <form className="contact-form-bdt">
          {/* Champ Message Large - Placeholder traduit */}
          <div className="field-full">
            <textarea placeholder={t.formulaire.champs.message} rows={4} required></textarea>
          </div>

          <div className="field-grid">
            <input type="text" placeholder={t.formulaire.champs.prenom} required />
            <input type="text" placeholder={t.formulaire.champs.nom} required />

            {/* Conditionnel selon le Toggle - Placeholders traduits */}
            <input
              type="text"
              placeholder={isIndustry ? t.formulaire.champs.entreprise : t.formulaire.champs.quartier}
              className="field-full"
            />

            <input type="email" placeholder={t.formulaire.champs.email} required />
            <input type="tel" placeholder={t.formulaire.champs.tel} required />
          </div>

          {/* Checkbox Rappel - Texte traduit */}
          <div className="recall-check">
            <input type="checkbox" id="recall" />
            <label htmlFor="recall">{t.formulaire.rappel}</label>
          </div>

          {/* Bouton - Texte traduit */}
          <button type="submit" className="btn-send-bdt">
            {t.formulaire.envoyer}
          </button>
        </form>
      </div>

      <style jsx>{`
        .toggle-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          font-weight: 600;
          color: #888;
        }
        .label-active { color: #0076ce; }

        .bdt-toggle {
          width: 54px;
          height: 26px;
          border-radius: 15px;
          border: 2px solid #0076ce;
          background: none;
          position: relative;
          cursor: pointer;
        }
        .dot {
          width: 18px;
          height: 18px;
          background: #0076ce;
          border-radius: 50%;
          position: absolute;
          top: 2px;
          left: 3px;
          transition: 0.3s;
        }
        .switched .dot { left: 29px; }

        .contact-form-bdt {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .field-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .field-full { grid-column: span 2; }

        input, textarea {
          width: 100%;
          padding: 1rem;
          background: #f4f4f4;
          border: none;
          font-size: 0.95rem;
          color: #333;
          border-radius: 2px;
        }

        input::placeholder, textarea::placeholder { color: #999; }

        .recall-check {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          justify-content: flex-start;
          margin-top: 1rem;
        }

        .recall-check input {
          width: auto;
          cursor: pointer;
        }

        .recall-check label {
          cursor: pointer;
          font-size: 0.95rem;
          color: #333;
          white-space: nowrap;
        }

        .btn-send-bdt {
          width: fit-content;
          background: #0076ce;
          color: white;
          padding: 0.8rem 3.5rem;
          border: none;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          clip-path: polygon(0 0, 100% 0, 100% 75%, 92% 100%, 0 100%);
          transition: 0.3s;
        }

        .btn-send-bdt:hover { background: #005696; }

        @media (max-width: 600px) {
          .field-grid { grid-template-columns: 1fr; }
          .field-full { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}