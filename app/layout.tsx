import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { LangueProvider } from "./lib/LangueContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import RappelWidget from "./components/RappelWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://bdt-sarl.vercel.app"),
  title: {
    default: "BDT – Vidéosurveillance & Sécurité Informatique à Douala",
    template: "%s | BDT – Bron Digital Technology",
  },
  description: "Expert en vidéosurveillance, cybersécurité et maintenance informatique à Douala, Cameroun. BDT (Bron Digital Technology) accompagne entreprises et particuliers avec des solutions sur mesure. Devis gratuit en 24h.",
  keywords: ["vidéosurveillance Douala", "caméra surveillance Cameroun", "cybersécurité Douala", "maintenance informatique Cameroun", "sécurité électronique Douala", "formation informatique Douala", "formation cybersécurité Cameroun", "certification informatique Douala", "BDT sécurité"],
  authors: [{ name: "Bron Digital Technology" }],
  creator: "Bron Digital Technology",
  publisher: "Bron Digital Technology",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.bdt-sarl.com",
    siteName: "Bron Digital Technology (BDT)",
    title: "BDT – Vidéosurveillance & Sécurité Informatique à Douala",
    description: "Solutions de sécurité électronique et informatique au Cameroun. Vidéosurveillance, Cybersécurité, Audit et Formation.",
    images: [
      {
        url: "/images/logo-slogan.png",
        width: 1200,
        height: 630,
        alt: "BDT - Bron Digital Technology Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BDT – Vidéosurveillance & Sécurité Informatique à Douala",
    description: "Expert en vidéosurveillance et cybersécurité au Cameroun. Devis gratuit en 24h.",
    images: ["/images/logo-slogan.png"],
  },
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={ubuntu.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Bron Digital Technology (BDT)",
              "image": "https://bdt-sarl.vercel.app/images/logo-slogan.png",
              "@id": "https://bdt-sarl.vercel.app",
              "url": "https://bdt-sarl.vercel.app",
              "telephone": "+237689665893", // À vérifier/mettre à jour si possible
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Douala",
                "addressLocality": "Douala",
                "addressCountry": "CM"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 4.0511,
                "longitude": 9.7679
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/bdt.sarl",
                "https://www.linkedin.com/company/bdt-sarl"
              ]
            })
          }}
        />
        <LangueProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
          <RappelWidget />
        </LangueProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
