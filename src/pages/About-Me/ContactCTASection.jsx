import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAboutCTA, getBi, getCached, setCached } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "../../components/commen/Icon";

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

const ContactCTASection = () => {
  const { lang } = useLanguage();
  const cached = getCached("aboutCTA");
  const [ctaData, setCtaData] = useState(cached || null);
  const [loading, setLoading] = useState(!cached);

  useEffect(() => {
    getAboutCTA()
      .then((res) => {
        if (res.data) {
          setCtaData(res.data);
          setCached("aboutCTA", res.data);
        }
      })
      .catch((err) => {
        console.error("Failed to load about CTA", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-[#f4f4f4] py-[30px]">
        <div className="max-w-[1320px] mx-auto px-4 md:px-7 h-[280px] rounded-[28px] bg-gray-100 animate-pulse" />
      </div>
    );
  }

  const label = lang === "EN" ? "Get In Touch" : "Get In Touch";
  const title = ctaData?.title 
    ? cleanRichText(getBi(ctaData.title, lang)) 
    : (lang === "EN" ? "Ready to work together?" : "Lassen Sie uns zusammenarbeiten");
  
  const description = ctaData?.text 
    ? cleanRichText(getBi(ctaData.text, lang)) 
    : (lang === "EN" 
        ? "Whether you need an interim manager for a transformation project, a speaker for your next conference, or a research collaborator - let's start a conversation."
        : "Ob Sie einen Interim Manager für ein Transformationsprojekt, einen Redner für Ihre nächste Konferenz oder einen Partner für Forschungsarbeiten suchen - lassen Sie uns ins Gespräch kommen.");

  const btn1Text = ctaData?.btn1Text 
    ? getBi(ctaData.btn1Text, lang) 
    : (lang === "EN" ? "Let's Work Together" : "Zusammenarbeiten");
  
  const btn1Link = ctaData?.btn1Link || "/contact";

  const btn2Text = ctaData?.btn2Text 
    ? getBi(ctaData.btn2Text, lang) 
    : (lang === "EN" ? "WhatsApp Me" : "WhatsApp");
  
  const btn2Link = ctaData?.btn2Link || "/contact";

  return (
    <section className="bg-[#f4f4f4] py-[60px] md:py-[60px]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-7">
        {/* CTA BOX */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#e7dfd7] px-5 sm:px-8 md:px-12 py-8 md:py-10 border border-[#ddd5ca]">
          {/* BG EFFECT */}
          <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-[#b8965a]/10 blur-[90px]"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* LEFT SIDE */}
            <div className="max-w-[760px]">
              {/* LABEL */}
              <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
                {label}
              </span>

              {/* TITLE */}
              <h2 className="title-font text-[28px] sm:text-[32px] leading-[1.05] text-black mt-4 mb-5">
                {title}
              </h2>

              {/* TEXT */}
              <p className="text-[#0a3e40] text-[15px] md:text-[17px] leading-[30px] md:leading-[34px]">
                {description}
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-3 w-full">
              {/* BUTTON */}
              <Link
                to={btn1Link}
                className="
                  w-full
                  sm:w-[240px]
                  h-[50px]
                  px-6
                  rounded-full
                  bg-[#b8965a]
                  hover:bg-black
                  text-white
                  text-[14px]
                  font-bold
                  tracking-[0.3px]
                  transition-all
                  duration-500
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                "
              >
                <span className="leading-none">{btn1Text}</span>

                <Icon name="arrow-right" className="text-[14px] mt-[1px]" />
              </Link>

              {/* BUTTON */}
              <Link
                to={btn2Link}
                className="
                  w-full
                  sm:w-[240px]
                  h-[50px]
                  px-6
                  rounded-full
                  border
                  border-black/10
                  hover:bg-[#b8965a]
                  hover:text-white
                  text-black
                  text-[14px]
                  font-bold
                  tracking-[0.3px]
                  transition-all
                  duration-500
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  bg-white/40
                "
              >
                <Icon name="whatsapp" className="text-[15px]" />

                <span className="leading-none">{btn2Text}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;
