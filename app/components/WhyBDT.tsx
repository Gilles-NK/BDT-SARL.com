"use client";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { Crosshair, MapPin, Zap, Wrench, Lock } from "./Icons";

const REASONS = [
  { Icon: Crosshair, title: "Solutions personnalisées",          desc: "On ne vend pas du prêt-à-poser. On vient chez vous, on regarde, on écoute. La solution vient après.", color: "#0066ff" },
  { Icon: MapPin,    title: "Expertise locale & internationale", desc: "Basés à Douala, on applique des standards internationaux tout en connaissant les contraintes locales.", color: "#0052d4" },
  { Icon: Zap,       title: "Réactifs et innovants",             desc: "Problème urgent ? On répond et on se déplace. Matériel moderne, méthodes éprouvées.", color: "#0066ff" },
  { Icon: Wrench,    title: "Service après-vente assuré",        desc: "On ne disparaît pas après l'installation. Maintenance, vérifications, dépannage — on assume.", color: "#0052d4" },
  { Icon: Lock,      title: "Respect de la confidentialité",     desc: "On accède à vos locaux et données sensibles. Tout reste strictement confidentiel.", color: "#0066ff" },
];

export default function WhyBDT() {
  return (
    <section style={{ padding: "5rem 2rem", background: "var(--blue-lt)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <ScrollReveal direction="up">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ color: "var(--blue)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Notre différence</span>
            <h2 style={{ fontFamily: "Ubuntu, sans-serif", fontWeight: 600, fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "var(--navy)", marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              Pourquoi nous choisir ?
            </h2>
            <p style={{ color: "var(--gray-600)", maxWidth: 500, margin: "0 auto" }}>
              Il y a d&apos;autres prestataires à Douala. Voilà honnêtement ce qui nous distingue.
            </p>
          </div>
        </ScrollReveal>

        {/* Grille unique 5 cards — plus simple et plus propre */}
        <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "3rem" }}>
          {REASONS.map((r, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 70}>
              <div className="why-card" style={{
                background: "#fff",
                borderRadius: "var(--radius-lg)",
                padding: "1.75rem",
                border: "1px solid var(--gray-200)",
                boxShadow: "var(--shadow-sm)",
                height: "100%",
                transition: "all 0.22s",
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = r.color;
                  el.style.boxShadow = `0 10px 28px ${r.color}20`;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--gray-200)";
                  el.style.boxShadow = "var(--shadow-sm)";
                  el.style.transform = "translateY(0)";
                }}>
                <div style={{ width: 44, height: 44, background: `${r.color}14`, borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.1rem" }}>
                  <r.Icon size={21} color={r.color} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontWeight: 600, color: "var(--navy)", fontSize: "0.97rem", marginBottom: "0.55rem", lineHeight: 1.4 }}>{r.title}</h3>
                <p style={{ color: "var(--gray-600)", fontSize: "0.86rem", lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={350}>
          <div style={{ textAlign: "center" }}>
            <Link href="/devis" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "var(--grad-blue)", color: "#fff",
              padding: "0.95rem 2.2rem", borderRadius: "var(--radius-sm)",
              fontWeight: 700, fontSize: "1rem",
              boxShadow: "var(--shadow-blue)",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget as HTMLElement).style.opacity = "0.88"}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget as HTMLElement).style.opacity = "1"}>
              Demander votre devis gratuit
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Responsive géré directement ici pour éviter tout conflit */}
      <style>{`
        .why-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        /* Tablette → 2 colonnes */
        @media (max-width: 900px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        /* Mobile → 1 colonne */
        @media (max-width: 560px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
          .why-card {
            padding: 1.4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
