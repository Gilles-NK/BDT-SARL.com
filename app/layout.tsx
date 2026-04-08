import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import { LangueProvider } from "./lib/LangueContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import RappelWidget from "./components/RappelWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "BDT – Vidéosurveillance & Sécurité Informatique à Douala",
    template: "%s | BDT – Bron Digital Technology",
  },
  description: "BDT installe vos caméras de surveillance, assure la cybersécurité et la maintenance informatique à Douala, Cameroun. Devis gratuit en 24h.",
  keywords: ["vidéosurveillance Douala","caméra surveillance Cameroun","cybersécurité Douala","BDT sécurité"],
  robots: { index: true, follow: true },
};

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={ubuntu.className}>
      <body>
        {/* LangueProvider enveloppe toute l'app — langue disponible partout */}
        <LangueProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
          <RappelWidget />
        </LangueProvider>
        <Analytics />
      </body>
    </html>
  );
}
