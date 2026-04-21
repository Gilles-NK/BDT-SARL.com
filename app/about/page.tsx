import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "À Propos de BDT",
  description: "Apprenez-en plus sur Bron Digital Technology (BDT), notre vision, nos valeurs et notre expertise en sécurité technologique au Cameroun.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
