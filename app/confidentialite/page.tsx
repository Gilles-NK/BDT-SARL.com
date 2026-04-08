import { Metadata } from "next";
import ConfidentialiteClient from "./ConfidentialiteClient";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Politique de confidentialité" : "Privacy Policy",
    description: lang === "fr" 
      ? "Politique de confidentialité de Bron Digital Technology SARL." 
      : "Privacy policy of Bron Digital Technology SARL.",
  };
}

export default function ConfidentialitePage() {
  return <ConfidentialiteClient />;
}
