import { useEffect, useState } from "react";
import {
  FaRobot,
  FaUsers,
  FaCogs,
  FaBullseye,
  FaGraduationCap,
} from "react-icons/fa";
import { getAboutExpertise, getBi, getCached, setCached } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const cleanRichText = (value = "") =>
  String(value)
    .replace(/<\/p>\s*<p[^>]*>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;|\u00a0/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .trim();

const findCardItems = (value) => {
  if (!value) return [];

  if (Array.isArray(value)) {
    const cardItems = value.filter((item) => {
      if (!item || typeof item !== "object") return false;
      return item.title || item.heading || item.name || item.text || item.desc || item.description;
    });

    if (cardItems.length) return cardItems;

    for (const item of value) {
      const nestedItems = findCardItems(item);
      if (nestedItems.length) return nestedItems;
    }

    return [];
  }

  if (typeof value !== "object") return [];

  const preferredKeys = [
    "items",
    "expertise",
    "cards",
    "cardData",
    "services",
    "list",
    "value",
    "data",
  ];

  for (const key of preferredKeys) {
    const nestedItems = findCardItems(value[key]);
    if (nestedItems.length) return nestedItems;
  }

  for (const nestedValue of Object.values(value)) {
    const nestedItems = findCardItems(nestedValue);
    if (nestedItems.length) return nestedItems;
  }

  return [];
};

const ExpertiseSection = () => {
  const { lang } = useLanguage();
  const cached = getCached("aboutExpertise");
  const [expertiseData, setExpertiseData] = useState(cached || null);
  const [loading, setLoading] = useState(!cached);

  const iconList = [FaBullseye, FaCogs, FaRobot, FaGraduationCap, FaUsers];

  useEffect(() => {
    getAboutExpertise()
      .then((res) => {
        if (res.data) {
          setExpertiseData(res.data);
          setCached("aboutExpertise", res.data);
        }
      })
      .catch((err) => console.error("Failed to load about expertise", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-[#f4f4f4] pb-[60px] pt-[60px]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-7 h-[400px] rounded-[24px] bg-gray-100 animate-pulse" />
      </div>
    );
  }

  const sectionData = expertiseData;
  const rawItems = findCardItems(expertiseData);

  const expertise = rawItems.map((item, index) => ({
    icon: iconList[index % iconList.length],
    title: cleanRichText(getBi(item.title || item.heading || item.name, lang)),
    text: cleanRichText(getBi(item.text || item.desc || item.description, lang)),
  }));

  const title = getBi(sectionData?.title, lang) || (lang === "EN" ? "Strategic Problem Solving" : "Strategische Problemlösung");
  const subtitle = getBi(sectionData?.subtitle, lang) || (lang === "EN" ? "Expertise built on research and over a decade of real-world transformation experience." : "Expertise aufgebaut auf Forschung und über einem Jahrzehnt Praxiserfahrung in der Transformation.");
  const label = getBi(sectionData?.label, lang) || (lang === "EN" ? "Expertise" : "Expertise");

  return (
    <section className="bg-[#f4f4f4] pb-[60px] md:pb-[60px]">

      <div className="max-w-[1320px] mx-auto px-4 md:px-7">

        {/* TOP */}
        <div className="max-w-[850px] mx-auto text-center mb-12 md:mb-10">

          {/* LABEL */}
          <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
            {label}
          </span>

          {/* TITLE */}
          <h2 className="title-font text-[28px] sm:text-[32px] md:text-[36px] leading-[1.05] text-black mt-4 mb-5">
            {title}
          </h2>

          {/* TEXT */}
          <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[34px]">
            {subtitle}
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5">

          {expertise.map((item, index) => (
            <div
              key={index}
              className={`
                group
                bg-white
                rounded-[24px]
                p-5
                border
                border-[#ece6dc]
                hover:border-[#d4b17d]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]

                ${
                  index < 3
                    ? "xl:col-span-2"
                    : index === 3
                    ? "xl:col-start-2 xl:col-span-2"
                    : "xl:col-span-2"
                }
              `}
            >

              {/* ICON */}
              <div className="w-[52px] h-[52px] rounded-[16px] bg-[#faf6ef] flex items-center justify-center text-[#b8965a] text-[22px] mb-4 transition-all duration-500 group-hover:bg-[#b8965a] group-hover:text-white">

                <item.icon />

              </div>

              {/* TITLE */}
              <h3 className="title-font text-[18px] md:text-[20px] leading-[1.3] text-black mb-3">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="text-[#0a3e40] text-[14px] md:text-[15px] leading-[28px]">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ExpertiseSection;
