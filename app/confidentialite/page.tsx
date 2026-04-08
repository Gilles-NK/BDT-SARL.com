export default function Confidentialite() {
  const h2s: React.CSSProperties = { fontFamily: "Ubuntu, sans-serif", fontSize: "1.3rem", color: "#1a1a2e", margin: "2rem 0 0.75rem" };
  const p: React.CSSProperties = { color: "#555", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.97rem" };

  return (
    <div style={{ background: "#f8f9fa", padding: "4rem 1.5rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", background: "#fff", borderRadius: 10, padding: "3rem", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
        <h1 style={{ fontFamily: "Ubuntu, sans-serif", fontSize: "clamp(1.6rem,3vw,2.2rem)", color: "#1a1a2e", marginBottom: "0.5rem" }}>Politique de confidentialité</h1>
        <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "2rem" }}>Dernière mise à jour : janvier 2025</p>

        <h2 style={h2s}>1. Collecte des données</h2>
        <p style={p}>BDT – Bron Digital Technology SARL collecte des données personnelles uniquement dans le cadre de ses activités commerciales, notamment lors de demandes de devis, de prises de contact ou de souscription à nos services. Les données collectées incluent : nom, prénom, email, numéro de téléphone, et informations relatives à votre projet.</p>

        <h2 style={h2s}>2. Utilisation des données</h2>
        <p style={p}>Les informations collectées sont utilisées exclusivement pour vous contacter, établir des devis personnalisés, répondre à vos demandes et améliorer la qualité de nos services. Aucune donnée n&apos;est vendue ou cédée à des tiers à des fins commerciales.</p>

        <h2 style={h2s}>3. Conservation des données</h2>
        <p style={p}>Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter du dernier contact. Passé ce délai, elles sont supprimées de nos systèmes.</p>

        <h2 style={h2s}>4. Vos droits</h2>
        <p style={p}>Conformément à la réglementation en vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition à l&apos;utilisation de vos données personnelles. Pour exercer ces droits, contactez-nous à : <strong>direction@secutechservice.com</strong></p>

        <h2 style={h2s}>5. Cookies</h2>
        <p style={p}>Notre site n&apos;utilise pas de cookies à des fins publicitaires ou de traçage. Seuls des cookies techniques essentiels au bon fonctionnement du site peuvent être utilisés.</p>

        <h2 style={h2s}>6. Sécurité</h2>
        <p style={p}>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction.</p>

        <h2 style={h2s}>7. Contact</h2>
        <p style={p}>Pour toute question relative à cette politique de confidentialité :<br />
          <strong>BDT – Bron Digital Technology SARL</strong><br />
          Akwa, Rue Pau, 50m de United Express, Douala, Cameroun<br />
          Email : direction@secutechservice.com<br />
          Tél : +237 671 84 41 63
        </p>
      </div>
    </div>
  );
}
