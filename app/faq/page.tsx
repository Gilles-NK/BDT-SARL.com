import { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Questions Fréquentes (FAQ)",
  description: "Retrouvez les réponses aux questions les plus posées sur la vidéosurveillance, la cybersécurité et nos services d'accompagnement.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return <FaqClient />;
}