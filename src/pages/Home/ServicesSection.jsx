import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getServices, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const ServicesSection = () => {
  const [servicesList, setServicesList] = useState([]);
  const { lang } = useLanguage();

  useEffect(() => {
    getServices()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data) ? res.data : (res.data.value || []);
          setServicesList(list);
        }
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const staticServices = [
    {
      title: { en: "Interim Management Services", de: "Interim Management Services" },
      slug: "interim-management-services",
      img: "/assets/images/unrecognizable-businesspeople-studying-statistics-holding-papers-with-hands.jpg",
      points: [
        { en: "Executive advisory and decision-making support.", de: "Unterstützung bei der Beratung von Führungskräften und Entscheidungsfindung." },
        { en: "Operational leadership and stabilisation.", de: "Operative Führung und Stabilisierung." },
        { en: "Transformation program leadership.", de: "Leitung von Transformationsprogrammen." },
        { en: "Stakeholder alignment and performance management.", de: "Stakeholder-Abstimmung und Leistungsmanagement." }
      ],
    },
    {
      title: { en: "AI Strategy Workshop for HR", de: "KI-Strategie-Workshop für HR" },
      slug: "ai-strategy-workshop-for-hr",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      points: [
        { en: "Overview of AI in HR including trends, opportunities, and risks.", de: "Überblick über KI im HR-Bereich inklusive Trends, Chancen und Risiken." },
        { en: "Identification and prioritisation of high-impact AI use cases.", de: "Identifizierung und Priorisierung von KI-Anwendungsfällen mit hoher Wirkung." },
        { en: "Evaluation of ROI, feasibility, and business impact.", de: "Bewertung von ROI, Machbarkeit und geschäftlichen Auswirkungen." },
        { en: "Definition of implementation roadmap and governance model.", de: "Definition des Implementierungs-Fahrplans und des Governance-Modells." }
      ],
    },
    {
      title: { en: "Process Modelling & Workload Automation", de: "Prozessmodellierung & Workload-Automatisierung" },
      slug: "process-modelling-and-workload-automation",
      img: "/assets/images/close-up-data-center-programmers-using-pc-visualize-ai-neural-networks (1).jpg",
      points: [
        { en: "Automic Automation (UC4), BMC Control-M, IWS & SAP ERP workflow automation.", de: "Automic Automation (UC4), BMC Control-M, IWS & SAP ERP Workflow-Automatisierung." },
        { en: "Workload automation and orchestration.", de: "Workload-Automatisierung und -Orchestrierung." },
        { en: "SAP integration and batch processing.", de: "SAP-Integration und Stapelverarbeitung." },
        { en: "AI-driven intelligent workflows.", de: "KI-gestützte intelligente Workflows." }
      ],
    },
    {
      title: { en: "Digital Transformation Workshop", de: "Digitale Transformations-Workshop" },
      slug: "digital-transformation-workshop",
      img: "/assets/images/man-interacting-with-virtual-interface-modern-workspace.jpg",
      points: [
        { en: "Analysis of current HR processes and digital maturity.", de: "Analyse aktueller HR-Prozesse und digitaler Reife." },
        { en: "Identification of digital transformation opportunities.", de: "Identifizierung von Möglichkeiten der digitalen Transformation." },
        { en: "Evaluation of business impact and efficiency.", de: "Bewertung von Geschäftsauswirkungen und Effizienz." },
        { en: "Development of roadmap and implementation strategy.", de: "Entwicklung von Roadmap und Implementierungsstrategie." }
      ],
    }
  ];

  const rawServices = servicesList && servicesList.length > 0 ? servicesList : staticServices;

  const formattedServices = rawServices.map((service, index) => {
    const title = typeof service.title === "object" ? getBi(service.title, lang) : service.title;
    const slug = service.slug;
    const img = service.img
      ? (service.img.startsWith("http") || service.img.startsWith("/assets") ? service.img : `${IMG_URL}${service.img}`)
      : "/assets/images/unrecognizable-businesspeople-studying-statistics-holding-papers-with-hands.jpg";

    const number = String(index + 1).padStart(2, "0");

    let points = [];
    if (service.sections && service.sections.length > 0) {
      // Show module headings instead of individual points
      points = service.sections
        .map(sec => sec.heading ? (typeof sec.heading === "object" ? getBi(sec.heading, lang) : sec.heading) : "")
        .filter(h => h && h.trim() !== "");
    }
    
    if (points.length === 0 && service.outcomes && service.outcomes.length > 0) {
      points = service.outcomes
        .map(o => typeof o === "object" ? getBi(o, lang) : o)
        .filter(o => o && o.trim() !== "");
    }
    
    if (points.length === 0 && service.points) {
      points = service.points
        .map(p => typeof p === "object" ? getBi(p, lang) : p)
        .filter(p => p && p.trim() !== "");
    }

    // Ultimate fallback if points array ended up empty (e.g. database has blank arrays or empty strings)
    if (points.length === 0) {
      const staticServ = staticServices.find(s => s.slug === slug);
      if (staticServ && staticServ.points) {
        points = staticServ.points
          .map(p => typeof p === "object" ? getBi(p, lang) : p)
          .filter(p => p && p.trim() !== "");
      }
    }

    // Restrict output to a maximum of 4 items
    points = points.slice(0, 4);

    return { title, slug, img, number, points };
  });

  return (
    <section className="bg-[#f4f4f4] py-[60px]">

      {/* TOP */}
      <div className="max-w-[1100px] mx-auto px-[20px] md:px-[60px] text-center mb-10">

        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          Services
        </span>

        <h2 className="title-font text-2xl md:text-[36px] text-black mt-3 mb-3">
          Workshops & Consulting
        </h2>

        <p className="text-[#0a3e40] text-[16px] max-w-2xl mx-auto leading-relaxed">
          From strategic advisory to hands-on implementation —
          I deliver across the full transformation lifecycle.
        </p>

      </div>

      {/* SERVICES */}
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] space-y-6">

        {formattedServices.map((service, index) => (

          <Link
            key={index}
            to={`/workshops-details/${service.slug}`}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="block bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >

            <div className={`grid md:grid-cols-2 items-stretch ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>

              {/* IMAGE */}
              <div className="relative">

                <img
                  src={service.img}
                  className="w-full h-full min-h-[240px] md:min-h-[260px] object-cover"
                  alt={service.title}
                />

              </div>

              {/* CONTENT */}
              <div className="relative p-6 md:p-8 flex flex-col justify-center">

                {/* NUMBER */}
                <div className="absolute top-5 right-5 w-[42px] h-[42px] rounded-[12px] bg-[#0a3e40] border border-white/20 shadow-lg flex items-center justify-center">

                  <span className="text-white text-[13px] font-semibold">
                    {service.number}
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="title-font text-[24px] md:text-[30px] leading-tight text-black mb-5 pr-[70px]">
                  {service.title}
                </h3>

                {/* POINTS */}
                <div className="space-y-3 text-[16px] text-[#0a3e40] leading-relaxed">

                  {service.points.map((p, i) => (

                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >

                      <span className="text-[#b8965a] mt-[2px] text-[14px]">
                        ✔
                      </span>

                      <p>
                        {p}
                      </p>

                    </div>

                  ))}

                </div>

                {/* BUTTON */}
                <div className="mt-6">

                  <span
                    className="inline-flex items-center gap-2 px-7 font-bold py-3 rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300"
                  >
                    {lang === "EN" ? "Learn More" : "Mehr erfahren"}

                    <i className="fa-solid fa-arrow-right text-[12px]"></i>
                  </span>

                </div>

              </div>

            </div>

          </Link>

        ))}

      </div>

      {/* LETS WORK TOGETHER CTA */}
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] mt-10">

        <div className="relative overflow-hidden rounded-[24px] min-h-[280px] flex items-center ">

          {/* BG IMAGE */}
          <div className="absolute inset-0">

            <img src="/assets/images/2.png"
              className="w-full h-full object-cover object-[10%_top]"
              alt="cta"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gray"></div>

          </div>

          {/* CONTENT */}
          <div className="relative z-10 w-full px-8 md:px-14 py-10">

            <div className="max-w-[520px]">

              {/* ICON + TITLE */}
              <div className="flex items-center gap-4 mb-5">

                <div className="w-[44px] h-[44px] rounded-full bg-[#0a3e40] flex items-center justify-center text-white text-[22px] shadow-lg">

                  <i className="fa-regular fa-calendar"></i>

                </div>

                <h3 className="title-font text-2xl md:text-[36px] leading-tight text-black font-semibold">
                  {lang === "EN" ? "Let’s work together" : "Lassen Sie uns zusammenarbeiten"}
                </h3>

              </div>

              {/* TEXT */}
              <p className="text-[#0a3e40] text-[17px] leading-[1.9] max-w-[430px]">
                {lang === "EN"
                  ? "Looking to solve a specific challenge or start your AI transformation journey?"
                  : "Möchten Sie eine bestimmte Herausforderung lösen oder Ihre KI-Transformationsreise beginnen?"}
              </p>

              {/* BUTTON */}
              <div className="mt-7">

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 font-bold py-3 rounded-full bg-[#b8965a] text-white text-sm  border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300"
                >
                  {lang === "EN" ? "Learn More" : "Mehr erfahren"}

                  <i className="fa-solid fa-arrow-right text-[12px]"></i>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServicesSection;