"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Phone,
  MapPin,
  Mail,
  Globe,
} from "lucide-react";
import { useLangue } from "../lib/LangueContext";

export default function Footer() {
  const { t } = useLangue();
  const f = t.footer;

  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* ── HAUT : LOGO + RÉSEAUX SOCIAUX ── */}
        <div className="footer-header">
          <div className="logo-box">
            <Image
              src="/images/logo-slogan1.png"
              alt="BDT Logo"
              width={140}
              height={65}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="social-links">
            <Link href="#" className="soc-btn hover-lift" aria-label="LinkedIn"><Linkedin size={16} /></Link>
            <Link href="#" className="soc-btn hover-lift" aria-label="Facebook"><Facebook size={16} /></Link>
            <Link href="#" className="soc-btn hover-lift" aria-label="YouTube"><Youtube size={16} /></Link>
            <Link href="#" className="soc-btn hover-lift" aria-label="Instagram"><Instagram size={16} /></Link>
            <Link href="#" className="soc-btn hover-lift" aria-label="Twitter/X"><Twitter size={16} /></Link>
          </div>
        </div>

        {/* ── SÉPARATEUR ── */}
        <div className="separator" />

        {/* ── MILIEU : COORDONNÉES à gauche + NAV en bas à droite ── */}
        <div className="footer-middle">

          {/* Colonne gauche : adresses */}
          <div className="contact-info">
            <p className="company-name">Bron Digital Technology SARL</p>
            <div className="info-item">
              <MapPin size={14} className="accent-icon" />
              <span>Akwa, Rue Pau, Douala</span>
            </div>
            <div className="info-item">
              <Phone size={14} className="accent-icon" />
              <span>+237 670 95 94 54 / 659 08 10 12</span>
            </div>
            <div className="info-item">
              <Mail size={14} className="accent-icon" />
              <span>info@bdt.com</span>
            </div>
            <div className="info-item">
              <Globe size={14} className="accent-icon" />
              <span>www.bdt-sarl.com</span>
            </div>
          </div>

          {/* Colonne droite : nav en bas à droite, même niveau que dernière adresse */}
          <nav className="nav-links">
            <Link href="/services" className="nav-item">{t.nav.services}</Link>
            <span className="nav-sep">|</span>
            <Link href="/about" className="nav-item">{t.nav.apropos}</Link>
            <span className="nav-sep">|</span>
            <Link href="/faq" className="nav-item">{t.nav.faq}</Link>
            <span className="nav-sep">|</span>
            <Link href="/contact" className="nav-item">{t.nav.contact}</Link>
          </nav>

        </div>

        {/* ── SÉPARATEUR ── */}
        <div className="separator" />

        {/* ── BAS : COPYRIGHT + LIENS LÉGAUX ── */}
        <div className="footer-bottom">
          <p>{f.droits}</p>
          <div className="legal-links">
            <Link href="#" className="legal-link">{f.confidentialite}</Link>
            <span className="legal-sep">·</span>
            <Link href="#" className="legal-link">{f.mentions}</Link>
          </div>
        </div>

      </div>

      <style>{`
        .footer-container {
          background-color: #F8F7F4;
          color: #111;
          padding: 48px 24px 28px;
          border-top: 3px solid #0066ff;
          font-family: Arial, sans-serif;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Logo */
        .logo-box {
          background: transparent;
          line-height: 0;
          mix-blend-mode: multiply;
          isolation: isolate;
        }

        /* Header */
        .footer-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }

        /* Réseaux sociaux */
        .social-links {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .soc-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1.5px solid #0066ff;
          color: #0066ff;
          transition: background 0.25s, color 0.25s;
          text-decoration: none;
        }
        .soc-btn:hover {
          background: #0066ff;
          color: #fff;
        }

        /* Séparateur */
        .separator {
          width: 100%;
          height: 1px;
          background: #E5E2D9;
          margin: 0 0 28px;
        }

        /* Milieu — mobile : empilé */
        .footer-middle {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 28px;
          text-align: center;
        }

        .company-name {
          font-weight: 700;
          font-size: 14px;
          color: #111;
          margin-bottom: 10px;
          letter-spacing: 0.02em;
        }

        /* Adresses avec hover doré */
        .info-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 7px;
          font-size: 13px;
          color: #555;
          transition: color 0.2s;
          cursor: default;
          border-radius: 4px;
          padding: 2px 4px;
        }
        .info-item:hover {
          color: #0066ff;
        }
        .info-item:hover .accent-icon {
          color: #0050d1;
        }
        .accent-icon {
          color: #0066ff;
          flex-shrink: 0;
          transition: color 0.2s;
        }

        /* Nav mobile */
        .nav-links {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          justify-content: center;
          align-items: center;
        }
        .nav-sep {
          color: #ccc;
          font-size: 13px;
          user-select: none;
        }
        .nav-item {
          text-decoration: none;
          color: #333;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0.06em;
          padding: 2px 6px;
          transition: color 0.2s;
        }
        .nav-item:hover {
          color: #0066ff;
        }

        /* Bas */
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          font-size: 11.5px;
          color: #999;
          text-align: center;
        }
        .legal-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .legal-link {
          color: #999;
          text-decoration: none;
          transition: color 0.2s;
        }
        .legal-link:hover { color: #0066ff; }
        .legal-sep { color: #ccc; }

        /* ── Desktop ── */
        @media (min-width: 768px) {
          .footer-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          /* Milieu : gauche=adresses, droite=nav en bas */
          .footer-middle {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
            text-align: left;
          }

          .info-item {
            justify-content: flex-start;
          }

          /* Nav alignée en bas à droite, sur une ligne comme image 2 */
          .nav-links {
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-end;
            align-items: center;
            align-self: flex-end;
            gap: 4px;
          }

          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}
