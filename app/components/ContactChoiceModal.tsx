"use client";
import React from "react";
import { Mail, MessageCircle, X } from "lucide-react";

interface ContactChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (canal: "email" | "whatsapp") => void;
  translations: {
    choixTitre: string;
    choixSub: string;
    parEmail: string;
    parEmailSub: string;
    parWA: string;
    parWASub: string;
  };
}

export default function ContactChoiceModal({ isOpen, onClose, onSelect, translations }: ContactChoiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="modal-header">
          <h2>{translations.choixTitre}</h2>
          <p>{translations.choixSub}</p>
        </div>

        <div className="options-grid">
          {/* WhatsApp option */}
          <div className="option-card wa-card" onClick={() => onSelect("whatsapp")}>
            <div className="icon-wrapper">
              <MessageCircle size={28} />
            </div>
            <div className="option-info">
              <h3>{translations.parWA}</h3>
              <p>{translations.parWASub}</p>
            </div>
            <div className="hover-indicator" />
          </div>

          {/* Email option */}
          <div className="option-card email-card" onClick={() => onSelect("email")}>
            <div className="icon-wrapper">
              <Mail size={28} />
            </div>
            <div className="option-info">
              <h3>{translations.parEmail}</h3>
              <p>{translations.parEmailSub}</p>
            </div>
            <div className="hover-indicator" />
          </div>
        </div>

        <button className="cancel-footer" onClick={onClose}>
          Fermer / Close
        </button>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 15, 30, 0.6);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1.5rem;
          animation: fadeIn 0.3s ease-out;
        }

        .modal-container {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 2.5rem;
          max-width: 500px;
          width: 100%;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          color: #444;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.2s;
        }
        .close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
          transform: rotate(90deg);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .modal-header h2 {
          font-family: 'Ubuntu', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: #1a1a2e;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .modal-header p {
          color: #64748b;
          font-size: 0.95rem;
        }

        .options-grid {
          display: grid;
          gap: 1.25rem;
        }

        .option-card {
          position: relative;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 1.5rem;
          border-radius: 18px;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .option-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }

        .icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .wa-card .icon-wrapper {
          background: rgba(37, 211, 102, 0.1);
          color: #25D366;
        }
        .wa-card:hover .icon-wrapper {
          background: #25D366;
          color: #fff;
        }

        .email-card .icon-wrapper {
          background: rgba(0, 102, 255, 0.1);
          color: #1b439e;
        }
        .email-card:hover .icon-wrapper {
          background: #1b439e;
          color: #fff;
        }

        .option-info h3 {
          font-family: 'Ubuntu', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: #1a1a2e;
          margin-bottom: 0.2rem;
        }

        .option-info p {
          color: #64748b;
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .hover-indicator {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: transparent;
          transition: 0.3s;
        }

        .wa-card:hover .hover-indicator { background: #25D366; }
        .email-card:hover .hover-indicator { background: #1b439e; }

        .cancel-footer {
          margin-top: 2rem;
          width: 100%;
          background: transparent;
          border: 1px solid rgba(0, 0, 0, 0.05);
          color: #94a3b8;
          padding: 0.75rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }
        .cancel-footer:hover {
          color: #64748b;
          background: rgba(0, 0, 0, 0.02);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 480px) {
          .modal-container {
            padding: 1.5rem;
          }
          .option-card {
            padding: 1rem;
          }
          .icon-wrapper {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  );
}
