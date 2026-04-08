"use client";
import { useEffect, useRef, ReactNode } from "react";

// Animation scroll maison — pas besoin de framer-motion pour ça
// IntersectionObserver, supporté partout depuis 2019
// Rodrigue voulait framer mais +40kb pour des fadeIn c'est non

const OFFSETS: Record<string, string> = {
  up:    "translateY(24px)",
  left:  "translateX(-24px)",
  right: "translateX(24px)",
  fade:  "none",
};

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
  threshold?: number;
}

export default function ScrollReveal({ children, delay = 0, direction = "up", threshold = 0.1 }: Props) {
  const ref    = useRef<HTMLDivElement>(null);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // respect prefers-reduced-motion — Caroline a demandé ça
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      return;
    }

    el.style.opacity    = "0";
    el.style.transform  = OFFSETS[direction] ?? "none";
    el.style.transition = `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`;

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !played.current) {
        played.current    = true;
        el.style.opacity  = "1";
        el.style.transform = "none";
        obs.disconnect();
      }
    }, { threshold });

    obs.observe(el);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={ref}>{children}</div>;
}
