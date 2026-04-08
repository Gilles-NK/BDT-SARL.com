"use client";
import { useState, useEffect } from "react";

const WA = "237689665893";
const MSG = "Bonjour BDT, je souhaite avoir des informations sur vos services.";

export default function WhatsAppWidget() {
  const [open, setOpen]           = useState(false);
  const [badge, setBadge]         = useState(false);

  // badge apparait après 3s — Rodrigue a dit que c'est moins agressif que direct
  useEffect(() => {
    const t = setTimeout(() => setBadge(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ position: "fixed", bottom: 28, right: 28, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.75rem" }}>

      {/* bulle */}
      <div style={{ background: "#fff", borderRadius: 14, boxShadow: "0 8px 32px rgba(0,0,0,0.14)", width: 295, overflow: "hidden", maxHeight: open ? 400 : 0, opacity: open ? 1 : 0, transition: "max-height 0.32s ease, opacity 0.22s ease", pointerEvents: open ? "auto" : "none" }}>
        <div style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", padding: "1.2rem 1.4rem", display: "flex", alignItems: "center", gap: "0.7rem" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <WaIcon size={22} />
          </div>
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>BDT Support</div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.82)", fontSize: "0.78rem" }}>
              <span style={{ width: 7, height: 7, background: "#a8f0c0", borderRadius: "50%", display: "inline-block" }} />
              En ligne maintenant
            </div>
          </div>
        </div>
        <div style={{ padding: "1.4rem" }}>
          <div style={{ background: "#f0f4f8", borderRadius: "0 10px 10px 10px", padding: "0.8rem 1rem", marginBottom: "0.55rem", display: "inline-block", maxWidth: "86%" }}>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "#2d3436", lineHeight: 1.5 }}>Bonjour ! Comment puis-je vous aider ?</p>
          </div>
          <br />
          <div style={{ background: "#f0f4f8", borderRadius: "0 10px 10px 10px", padding: "0.8rem 1rem", display: "inline-block", maxWidth: "86%" }}>
            <p style={{ margin: 0, fontSize: "0.88rem", color: "#2d3436", lineHeight: 1.5 }}>On répond en quelques minutes.</p>
          </div>
          <a href={`https://wa.me/${WA}?text=${encodeURIComponent(MSG)}`} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1.2rem", background: "#25D366", color: "#fff", padding: "0.8rem", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: "0.9rem", transition: "background 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "#1da851"}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "#25D366"}>
            <WaIcon size={18} /> Démarrer la conversation
          </a>
        </div>
      </div>

      {/* bouton */}
      <button onClick={() => setOpen(v => !v)} aria-label={open ? "Fermer le chat" : "Chat WhatsApp"}
        style={{ width: 56, height: 56, background: "#25D366", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 16px rgba(37,211,102,0.48)", transition: "transform 0.2s", position: "relative" }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.08)"}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}>
        {!open && badge && (
          <span style={{ position: "absolute", top: 0, right: 0, width: 17, height: 17, background: "#e53e3e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "0.65rem", fontWeight: 700, border: "2px solid #fff" }}>1</span>
        )}
        {open
          ? <svg viewBox="0 0 24 24" fill="white" width="22" height="22"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          : <WaIcon size={28} />
        }
      </button>
    </div>
  );
}

function WaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="white" width={size} height={size}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
