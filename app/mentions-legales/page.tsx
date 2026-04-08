export default function MentionsLegales() {
  const h2s: React.CSSProperties = { fontFamily: "Ubuntu, sans-serif", fontSize: "1.3rem", color: "#1a1a2e", margin: "2rem 0 0.75rem" };
  const p: React.CSSProperties = { color: "#555", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.97rem" };

  return (
    <div style={{ background: "#f8f9fa", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", background: "#fff", borderRadius: 10, padding: "3rem", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#1a1a2e", marginBottom: "0.5rem" }}>Mentions légales</h1>
        <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "2rem" }}>Dernière mise à jour : janvier 2025</p>

        <h2 style={h2s}>1. Éditeur du site</h2>
        <p style={p}>
          <strong>BDT – Bron Digital Technology SARL</strong><br />
          Société à Responsabilité Limitée au capital social de [montant] FCFA<br />
          Siège social : Akwa, Rue Pau, 50m de United Express, Douala, Cameroun<br />
          Registre du Commerce : [numéro RC]<br />
          Numéro de contribuable : [numéro]<br />
          Téléphone : +237 671 84 41 63 / +237 696 41 18 45<br />
          Email : contact@secutechservice.com
        </p>

        <h2 style={h2s}>2. Directeur de la publication</h2>
        <p style={p}>Le directeur de la publication est le gérant de BDT – Bron Digital Technology SARL, joignable à l&apos;adresse : direction@secutechservice.com</p>

        <h2 style={h2s}>3. Hébergement</h2>
        <p style={p}>Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.</p>

        <h2 style={h2s}>4. Propriété intellectuelle</h2>
        <p style={p}>L&apos;ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive de BDT – Bron Digital Technology SARL. Toute reproduction, représentation ou diffusion, même partielle, est interdite sans autorisation préalable écrite.</p>

        <h2 style={h2s}>5. Responsabilité</h2>
        <p style={p}>BDT s&apos;efforce de maintenir les informations de ce site à jour et exactes. Toutefois, nous ne pouvons garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées. L&apos;utilisation de ces informations se fait sous la seule responsabilité de l&apos;utilisateur.</p>

        <h2 style={h2s}>6. Liens hypertextes</h2>
        <p style={p}>Ce site peut contenir des liens vers d&apos;autres sites. BDT n&apos;est pas responsable du contenu de ces sites externes et ne peut être tenu responsable des dommages résultant de leur utilisation.</p>
      </div>
    </div>
  );
}
