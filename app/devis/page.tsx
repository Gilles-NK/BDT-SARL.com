"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLangue } from "../lib/LangueContext";
import { Video, Wrench, Monitor, Settings, Shield, GraduationCap, CheckCircle2, ChevronRight, Mail, MessageCircle } from "lucide-react";

// The icons corresponding to services
const getIcon = (val: string) => {
  switch (val) {
    case "videosurveillance": return Video;
    case "maintenance-surveillance": return Wrench;
    case "installation-informatique": return Monitor;
    case "maintenance-informatique": return Settings;
    case "cybersecurite": return Shield;
    case "audit-formation": return GraduationCap;
    default: return CheckCircle2;
  }
};

const ACCENT = "#0066ff";
const NAVY = "#1a1a2e";
const ADESSO_BLUE = "#0066ff";

export default function Devis() {
  const { t, langue } = useLangue();
  const dLocal = t.devisPage;

  const [form, setForm] = useState({
    nom: "", entreprise: "", email: "", telephone: "", ville: "",
    typeBatiment: "", surface: "", delai: "",
    description: "", disponibilite: "", contactPreference: "email",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggleService = (val: string) => {
    setSelectedServices(prev =>
      prev.includes(val) ? prev.filter(s => s !== val) : [...prev, val]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const servicesLabel = selectedServices.length > 0
      ? dLocal.services.filter(s => selectedServices.includes(s.value)).map(s => s.label).join(", ")
      : "Non précisé";

    // Envoi de la donnée brute non traduite pour notre BDD/Mail, mais on utilise les labels traduits pour l'affichage email.
    const msg = [
      langue === "en" ? "Hello BDT," : "Bonjour BDT,",
      "",
      langue === "en" ? "I am requesting a quote." : "Je souhaite demander un devis.",
      "",
      langue === "en" ? "INFORMATION:" : "INFORMATIONS :",
      `- ${dLocal.nomLabel.replace(" *", "")} : ${form.nom}`,
      `- ${dLocal.entrepriseLabel} : ${form.entreprise || "N/A"}`,
      `- E-mail : ${form.email}`,
      `- ${dLocal.telLabel.replace(" *", "")} : ${form.telephone}`,
      `- ${dLocal.villeLabel.replace(" *", "")} : ${form.ville}`,
      "",
      langue === "en" ? "DESIRED SERVICES:" : "SERVICES SOUHAITÉS :",
      servicesLabel,
      "",
      langue === "en" ? "PROJECT DETAILS:" : "DÉTAILS DU PROJET :",
      `- ${dLocal.structureLabel} : ${dLocal.structureOptions.find(o => o.val === form.typeBatiment)?.label || "N/A"}`,
      `- ${dLocal.surfaceLabel} : ${form.surface ? form.surface : "N/A"}`,
      `- ${dLocal.detailsLabel.replace(" *", "")} : ${form.description}`,
      "",
      langue === "en" ? "Please contact me back." : "Merci de me recontacter.",
    ].join("\n");

    const mailSubject = langue === "en"
      ? encodeURIComponent(`Quote request - ${form.nom}`)
      : encodeURIComponent(`Demande de devis - ${form.nom}`);

    if (form.contactPreference === "whatsapp") {
      window.open(`https://wa.me/237689665893?text=${encodeURIComponent(msg)}`, "_blank");
    } else {
      const body = encodeURIComponent(msg);
      window.location.href = `mailto:gillesngomkap@gmail.com?subject=${mailSubject}&body=${body}`;
    }
    setSent(true);
  };

  const inp: React.CSSProperties = {
    width: "100%", padding: "1rem 1.2rem",
    border: "1px solid #e2e8f0", borderRadius: "8px",
    fontSize: "0.95rem", color: NAVY, background: "#f8fafc",
    outline: "none", fontFamily: "Ubuntu, sans-serif",
    transition: "border-color 0.2s, box-shadow 0.2s"
  };

  const lbl: React.CSSProperties = {
    display: "block", fontSize: "0.85rem", fontWeight: 700,
    color: NAVY, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.5px"
  };

  const numBadge: React.CSSProperties = {
    background: "rgba(0, 102, 255, 0.1)", color: ADESSO_BLUE, width: 36, height: 36,
    borderRadius: "12px", display: "flex", alignItems: "center",
    justifyContent: "center", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0,
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontFamily: "Ubuntu, sans-serif", fontSize: "1.3rem",
    color: NAVY, marginBottom: "2rem",
    display: "flex", alignItems: "center", gap: "1rem",
    fontWeight: 700
  };

  return (
    <div style={{ background: "#fdfdfd", color: NAVY, minHeight: "100vh" }}>
      {/* --- HERO SECTION --- */}
      <section style={{ position: "relative", height: "560px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/4.jpg" alt="Devis BDT" fill style={{ objectFit: "cover", objectPosition: "center 30%" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26, 26, 46, 0.8), rgba(0, 102, 255, 0.4))" }} />
        </div>
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 2rem" }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#fff", padding: "1.5rem 3rem", borderRadius: "16px",
            display: "inline-block", boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}>
            <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
              {dLocal.titre}
            </h1>
            <p style={{ marginTop: "0.5rem", fontSize: "1.1rem", opacity: 0.9 }}>
              {dLocal.sousTitre}
            </p>
          </div>
        </div>
      </section>

      {/* --- FORMULAIRE --- */}
      <section style={{ padding: "4rem 2rem", background: "#fdfdfd" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", marginTop: "-6rem", position: "relative", zIndex: 10 }}>
          {sent ? (
            <div style={{ background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(20px)", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", padding: "4rem", textAlign: "center", border: "1px solid rgba(255, 255, 255, 0.4)" }}>
              <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", width: 100, height: 100, background: "rgba(0, 102, 255, 0.05)", borderRadius: "50%", marginBottom: "2rem", animation: "pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}>
                <CheckCircle2 size={50} color={ADESSO_BLUE} />
              </div>
              <h3 style={{ fontFamily: "Ubuntu, sans-serif", color: NAVY, fontSize: "2.5rem", marginBottom: "1rem", fontWeight: 800 }}>{dLocal.succesTitre}</h3>
              <p style={{ color: "#64748b", fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>{dLocal.succesDesc}</p>
              <Link href="/" style={{ background: ADESSO_BLUE, color: "#fff", padding: "1.2rem 3rem", borderRadius: "12px", textDecoration: "none", fontWeight: 700, display: "inline-block", transition: "0.3s", boxShadow: "0 10px 25px rgba(0, 102, 255, 0.3)", letterSpacing: "0.5px" }}>
                {dLocal.retourPortail}
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "#fff", borderRadius: "16px", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", overflow: "hidden" }}>

              {/* SECTION 1 */}
              <div style={{ padding: "3rem", borderBottom: "1px solid #f1f5f9" }}>
                <h3 style={sectionTitleStyle}>
                  <span style={numBadge}>01</span>
                  {dLocal.sec1Titre}
                </h3>
                <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                  <div>
                    <label style={lbl}>{dLocal.nomLabel}</label>
                    <input required type="text" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} placeholder={dLocal.nomPlaceholder} className="focus-ring" style={inp} />
                  </div>
                  <div>
                    <label style={lbl}>{dLocal.entrepriseLabel}</label>
                    <input type="text" value={form.entreprise} onChange={e => setForm({ ...form, entreprise: e.target.value })} placeholder={dLocal.entreprisePlaceholder} className="focus-ring" style={inp} />
                  </div>
                </div>
                <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                  <div>
                    <label style={lbl}>{dLocal.emailLabel}</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder={dLocal.emailPlaceholder} className="focus-ring" style={inp} />
                  </div>
                  <div>
                    <label style={lbl}>{dLocal.telLabel}</label>
                    <input required type="tel" value={form.telephone} onChange={e => setForm({ ...form, telephone: e.target.value })} placeholder={dLocal.telPlaceholder} className="focus-ring" style={inp} />
                  </div>
                </div>
                <div>
                  <label style={lbl}>{dLocal.villeLabel}</label>
                  <input required type="text" value={form.ville} onChange={e => setForm({ ...form, ville: e.target.value })} placeholder={dLocal.villePlaceholder} className="focus-ring" style={inp} />
                </div>
              </div>

              {/* SECTION 2 */}
              <div style={{ padding: "3rem", borderBottom: "1px solid #f1f5f9", background: "#fdfdfd" }}>
                <h3 style={sectionTitleStyle}>
                  <span style={numBadge}>02</span>
                  {dLocal.sec2Titre}
                </h3>
                <div className="form-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.2rem" }}>
                  {dLocal.services.map(s => {
                    const checked = selectedServices.includes(s.value);
                    const Icon = getIcon(s.value);
                    return (
                      <div key={s.value} onClick={() => toggleService(s.value)} className="service-card"
                        style={{
                          display: "flex", flexDirection: "column", gap: "1rem", padding: "1.5rem",
                          border: checked ? `2px solid ${ADESSO_BLUE}` : "1px solid #e2e8f0",
                          borderRadius: "12px", cursor: "pointer",
                          background: checked ? "rgba(0, 102, 255, 0.03)" : "#fff",
                          position: "relative",
                          transition: "all 0.3s ease"
                        }}>
                        <div style={{ position: "absolute", top: "1rem", right: "1rem", width: 22, height: 22, border: checked ? `2px solid ${ADESSO_BLUE}` : "2px solid #cbd5e1", borderRadius: "50%", background: checked ? ADESSO_BLUE : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "0.2s" }}>
                          {checked && <CheckCircle2 size={14} color="#fff" />}
                        </div>
                        <div style={{ color: checked ? ADESSO_BLUE : "#64748b", transition: "color 0.3s" }}>
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <span style={{ fontSize: "0.95rem", fontWeight: 600, color: NAVY, lineHeight: 1.3 }}>{s.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3 */}
              <div style={{ padding: "3rem", borderBottom: "1px solid #f1f5f9" }}>
                <h3 style={sectionTitleStyle}>
                  <span style={numBadge}>03</span>
                  {dLocal.sec3Titre}
                </h3>
                <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
                  <div>
                    <label style={lbl}>{dLocal.structureLabel}</label>
                    <select value={form.typeBatiment} onChange={e => setForm({ ...form, typeBatiment: e.target.value })} className="focus-ring" style={inp}>
                      {dLocal.structureOptions.map(opt => (
                        <option key={opt.val} value={opt.val}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={lbl}>{dLocal.surfaceLabel}</label>
                    <input type="number" value={form.surface} onChange={e => setForm({ ...form, surface: e.target.value })} placeholder={dLocal.surfacePlaceholder} className="focus-ring" style={inp} />
                  </div>
                </div>
                <div>
                  <label style={lbl}>{dLocal.detailsLabel}</label>
                  <textarea required rows={5} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}
                    placeholder={dLocal.detailsPlaceholder}
                    className="focus-ring"
                    style={{ ...inp, resize: "vertical" }} />
                </div>
              </div>

              {/* SECTION 4 */}
              <div style={{ padding: "3rem", background: "#f8fafc" }}>
                <h3 style={sectionTitleStyle}>
                  <span style={numBadge}>04</span>
                  {dLocal.sec4Titre}
                </h3>
                 <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
                  {dLocal.contactOptions.map(opt => {
                    const isWA = opt.val === "whatsapp";
                    const Icon = isWA ? MessageCircle : Mail;
                    const isSelected = form.contactPreference === opt.val;
                    
                    return (
                      <div key={opt.val} onClick={() => setForm({ ...form, contactPreference: opt.val })} className="contact-card-premium"
                        style={{
                          padding: "1.5rem",
                          border: isSelected ? `2px solid ${isWA ? "#25D366" : "#0066ff"}` : "1px solid #e2e8f0",
                          borderRadius: "20px",
                          cursor: "pointer",
                          background: isSelected ? (isWA ? "rgba(37, 211, 102, 0.05)" : "rgba(0, 102, 255, 0.05)") : "#fff",
                          boxShadow: isSelected ? `0 10px 20px -5px ${isWA ? "rgba(37, 211, 102, 0.15)" : "rgba(0, 102, 255, 0.15)"}` : "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "1.25rem",
                          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                        }}>
                        <div style={{ 
                          width: 56, 
                          height: 56, 
                          borderRadius: "15px", 
                          background: isSelected ? (isWA ? "#25D366" : "#0066ff") : "#f1f5f9", 
                          display: "flex", 
                          alignItems: "center", 
                          justifyContent: "center", 
                          transition: "0.3s",
                          color: isSelected ? "#fff" : "#64748b"
                        }}>
                          <Icon size={26} strokeWidth={2} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 800, fontSize: "1rem", color: NAVY, marginBottom: 2 }}>{opt.label}</div>
                          <div style={{ fontSize: "0.85rem", color: "#64748b" }}>{opt.sub}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button type="submit" className="submit-btn"
                    style={{
                      background: ADESSO_BLUE, color: "#fff", border: "none",
                      padding: "1.2rem 3rem", borderRadius: "8px", fontWeight: 700,
                      fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center",
                      gap: "1rem", transition: "all 0.3s", boxShadow: "0 8px 20px rgba(0, 102, 255, 0.3)"
                    }}>
                    {dLocal.btnSubmit} <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .form-2col { grid-template-columns: 1fr 1fr; }
        .form-3col { grid-template-columns: repeat(3,1fr); }
        
        .focus-ring:focus {
          border-color: ${ADESSO_BLUE} !important;
          box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.15) !important;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          border-color: #cbd5e1;
        }

        .contact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.04);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          background: #0052cc !important;
          box-shadow: 0 12px 25px rgba(0, 102, 255, 0.4) !important;
        }

        @media (max-width: 900px) {
          .form-2col, .form-3col { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}} />
    </div>
  );
}