import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSpeaker, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const SpeakerSection = () => {
  const [speaker, setSpeaker] = useState(null);
  const { lang } = useLanguage();

  useEffect(() => {
    getSpeaker()
      .then((res) => {
        if (res.data) setSpeaker(res.data);
      })
      .catch((err) => console.error("Error fetching speaker details:", err));
  }, []);

  const label = speaker ? getBi(speaker.label, lang) : "Speaker";
  const title = speaker ? getBi(speaker.title, lang) : "Inspiring Talks That Drive Action";
  const subtitle = speaker ? getBi(speaker.subtitle, lang) : "Looking for a speaker who cuts through the noise and delivers real insights? Book me for your next event.";
  const desc = speaker ? getBi(speaker.desc, lang) : "My talks don’t just fill a slot — they challenge perspectives, spark action, and leave your audience with practical strategies they can apply immediately.\n\nMore attention. More relevance. More impact.\n\nBeyond the stage, I amplify your event through my network and social media channels — extending your reach, increasing visibility, and making sure the impact goes far beyond the room.";
  
  const bgImg = speaker && speaker.img 
    ? (speaker.img.startsWith("http") || speaker.img.startsWith("/assets") ? speaker.img : `${IMG_URL}${speaker.img}`)
    : "/assets/images/22.jpg";

  return (
    <section id="speaker-section" className="relative w-full py-[40px] overflow-hidden">

      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bgImg}
          className="w-full h-full object-cover object-top"
          alt="speaker"
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
              <p className="text-sm md:text-[16px] leading-relaxed mb-4 italic font-semibold">
                {subtitle}
              </p>
            )}

            <p className="text-sm md:text-[16px] leading-relaxed mb-6 whitespace-pre-line">
              {desc}
            </p>

            {/* BUTTON */}
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-[#b8965a] text-[18px] font-semibold transition duration-300 hover:scale-[1.03]"
            >

              <span>
                {lang === "EN" ? "Book me for your next event" : "Buchen Sie mich für Ihre nächste Veranstaltung"}
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