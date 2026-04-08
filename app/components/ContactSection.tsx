"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLangue } from "../lib/LangueContext"; 
import ContactChoiceModal from "./ContactChoiceModal";

type ChampId = "nom" | "prenom" | "email" | "tel" | "lieu" | "message";
type Formulaire = Record<ChampId, string>;
type EtatEnvoi = "idle" | "choix" | "envoye";

const VIDE: Formulaire = { nom: "", prenom: "", email: "", tel: "", lieu: "", message: "" };

export default function ContactSection() {
  const { t } = useLangue();
  const [isIndustry, setIsIndustry] = useState(true);
  
  const [form, setForm] = useState<Formulaire>(VIDE);
  const [etat, setEtat] = useState<EtatEnvoi>("idle");
  const [erreurs, setErreurs] = useState<Partial<Record<ChampId, string>>>({});
  const [rappeler, setRappeler] = useState(false);

  // Sécurité : si t ou t.formulaire n'est pas encore chargé
  if (!t || !t.formulaire) {
    return null;
  }

  const c = t.contactPage; // On réutilise les traductions de la page contact pour les erreurs et modales

  const valider = () => {
    const e: Partial<Record<ChampId, string>> = {};
    const ERR_REQUIS = c.errRequis ?? "Requis";
    const ERR_EMAIL = c.errEmail ?? "Email invalide";

    if (!form.nom.trim()) e.nom = ERR_REQUIS;
    if (!form.prenom.trim()) e.prenom = ERR_REQUIS;
    if (!form.email.trim()) e.email = ERR_REQUIS;
    if (!form.message.trim()) e.message = ERR_REQUIS;
    if (!form.tel.trim()) e.tel = ERR_REQUIS;
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = ERR_EMAIL;
    
    setErreurs(e);
    return Object.keys(e).length === 0;
  };

  const construireMessage = () => {
    const typeLabel = isIndustry ? t.formulaire.typeProfil.industrie : t.formulaire.typeProfil.client;
    const lieuLabel = isIndustry ? t.formulaire.champs.entreprise : t.formulaire.champs.quartier;

    return [
      `PROFIL : ${typeLabel}`,
      `Nom : ${form.prenom} ${form.nom}`.trim(),
      `${lieuLabel} : ${form.lieu}`.trim(),
      `Email : ${form.email}`,
      `Tél : ${form.tel}`,
      `Rappel demandé : ${rappeler ? "Oui" : "Non"}`,
      "", 
      "Message :", 
      form.message,
      "", 
      "— bdt-sarl.com (Formulaire Accueil)"
    ].filter(Boolean).join("\n");
  };

  const envoyer = (canal: "email" | "whatsapp") => {
    const msg = construireMessage();
    const subject = `[BDT Accueil] Message de ${form.nom}`;

    if (canal === "whatsapp") {
      window.open(`https://wa.me/237689665893?text=${encodeURIComponent(msg)}`, "_blank");
    } else {
      window.location.href = `mailto:gillesngomkap@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
    }
    setEtat("envoye");
    setForm(VIDE);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valider()) {
      setEtat("choix");
    }
  };

  return (
    <section style={{ padding: "6rem 2rem", background: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        <ScrollReveal direction="up">
          <div style={{ marginBottom: "3rem" }}>
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

        {/* Sélecteur de type (Toggle) */}
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

        <form className="contact-form-bdt" onSubmit={handleSubmit}>
          <div className="field-full">
            <textarea 
              placeholder={t.formulaire.champs.message} 
              rows={4} 
              required
              value={form.message}
              onChange={e => { setForm({ ...form, message: e.target.value }); setErreurs({ ...erreurs, message: undefined }); }}
              style={{ border: erreurs.message ? "1px solid #ff4d4f" : "none" }}
            ></textarea>
            {erreurs.message && <span className="error-text">{erreurs.message}</span>}
          </div>

          <div className="field-grid">
            <div>
              <input 
                type="text" 
                placeholder={t.formulaire.champs.prenom} 
                required 
                value={form.prenom}
                onChange={e => { setForm({ ...form, prenom: e.target.value }); setErreurs({ ...erreurs, prenom: undefined }); }}
                style={{ border: erreurs.prenom ? "1px solid #ff4d4f" : "none" }}
              />
              {erreurs.prenom && <span className="error-text">{erreurs.prenom}</span>}
            </div>
            <div>
              <input 
                type="text" 
                placeholder={t.formulaire.champs.nom} 
                required 
                value={form.nom}
                onChange={e => { setForm({ ...form, nom: e.target.value }); setErreurs({ ...erreurs, nom: undefined }); }}
                style={{ border: erreurs.nom ? "1px solid #ff4d4f" : "none" }}
              />
              {erreurs.nom && <span className="error-text">{erreurs.nom}</span>}
            </div>

            <div className="field-full">
              <input
                type="text"
                placeholder={isIndustry ? t.formulaire.champs.entreprise : t.formulaire.champs.quartier}
                value={form.lieu}
                onChange={e => setForm({ ...form, lieu: e.target.value })}
              />
            </div>

            <div>
              <input 
                type="email" 
                placeholder={t.formulaire.champs.email} 
                required 
                value={form.email}
                onChange={e => { setForm({ ...form, email: e.target.value }); setErreurs({ ...erreurs, email: undefined }); }}
                style={{ border: erreurs.email ? "1px solid #ff4d4f" : "none" }}
              />
              {erreurs.email && <span className="error-text">{erreurs.email}</span>}
            </div>
            <div>
              <input 
                type="tel" 
                placeholder={t.formulaire.champs.tel} 
                required 
                value={form.tel}
                onChange={e => { setForm({ ...form, tel: e.target.value }); setErreurs({ ...erreurs, tel: undefined }); }}
                style={{ border: erreurs.tel ? "1px solid #ff4d4f" : "none" }}
              />
              {erreurs.tel && <span className="error-text">{erreurs.tel}</span>}
            </div>
          </div>

          <div className="recall-check">
            <input 
              type="checkbox" 
              id="recallHome" 
              checked={rappeler}
              onChange={e => setRappeler(e.target.checked)}
            />
            <label htmlFor="recallHome">{t.formulaire.rappel}</label>
          </div>

          <button type="submit" className="btn-send-bdt">
            {t.formulaire.envoyer}
          </button>
        </form>
      </div>

      {/* Modal de choix */}
      <ContactChoiceModal 
        isOpen={etat === "choix"}
        onClose={() => setEtat("idle")}
        onSelect={envoyer}
        translations={{
          choixTitre: c.choixTitre,
          choixSub: c.choixSub,
          parEmail: c.parEmail,
          parEmailSub: c.parEmailSub,
          parWA: c.parWA,
          parWASub: c.parWASub
        }}
      />

      {/* Petit message de succès */}
      {etat === "envoye" && (
        <div className="modal-overlay" style={{ backdropFilter: "blur(12px)", background: "rgba(10, 15, 30, 0.6)" }}>
          <div className="modal-content" style={{ textAlign: "center", borderRadius: "24px", background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(20px)", border: "1px solid rgba(255, 255, 255, 0.3)" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1.5rem", animation: "pop 0.5s ease-out" }}>✅</div>
            <h3 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "1.5rem", fontWeight: 800, color: "#1a1a2e" }}>{c.envoye}</h3>
            <p style={{ color: "#64748b", marginTop: "0.5rem" }}>{c.reponse}</p>
            <button onClick={() => setEtat("idle")} className="btn-send-bdt" style={{ marginTop: "2rem", width: "100%", borderRadius: "12px" }}>
              OK
            </button>
          </div>
        </div>
      )}

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
          border: 1px solid transparent;
          font-size: 0.95rem;
          color: #333;
          border-radius: 2px;
          outline: none;
          transition: 0.2s;
        }
        input:focus, textarea:focus {
          background: #fff;
          border-color: #0076ce;
        }

        .error-text {
          color: #ff4d4f;
          font-size: 0.75rem;
          margin-top: 4px;
          display: block;
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
          width: 18px;
          height: 18px;
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

        /* Modal styles */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }
        .modal-content {
          background: #fff;
          padding: 2.5rem;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }
        .modal-content h3 {
          font-family: "Ubuntu", sans-serif;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
        }
        .modal-content p {
          color: #666;
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }
        .modal-btns {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .modal-btns button {
          padding: 1rem;
          border: none;
          font-weight: 700;
          cursor: pointer;
          text-align: left;
          transition: 0.2s;
        }
        .btn-wa { background: #25D366; color: #fff; }
        .btn-mail { background: #0066ff; color: #fff; }
        .btn-cancel { background: #eee; color: #333; text-align: center !important; }
        
        .modal-btns button span {
          display: block;
          font-weight: 400;
          font-size: 0.8rem;
          opacity: 0.8;
          margin-top: 2px;
        }

        @media (max-width: 600px) {
          .field-grid { grid-template-columns: 1fr; }
          .field-full { grid-column: span 1; }
        }
      `}</style>
    </section>
  );
}