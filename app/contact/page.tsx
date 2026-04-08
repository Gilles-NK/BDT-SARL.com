"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "../components/Icons";
import { useLangue } from "../lib/LangueContext";
import ContactChoiceModal from "../components/ContactChoiceModal";

type ChampId = "nom" | "prenom" | "email" | "tel" | "entreprise" | "sujet" | "message";
type Formulaire = Record<ChampId, string>;
type EtatEnvoi = "idle" | "choix" | "envoye";

const VIDE: Formulaire = { nom: "", prenom: "", email: "", tel: "", entreprise: "", sujet: "", message: "" };

export default function Contact() {
  const { t } = useLangue();
  const c = t.contactPage;

  const [form, setForm] = useState<Formulaire>(VIDE);
  const [etat, setEtat] = useState<EtatEnvoi>("idle");
  const [erreurs, setErreurs] = useState<Partial<Record<ChampId, string>>>({});
  const [rappeler, setRappeler] = useState(false);

  // Messages d'erreur traduits
  const ERR_REQUIS = c.errRequis ?? "Requis";
  const ERR_EMAIL = c.errEmail ?? "Email invalide";

  const valider = useCallback(() => {
    const e: Partial<Record<ChampId, string>> = {};
    if (!form.nom.trim()) e.nom = ERR_REQUIS;
    if (!form.email.trim()) e.email = ERR_REQUIS;
    if (!form.message.trim()) e.message = ERR_REQUIS;
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = ERR_EMAIL;
    setErreurs(e);
    return Object.keys(e).length === 0;
  }, [form, ERR_REQUIS, ERR_EMAIL]);

  function construire() {
    return [
      `Nom : ${form.prenom} ${form.nom}`.trim(),
      form.entreprise ? `Entreprise : ${form.entreprise}` : null,
      `Email : ${form.email}`,
      form.tel ? `Tél : ${form.tel}` : null,
      `Rappel demandé : ${rappeler ? "Oui" : "Non"}`,
      form.sujet ? `Sujet : ${form.sujet}` : null,
      "", "Message :", form.message,
      "", "— bdt-sarl.com"
    ].filter(Boolean).join("\n");
  }

  function envoyer(canal: "email" | "whatsapp") {
    const msg = construire();
    if (canal === "whatsapp") {
      window.open(`https://wa.me/237689665893?text=${encodeURIComponent(msg)}`, "_blank");
    } else {
      window.location.href = `mailto:gillesngomkap@gmail.com?subject=${encodeURIComponent(`[BDT] ${form.sujet || "Message"} – ${form.nom}`)}&body=${encodeURIComponent(msg)}`;
    }
    setEtat("envoye");
    setForm(VIDE);
  }

  const inp = (champ: ChampId): React.CSSProperties => ({
    width: "100%",
    padding: "0.9rem 1.2rem",
    border: erreurs[champ] ? "1px solid #e53e3e" : "1px solid #f2f2f2",
    borderRadius: "0px",
    fontSize: "0.95rem",
    outline: "none",
    transition: "background-color 0.2s",
    background: erreurs[champ] ? "#fff5f5" : "#f2f2f2",
    color: "var(--navy)",
  });

  // Données coordonnées traduites
  const coordonnees = [
    { Icon: Phone, titre: c.appeler, lignes: ["+237 689 66 58 93"] },
    { Icon: Mail, titre: c.ecrire, lignes: ["gillesngomkap@gmail.com", "www.bdt-sarl.com"] },
    { Icon: MapPin, titre: c.visiter, lignes: ["Akwa, Rue Pau, 50m de United Express", "Douala, Cameroun"] },
    { Icon: Clock, titre: c.horairesLabel, lignes: [t.footer.horaires] }, // ← réutilise la traduction du footer
  ];

  return (
    <div style={{ background: "#fff", color: "#1a1a2e" }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        height: "560px",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fdfdfd"
      }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/19.jpg"
            alt="Contact BDT"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26, 26, 46, 0.8), rgba(0, 102, 255, 0.4))" }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem" }}>
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
            <h1 style={{
              fontFamily: "Ubuntu, sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800, margin: 0,
              letterSpacing: "1px",
              textTransform: "uppercase"
            }}>
              {c.titre}
            </h1>
          </div>
        </div>
      </section>

      {/* ── FORMULAIRE + COORDONNÉES ── */}
      <section style={{ padding: "4rem 2rem 6rem 2rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Message impactant */}
          <div style={{ marginBottom: "3rem" }}>
            {/* ← TRADUIT */}
            <h2 style={{
              fontFamily: "Ubuntu, sans-serif", color: "var(--blue)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, marginBottom: "0.7rem"
            }}>
              {c.accroche}
            </h2>
            {/* ← TRADUIT */}
            <p style={{ color: "var(--gray-700)", fontSize: "1rem", lineHeight: 1.6, maxWidth: 850 }}>
              {c.description}
            </p>
          </div>

          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "start" }}>

            {/* ── FORMULAIRE ── */}
            <div style={{ background: "#fff", borderRadius: 0, padding: 0, boxShadow: "none" }}>
              {etat === "envoye" ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div style={{ fontSize: 48, marginBottom: "1rem" }}>✅</div>
                  {/* ← TRADUIT */}
                  <h3 style={{ fontFamily: "Ubuntu, sans-serif", color: "var(--navy)", marginBottom: "0.5rem" }}>
                    {c.envoye}
                  </h3>
                  <p style={{ color: "var(--gray-500)", marginBottom: "1.25rem", fontSize: "0.9rem" }}>
                    {c.reponse}
                  </p>
                  <button
                    onClick={() => setEtat("idle")}
                    style={{ background: "#f2f2f2", color: "var(--navy)", border: "none", padding: "0.75rem 1.75rem", borderRadius: 0, fontWeight: 700, cursor: "pointer" }}
                  >
                    {/* ← TRADUIT */}
                    {c.nouveau}
                  </button>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                  {/* Message */}
                  <div>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErreurs(er => ({ ...er, message: undefined })); }}
                      placeholder={c.messagePlaceholder} /* ← TRADUIT */
                      style={{ ...inp("message"), resize: "vertical" }}
                      onFocus={e => (e.target as HTMLTextAreaElement).style.backgroundColor = "#fff"}
                      onBlur={e => (e.target as HTMLTextAreaElement).style.backgroundColor = erreurs.message ? "#fff5f5" : "#f2f2f2"}
                    />
                    {erreurs.message && <p style={{ color: "#e53e3e", fontSize: "0.75rem", marginTop: 3, marginLeft: 10 }}>{erreurs.message}</p>}
                  </div>

                  {/* Prénom / Nom */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
                    <input
                      type="text" value={form.prenom}
                      onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
                      placeholder={c.prenomPlaceholder} /* ← TRADUIT */
                      style={inp("prenom")}
                      onFocus={e => (e.target as HTMLInputElement).style.backgroundColor = "#fff"}
                      onBlur={e => (e.target as HTMLInputElement).style.backgroundColor = "#f2f2f2"}
                    />
                    <div>
                      <input
                        type="text" value={form.nom}
                        onChange={e => { setForm(f => ({ ...f, nom: e.target.value })); setErreurs(er => ({ ...er, nom: undefined })); }}
                        placeholder={c.nomPlaceholder} /* ← TRADUIT */
                        style={inp("nom")}
                        onFocus={e => (e.target as HTMLInputElement).style.backgroundColor = "#fff"}
                        onBlur={e => (e.target as HTMLInputElement).style.backgroundColor = erreurs.nom ? "#fff5f5" : "#f2f2f2"}
                      />
                      {erreurs.nom && <p style={{ color: "#e53e3e", fontSize: "0.75rem", marginTop: 3, marginLeft: 10 }}>{erreurs.nom}</p>}
                    </div>
                  </div>

                  {/* Entreprise */}
                  <input
                    type="text" value={form.entreprise}
                    onChange={e => setForm(f => ({ ...f, entreprise: e.target.value }))}
                    placeholder={c.entreprisePlaceholder} /* ← TRADUIT */
                    style={inp("entreprise")}
                    onFocus={e => (e.target as HTMLInputElement).style.backgroundColor = "#fff"}
                    onBlur={e => (e.target as HTMLInputElement).style.backgroundColor = "#f2f2f2"}
                  />

                  {/* Email / Tél */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-2col">
                    <div>
                      <input
                        type="email" value={form.email}
                        onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErreurs(er => ({ ...er, email: undefined })); }}
                        placeholder={c.emailPlaceholder} /* ← TRADUIT */
                        style={inp("email")}
                        onFocus={e => (e.target as HTMLInputElement).style.backgroundColor = "#fff"}
                        onBlur={e => (e.target as HTMLInputElement).style.backgroundColor = erreurs.email ? "#fff5f5" : "#f2f2f2"}
                      />
                      {erreurs.email && <p style={{ color: "#e53e3e", fontSize: "0.75rem", marginTop: 3, marginLeft: 10 }}>{erreurs.email}</p>}
                    </div>
                    <input
                      type="tel" value={form.tel}
                      onChange={e => setForm(f => ({ ...f, tel: e.target.value }))}
                      placeholder={c.telPlaceholder} /* ← TRADUIT */
                      style={inp("tel")}
                      onFocus={e => (e.target as HTMLInputElement).style.backgroundColor = "#fff"}
                      onBlur={e => (e.target as HTMLInputElement).style.backgroundColor = "#f2f2f2"}
                    />
                  </div>

                  {/* Checkbox rappel */}
                  <label style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--gray-700)", fontSize: "0.9rem", cursor: "pointer", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                    <input
                      type="checkbox" checked={rappeler}
                      onChange={e => setRappeler(e.target.checked)}
                      style={{ width: 18, height: 18, cursor: "pointer", accentColor: "var(--blue)" }}
                    />
                    {/* ← TRADUIT */}
                    {c.rappelerLabel}
                  </label>

                  {/* Bouton Envoyer */}
                  <div style={{ textAlign: "left" }}>
                    <button
                      onClick={() => { if (valider()) setEtat("choix"); }}
                      style={{ background: "#0066ff", color: "#fff", border: "none", padding: "1rem 3rem", borderRadius: 0, fontWeight: 700, fontSize: "1rem", cursor: "pointer", letterSpacing: "0.5px", transition: "background-color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#0056d4"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = "#0066ff"}
                    >
                      {/* ← TRADUIT */}
                      {c.envoyer}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ── COORDONNÉES ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: 0, minWidth: "280px" }}>
              {/* ← TRADUIT */}
              <h4 style={{ fontFamily: "Ubuntu, sans-serif", color: "#0066ff", fontSize: "1.2rem", fontWeight: 700, marginBottom: "-0.5rem", textTransform: "uppercase" }}>
                {c.coordonneesTitre}
              </h4>

              {coordonnees.map(item => (
                <div key={item.titre} style={{ display: "flex", gap: "1rem", alignItems: "start" }}>
                  <div style={{ width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <item.Icon size={18} color="#0066ff" strokeWidth={2} />
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 700, color: "#0066ff", fontSize: "0.95rem", marginBottom: "0.1rem" }}>
                      {item.titre} {/* ← TRADUIT via tableau coordonnees */}
                    </h5>
                    {item.lignes.map(l => <p key={l} style={{ color: "var(--gray-700)", fontSize: "0.88rem", lineHeight: 1.5 }}>{l}</p>)}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── MAPS ── */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.77!2d9.6957!3d4.0511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMDQuMCJOIDnCsDQxJzQ0LjUiRQ!5e0!3m2!1sfr!2scm!4v1!5m2!1sfr!2scm&q=Akwa+Rue+Pau+Douala+Cameroun"
        width="100%" height="450" style={{ border: 0, display: "block" }}
        allowFullScreen loading="lazy" title="BDT Localisation"
      />

      {/* ── STYLES MOBILE ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-2col    { grid-template-columns: 1fr !important; }
        }
      `}} />

      {/* ── MODALE CHOIX ── */}
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
    </div>
  );
}
