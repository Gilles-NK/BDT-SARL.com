// ─────────────────────────────────────────────────────────────
//  CONTEXTE DE LANGUE — app/lib/LangueContext.tsx
//  Fournit la langue active et les traductions à toute l'app.
//  Usage dans un composant :
//    const { t, langue, setLangue } = useLangue();
// ─────────────────────────────────────────────────────────────
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import translations, { Langue, Traductions } from "./translations";

interface LangueContextType {
  langue:    Langue;
  setLangue: (l: Langue) => void;
  t:         Traductions;
}

const LangueContext = createContext<LangueContextType>({
  langue:    "fr",
  setLangue: () => {},
  t:         translations["fr"],
});

export function LangueProvider({ children }: { children: ReactNode }) {
  const [langue, setLangue] = useState<Langue>("fr");
  const t = translations[langue];
  return (
    <LangueContext.Provider value={{ langue, setLangue, t }}>
      {children}
    </LangueContext.Provider>
  );
}

// Hook à utiliser dans tous les composants
export function useLangue() {
  return useContext(LangueContext);
}
