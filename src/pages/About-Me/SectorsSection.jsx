import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { getAboutSectors, getBi, getCached, setCached } from "../../api/api";
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

const getSectorItems = (data, lang) => {
  const items =
    data?.sectors ||
    data?.items ||
    data?.list ||
    data?.value ||
    data?.data?.sectors;

  if (!Array.isArray(items)) return [];

  return items
    .map((item) => {
      if (typeof item === "string") return cleanRichText(item);
      return cleanRichText(getBi(item.title || item.name || item.label || item.text, lang));
    })
    .filter(Boolean);
};

const SectorsSection = () => {
  const { lang } = useLanguage();
  const cached = getCached("aboutSectors");
  const [sectorData, setSectorData] = useState(cached || null);
  const [loading, setLoading] = useState(!cached);

  useEffect(() => {
    getAboutSectors()
      .then((res) => {
        if (res.data) {
          setSectorData(res.data);
          setCached("aboutSectors", res.data);
        }
      })
      .catch((err) => console.error("Failed to load about sectors", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-[#050505] py-[60px]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-7 h-[300px] rounded-[38px] bg-white/5 animate-pulse" />
      </div>
    );
  }

  const label = getBi(sectorData?.label, lang) || (lang === "EN" ? "Sectors Served" : "Bediente Branchen");
  const title = getBi(sectorData?.title || sectorData?.heading, lang) || (lang === "EN" ? "Industries & Domains" : "Branchen & Fachgebiete");
  const subtitle = getBi(sectorData?.subtitle || sectorData?.description || sectorData?.text, lang) || (lang === "EN" ? "Cross-industry experience spanning enterprise technology, policy and academia." : "Branchenübergreifende Erfahrung in den Bereichen Unternehmenstechnologie, Politik und Wissenschaft.");

  const sectors = getSectorItems(sectorData, lang);

  return (
    <section className="bg-[#050505] py-[60px] md:py-[60px] overflow-hidden relative">

      {/* BG EFFECT */}
      <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-[#b8965a]/10 blur-[100px]"></div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-7 relative z-10">

        {/* TOP */}
        <div className="max-w-[900px] mx-auto text-center mb-12 md:mb-10">

          {/* LABEL */}
          <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
            {label}
          </span>

          {/* TITLE */}
          <h2 className="title-font text-[28px] sm:text-[32px] leading-[1.05] text-white mt-4 mb-6">
            {title}
          </h2>

          {/* TEXT */}
          <p className="text-white/65 text-[15px] md:text-[16px] leading-[30px] md:leading-[35px]">
            {subtitle}
          </p>

        </div>

        {/* SECTORS */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-4">

          {sectors.map((item, index) => (
            <div
              key={index}
              className="group min-h-[56px] md:h-[58px] px-4 md:px-7 rounded-full border border-white/50 bg-white/[0.04] hover:bg-[#b8965a] transition-all duration-500 flex items-center justify-center md:justify-start gap-2.5 md:gap-3"
            >

              {/* ICON */}
              <span className="min-w-[20px] w-[20px] h-[20px] rounded-full bg-[#b8965a] flex items-center justify-center text-white text-[10px]">
                <FaCheck />
              </span>

              {/* TEXT */}
              <span className="text-white text-[13px] sm:text-[14px] md:text-[16px] text-center md:text-left font-medium leading-[20px] transition-all duration-500">
                {item}
              </span>

            </div>
          ))}

        </div>

        {sectors.length === 0 && (
            <p className="text-center text-white/30 text-xs italic mt-10">No sectors currently listed.</p>
        )}

      </div>

    </section>
  );
};

export default SectorsSection;
