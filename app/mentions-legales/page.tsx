import { Metadata } from "next";
import MentionsClient from "./MentionsClient";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: lang === "fr" ? "Mentions Légales" : "Legal Notice",
    description: lang === "fr" 
      ? "Mentions légales de Bron Digital Technology SARL." 
      : "Legal notice of Bron Digital Technology SARL.",
  };
}

export default function MentionsPage() {
  return <MentionsClient />;
}
