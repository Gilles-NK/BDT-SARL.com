"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import translations, { Langue, Traductions } from "./translations";

interface LangueContextType {
  langue: Langue;
  setLangue: (l: Langue) => void;
  t: Traductions;
}

const LangueContext = createContext<LangueContextType>({
  langue: "fr",
  setLangue: () => {},
  t: translations["fr"],
});

export function LangueProvider({ children }: { children: ReactNode }) {
  const [langue, setLangue] = useState<Langue>("fr");

  // Charger la langue au montage
  React.useEffect(() => {
    const saved = localStorage.getItem("bdt_lang") as Langue;
    if (saved && (saved === "fr" || saved === "en")) {
      setLangue(saved);
    }
  }, []);

  // Sauvegarder la langue lors du changement
  const handleSetLangue = (l: Langue) => {
    setLangue(l);
    localStorage.setItem("bdt_lang", l);
  };

  const t = translations[langue] || translations["fr"];

  return (
    <LangueContext.Provider value={{ langue, setLangue: handleSetLangue, t }}>
      {children}
    </LangueContext.Provider>
  );
}

export function useLangue() {
  return useContext(LangueContext);
}
