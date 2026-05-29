import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSpeaker, IMG_URL, getBi, getCached, setCached } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const SpeakerSection = () => {
  const cached = getCached("homeSpeaker");
  const [speaker, setSpeaker] = useState(cached || null);
  const [loading, setLoading] = useState(!cached);
  const { lang } = useLanguage();

  useEffect(() => {
    getSpeaker()
      .then((res) => {
        if (res.data) {
          setSpeaker(res.data);
          setCached("homeSpeaker", res.data);
        }
      })
      .catch((err) => console.error("Error fetching speaker details:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="w-full h-[400px] bg-[#111] animate-pulse" />;
  }

  const label = getBi(speaker?.label, lang) || (lang === "EN" ? "Speaker" : "Redner");
  const title = getBi(speaker?.title, lang) || (lang === "EN" ? "Inspiring Talks That Drive Action" : "Inspirierende Vorträge, die zum Handeln anregen");
  const subtitle = getBi(speaker?.subtitle, lang);
  const desc = getBi(speaker?.desc, lang);
  
  const bgImg = speaker?.img 
    ? (speaker.img.startsWith("http") || speaker.img.startsWith("/assets") ? speaker.img : `${IMG_URL}${speaker.img}`)
    : "/assets/images/22.jpg";

  return (
    <section id="speaker-section" className="relative w-full py-[40px] overflow-hidden scroll-mt-[120px]">

      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          className="w-full h-full object-cover object-top"
          alt="Dr. Raphael Edlmann speaking at leadership, AI and business transformation events"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* CONTENT */}
      <div className="relative max-w-[1200px] mx-auto px-[20px] md:px-[40px]">

        {/* TOP */}
        <div className="text-left pt-[20px] pb-[20px]">

          <span className="text-[#b8965a] text-xs tracking-[3px] uppercase font-bold">
            {label}
          </span>

          <h2 className="title-font text-3xl md:text-[42px] text-white mt-3 mb-3">
            {title}
          </h2>

        </div>

        {/* WHITE BOX */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-10 mt-[10px] mb-[10px] max-w-[600px] border border-white/20 shadow-lg">

          <div className="text-[#0a3e40]">

            {subtitle && (
              <div
                className="rich-text text-sm md:text-[16px] leading-relaxed mb-4 italic font-semibold"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            <div
              className="rich-text text-sm md:text-[16px] leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: desc }}
            />

            {/* BUTTON */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-[#b8965a] text-[18px] font-semibold transition duration-300 hover:scale-[1.03]"
            >

              <span>
                {lang === "EN" ? "Book me for your next event" : "Buchen Sie mich für Ihr nächstes Event."}
              </span>

              <i className="fa-solid fa-arrow-right transition-all duration-300 group-hover:translate-x-[6px]"></i>

            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SpeakerSection;