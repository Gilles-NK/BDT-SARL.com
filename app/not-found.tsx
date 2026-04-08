import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", background: "#f8f9fa" }}>
      <div style={{ textAlign: "center", maxWidth: 500 }}>
        <div style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(6rem,15vw,10rem)", fontWeight: 700, color: "#0083ff", lineHeight: 1, marginBottom: "1rem" }}>
          404
        </div>
        <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(1.4rem,3vw,2rem)", color: "#1a1a2e", marginBottom: "1rem" }}>
          Page introuvable
        </h1>
        <p style={{ color: "#666", fontSize: "1.05rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          La page que vous recherchez n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil pour continuer votre navigation.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ background: "#0066ff", color: "#fff", padding: "0.9rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: 700, fontSize: "1rem" }}>
            Retour à l&apos;accueil
          </Link>
          <Link href="/contact" style={{ background: "transparent", color: "#0083ff", padding: "0.9rem 2rem", borderRadius: 4, textDecoration: "none", fontWeight: 700, fontSize: "1rem", border: "2px solid #0083ff" }}>
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
