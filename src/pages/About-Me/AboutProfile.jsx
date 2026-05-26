import { useEffect, useState } from "react";
import { getAboutProfile, getBi, IMG_URL } from "../../api/api";
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

const fallbackParagraphs = [
  "Welcome - I am glad you are here.",
  "I am an expert in AI, HR, and business process transformation based in Munich, Germany, helping organisations turn complexity into practical AI-driven solutions with real impact.",
  "With over 10 years of management and project experience, I have consistently delivered high-performance results across Aerospace, Defence, Finance, Automotive, and Public Sector organisations.",
  "My doctoral research at Heriot-Watt University focused on how AI recruitment technology shapes organisational trust - bringing academic rigour into every engagement and strategic decision.",
];

const fallbackStats = (lang) => [
  { value: "10+", label: lang === "EN" ? "Years Leadership" : "Jahre Führungserfahrung" },
  { value: "50", label: lang === "EN" ? "FTEs Managed" : "Verwaltete FTEs" },
  { value: "95%", label: lang === "EN" ? "SLA Compliance" : "SLA-Einhaltung" },
  { value: "DBA", label: "Heriot-Watt University" },
];

const AboutSection = () => {
  const [profile, setProfile] = useState(null);
  const { lang } = useLanguage();

  useEffect(() => {
    getAboutProfile()
      .then((res) => {
        if (res.data) {
          setProfile(res.data);
        }
      })
      .catch((err) => console.error("Error fetching about profile:", err));
  }, []);

  const label = profile ? getBi(profile.label, lang) : (lang === "EN" ? "Who I Am" : "Wer ich bin");
  const title = profile ? getBi(profile.title || profile.heading, lang) : (lang === "EN" ? "Building Smarter Organisations" : "Intelligentere Organisationen aufbauen");
  const rawDescription = profile
    ? getBi(profile.description || profile.desc || profile.text || profile.content, lang)
    : "";
  const paragraphs = rawDescription
    ? cleanRichText(rawDescription).split(/\n{2,}/).filter(Boolean)
    : fallbackParagraphs;
  const imagePath = profile?.img || profile?.image;
  const imageUrl = imagePath
    ? imagePath.startsWith("http") || imagePath.startsWith("/assets")
      ? imagePath
      : `${IMG_URL}${imagePath}`
    : "/assets/images/2026_03_17_Raphael_Edlmann_About Me.jpg";
  const stats = Array.isArray(profile?.stats) && profile.stats.length > 0
    ? profile.stats.map((item) => ({
        value: getBi(item.value || item.number || item.count, lang),
        label: getBi(item.label || item.title || item.text, lang),
      }))
    : fallbackStats(lang);

  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] py-[60px] md:py-[60px]">

      {/* BG EFFECT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-[#b8965a]/10 blur-[90px]"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] rounded-full bg-[#0a3e40]/5 blur-[90px]"></div>

      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 md:px-7">

        {/* ===================== */}
        {/* TOP SECTION */}
        {/* ===================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-12 items-start">

          {/* IMAGE SIDE */}
          <div className="relative flex justify-center lg:justify-start lg:sticky lg:top-[120px]">

            {/* IMAGE WRAPPER */}
            <div className="relative overflow-hidden rounded-[28px] md:rounded-[38px] w-full max-w-[500px] h-[460px] md:h-[580px] group">

              {/* BG SHAPE */}
              <div className="absolute -top-5 -right-5 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full bg-[#b8965a]/15 blur-3xl z-10"></div>

              {/* IMAGE */}
              <img
                src={imageUrl}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"></div>

            </div>

          </div>

          {/* CONTENT SIDE */}
          <div>

            {/* LABEL */}
            <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
              {label}
            </span>

            {/* TITLE */}
            <h2 className="title-font text-[28px] sm:text-[32px] md:text-[36px] leading-[1.02] text-black mt-4 mb-5 md:mb-6">
              {title}
            </h2>

            {/* TEXT */}
            <div className="space-y-4 md:space-y-5">

              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[33px]">
                  {paragraph}
                </p>
              ))}

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-x-10 md:gap-y-7 mt-8 md:mt-10 pt-7 md:pt-8 border-t border-[#ddd5ca]">

              {stats.map((item, index) => (
                <div key={index} className="bg-white md:bg-transparent rounded-[20px] md:rounded-none border border-[#ece6dc] md:border-0 p-4 md:p-0 text-center md:text-left shadow-[0_8px_20px_rgba(0,0,0,0.03)] md:shadow-none">

                  <h3 className="text-[#b8965a] text-[28px] md:text-[34px] font-semibold leading-none mb-2">
                    {item.value}
                  </h3>

                  <p className="text-[#0a3e40] text-[12px] md:text-[14px] leading-[20px] md:leading-[22px]">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;
