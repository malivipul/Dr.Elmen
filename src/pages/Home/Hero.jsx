import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHero, getSettings, IMG_URL, getBi, getCached, setCached } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const Hero = () => {
  const [hover, setHover] = useState(false);
  const cachedHero = getCached("hero");
  const cachedSettings = getCached("settings");
  
  const [hero, setHero] = useState(cachedHero || null);
  const [settings, setSettings] = useState(cachedSettings || null);
  const [loading, setLoading] = useState(!cachedHero || !cachedSettings);
  const { lang } = useLanguage();

  useEffect(() => {
    Promise.all([getHero(), getSettings()])
      .then(([heroRes, settingsRes]) => {
        if (heroRes.data) {
          setHero(heroRes.data);
          setCached("hero", heroRes.data);
        }
        if (settingsRes.data) {
          setSettings(settingsRes.data);
          setCached("settings", settingsRes.data);
        }
      })
      .catch((err) => console.error("Error fetching hero or settings:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="w-full min-h-[70vh] md:min-h-screen bg-[#111]" />;
  }

  const title = hero ? getBi(hero.title, lang) : "Dr. Raphael Edlmann";
  const subtitle = hero ? getBi(hero.subtitle, lang) : "Interim Manager. AI, HR & Business Process Expert";
  const imgUrl = hero && hero.img ? `${IMG_URL}${hero.img}` : null;
  const email = settings?.email || "contact@edlmann.com";

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen flex items-end items-center overflow-hidden pt-[140px] pb-[60px] bg-[#111]">

      {/* IMAGE */}
      <div className="absolute inset-0">
        {imgUrl && (
          <img
            src={imgUrl}
            className="w-full h-full object-cover object-[70%_20%]"
            alt="hero"
          />
        )}
        <div className="absolute inset-0 bg-[#b8965a]/20"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1420px] mx-auto px-[20px] md:px-[40px] w-full text-center md:text-left mb-[75px] md:mb-0">

        <h2
          className="text-white font-medium leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide"
          style={{
            fontFamily: hover
              ? "Caveat, cursive"
              : "Playfair Display, serif",
            letterSpacing: hover ? "1px" : "0px",
            transition: "0.4s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {title}
        </h2>

        {/* SUBTEXT */}
        <p className="text-white mt-3 text-base md:text-lg lg:text-xl">
          {subtitle}
        </p>


        {/* BUTTON + ICONS */}
        <div className="w-full flex justify-center md:justify-start mt-8">
          <div className="flex items-center gap-3 flex-wrap">

            {/* BUTTON */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#b8965a] text-white border border-[#b8965a] hover:bg-transparent hover:border-white hover:text-white transition duration-300 font-bold"
            >
              Let’s work together
            </Link>

            {/* EMAIL */}
            <Link
              to={`mailto:${email}`}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-black hover:bg-gray-200 transition"
            >
              <i className="fa-solid fa-envelope"></i>
            </Link>

            {/* WHATSAPP */}
            <Link
              to="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-[#25D366] hover:opacity-80 transition"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </Link>

          </div>
        </div>
      </div>

 {/* SOCIAL MEDIA */}
<div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-[40px] z-20">

  <div className="flex gap-3 md:gap-4">

    {/* LINKEDIN */}
    {settings?.linkedin && (
      <a
        href={settings.linkedin}
        target="_blank"
        rel="noreferrer"
        className="
          group
          w-[42px]
          h-[42px]
          md:w-[45px]
          md:h-[45px]
          flex
          items-center
          justify-center
          border
          border-white/80
          rounded-full
          bg-white/10
          hover:bg-[#b8965a]
          hover:border-[#b8965a]
          active:bg-[#b8965a]
          active:border-[#b8965a]
          transition-all
          duration-500
          backdrop-blur-md
          hover:scale-110
          active:scale-90
          active:rotate-6
          shadow-[0_4px_15px_rgba(255,255,255,0.08)]
        "
      >
        <i className="fa-brands fa-linkedin-in text-[13px] md:text-[14px] text-white transition-transform duration-500 group-hover:scale-125"></i>
      </a>
    )}

    {/* X */}
    {settings?.twitter && (
      <a
        href={settings.twitter}
        target="_blank"
        rel="noreferrer"
        className="
          group
          w-[42px]
          h-[42px]
          md:w-[45px]
          md:h-[45px]
          flex
          items-center
          justify-center
          border
          border-white/80
          rounded-full
          bg-white/10
          hover:bg-[#b8965a]
          hover:border-[#b8965a]
          active:bg-[#b8965a]
          active:border-[#b8965a]
          transition-all
          duration-500
          backdrop-blur-md
          hover:scale-110
          active:scale-90
          active:-rotate-6
          shadow-[0_4px_15px_rgba(255,255,255,0.08)]
        "
      >
        <i className="fa-brands fa-x-twitter text-[13px] md:text-[14px] text-white transition-transform duration-500 group-hover:scale-125"></i>
      </a>
    )}

    {/* FACEBOOK */}
    {settings?.facebook && (
      <a
        href={settings.facebook}
        target="_blank"
        rel="noreferrer"
        className="
          group
          w-[42px]
          h-[42px]
          md:w-[45px]
          md:h-[45px]
          flex
          items-center
          justify-center
          border
          border-white/80
          rounded-full
          bg-white/10
          hover:bg-[#b8965a]
          hover:border-[#b8965a]
          active:bg-[#b8965a]
          active:border-[#b8965a]
          transition-all
          duration-500
          backdrop-blur-md
          hover:scale-110
          active:scale-90
          active:rotate-6
          shadow-[0_4px_15px_rgba(255,255,255,0.08)]
        "
      >
        <i className="fa-brands fa-facebook-f text-[13px] md:text-[14px] text-white transition-transform duration-500 group-hover:scale-125"></i>
      </a>
    )}

    {/* INSTAGRAM */}
    {settings?.instagram && (
      <a
        href={settings.instagram}
        target="_blank"
        rel="noreferrer"
        className="
          group
          w-[42px]
          h-[42px]
          md:w-[45px]
          md:h-[45px]
          flex
          items-center
          justify-center
          border
          border-white/80
          rounded-full
          bg-white/10
          hover:bg-[#b8965a]
          hover:border-[#b8965a]
          active:bg-[#b8965a]
          active:border-[#b8965a]
          transition-all
          duration-500
          backdrop-blur-md
          hover:scale-110
          active:scale-90
          active:-rotate-6
          shadow-[0_4px_15px_rgba(255,255,255,0.08)]
        "
      >
        <i className="fa-brands fa-instagram text-[13px] md:text-[14px] text-white transition-transform duration-500 group-hover:scale-125"></i>
      </a>
    )}

  </div>

</div>

    </section>
  );
};

export default Hero;