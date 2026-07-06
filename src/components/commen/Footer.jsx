import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSettings, getServices, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "./Icon";

const Footer = () => {
  const { lang } = useLanguage();
  const [settings, setSettings] = useState({
    email: "",
    phone: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",
  });
  const [services, setServices] = useState([]);

  useEffect(() => {
    getSettings()
      .then((res) => {
        if (res.data) {
          setSettings({
            email: res.data.email || "contact@edlmann.com",
            phone: res.data.phone || "+49 160 92 67 88 37",
            linkedin: res.data.linkedin || "",
            twitter: res.data.twitter || "",
            facebook: res.data.facebook || "",
            instagram: res.data.instagram || "",
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching settings for footer:", err);
      });

    getServices()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data)
            ? res.data
            : res.data.value || [];
          setServices(list);
        }
      })
      .catch((err) => {
        console.error("Error fetching services for footer:", err);
      });
  }, []);

  return (
    <footer className="bg-black text-white pt-[60px] pb-[30px] ">
      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[40px]">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_0.9fr] gap-[40px] md:gap-[20px] text-center md:text-left">
          {/* LEFT */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            {/* LOGO */}
            <div>
              <h1 className="text-[22px] md:text-[36px] leading-tight title-font whitespace-nowrap">
                Dr. Raphael Edlmann
              </h1>
            </div>

            {/* TEXT */}
            <p className="text-sm text-white/60 leading-relaxed max-w-[320px] text-center md:text-left">
              {lang === "EN"
                ? "Interim Manager | HR & Digital Transformation Expert"
                : " Interim Manager | Experte für HR & Digitale Transformation"}
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-3 justify-center md:justify-start">
              {settings.linkedin && (
                <a
                  href={settings.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition-all duration-300 cursor-pointer"
                >
                  <Icon name="linkedin" className="text-[14px] text-white" />
                </a>
              )}

              {settings.twitter && (
                <a
                  href={settings.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition-all duration-300 cursor-pointer"
                >
                  <Icon name="x" className="text-[14px] text-white" />
                </a>
              )}

              {settings.facebook && (
                <a
                  href={settings.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition-all duration-300 cursor-pointer"
                >
                  <Icon name="facebook" className="text-[14px] text-white" />
                </a>
              )}

              {settings.instagram && (
                <a
                  href={settings.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition-all duration-300 cursor-pointer"
                >
                  <Icon name="instagram" className="text-[14px] text-white" />
                </a>
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-5">Quick Links</h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link
                  to="/about"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  {lang === "EN" ? "About Me" : "Über mich"}
                </Link>
              </li>

              <li>
                <Link
                  to="/insights"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  Future of
                  Work                </Link>
              </li>

              <li>
                <Link
                  to="/author"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  {lang === "EN" ? "Author" : "Autor"}
                </Link>
              </li>

              <li>
                <Link
                  to="/#speaker-section"
                  className="hover:text-[#b8965a] transition"
                >
                  Speaker
                </Link>
              </li>

              <li>
                <Link
                  to="/vita"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  Vita
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  {lang === "EN" ? "Projects" : "Projekte"}
                </Link>
              </li>

              <li>
                <Link
                  to="/workshops"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                   Consulting
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  Let’s Work Together
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-5">
              {lang === "EN" ? "Services" : "Services"}
            </h4>

            <ul className="space-y-3 text-sm text-white/60">
              {services.map((item, index) => {
                const itemTitle = getBi(item.title, lang);
                return (
                  <li key={index}>
                    <Link
                      to={`/workshops-details/${item.slug}`}
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      className="hover:text-[#b8965a] transition cursor-pointer"
                    >
                      {itemTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-5">
              {lang === "EN" ? "Contact" : "Kontakt"}
            </h4>

            <div className="space-y-4 text-sm text-white/60">
              {/* EMAIL */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-lg shrink-0">
                  <Icon name="reg-envelope" className="text-[#b8965a]" />
                </div>

                <a
                  href={`mailto:${settings.email}`}
                  className="hover:text-[#b8965a] transition duration-300"
                >
                  {settings.email}
                </a>
              </div>
              {/* PHONE */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-lg shrink-0">
                  <Icon name="phone" className="text-[#b8965a]" />
                </div>

                <a
                  href={`tel:${settings.phone}`}
                  className="hover:text-[#b8965a] transition duration-300"
                >
                  {settings.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/40 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 text-center md:text-left">
          <p>
            © 2026 Dr. Raphael Edlmann. All rights reserved. Designed by{" "}
            <Link
              to="https://anaxistech.com"
              target="_blank"
              className="
    text-[#d4872a]
    text-[12px]
    font-semibold
    transition-all
    duration-300
    hover:text-white
    hover:underline
    decoration-white
    underline-offset-4
  "
            >
              AnaxisTech LLP
            </Link>
          </p>

          <div className="flex gap-6 justify-center">
            <Link to="/imprint" className="hover:text-[#b8965a]">
              Imprint
            </Link>

            <Link to="/privacy-policy" className="hover:text-[#b8965a]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
