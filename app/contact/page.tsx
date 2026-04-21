import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contactez-nous",
  description: "Besoin de conseils ou d'un devis ? Contactez l'équipe BDT à Douala. Nous sommes à votre écoute pour vos projets de sécurité et d'informatique.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
