"use client";
import React from 'react';

/**
 * AdessoSwitch - Composant de bascule stylisé
 * Permet de basculer entre deux états (ex: Gauche/Droite)
 */
interface Props {
  leftLabel: string;
  rightLabel: string;
  active: "left" | "right";
  onChange: (val: "left" | "right") => void;
}

export default function AdessoSwitch({ leftLabel, rightLabel, active, onChange }: Props) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "1.25rem", fontWeight: 700 }}>
      <span
        onClick={() => onChange("left")}
        style={{ cursor: "pointer", color: active === "left" ? "#0066ff" : "#94a3b8", transition: "0.2s", fontSize: "1rem" }}
      >
        {leftLabel}
      </span>

      <div
        onClick={() => onChange(active === "left" ? "right" : "left")}
        style={{
          width: 52, height: 26, border: "2px solid #0066ff", background: "#fff",
          borderRadius: 20, position: "relative", cursor: "pointer"
        }}
      >
        <div style={{
          width: 16, height: 16, background: "#0066ff", borderRadius: "50%",
          position: "absolute", top: 3, transition: "left 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          left: active === "left" ? "4px" : "28px"
        }} />
      </div>

      <span
        onClick={() => onChange("right")}
        style={{ cursor: "pointer", color: active === "right" ? "#0066ff" : "#94a3b8", transition: "0.2s", fontSize: "1rem" }}
      >
        {rightLabel}
      </span>
    </div>
  );
}
