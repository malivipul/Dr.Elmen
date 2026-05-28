import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getServiceBySlug,
  getServices,
  getBi,
  getCached,
  setCached,
} from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
 
const getOrderId = (service, fallback) => {
  const value = Number(service?.orderId);
  return Number.isFinite(value) && value > 0 ? value : fallback;
};
 
export default function WorkshopDetailsPage() {
  const { slug } = useParams();
  const { lang } = useLanguage();
 
  const cacheKey = `workshop_details_${slug}_${lang}`;
  const servicesCacheKey = `all_services_${lang}`;
 
  const cachedWorkshop = getCached(cacheKey);
  const cachedAllServices = getCached(servicesCacheKey);
 
  const [workshop, setWorkshop] = useState(cachedWorkshop || null);
  const [allServices, setAllServices] = useState(cachedAllServices || []);
  const [loading, setLoading] = useState(!cachedWorkshop);
 
  useEffect(() => {
    getServiceBySlug(slug)
      .then((res) => {
        if (res.data) {
          setWorkshop(res.data);
          setCached(cacheKey, res.data);
        } else {
          setWorkshop(null);
        }
      })
      .catch((err) => {
        console.error("Error fetching service by slug:", err);
        setWorkshop(null);
      })
      .finally(() => setLoading(false));
  }, [slug, lang]);
 
  useEffect(() => {
    getServices()
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const sorted = [...res.data].sort(
            (a, b) => getOrderId(a, 9999) - getOrderId(b, 9999),
          );
          setAllServices(sorted);
          setCached(servicesCacheKey, sorted);
        }
      })
      .catch((err) => {
        console.error("Error fetching all services:", err);
      });
  }, [lang]);
 
  if (loading) {
    return (
      <div className="py-32 text-center text-2xl text-black bg-[#f4f4f4] min-h-[50vh] flex items-center justify-center font-serif">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#b8965a] border-t-transparent rounded-full animate-spin"></div>
          <span>
            {lang === "EN" ? "Loading Details..." : "Lade Details..."}
          </span>
        </div>
      </div>
    );
  }
 
  if (!workshop) {
    return (
      <div className="py-32 text-center text-2xl text-black bg-[#f4f4f4] min-h-[50vh] flex items-center justify-center font-serif">
        {lang === "EN" ? "Item Not Found" : "Eintrag nicht gefunden"}
      </div>
    );
  }
 
  // Safe extraction helpers
  const wTitle =
    typeof workshop.title === "object"
      ? getBi(workshop.title, lang)
      : workshop.title;
  const wObjective =
    typeof workshop.objective === "object"
      ? getBi(workshop.objective, lang)
      : workshop.objective;
  const wNote =
    typeof workshop.note === "object"
      ? getBi(workshop.note, lang)
      : workshop.note;
 
  const objectiveTitle =
    workshop.objectiveTitle &&
      (workshop.objectiveTitle.en || workshop.objectiveTitle.de)
      ? getBi(workshop.objectiveTitle, lang)
      : lang === "EN"
        ? "Objective"
        : "Ziel";
 
  const sectionsTitle =
    workshop.sectionsTitle &&
      (workshop.sectionsTitle.en || workshop.sectionsTitle.de)
      ? getBi(workshop.sectionsTitle, lang)
      : lang === "EN"
        ? "Key Service Areas"
        : "Wichtige Servicebereiche";
 
  const outcomesTitle =
    workshop.outcomesTitle &&
      (workshop.outcomesTitle.en || workshop.outcomesTitle.de)
      ? getBi(workshop.outcomesTitle, lang)
      : lang === "EN"
        ? "Key technologies and platforms"
        : "Schlüsseltechnologien und Plattformen";
 
  // Sanitise and filter sections
  let sections = (workshop.sections || [])
    .map((sec) => {
      const heading =
        typeof sec.heading === "object"
          ? getBi(sec.heading, lang)
          : sec.heading;
      const points = (sec.points || [])
        .map((p) => (typeof p === "object" ? getBi(p, lang) : p))
        .filter((p) => p && p.trim() !== "");
      return { ...sec, heading, points };
    })
    .filter(
      (sec) =>
        (sec.heading && sec.heading.trim() !== "") || sec.points.length > 0,
    );
 
  // Sanitise and filter outcomes
  let outcomes = (workshop.outcomes || [])
    .map((o) => (typeof o === "object" ? getBi(o, lang) : o))
    .filter((o) => o && typeof o === "string" && o.trim() !== "");
 
  const isService = workshop.type === "service";
 
  const renderSections = (isInsideBox = false) =>
    sections.length > 0 && (
      <div className={isInsideBox ? "mt-10 relative z-10" : ""}>
        <h2 className="title-font text-[22px] md:text-[24px] mb-5 text-black">
          {sectionsTitle}
        </h2>
 
        {/* CARDS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {sections.map((section, index) => {
            const heading =
              typeof section.heading === "object"
                ? getBi(section.heading, lang)
                : section.heading;
            const points = section.points || [];
 
            return (
              <div
                key={index}
                className="group bg-[#faf8f4] hover:bg-white rounded-[20px] p-4 border border-[#ece6dc] hover:border-[#d4b17d] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]"
              >
                {/* HEADING */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="min-w-[32px] w-[32px] h-[32px] rounded-full bg-[#b8965a] text-white flex items-center justify-center text-[11px] font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="title-font !font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.3] text-black">
                    {heading}
                  </h3>
                </div>
 
                {/* POINTS */}
                <div className="space-y-2.5">
                  {points.map((point, i) => {
                    const pointText =
                      typeof point === "object" ? getBi(point, lang) : point;
                    return (
                      <div key={i} className="flex items-start gap-2.5">
                        {/* ICON */}
                        <span className="text-[#b8965a] text-[13px] mt-[4px]">
                          ✔
                        </span>
                        {/* TEXT */}
                        <p className="text-[14px] md:text-[15px] text-[#0a3e40] leading-[27px]">
                          {pointText}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
 
  const renderOutcomes = () =>
    outcomes.length > 0 && (
      <div className="bg-[#050505] rounded-[26px] p-4 md:p-6 relative overflow-hidden mb-6">
        {/* EFFECT */}
        <div className="absolute bottom-[-80px] right-[-80px] w-[180px] h-[180px] bg-[#d4b17d]/10 rounded-full blur-[70px]"></div>
 
        <h2 className="title-font text-[20px] md:text-[22px] mb-5 text-white relative z-10">
          {outcomesTitle}
        </h2>
 
        {/* OUTCOMES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
          {outcomes.map((item, index) => {
            const outcomeText =
              typeof item === "object" ? getBi(item, lang) : item;
            return (
              <div
                key={index}
                className="group bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 hover:border-[#d4b17d]/40 rounded-[18px] px-4 py-4 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  {/* ICON */}
                  <span className="min-w-[22px] w-[22px] h-[22px] rounded-full bg-[#b8965a] flex items-center justify-center text-white text-[11px] mt-[2px]">
                    ✔
                  </span>
                  {/* TEXT */}
                  <p className="text-[14px] md:text-[15px] text-[#f5f5f5] leading-[28px]">
                    {outcomeText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
 
  return (
    <section className="bg-[#f4f4f4] min-h-screen py-10 md:py-14">
      <div className="max-w-[1420px] mx-auto px-[24px] md:px-[40px]">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_30%] gap-8 lg:gap-[5%] items-start">
          {/* LEFT CONTENT */}
          <div>
            {/* MAIN BOX */}
            <div className="bg-white rounded-[26px] p-6 md:p-10 border border-[#ece6dc] shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
              {/* BACK BUTTON */}
              <Link
                to="/workshops"
                className="inline-flex items-center gap-2 text-[#b8965a] hover:text-black transition-colors mb-6 font-medium group relative z-10"
              >
                <span className="group-hover:-translate-x-1 transition-transform text-[22px] md:text-[16px]">
                  ←
                </span>
                {lang === "EN"
                  ? "Back to Workshops"
                  : "Zurück zu den Workshops"}
              </Link>
 
              {/* BG EFFECT */}
              <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-[#d4b17d]/10 rounded-full blur-[80px]"></div>
 
              {/* TITLE */}
              <h1 className="title-font text-[28px] md:text-[34px] leading-[1.15] text-black mb-5 relative z-10">
                {wTitle}
              </h1>
 
              {/* OBJECTIVE */}
              <div className="mb-0 relative z-10">
                <h2 className="title-font text-[20px] md:text-[24px] mb-4 text-black">
                  {objectiveTitle}
                </h2>
                <div
                  className="rich-text text-[15px] md:text-[16px] text-[#0a3e40] leading-[30px]"
                  dangerouslySetInnerHTML={{ __html: wObjective }}
                />
              </div>
 
              {/* WORKSHOP STRUCTURE (Condition: show here ONLY for workshops) */}
              {!isService && renderSections(true)}
            </div>
 
            {/* OUTCOMES + STRUCTURE + SUPPORT (Dynamic Order) */}
            <div className="mt-6">
              {isService ? (
                <>
                  {/* For Service: Outcomes first, then Structure (in box), then Note */}
                  {renderOutcomes()}
                  {sections.length > 0 && (
                    <div className="bg-white rounded-[26px] p-6 md:p-10 border border-[#ece6dc] shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden mb-6">
                      {renderSections()}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* For Workshop: Structure is already in main box, show outcomes below */}
                  {renderOutcomes()}
                </>
              )}
 
              {/* ADDITIONAL SUPPORT */}
              {wNote && (
                <div className="group bg-[#faf8f4] hover:bg-white border border-[#d9bb86] rounded-[26px] p-5 md:p-6 relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]">
                  <div
                    className="rich-text text-[15px] md:text-[16px] text-[#0a3e40] leading-[32px]"
                    dangerouslySetInnerHTML={{ __html: wNote }}
                  />
                </div>
              )}
            </div>
          </div>
 
          {/* RIGHT STICKY BOX */}
          <div className="lg:sticky lg:top-[120px] h-fit">
            <div className="bg-[#e7dfd7] rounded-[28px] p-6 md:p-8 overflow-hidden relative border border-[#ece6dc]">
              {/* EFFECT */}
              <div className="absolute top-[-60px] right-[-60px] w-[150px] h-[150px] bg-[#d4b17d]/10 rounded-full blur-[60px]"></div>
 
              {/* TITLE */}
              <h3 className="title-font text-[24px] md:text-[26px] text-black mb-5 relative z-10 leading-[1.3]">
                {lang === "EN"
                  ? "Workshops & Consulting"
                  : "Workshops & Beratung"}
              </h3>
 
              {/* SERVICES */}
              <div className="space-y-3 relative z-10">
                {allServices.map((service, index) => {
                  const title =
                    typeof service.title === "object"
                      ? getBi(service.title, lang)
                      : service.title;
                  const isActive = service.slug === slug;
 
                  return (
                    <Link
                      key={index}
                      to={`/workshops-details/${service.slug}`}
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      className={`group block rounded-[16px] px-4 py-3 transition-all duration-500 border ${isActive
                          ? "bg-[#b8965a] border-[#b8965a]"
                          : "bg-white hover:bg-[#b8965a] border-[#ece6dc] hover:border-[#b8965a]"
                        }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        {/* TEXT */}
                        <p
                          className={`text-[14px] md:text-[15px] leading-[26px] transition-all duration-500 ${isActive
                              ? "text-white"
                              : "text-[#111111] group-hover:text-white"
                            }`}
                        >
                          {title}
                        </p>
 
                        {/* ARROW */}
                        <span
                          className={`text-[18px] transition-all duration-500 ${isActive
                              ? "text-white"
                              : "text-[#b8965a] group-hover:text-white group-hover:translate-x-1"
                            }`}
                        >
                          →
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
 