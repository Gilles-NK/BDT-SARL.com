"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLangue } from "../../lib/LangueContext";
import { MapPin, Mail, Phone, Clock, ChevronRight, BookOpen } from "lucide-react";

export default function ServiceDetailClient({ id }: { id: string }) {
  const { t, langue } = useLangue();
  const sLocal = t.servicesPage;

  const service = sLocal.items.find((srv) => srv.id === id);
  if (!service) {
    notFound();
  }

  const details = service.details;
  const tabs = details?.tabs || [];
  const [activeTab, setActiveTab] = useState(tabs.length > 0 ? tabs[0].id : "");

  const ADESSO_BLUE = "#0066ff";
  const NAVY_TEXT = "#1a1a2e";

  const currentTabObj = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="page-wrapper">
      {/* --- BANNIERE HERO : 560PX --- */}
      <section className="hero-section">
        <div className="ken-burns-wrapper">
          <Image
            src={details?.mainImage || "/images/6.jpg"}
            alt="Hero Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="breadcrumb-glass">
            <Link href="/">{langue === 'fr' ? 'Accueil' : 'Home'}</Link>
            <ChevronRight size={14} style={{ opacity: 0.5 }} />
            <Link href="/services">Services</Link>
            <ChevronRight size={14} style={{ opacity: 0.5 }} />
            <span className="current-page">{service.titre}</span>
          </div>
          <h1 className="hero-title">{service.titre}</h1>
          <div className="hero-underline" />
        </div>
      </section>

      {/* --- SECTION DIVISÉE (BLANC / GRIS) --- */}
      <section className="split-layout-section">
        <div className="layout-container">

          {/* COLONNE GAUCHE - FOND BLANC */}
          <main className="main-content-area">
            <div className="zoom-wrapper">
              <div className="service-image-box">
                <Image
                  src={details?.mainImage || "/images/4.jpg"}
                  alt={service.titre}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="navigation-tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-btn ${activeTab === tab.id ? "is-active" : ""}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {currentTabObj && (
                <div className="tab-content-text">
                  <h2 className="tab-title">{currentTabObj.label}</h2>
                  <p className="tab-paragraph">{currentTabObj.content}</p>
                </div>
              )}

              {/* SECTION CATALOGUE DE FORMATIONS (EXCLUSIF AUDIT) */}
              {id === 'audit' && details?.formationsData && (
                <div className="training-catalog-area">
                  <div className="catalog-header">
                    <BookOpen size={24} color={ADESSO_BLUE} />
                    <h3 className="catalog-title">
                      {langue === 'fr' ? 'Nos Formations & Tarifs' : 'Our Training & Rates'}
                    </h3>
                  </div>

                  <div className="pricing-list">
                    {details.formationsData.map((f: any, i: number) => (
                      <div key={i} className="pricing-row">
                        <div className="pricing-left">
                          <span className="formation-name">{f.name}</span>
                        </div>
                        <div className="pricing-center">
                          <Clock size={16} className="icon-clock" />
                          <span className="formation-duration">{f.duration}</span>
                        </div>
                        <div className="pricing-right">
                          <div className="price-box">
                            <div className="price-item blue">
                              <span className="price-label">{details.trainingMeta?.priceLabel} :</span>
                              <span className="price-value">{f.price}</span>
                            </div>
                            <div className="price-item dark">
                              <span className="price-label">{details.trainingMeta?.regLabel} :</span>
                              <span className="price-value">{f.reg}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="training-extra-sections">
                    <div className="extra-box modalities">
                      <h4 className="extra-title">{details.trainingMeta?.modalitiesTitle}</h4>
                      <ul className="extra-list">
                        {details.trainingMeta?.modalities.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="extra-box engagement">
                      <h4 className="extra-title highlight">{details.trainingMeta?.engagementTitle}</h4>
                      <div className="engagement-grid">
                        {details.trainingMeta?.engagement.map((item: string, i: number) => (
                          <div key={i} className="engagement-item">
                            <ChevronRight size={14} color={ADESSO_BLUE} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION MOSAIC TAGS - AUTRES SERVICES (SI BESOIN) */}
              {id !== 'audit' && service.points && service.points.length > 0 && (
                <div className="mosaic-tags-area">
                  <div className="points-header">
                    <BookOpen size={24} color={ADESSO_BLUE} />
                    <h3 className="points-title">
                      {langue === 'fr' ? 'Compétences & Thèmes de Formation' : 'Skills & Training Topics'}
                    </h3>
                  </div>
                  
                  <div className="tags-mosaic">
                    {service.points.map((p, i) => (
                      <div key={i} className="skill-pill">
                        <span className="pill-text">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </main>

          {/* COLONNE DROITE - FOND GRIS (SIDEBAR) */}
          <aside className="sidebar-area">
            <div className="sidebar-sticky-content">

              <div className="widget-box">
                <h3 className="widget-title">Services</h3>
                <ul className="services-nav-list">
                  {sLocal.items.map((srv) => (
                    <li key={srv.id}>
                      <Link href={`/services/${srv.id}`} className={srv.id === id ? "active" : ""}>
                        {srv.titre}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget-box">
                <h3 className="widget-title">Contact</h3>
                <ul className="contact-info-list">
                  <li>
                    <MapPin size={18} className="icon-blue" />
                    <span>Akwa, Rue Pau<br />Douala, Cameroun</span>
                  </li>
                  <li>
                    <Mail size={18} className="icon-blue" />
                    <a href="mailto:info@bdt.com">info@bdt.com</a>
                  </li>
                  <li>
                    <Phone size={18} className="icon-blue" />
                    <div className="phone-stack">
                      <a href="tel:+237670959454">+237 670 95 94 54</a>
                      <a href="tel:+237659081012">+237 659 08 10 12</a>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </section>

      <style jsx>{`
        .page-wrapper { width: 100%; overflow-x: hidden; }

        /* HERO */
        .hero-section {
          position: relative; width: 100%; height: 560px; overflow: hidden;
          display: flex; flex-direction: column; justify-content: center; align-items: center;
        }
        .ken-burns-wrapper { position: absolute; inset: 0; z-index: 0; }
        .ken-burns-wrapper :global(img) { animation: kenBurnsEffect 20s ease-in-out infinite alternate !important; }
        @keyframes kenBurnsEffect { from { transform: scale(1); } to { transform: scale(1.15); } }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(8,16,52,0.85), rgba(8,16,52,0.6), rgba(8,16,52,0.9));
          zIndex: 1;
        }
        .hero-content { position: relative; z-index: 2; text-align: center; font-family: 'Ubuntu', sans-serif; }
        .hero-title { color: #fff; font-size: clamp(2.2rem, 6vw, 4rem); font-weight: 800; text-transform: uppercase; }
        .hero-underline { width: 80px; height: 4px; background: ${ADESSO_BLUE}; margin: 15px auto 0; }
        .breadcrumb-glass {
          display: inline-flex; align-items: center; gap: 10px; background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px); padding: 6px 18px; border-radius: 100px; margin-bottom: 20px; font-size: 0.85rem; color: #fff;
        }
        .breadcrumb-glass :global(a) { color: inherit; text-decoration: none; }
        .current-page { color: ${ADESSO_BLUE}; font-weight: 700; }

        /* --- STRUCTURE DIVISÉE (PRINCIPE BLANC / GRIS) --- */
        .split-layout-section {
          width: 100%;
          background: linear-gradient(to right, #ffffff 50%, #f4f7f9 50%); /* Division 50/50 du fond */
          display: flex;
          justify-content: center;
        }

        .layout-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
        }

        @media (min-width: 992px) {
          .layout-container { flex-direction: row; }
        }

        /* GAUCHE - CONTENU SUR BLANC */
        .main-content-area {
          flex: 1;
          background: #ffffff;
          padding: 60px 40px;
          overflow: hidden;
        }

        .zoom-wrapper {
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .main-content-area:hover .zoom-wrapper { transform: scale(1.02); }

        .service-image-box {
          position: relative; width: 100%; height: 480px; border-radius: 4px; overflow: hidden;
        }

        .navigation-tabs { display: flex; background: #f8f9fa; border-bottom: 1px solid #eee; margin-top: 0px; }
        .tab-btn {
          flex: 1; padding: 1.2rem; border: none; background: none; cursor: pointer;
          font-family: 'Ubuntu', sans-serif; font-weight: 600; font-size: 0.9rem; color: #64748b;
          border-top: 3px solid transparent; transition: all 0.3s;
        }
        .tab-btn.is-active { background: #fff; color: ${NAVY_TEXT}; border-top: 3px solid #0066ff; }

        .tab-content-text { padding: 40px 0; }
        .tab-title { font-size: 1.8rem; color: ${NAVY_TEXT}; margin-bottom: 20px; font-weight: 700; }
        .tab-paragraph { color: #475569; line-height: 1.8; font-size: 1.05rem; text-align: justify; }

        /* TRAINING CATALOG SECTION (AUDIT) */
        .training-catalog-area {
          margin-top: 50px;
          padding-top: 40px;
          border-top: 1px solid #f1f5f9;
        }
        .catalog-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
        }
        .catalog-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: ${NAVY_TEXT};
          margin: 0;
        }
        .pricing-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }
        .pricing-row {
          background: #ffffff;
          border: 1px solid #eeeeee;
          border-radius: 4px;
          padding: 20px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          cursor: default;
        }
        .pricing-row:hover {
          transform: translateX(10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          border-color: ${ADESSO_BLUE};
        }
        .formation-name {
          font-weight: 800;
          font-size: 1.1rem;
          color: ${NAVY_TEXT};
        }
        .pricing-center {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 0.95rem;
        }
        .icon-clock {
          color: ${ADESSO_BLUE};
        }
        .price-box {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: right;
        }
        .price-item {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
          font-size: 0.9rem;
        }
        .price-item.blue { color: ${ADESSO_BLUE}; font-weight: 700; }
        .price-item.dark { color: #334155; font-weight: 600; }
        .price-label { opacity: 0.8; font-size: 0.8rem; text-transform: uppercase; }

        .training-extra-sections {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }
        .extra-box {
          padding: 25px;
          background: #f8fafc;
          border-radius: 4px;
          border: 1px solid #eee;
        }
        .extra-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: ${NAVY_TEXT};
        }
        .extra-title.highlight {
          color: ${ADESSO_BLUE};
          border-bottom: 2px solid ${ADESSO_BLUE};
          display: inline-block;
          padding-bottom: 5px;
        }
        .extra-list {
          list-style: disc;
          padding-left: 20px;
          color: #475569;
          font-size: 0.95rem;
        }
        .extra-list li { margin-bottom: 8px; }
        .engagement-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .engagement-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          color: #475569;
        }

        @media (max-width: 768px) {
          .pricing-row { flex-direction: column; gap: 15px; text-align: center; }
          .price-box { text-align: center; }
          .price-item { justify-content: center; }
          .training-extra-sections { grid-template-columns: 1fr; }
        }

        /* MOSAIC TAGS SECTION */
        .mosaic-tags-area {
          margin-top: 45px;
          padding-top: 35px;
          border-top: 1px solid #f1f5f9;
        }
        .points-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
        }
        .points-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: ${NAVY_TEXT};
          margin: 0;
        }
        .tags-mosaic {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .skill-pill {
          background: #f0f7ff;
          color: ${ADESSO_BLUE};
          border: 1.5px solid #e0eeff;
          padding: 10px 24px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: default;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          z-index: 1;
        }
        .skill-pill:hover {
          transform: scale(1.1);
          background: ${ADESSO_BLUE};
          color: #ffffff;
          border-color: ${ADESSO_BLUE};
          box-shadow: 0 10px 25px rgba(0, 102, 255, 0.35);
          z-index: 2;
        }
        .pill-text {
          white-space: nowrap;
        }

        @media (max-width: 600px) {
          .tags-mosaic { gap: 8px; }
          .skill-pill { padding: 8px 18px; font-size: 0.9rem; }
        }

        /* DROITE - SIDEBAR SUR GRIS */
        .sidebar-area {
          width: 100%;
          background: #f4f7f9;
          padding: 60px 30px;
        }
        @media (min-width: 992px) {
          .sidebar-area { width: 340px; flex-shrink: 0; padding-left: 50px; }
        }

        .widget-title {
          font-size: 1.3rem; font-weight: 800; color: #1a1a2e;
          padding-bottom: 10px; margin-bottom: 20px; display: flex; align-items: center;
        }
        .widget-title::before { content: ""; width: 25px; height: 4px; background: #0066ff; margin-right: 12px; }

        .services-nav-list { list-style: none !important; padding: 0 !important; margin-bottom: 40px; }
        .services-nav-list li { border-bottom: 1px solid #e2e8f0 !important; }
        .services-nav-list :global(a) {
          display: block !important; padding: 15px 0 !important;
          text-decoration: none !important; color: #475569 !important;
          font-size: 0.92rem !important; font-weight: 600;
          text-transform: uppercase; transition: all 0.3s ease; position: relative;
        }
        .services-nav-list :global(a:hover), .services-nav-list :global(a.active) {
          color: #0066ff !important; padding-left: 15px !important;
        }
        .services-nav-list :global(a::before) {
          content: "" !important; position: absolute; left: 0; top: 30%; bottom: 30%;
          width: 3px; background-color: #0066ff; transform: scaleY(0); transition: transform 0.3s;
        }
        .services-nav-list :global(a:hover::before), .services-nav-list :global(a.active::before) { transform: scaleY(1); }

        .contact-info-list { list-style: none !important; padding: 0 !important; }
        .contact-info-list li { display: flex !important; gap: 15px !important; margin-bottom: 20px; color: #64748b !important; font-size: 0.9rem; }
        .icon-blue { color: #0066ff !important; flex-shrink: 0; }
        .contact-info-list :global(a) { color: inherit !important; text-decoration: none !important; }
        .phone-stack { display: flex; flex-direction: column; gap: 5px; }

        @media (max-width: 991px) {
          .split-layout-section { background: #ffffff; flex-direction: column; }
          .sidebar-area { background: #f4f7f9; }
        }
      `}</style>
    </div>
  );
}