import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Nos Services de Sécurité & Informatique",
  description: "Découvrez nos solutions complètes : Vidéosurveillance intelligente, Cybersécurité, Infrastructure Réseau et Maintenance Informatique à Douala.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}