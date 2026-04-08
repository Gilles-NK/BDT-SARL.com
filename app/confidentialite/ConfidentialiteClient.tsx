"use client";
import { useLangue } from "../lib/LangueContext";

export default function ConfidentialiteClient() {
  const { t } = useLangue();
  const c = t.confidentialite;
  const h2s: React.CSSProperties = { fontFamily: "Ubuntu, sans-serif", fontSize: "1.3rem", color: "#1a1a2e", margin: "2rem 0 0.75rem" };
  const p: React.CSSProperties = { color: "#555", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.97rem" };

  return (
    <div style={{ background: "#f8f9fa", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", background: "#fff", borderRadius: 10, padding: "3rem", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#1a1a2e", marginBottom: "0.5rem" }}>{c.titre}</h1>
        <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "2rem" }}>{c.maj}</p>

        <p style={p}>{c.intro}</p>

        <h2 style={h2s}>{c.collecteTitre}</h2>
        <p style={p}>{c.collecteDesc}</p>

        <h2 style={h2s}>{c.usageTitre}</h2>
        <p style={p}>{c.usageDesc}</p>

        <h2 style={h2s}>{c.partageTitre}</h2>
        <p style={p}>{c.partageDesc}</p>
      </div>
    </div>
  );
}
