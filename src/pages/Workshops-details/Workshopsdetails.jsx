import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getServiceBySlug, getServices, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const getOrderId = (service, fallback) => {
  const value = Number(service?.orderId);
  return Number.isFinite(value) && value > 0 ? value : fallback;
};

const fallbackWorkshops = {
  "ai-strategy-workshop-for-hr": {
    title: { en: "AI Strategy Workshop for HR", de: "KI-Strategie-Workshop für HR" },
    objective: {
      en: "Enable HR leaders to identify, prioritize, and implement high-impact AI use cases that enhance efficiency, decision-making, and employee experience.",
      de: "Ermöglichen Sie HR-Führungskräften, hochwirksame KI-Anwendungsfälle zu identifizieren, zu priorisieren und zu implementieren, die die Effizienz, Entscheidungsfindung und Mitarbeitererfahrung verbessern."
    },
    sections: [
      {
        heading: { en: "Introduction & Strategic Framing", de: "Einführung & Strategische Rahmung" },
        points: [
          { en: "Overview of AI in HR (trends, opportunities, risks)", de: "Überblick über KI im HR-Bereich (Trends, Chancen, Risiken)" },
          { en: "Alignment with business and HR strategy", de: "Ausrichtung auf die Geschäfts- und HR-Strategie" },
          { en: "Key success factors and governance considerations", de: "Wichtige Erfolgsfaktoren und Governance-Überlegungen" }
        ]
      },
      {
        heading: { en: "Use Case Identification", de: "Identifizierung von Anwendungsfällen" },
        points: [
          { en: "Mapping HR processes (e.g., recruiting, talent development, workforce planning)", de: "Abbildung von HR-Prozessen (z.B. Rekrutierung, Talententwicklung, Personalplanung)" },
          { en: "Identifying AI-driven optimization potential", de: "Identifizierung von KI-gestütztem Optimierungspotenzial" },
          { en: "Benchmarking best practices and industry examples", de: "Benchmarking von Best Practices und Branchenbeispielen" }
        ]
      },
      {
        heading: { en: "Prioritization & Business Impact", de: "Priorisierung & Geschäftliche Auswirkungen" },
        points: [
          { en: "Evaluating use cases based on value, feasibility, and risk", de: "Bewertung von Anwendungsfällen basierend auf Wert, Machbarkeit und Risiko" },
          { en: "Defining quick wins vs. strategic initiatives", de: "Definition von Quick Wins im Vergleich zu strategischen Initiativen" },
          { en: "Estimating ROI and efficiency gains", de: "Schätzung von ROI und Effizienzgewinnen" }
        ]
      },
      {
        heading: { en: "Technology Advisory", de: "Technologieberatung" },
        points: [
          { en: "Evaluation of suitable AI tools, platforms, and vendors", de: "Evaluierung geeigneter KI-Tools, Plattformen und Anbieter" },
          { en: "Integration into existing HR systems and IT landscape", de: "Integration in bestehende HR-Systeme und die IT-Landschaft" },
          { en: "Build vs. buy vs. partner decisions", de: "Entscheidungen über Eigenentwicklung vs. Kauf vs. Partnerschaft" },
          { en: "Definition of implementation architecture and delivery approach (e.g., agile, pilot-based)", de: "Definition der Implementierungsarchitektur und des Bereitstellungsansatzes (z.B. agil, pilotbasiert)" }
        ]
      }
    ],
    outcomes: [
      { en: "Clear AI strategy for HR aligned with business objectives", de: "Klare KI-Strategie für HR, ausgerichtet auf die Geschäftsziele" },
      { en: "Prioritized portfolio of AI use cases with defined business impact", de: "Priorisiertes Portfolio von KI-Anwendungsfällen mit definierten geschäftlichen Auswirkungen" },
      { en: "Quantified efficiency gains and cost-saving potential", de: "Quantifizierte Effizienzgewinne und Kosteneinsparungspotenzial" },
      { en: "Customized technology approach and implementation", de: "Maßgeschneiderter Technologieansatz und Implementierung" },
      { en: "Established governance and foundation for sustainable AI adoption", de: "Etablierte Governance und Grundlage für eine nachhaltige KI-Einführung" }
    ],
    note: {
      en: "Depending on the scope, a tailored team of experts can be provided to support both consulting and technology implementation, working in a vendor-independent manner to ensure objective solution design, efficient delivery, and sustainable outcomes.",
      de: "Je nach Umfang kann ein maßgeschneidertes Expertenteam zusammengestellt werden, das sowohl die Beratung als auch die Technologieimplementierung herstellerunabhängig unterstützt, um ein objektives Lösungsdesign, eine effiziente Bereitstellung und nachhaltige Ergebnisse zu gewährleisten."
    }
  },
  "interim-management-services": {
    title: { en: "Interim Management Services", de: "Interim Management Services" },
    objective: {
      en: "Provide immediate executive leadership, stabilize operations, and steer complex organizational transformations during transition periods.",
      de: "Bieten Sie sofortige Führung auf Vorstandsebene, stabilisieren Sie den Betrieb und steuern Sie komplexe organisatorische Transformationen während Übergangsphasen."
    },
    sections: [
      {
        heading: { en: "Strategic Alignment & Scoping", de: "Strategische Ausrichtung & Scoping" },
        points: [
          { en: "Process review and immediate situational analysis", de: "Prozessüberprüfung und sofortige Situationsanalyse" },
          { en: "Definition of critical transition objectives", de: "Definition kritischer Übergangsziele" },
          { en: "Mapping of key stakeholders and resources", de: "Abbildung wichtiger Stakeholder und Ressourcen" }
        ]
      },
      {
        heading: { en: "Operational Stabilization", de: "Operative Stabilisierung" },
        points: [
          { en: "Direct functional leadership and team guidance", de: "Direkte funktionale Führung und Teamleitung" },
          { en: "Operational risk mitigation and conflict resolution", de: "Minimierung operativer Risiken und Konfliktlösung" },
          { en: "Ensuring continuity of daily business operations", de: "Sicherstellung der Kontinuität des täglichen Geschäftsbetriebs" }
        ]
      },
      {
        heading: { en: "Transformation & Execution", de: "Transformation & Ausführung" },
        points: [
          { en: "Executing organizational restructuring initiatives", de: "Durchführung von organisatorischen Restrukturierungsinitiativen" },
          { en: "Driving process standardization and performance improvements", de: "Förderung von Prozessstandardisierung und Leistungsverbesserungen" },
          { en: "Managing budgets and vendor relationships", de: "Verwaltung von Budgets und Lieferantenbeziehungen" }
        ]
      },
      {
        heading: { en: "Handover & Sustainable Transition", de: "Übergabe & Nachhaltiger Übergang" },
        points: [
          { en: "Recruiting or onboarding permanent leadership successors", de: "Rekrutierung oder Einarbeitung dauerhafter Nachfolger in der Führung" },
          { en: "Documenting systems, processes, and outstanding tasks", de: "Dokumentation von Systemen, Prozessen und ausstehenden Aufgaben" },
          { en: "Ensuring a seamless and frictionless exit", de: "Sicherstellung eines nahtlosen und reibungslosen Ausscheidens" }
        ]
      }
    ],
    outcomes: [
      { en: "Immediate leadership stability in times of change", de: "Sofortige Führungsstabilität in Zeiten des Wandels" },
      { en: "Standardized operational processes and key performance indicators", de: "Standardisierte operative Prozesse und Leistungskennzahlen" },
      { en: "Successfully navigated reorganization or transformation programs", de: "Erfolgreich bewältigte Reorganisations- oder Transformationsprogramme" },
      { en: "Mitigated structural and human capital risks", de: "Minimierung von Struktur- und Humankapitalrisiken" },
      { en: "Seamless transfer of knowledge and duties to permanent staff", de: "Nahtlose Übergabe von Wissen und Aufgaben an das Stammpersonal" }
    ],
    note: {
      en: "Interim assignments are structured flexibly to match the client's timeline, focusing purely on high-impact outcomes and professional delivery without long-term overhead costs.",
      de: "Interim-Einsätze sind flexibel strukturiert, um dem Zeitplan des Kunden zu entsprechen, und konzentrieren sich rein auf wirkungsvolle Ergebnisse und professionelle Bereitstellung ohne langfristige Gemeinkosten."
    }
  },
  "process-modelling-and-workload-automation": {
    title: { en: "Process Modelling & Workload Automation", de: "Prozessmodellierung & Workload-Automatisierung" },
    objective: {
      en: "Streamline business workflows, orchestrate batch processing, and integrate complex SAP ERP ecosystems with state-of-the-art automation tools.",
      de: "Rationalisieren Sie Geschäftsabläufe, orchestrieren Sie die Stapelverarbeitung und integrieren Sie komplexe SAP ERP-Ökosysteme mit modernsten Automatisierungstools."
    },
    sections: [
      {
        heading: { en: "Architecture Assessment", de: "Architekturbewertung" },
        points: [
          { en: "Analyzing existing legacy workflow dependencies", de: "Analyse bestehender Legacy-Workflow-Abhängigkeiten" },
          { en: "Identifying batch processing bottlenecks and stability issues", de: "Identifizierung von Engpässen in der Stapelverarbeitung und Stabilitätsproblemen" },
          { en: "Mapping target state integrations across hybrid systems", de: "Abbildung von Zielzustandsintegrationen über hybride Systeme hinweg" }
        ]
      },
      {
        heading: { en: "Orchestration & Design", de: "Orchestrierung & Design" },
        points: [
          { en: "Leveraging Automic Automation (UC4) or BMC Control-M solutions", de: "Nutzung von Automic Automation (UC4) oder BMC Control-M Lösungen" },
          { en: "Standardizing batch scheduling policies and error alerts", de: "Standardisierung von Stapelplanungsrichtlinien und Fehlerwarnungen" },
          { en: "Configuring multi-platform event-driven job chains", de: "Konfiguration plattformübergreifender, ereignisgesteuerter Jobketten" }
        ]
      },
      {
        heading: { en: "SAP Integration & Best Practices", de: "SAP-Integration & Best Practices" },
        points: [
          { en: "Optimizing SAP job processing and backend performance", de: "Optimierung der SAP-Jobverarbeitung und Backend-Leistung" },
          { en: "Implementing secure and compliant automation pipelines", de: "Implementierung sicherer und konformer Automatisierungspipelines" },
          { en: "Building automated data bridges between SAP and external tools", de: "Aufbau automatisierter Datenbrücken zwischen SAP und externen Tools" }
        ]
      },
      {
        heading: { en: "Maintenance & Modernization", de: "Wartung & Modernisierung" },
        points: [
          { en: "Refactoring legacy scheduling scripts to clean, modern workflows", de: "Refactoring von Legacy-Scheduling-Skripten zu sauberen, modernen Workflows" },
          { en: "Training operating teams on automated issue handling", de: "Schulung der Betriebsteams zur automatisierten Fehlerbehandlung" },
          { en: "Defining self-healing scripts for continuous uptime", de: "Definition von Self-Healing-Skripten für kontinuierliche Betriebszeit" }
        ]
      }
    ],
    outcomes: [
      { en: "Significantly reduced manual workload and intervention rates", de: "Deutlich reduzierter manueller Arbeitsaufwand und Interventionsraten" },
      { en: "Highly stable and resilient enterprise scheduling environment", de: "Äußerst stabile und belastbare Enterprise-Scheduling-Umgebung" },
      { en: "Maximized data processing speed and throughput for SAP", de: "Maximierte Datenverarbeitungsgeschwindigkeit und Durchsatz für SAP" },
      { en: "Complete audit trails and strict operational compliance", de: "Vollständige Audit Trails und strenge operative Compliance" },
      { en: "Empowered operations team with automated runbooks", de: "Befähigtes Betriebsteam mit automatisierten Runbooks" }
    ],
    note: {
      en: "All automation designs are vendor-independent, ensuring your organization adopts the most cost-effective and structurally robust orchestration tool set.",
      de: "Alle Automatisierungsdesigns sind herstellerunabhängig, was sicherstellt, dass Ihr Unternehmen das kostengünstigste und strukturell robusteste Orchestrierungstool-Set einsetzt."
    }
  },
  "digital-transformation-workshop": {
    title: { en: "Digital Transformation Workshop", de: "Digitale Transformations-Workshop" },
    objective: {
      en: "Assist organizations in bridging the digital maturity gap by designing customized digital transformation roadmaps tailored to business and HR needs.",
      de: "Unterstützen Sie Unternehmen dabei, die Lücke in der digitalen Reife zu schließen, indem Sie maßgeschneiderte Roadmaps für die digitale Transformation entwerfen, die auf Geschäfts- und HR-Anforderungen zugeschnitten sind."
    },
    sections: [
      {
        heading: { en: "Maturity Assessment", de: "Reifegradbewertung" },
        points: [
          { en: "Evaluating legacy systems and current process bottlenecks", de: "Evaluierung von Legacy-Systemen und aktuellen Prozessengpässen" },
          { en: "Assessing organizational readiness and digital capabilities", de: "Bewertung der organisatorischen Bereitschaft und der digitalen Fähigkeiten" },
          { en: "Stakeholder interviews to define transformation pain points", de: "Interviews mit Stakeholdern zur Definition von Transformationsschmerzpunkten" }
        ]
      },
      {
        heading: { en: "Future State Design", de: "Zustandsdesign für die Zukunft" },
        points: [
          { en: "Establishing target technologies and data architectures", de: "Festlegung von Zieltechnologien und Datenarchitekturen" },
          { en: "Designing automated, user-centric employee journeys", de: "Gestaltung automatisierter, benutzerzentrierter Mitarbeiterreisen" },
          { en: "Creating process blueprints for modern cloud integrations", de: "Erstellung von Prozess-Blueprints für moderne Cloud-Integrationen" }
        ]
      },
      {
        heading: { en: "Prioritization & ROI Matrix", de: "Priorisierungs- & ROI-Matrix" },
        points: [
          { en: "Grading transformation use cases by cost vs complexity", de: "Einstufung von Transformations-Anwendungsfällen nach Kosten vs. Komplexität" },
          { en: "Defining pilot projects for quick structural wins", de: "Definition von Pilotprojekten für schnelle strukturelle Erfolge" },
          { en: "Quantifying strategic value and efficiency gains", de: "Quantifizierung des strategischen Werts und der Effizienzgewinne" }
        ]
      },
      {
        heading: { en: "Roadmap & Enablement", de: "Roadmap & Befähigung" },
        points: [
          { en: "Formulating a phased multi-year execution roadmap", de: "Formulierung einer schrittweisen mehrjährigen Umsetzungs-Roadmap" },
          { en: "Setting change management protocols and communication plans", de: "Festlegung von Change-Management-Protokollen und Kommunikationsplänen" },
          { en: "Drafting training and upskilling programs for staff", de: "Entwurf von Schulungs- und Weiterbildungsprogrammen für Mitarbeiter" }
        ]
      }
    ],
    outcomes: [
      { en: "Comprehensive digital maturity assessment report", de: "Umfassender Bericht zur Bewertung des digitalen Reifegrads" },
      { en: "Clear and scalable target software architecture map", de: "Klare und skalierbare Ziel-Softwarearchitekturkarte" },
      { en: "Prioritized digital roadmap aligned with business KPIs", de: "Priorisierte digitale Roadmap, ausgerichtet auf geschäftliche KPIs" },
      { en: "Structured change management framework for execution", de: "Strukturiertes Change-Management-Framework für die Ausführung" },
      { en: "Upskilling blueprint for sustained internal digital capability", de: "Weiterbildungs-Blaupause für nachhaltige interne digitale Fähigkeiten" }
    ],
    note: {
      en: "This workshop serves as the vital foundation before making large capital investments in new software suites, saving resources and aligning teams.",
      de: "Dieser Workshop dient als wichtige Grundlage, bevor große Kapitalinvestitionen in neue Software-Suiten getätigt werden, spart Ressourcen und richtet Teams aus."
    }
  }
};

export default function WorkshopDetailsPage() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const [workshop, setWorkshop] = useState(null);
  const [allServices, setAllServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getServiceBySlug(slug)
      .then((res) => {
        if (res.data) {
          setWorkshop(res.data);
        } else {
          setWorkshop(fallbackWorkshops[slug] || null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching service by slug:", err);
        setWorkshop(fallbackWorkshops[slug] || null);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    getServices()
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setAllServices(
            [...res.data].sort((a, b) => getOrderId(a, 9999) - getOrderId(b, 9999))
          );
        } else {
          setAllServices(
            Object.keys(fallbackWorkshops).map((key) => ({
              slug: key,
              title: fallbackWorkshops[key].title,
            }))
          );
        }
      })
      .catch((err) => {
        console.error("Error fetching all services:", err);
        setAllServices(
          Object.keys(fallbackWorkshops)
            .map((key) => ({
              slug: key,
              title: fallbackWorkshops[key].title,
            }))
        );
      });
  }, []);

  if (loading) {
    return (
      <div className="py-32 text-center text-2xl text-black bg-[#f4f4f4] min-h-[50vh] flex items-center justify-center font-serif">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#b8965a] border-t-transparent rounded-full animate-spin"></div>
          <span>{lang === "EN" ? "Loading Workshop Details..." : "Lade Workshop-Details..."}</span>
        </div>
      </div>
    );
  }

  if (!workshop) {
    return (
      <div className="py-32 text-center text-2xl text-black bg-[#f4f4f4] min-h-[50vh] flex items-center justify-center font-serif">
        {lang === "EN" ? "Workshop Not Found" : "Workshop nicht gefunden"}
      </div>
    );
  }

  // Safe extraction helpers
  const wTitle = typeof workshop.title === "object" ? getBi(workshop.title, lang) : workshop.title;
  const wObjective = typeof workshop.objective === "object" ? getBi(workshop.objective, lang) : workshop.objective;
  const wNote = typeof workshop.note === "object" ? getBi(workshop.note, lang) : workshop.note;

  // Sanitise and filter sections
  let sections = (workshop.sections || [])
    .map(sec => {
      const heading = typeof sec.heading === "object" ? getBi(sec.heading, lang) : sec.heading;
      const points = (sec.points || [])
        .map(p => typeof p === "object" ? getBi(p, lang) : p)
        .filter(p => p && p.trim() !== "");
      return { ...sec, heading, points };
    })
    .filter(sec => (sec.heading && sec.heading.trim() !== "") || sec.points.length > 0);

  // Sanitise and filter outcomes
  let outcomes = (workshop.outcomes || [])
    .map(o => typeof o === "object" ? getBi(o, lang) : o)
    .filter(o => o && o.trim() !== "");

  // Ultimate fallback to local definition if arrays are empty or only contained empty strings
  const localFallback = fallbackWorkshops[slug] || {};
  
  if (sections.length === 0 && localFallback.sections) {
    sections = localFallback.sections.map(sec => {
      const heading = typeof sec.heading === "object" ? getBi(sec.heading, lang) : sec.heading;
      const points = (sec.points || [])
        .map(p => typeof p === "object" ? getBi(p, lang) : p)
        .filter(p => p && p.trim() !== "");
      return { ...sec, heading, points };
    });
  }

  if (outcomes.length === 0 && localFallback.outcomes) {
    outcomes = localFallback.outcomes
      .map(o => typeof o === "object" ? getBi(o, lang) : o)
      .filter(o => o && o.trim() !== "");
  }

  return (
    <section className="bg-[#f4f4f4] min-h-screen py-10 md:py-14">
      <div className="max-w-[1320px] mx-auto px-4 md:px-7">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
          
          {/* LEFT CONTENT */}
          <div>
            
            {/* MAIN BOX */}
            <div className="bg-white rounded-[26px] p-4 md:p-7 border border-[#ece6dc] shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
              
              {/* BG EFFECT */}
              <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-[#d4b17d]/10 rounded-full blur-[80px]"></div>
              
              {/* TITLE */}
              <h1 className="title-font text-[28px] md:text-[34px] leading-[1.15] text-black mb-5 relative z-10">
                {wTitle}
              </h1>
              
              {/* OBJECTIVE */}
              <div className="mb-8 relative z-10">
                <h2 className="title-font text-[20px] md:text-[24px] mb-4 text-black">
                  {lang === "EN" ? "Objective" : "Ziel"}
                </h2>
                <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[30px]">
                  {wObjective}
                </p>
              </div>
              
              {/* WORKSHOP STRUCTURE */}
              {sections.length > 0 && (
                <div className="relative z-10">
                  <h2 className="title-font text-[22px] md:text-[24px] mb-5 text-black">
                    {lang === "EN" ? "Workshop Structure" : "Workshop-Struktur"}
                  </h2>
                  
                  {/* CARDS */}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {sections.map((section, index) => {
                      const heading = typeof section.heading === "object" ? getBi(section.heading, lang) : section.heading;
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
                            <h3 className="title-font !font-['Inter',sans-serif] text-[16px] md:text-[18px] leading-[1.3] text-black whitespace-nowrap overflow-hidden text-ellipsis">
                              {heading}
                            </h3>
                          </div>
                          
                          {/* POINTS */}
                          <div className="space-y-2.5">
                            {points.map((point, i) => {
                              const pointText = typeof point === "object" ? getBi(point, lang) : point;
                              return (
                                <div key={i} className="flex items-start gap-2.5">
                                  {/* ICON */}
                                  <span className="text-[#b8965a] text-[13px] mt-[4px]">✔</span>
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
              )}
            </div>
            
            {/* OUTCOMES + SUPPORT */}
            <div className="mt-6">
              
              {/* OUTCOMES */}
              {outcomes.length > 0 && (
                <div className="bg-[#050505] rounded-[26px] p-4 md:p-6 relative overflow-hidden mb-6">
                  {/* EFFECT */}
                  <div className="absolute bottom-[-80px] right-[-80px] w-[180px] h-[180px] bg-[#d4b17d]/10 rounded-full blur-[70px]"></div>
                  
                  <h2 className="title-font text-[20px] md:text-[22px] mb-5 text-white relative z-10">
                    {lang === "EN" ? "Key Outcomes" : "Wichtige Ergebnisse"}
                  </h2>
                  
                  {/* OUTCOMES GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
                    {outcomes.map((item, index) => {
                      const outcomeText = typeof item === "object" ? getBi(item, lang) : item;
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
              )}
              
              {/* ADDITIONAL SUPPORT */}
              {wNote && (
                <div className="group bg-[#faf8f4] hover:bg-white border border-[#d9bb86] rounded-[26px] p-5 md:p-6 relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]">
                  <h3 className="title-font text-[20px] md:text-[22px] mb-4 text-black">
                    {lang === "EN" ? "Additional Support" : "Zusätzliche Unterstützung"}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[32px]">
                    {wNote}
                  </p>
                </div>
              )}
              
            </div>
            
          </div>
          
          {/* RIGHT STICKY BOX */}
          <div className="lg:sticky lg:top-[120px] h-fit">
            <div className="bg-[#e7dfd7] rounded-[22px] p-5 overflow-hidden relative border border-[#ece6dc]">
              {/* EFFECT */}
              <div className="absolute top-[-60px] right-[-60px] w-[150px] h-[150px] bg-[#d4b17d]/10 rounded-full blur-[60px]"></div>
              
              {/* TITLE */}
              <h3 className="title-font text-[24px] md:text-[26px] text-black mb-5 relative z-10 leading-[1.3]">
                {lang === "EN" ? "Workshops & Consulting" : "Workshops & Beratung"}
              </h3>
              
              {/* SERVICES */}
              <div className="space-y-3 relative z-10">
                {allServices.map((service, index) => {
                  const title = typeof service.title === "object" ? getBi(service.title, lang) : service.title;
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
                      className={`group block rounded-[16px] px-4 py-3 transition-all duration-500 border ${
                        isActive
                          ? "bg-[#b8965a] border-[#b8965a]"
                          : "bg-white hover:bg-[#b8965a] border-[#ece6dc] hover:border-[#b8965a]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        {/* TEXT */}
                        <p
                          className={`text-[14px] md:text-[15px] leading-[26px] transition-all duration-500 ${
                            isActive ? "text-white" : "text-[#111111] group-hover:text-white"
                          }`}
                        >
                          {title}
                        </p>
                        
                        {/* ARROW */}
                        <span
                          className={`text-[18px] transition-all duration-500 ${
                            isActive
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
