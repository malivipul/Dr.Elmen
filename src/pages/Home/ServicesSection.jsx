import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getServices, getServiceHeader, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const getOrderId = (service, fallback) => {
  const value = Number(service?.orderId);
  return Number.isFinite(value) && value > 0 ? value : fallback;
};

const ServicesSection = () => {
  const [servicesList, setServicesList] = useState([]);
  const [header, setHeader] = useState(null);
  const { lang } = useLanguage();

  useEffect(() => {
    getServiceHeader()
      .then((res) => {
        if (res.data) setHeader(res.data);
      })
      .catch((err) => console.error("Error fetching service header:", err));

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
        { en: "Executive advisory and decision-making support", de: "Strategische Beratung auf Führungsebene und Unterstützung bei unternehmerischen Entscheidungen" },
        { en: "Operational leadership and stabilisation", de: "Operative Führung und Stabilisierung in Veränderungsphasen" },
        { en: "Transformation program leadership", de: "Leitung komplexer Transformationsprogramme" },
        { en: "Stakeholder alignment and performance management", de: "Stakeholder-Alignment und Performance-Management" }
      ],
    },
    {
      title: { en: "AI Strategy Workshop for HR", de: "AI Strategie Workshop für HR" },
      slug: "ai-strategy-workshop-for-hr",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      points: [
        { en: "Overview of AI in HR including trends, opportunities, and risks", de: "Strategischer Überblick über den Einsatz von KI im HR – inklusive Trends, Chancen und potenzieller Risiken" },
        { en: "Identification and prioritisation of high-impact AI use cases", de: "Identifikation und Priorisierung von KI-Anwendungsfällen mit hoher geschäftlichem Mehrwert" },
        { en: "Evaluation of ROI, feasibility, and business impact", de: "Bewertung von Wirtschaftlichkeit, Umsetzbarkeit und strategischer Wirkung" },
        { en: "Definition of implementation roadmap and governance model", de: "Definition einer klaren Implementierungs-Roadmap und eines nachhaltigen Governance-Rahmens" }
      ],
    },
    {
      title: { en: "Job Scheduling & Workload Automation", de: "Job Scheduling & Workload Automation" },
      slug: "job-scheduling-workload-automation",
      img: "/assets/images/close-up-data-center-programmers-using-pc-visualize-ai-neural-networks (1).jpg",
      points: [
        { en: "Automic Automation (UC4), BMC Control-M, IWS & SAP ERP workflow automation", de: "Fundierte Expertise in Automic Automation (UC4), BMC Control-M, IWS und SAP ERP-basierter Workflow-Automatisierung" },
        { en: "Workload automation and orchestration", de: "Strategische Workload-Automatisierung und Orchestrierung geschäftskritischer Prozesse" },
        { en: "SAP integration and batch processing", de: "Nahtlose SAP-Integration und optimierte Steuerung von Batch-Processing-Prozessen" },
        { en: "AI-driven intelligent workflows", de: "KI-gestützte intelligente Workflows für zukunftsfähige Prozessautomatisierung" }
      ],
    },
    {
      title: { en: "Digital Transformation for HR Workshop", de: "Digitaler Transformationsworkshop für HR" },
      slug: "digital-transformation-workshop-for-hr",
      img: "/assets/images/man-interacting-with-virtual-interface-modern-workspace.jpg",
      points: [
        { en: "Analysis of current HR processes and digital maturity", de: "Analyse bestehender HR-Prozesse und des digitalen Reifegrads" },
        { en: "Identification of digital transformation opportunities", de: "Identifizierung von Potenzialen für die digitale Transformation" },
        { en: "Evaluation of business impact and efficiency", de: "Bewertung von Geschäftswirkung, Effizienz und Optimierungspotenzialen" },
        { en: "Development of roadmap and implementation strategy", de: "Entwicklung einer Roadmap sowie einer passgenauen Umsetzungsstrategie" }
      ],
    }
  ];

  const displayList = servicesList.length > 0
    ? [...servicesList].sort((a, b) => getOrderId(a, 999) - getOrderId(b, 999))
    : staticServices;

  const formattedServices = displayList.map((service, index) => {
    const title = typeof service.title === "object" ? getBi(service.title, lang) : service.title;
    const slug = service.slug;
    const img = service.img && !service.img.startsWith("/assets") ? `${IMG_URL}${service.img}` : service.img;
    const number = String(index + 1).padStart(2, "0");

    // Use STICKY points if slug matches one of our static services
    const staticMatch = staticServices.find(s => s.slug === slug);
    let points = [];
    
    if (staticMatch) {
      points = staticMatch.points.map(p => getBi(p, lang));
    } else if (service.sections && service.sections.length > 0) {
      points = (service.sections[0].points || []).map(p => typeof p === "object" ? getBi(p, lang) : p);
    } else if (service.points) {
      points = service.points.map(p => typeof p === "object" ? getBi(p, lang) : p);
    }

    return { title, slug, img, number, points };
  });

  const hSubtitle = header ? getBi(header.subtitle, lang) : (lang === "EN" ? "Services" : "Leistungen");
  const hTitle = header ? getBi(header.title, lang) : (lang === "EN" ? "Workshops & Consulting" : "Workshops & Consulting");
  const hDesc = header ? getBi(header.description, lang) : (lang === "EN" 
    ? "From strategic advisory to hands-on implementation — I deliver across the full transformation lifecycle."
    : "Von der strategischen Beratung bis zur operativen Umsetzung – ich begleite Transformation über den gesamten Veränderungsprozess hinweg.");

  return (
    <section className="bg-[#f4f4f4] py-[60px]">

      {/* TOP */}
      <div className="max-w-[1100px] mx-auto px-[20px] md:px-[60px] text-center mb-10">

        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          {hSubtitle}
        </span>

        <h2 className="title-font text-2xl md:text-[36px] text-black mt-3 mb-3">
          {hTitle}
        </h2>

        <p className="text-[#0a3e40] text-[16px] max-w-2xl mx-auto leading-relaxed">
          {hDesc}
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
                  : "Stehen Sie vor einer konkreten Herausforderung oder möchten Sie Ihre KI-Transformation gezielt auf den Weg bringen?"}
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
