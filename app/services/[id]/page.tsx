import { Metadata } from "next";
import ServiceDetailClient from "./ServiceDetailClient";

export async function generateStaticParams() {
  return [
    { id: 'videosurveillance' },
    { id: 'informatique' },
    { id: 'acces' },
    { id: 'cybersecurite' },
    { id: 'cloud' },
    { id: 'audit' },
  ];
}

export const metadata: Metadata = {
  title: "Détails du Service - BDT",
  description: "Découvrez en détail nos services et solutions personnalisées pour la sécurité électronique, l'informatique et les réseaux.",
};

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ServiceDetailClient id={resolvedParams.id} />;
}
