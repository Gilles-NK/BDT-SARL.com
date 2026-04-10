"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Search, X } from "./Icons";
import { Home, Info, HelpCircle, PhoneCall, Briefcase } from "lucide-react";
import { useLangue } from "../lib/LangueContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { t, langue, setLangue } = useLangue();
  const pathname = usePathname();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); setSearchOpen(false); }, [pathname]);

  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      if (!menuOpen) document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Fermer modale avec Escape
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setSearchOpen(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/faq?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  }

  const changeLang = (newLang: "fr" | "en") => {
    if (newLang === langue) return;
    setLangue(newLang);
  };

  const styleLang = (l: "fr" | "en"): React.CSSProperties => ({
    background: "none", border: "none", cursor: "pointer",
    padding: "0.2rem 0.45rem", fontSize: "0.82rem",
    fontWeight: l === langue ? 700 : 400,
    color: l === langue ? "#0066ff" : "var(--gray-500)",
    borderBottom: "2px solid " + (l === langue ? "#0066ff" : "transparent"),
    transition: "all 0.15s", fontFamily: "inherit",
  });

  const NAV_ITEMS = [
    { href: `/`, label: t.nav.accueil, Icon: Home },
    { href: `/services`, label: t.nav.services, Icon: Briefcase },
    { href: `/about`, label: t.nav.apropos, Icon: Info },
    { href: `/contact`, label: t.nav.contact, Icon: PhoneCall },
  ];

  return (
    <>
      <header
        className={scrolled ? "glass-header" : ""}
        style={{
          position: "sticky", top: 0, zIndex: 1000,
          background: scrolled ? "rgba(255, 255, 255, 0.8)" : "#fff",
          borderBottom: scrolled ? "1px solid rgba(0, 102, 255, 0.1)" : "3px solid #0066ff",
          overflow: "visible",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.05)" : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          fontFamily: "Ubuntu, sans-serif",
        }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", height: 80, display: "flex", alignItems: "center" }}>

          {/* Logo */}
          <Link href={`/`} className="hover-lift" style={{ display: "block" }}>
            <Image src="/images/logo-slogan1.png" alt="BDT" width={220} height={64}
              style={{
                objectFit: "contain",
                height: scrolled ? 54 : 64,
                width: "auto",
                transition: "height 0.4s ease"
              }} />
          </Link>

          <div className="sep-v" style={{ width: 1, height: 50, background: "#e5e7eb", margin: "0 1.5rem", flexShrink: 0 }} />
          <div style={{ flexGrow: 1 }} />

          {/* Nav desktop */}
          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", height: "80px" }}>

            {/* Liens nav */}
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href}
                  style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                    padding: "0 1.25rem", height: "100%", textDecoration: "none",
                    color: isActive ? "#0066ff" : "var(--gray-600)",
                    borderBottom: isActive ? "3px solid #0066ff" : "3px solid transparent",
                    backgroundColor: isActive ? "#fff" : "transparent",
                    transition: "color 0.2s, border-color 0.2s, background-color 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "#0066ff";
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#fafafa";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = "#0066ff";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = isActive ? "#0066ff" : "var(--gray-600)";
                    (e.currentTarget as HTMLElement).style.backgroundColor = isActive ? "#fff" : "transparent";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = isActive ? "#0066ff" : "transparent";
                  }}>
                  <item.Icon size={20} strokeWidth={1.3} />
                  <span style={{ fontSize: "0.75rem", fontWeight: isActive ? 600 : 400, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1, whiteSpace: "nowrap" }}>{item.label}</span>
                </Link>
              );
            })}

            {/* Bouton Recherche — ouvre la modale */}
            <button onClick={() => setSearchOpen(true)} aria-label={t.nav.recherche}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                padding: "0 1.25rem", height: "100%", background: "none", border: "none", cursor: "pointer",
                color: "var(--gray-600)",
                borderBottom: "3px solid transparent",
                transition: "color 0.2s, background-color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#0066ff";
                (e.currentTarget as HTMLElement).style.backgroundColor = "#fafafa";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "#0066ff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "var(--gray-600)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent";
              }}>
              <Search size={20} strokeWidth={1.3} />
              <span style={{ fontSize: "0.75rem", fontWeight: 400, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1, whiteSpace: "nowrap" }}>{t.nav.recherche}</span>
            </button>

            <div style={{ width: 1, height: 32, background: "#e5e7eb", margin: "0 1rem" }} />

            {/* Switch langue */}
            <div style={{ display: "flex", gap: "0.1rem", alignItems: "center", transform: "translateY(-4px)" }}>
              <button onClick={() => changeLang("fr")} style={styleLang("fr")}>fr</button>
              <span style={{ color: "#d1d5db", fontSize: "0.82rem" }}>|</span>
              <button onClick={() => changeLang("en")} style={styleLang("en")}>en</button>
            </div>
          </nav>

          {/* Burger mobile */}
          <button className="burger-btn" onClick={() => setMenuOpen(true)} aria-label="Menu"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#0D1B2A", padding: "0.4rem" }}>
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Biseau diagonal droite style Adesso */}

      </header>

      {/* ── MODALE RECHERCHE style Adesso ── */}
      {searchOpen && (
        <>
          {/* Fond flouté */}
          <div
            onClick={() => setSearchOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 2000,
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }}
          />

          {/* Panneau recherche centré en haut */}
          <div style={{
            position: "fixed", top: 0, left: 0, right: 0,
            zIndex: 2001,
            background: "#fff",
            padding: "2rem clamp(1.5rem, 8vw, 6rem)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.12)",
          }}>
            {/* Bouton fermer ✕ */}
            <button
              onClick={() => setSearchOpen(false)}
              style={{
                position: "absolute", top: "1.2rem", right: "1.5rem",
                background: "none", border: "none", cursor: "pointer",
                color: "#6b7280", padding: "0.4rem",
                lineHeight: 1,
              }}
              aria-label={t.nav.fermer}>
              <X size={28} strokeWidth={1.5} />
            </button>

            {/* Barre de recherche */}
            <form onSubmit={handleSearch}>
              <div style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder={t.nav.placeholder}
                  style={{
                    width: "100%",
                    padding: "1.1rem 4rem 1.1rem 1.6rem",
                    border: "2px solid #0066ff",
                    borderRadius: 40,
                    fontSize: "1.05rem",
                    outline: "none",
                    background: "#f9f8f5",
                    color: "#111",
                    boxSizing: "border-box",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer",
                    color: "#0066ff", display: "flex", alignItems: "center",
                  }}>
                  <Search size={22} strokeWidth={2} />
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {/* Overlay mobile */}
      <div onClick={() => setMenuOpen(false)} style={{
        position: "fixed", inset: 0, zIndex: 1998,
        background: "rgba(10, 15, 30, 0.4)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "auto" : "none",
        transition: "opacity 0.4s ease"
      }} />

      {/* Panel mobile */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0,
        width: "min(340px, 85vw)",
        background: "#fff",
        zIndex: 1999,
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        display: "flex", flexDirection: "column",
        overflowY: "auto",
        borderLeft: "4px solid #0066ff",
        boxShadow: "-10px 0 30px rgba(0,0,0,0.1)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.75rem", borderBottom: "1px solid #f3f4f6" }}>
          <Link href={`/`} onClick={() => setMenuOpen(false)}>
            <Image src="/images/logo-slogan1.png" alt="BDT" width={160} height={56} style={{ objectFit: "contain", height: 56, width: "auto" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.1rem", alignItems: "center" }}>
              <button onClick={() => changeLang("fr")} style={styleLang("fr")}>fr</button>
              <span style={{ color: "#d1d5db" }}>|</span>
              <button onClick={() => changeLang("en")} style={styleLang("en")}>en</button>
            </div>
            <button onClick={() => setMenuOpen(false)} aria-label={t.nav.fermer}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#6b7280", padding: "0.3rem" }}>
              <X size={26} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <nav style={{ padding: "1.5rem 0", flexGrow: 1 }}>
          {NAV_ITEMS.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link key={i} href={item.href} onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex", alignItems: "center", gap: "1.25rem",
                  padding: "1.1rem 1.75rem",
                  color: isActive ? "#0066ff" : "#0D1B2A",
                  fontWeight: isActive ? 700 : 400, fontSize: "1.05rem",
                  borderBottom: "1px solid #f3f4f6",
                  borderLeft: isActive ? "3px solid #0066ff" : "3px solid transparent",
                  background: isActive ? "#fdf8ec" : "transparent",
                  transition: "background 0.15s, border-color 0.15s",
                  textDecoration: "none",
                }}
                onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.background = "#fdf8ec"; (e.currentTarget as HTMLElement).style.borderLeftColor = "#0066ff"; } }}
                onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent"; } }}>
                <div style={{ width: 38, height: 38, background: isActive ? "#0066ff" : "#fdf8ec", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <item.Icon size={18} color={isActive ? "#fff" : "#0066ff"} strokeWidth={1.8} />
                </div>
                {item.label}
              </Link>
            );
          })}

          {/* Recherche mobile */}
          <div style={{ padding: "1.5rem 1.75rem" }}>
            <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.5rem" }}>
              <div style={{ position: "relative", flexGrow: 1 }}>
                <Search size={14} color="var(--gray-400)" style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)" }} />
                <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder={t.nav.placeholder}
                  style={{ width: "100%", padding: "0.7rem 0.8rem 0.7rem 2.2rem", border: "1.5px solid #e5e7eb", borderRadius: 8, fontSize: "0.88rem", outline: "none", background: "#fff" }} />
              </div>
              <button type="submit" style={{ background: "#0066ff", color: "#fff", border: "none", padding: "0 1rem", borderRadius: 8, cursor: "pointer" }}>
                <Search size={16} color="#fff" />
              </button>
            </form>
          </div>
        </nav>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .sep-v        { display: none !important; }
          .burger-btn   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
