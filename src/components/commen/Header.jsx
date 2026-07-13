import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const { lang, toggleLang } = useLanguage();
  const location = useLocation();

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">
      {/* HEADER */}
      <div className="max-w-[1450px] mx-auto px-[20px] md:px-[40px] py-6 flex items-center justify-start lg:justify-between relative">
        {/* LEFT MENU */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
          {/* About Me */}
          <Link
            to="/about"
            onMouseEnter={() => setHoverIndex("about")}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative flex items-center justify-center h-[30px]"
          >
            <span className="relative inline-flex flex-col items-center justify-center">
              <span
                className={`
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${hoverIndex === "about" ? "font-['Caveat']" : ""}
                `}
              >
                {lang === "EN" ? "About Me" : "Über mich"}
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-semibold tracking-wide whitespace-nowrap">
                {lang === "EN" ? "About Me" : "Über mich"}
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-['Caveat'] tracking-wide whitespace-nowrap">
                {lang === "EN" ? "About Me" : "Über mich"}
              </span>
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300
                  ${hoverIndex === "about" ? "w-full" : "w-0"}
                `}
              ></span>
            </span>
          </Link>

          {/* Future of Work Insights */}
          <Link
            to="/insights"
            onMouseEnter={() => setHoverIndex("insights")}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative flex items-center justify-center h-[30px]"
          >
            <span className="relative inline-flex flex-col items-center justify-center">
              <span
                className={`
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${hoverIndex === "insights" ? "font-['Caveat']" : ""}
                `}
              >
                Future of Work
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-semibold tracking-wide whitespace-nowrap">
               Future of Work
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-['Caveat'] tracking-wide whitespace-nowrap">
                Future of Work
              </span>
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300
                  ${hoverIndex === "insights" ? "w-full" : "w-0"}
                `}
              ></span>
            </span>
          </Link>

          {/* Author */}
          <Link
            to="/author"
            onMouseEnter={() => setHoverIndex("author")}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative flex items-center justify-center h-[30px]"
          >
            <span className="relative inline-flex flex-col items-center justify-center">
              <span
                className={`
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${hoverIndex === "author" ? "font-['Caveat']" : ""}
                `}
              >
                {lang === "EN" ? "Author" : "Autor"}
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-semibold tracking-wide whitespace-nowrap">
                {lang === "EN" ? "Author" : "Autor"}
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-['Caveat'] tracking-wide whitespace-nowrap">
                {lang === "EN" ? "Author" : "Autor"}
              </span>
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300
                  ${hoverIndex === "author" ? "w-full" : "w-0"}
                `}
              ></span>
            </span>
          </Link>

          {/* Speaker */}
          <Link
            to={lang === "EN" ? "/#speaker-section" : "/#speaker-section"}
            onMouseEnter={() => setHoverIndex("speaker")}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative flex items-center justify-center h-[30px]"
          >
            <span className="relative inline-flex flex-col items-center justify-center">
              <span
                className={`
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${hoverIndex === "speaker" ? "font-['Caveat']" : ""}
                `}
              >
                Speaker
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-semibold tracking-wide whitespace-nowrap">
                Speaker
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-['Caveat'] tracking-wide whitespace-nowrap">
                Speaker
              </span>
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300
                  ${hoverIndex === "speaker" ? "w-full" : "w-0"}
                `}
              ></span>
            </span>
          </Link>
        </div>

        {/* LOGO */}
        <div className="mx-0 shrink-0 flex justify-start md:mx-8 md:justify-center">
          <Link to="/">
            <h1 className="text-[22px] md:text-[30px] font-bold font-serif leading-tight text-left md:text-center whitespace-nowrap">
              Dr. Raphael Edlmann
            </h1>
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-start">
          {/* Vita */}
          <Link
            to="/vita"
            onMouseEnter={() => setHoverIndex("vita")}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative flex items-center justify-center h-[30px]"
          >
            <span className="relative inline-flex flex-col items-center justify-center">
              <span
                className={`
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${hoverIndex === "vita" ? "font-['Caveat']" : ""}
                `}
              >
                Vita
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-semibold tracking-wide whitespace-nowrap">
                Vita
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-['Caveat'] tracking-wide whitespace-nowrap">
                Vita
              </span>
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300
                  ${hoverIndex === "vita" ? "w-full" : "w-0"}
                `}
              ></span>
            </span>
          </Link>

          {/* Projects */}
          <Link
            to="/projects"
            onMouseEnter={() => setHoverIndex("projects")}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative flex items-center justify-center h-[30px]"
          >
            <span className="relative inline-flex flex-col items-center justify-center">
              <span
                className={`
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${hoverIndex === "projects" ? "font-['Caveat']" : ""}
                `}
              >
                {lang === "EN" ? "Projects" : "Projekte"}
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-semibold tracking-wide whitespace-nowrap">
                {lang === "EN" ? "Projects" : "Projekte"}
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-['Caveat'] tracking-wide whitespace-nowrap">
                {lang === "EN" ? "Projects" : "Projekte"}
              </span>
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300
                  ${hoverIndex === "projects" ? "w-full" : "w-0"}
                `}
              ></span>
            </span>
          </Link>

          {/* Workshops */}
          <Link
            to="/workshops"
            onMouseEnter={() => setHoverIndex("Consulting")}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative flex items-center justify-center h-[30px]"
          >
            <span className="relative inline-flex flex-col items-center justify-center">
              <span
                className={`
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${hoverIndex === "Consulting" ? "font-['Caveat']" : ""}
                `}
              >
                 Consulting
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-semibold tracking-wide whitespace-nowrap">
                 Consulting
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-['Caveat'] tracking-wide whitespace-nowrap">
                 Consulting
              </span>
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300
                  ${hoverIndex === "Consulting" ? "w-full" : "w-0"}
                `}
              ></span>
            </span>
          </Link>

          {/* Let's Work Together / Contact */}
          <Link
            to="/contact"
            onMouseEnter={() => setHoverIndex("contact")}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative flex items-center justify-center h-[30px]"
          >
            <span className="relative inline-flex flex-col items-center justify-center">
              <span
                className={`
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${hoverIndex === "contact" ? "font-['Caveat']" : ""}
                `}
              >
                Let’s Work Together
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-semibold tracking-wide whitespace-nowrap">
                Let’s Work Together
              </span>
              <span className="invisible block h-0 select-none text-[16px] font-['Caveat'] tracking-wide whitespace-nowrap">
                Let’s Work Together
              </span>
              <span
                className={`
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  bg-white
                  transition-all
                  duration-300
                  ${hoverIndex === "contact" ? "w-full" : "w-0"}
                `}
              ></span>
            </span>
          </Link>

          <button
            onClick={toggleLang}
            className="h-[30px] text-[14px] font-semibold tracking-[2px] hover:opacity-70 transition cursor-pointer"
          >
            {lang === "EN" ? "DE" : "EN"}
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden absolute right-[20px] top-5 text-[28px] text-white cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* MENU BOX */}
        <div
          className={`
            absolute
            top-[70px]
            left-[20px]
            w-[270px]
            bg-white/90
            backdrop-blur-[20px]
            border
            border-[#ece7de]
            shadow-[0_15px_45px_rgba(0,0,0,0.08)]
            rounded-[26px]
            px-4
            py-4
            overflow-hidden
            transition-all
            duration-500
            z-[999]

            ${
              menuOpen
                ? "translate-x-0 opacity-100 visible"
                : "-translate-x-[120%] opacity-0 invisible"
            }
          `}
        >
          {/* TOP LIGHT */}
          <div className="absolute top-0 left-0 w-full h-[80px] bg-gradient-to-b from-[#b8965a]/10 to-transparent pointer-events-none"></div>

          {/* CLOSE */}
          <button
            onClick={() => setMenuOpen(false)}
            className="
              absolute
              top-3
              right-3
              md:top-4
              md:right-4

              w-[34px]
              h-[34px]
              md:w-[38px]
              md:h-[38px]

              rounded-full
              border
              border-[#e3ddd3]
              bg-white/95

              text-[20px]
              md:text-[22px]
              text-black

              flex
              items-center
              justify-center

              shadow-[0_4px_12px_rgba(0,0,0,0.08)]

              transition-all
              duration-300

              hover:bg-[#b8965a]
              hover:border-[#b8965a]
              hover:text-white

              active:scale-90
              active:bg-[#b8965a]
              active:text-white

              z-20
              cursor-pointer
            "
          >
            ×
          </button>

          {/* MENU ITEMS */}
          <div className="relative z-10 pt-8">
            {/* About Me */}
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                items-center
                px-4
                h-[40px]
                rounded-[12px]
                mb-[4px]
                transition-all
                duration-300
                ${
                  location.pathname === "/about"
                    ? "bg-[#b8965a] shadow-[0_6px_16px_rgba(184,150,90,0.22)]"
                    : "hover:bg-[#b8965a]/10"
                }
              `}
            >
              <span
                className={`
                  text-[13px]
                  font-semibold
                  tracking-[0.2px]
                  leading-none
                  transition-all
                  duration-300
                  ${
                    location.pathname === "/about"
                      ? "text-white"
                      : "text-[#111] hover:text-[#b8965a]"
                  }
                `}
              >
                {lang === "EN" ? "About Me" : "Über mich"}
              </span>
            </Link>

            {/* Insights */}
            <Link
              to="/insights"
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                items-center
                px-4
                h-[40px]
                rounded-[12px]
                mb-[4px]
                transition-all
                duration-300
                ${
                  location.pathname === "/insights"
                    ? "bg-[#b8965a] shadow-[0_6px_16px_rgba(184,150,90,0.22)]"
                    : "hover:bg-[#b8965a]/10"
                }
              `}
            >
              <span
                className={`
                  text-[13px]
                  font-semibold
                  tracking-[0.2px]
                  leading-none
                  transition-all
                  duration-300
                  ${
                    location.pathname === "/insights"
                      ? "text-white"
                      : "text-[#111] hover:text-[#b8965a]"
                  }
                `}
              >
Future of Work
              </span>
            </Link>

            {/* Author */}
            <Link
              to="/author"
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                items-center
                px-4
                h-[40px]
                rounded-[12px]
                mb-[4px]
                transition-all
                duration-300
                ${
                  location.pathname === "/author"
                    ? "bg-[#b8965a] shadow-[0_6px_16px_rgba(184,150,90,0.22)]"
                    : "hover:bg-[#b8965a]/10"
                }
              `}
            >
              <span
                className={`
                  text-[13px]
                  font-semibold
                  tracking-[0.2px]
                  leading-none
                  transition-all
                  duration-300
                  ${
                    location.pathname === "/author"
                      ? "text-white"
                      : "text-[#111] hover:text-[#b8965a]"
                  }
                `}
              >
                {lang === "EN" ? "Author" : "Autor"}
              </span>
            </Link>

            {/* Speaker */}
            <Link
              to="/#speaker-section"
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                items-center
                px-4
                h-[40px]
                rounded-[12px]
                mb-[4px]
                transition-all
                duration-300
                ${
                  location.hash === "#speaker-section"
                    ? "bg-[#b8965a] shadow-[0_6px_16px_rgba(184,150,90,0.22)]"
                    : "hover:bg-[#b8965a]/10"
                }
              `}
            >
              <span
                className={`
                  text-[13px]
                  font-semibold
                  tracking-[0.2px]
                  leading-none
                  transition-all
                  duration-300
                  ${
                    location.hash === "#speaker-section"
                      ? "text-white"
                      : "text-[#111] hover:text-[#b8965a]"
                  }
                `}
              >
                Speaker
              </span>
            </Link>

            {/* Vita */}
            <Link
              to="/vita"
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                items-center
                px-4
                h-[40px]
                rounded-[12px]
                mb-[4px]
                transition-all
                duration-300
                ${
                  location.pathname === "/vita"
                    ? "bg-[#b8965a] shadow-[0_6px_16px_rgba(184,150,90,0.22)]"
                    : "hover:bg-[#b8965a]/10"
                }
              `}
            >
              <span
                className={`
                  text-[13px]
                  font-semibold
                  tracking-[0.2px]
                  leading-none
                  transition-all
                  duration-300
                  ${
                    location.pathname === "/vita"
                      ? "text-white"
                      : "text-[#111] hover:text-[#b8965a]"
                  }
                `}
              >
                Vita
              </span>
            </Link>

            {/* Projects */}
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                items-center
                px-4
                h-[40px]
                rounded-[12px]
                mb-[4px]
                transition-all
                duration-300
                ${
                  location.pathname === "/projects"
                    ? "bg-[#b8965a] shadow-[0_6px_16px_rgba(184,150,90,0.22)]"
                    : "hover:bg-[#b8965a]/10"
                }
              `}
            >
              <span
                className={`
                  text-[13px]
                  font-semibold
                  tracking-[0.2px]
                  leading-none
                  transition-all
                  duration-300
                  ${
                    location.pathname === "/projects"
                      ? "text-white"
                      : "text-[#111] hover:text-[#b8965a]"
                  }
                `}
              >
                {lang === "EN" ? "Projects" : "Projekte"}
              </span>
            </Link>

            {/* Workshops */}
            <Link
              to="/workshops"
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                items-center
                px-4
                h-[40px]
                rounded-[12px]
                mb-[4px]
                transition-all
                duration-300
                ${
                  location.pathname === "/workshops"
                    ? "bg-[#b8965a] shadow-[0_6px_16px_rgba(184,150,90,0.22)]"
                    : "hover:bg-[#b8965a]/10"
                }
              `}
            >
              <span
                className={`
                  text-[13px]
                  font-semibold
                  tracking-[0.2px]
                  leading-none
                  transition-all
                  duration-300
                  ${
                    location.pathname === "/workshops"
                      ? "text-white"
                      : "text-[#111] hover:text-[#b8965a]"
                  }
                `}
              >
                Consulting
              </span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={`
                flex
                items-center
                px-4
                h-[40px]
                rounded-[12px]
                mb-[4px]
                transition-all
                duration-300
                ${
                  location.pathname === "/contact"
                    ? "bg-[#b8965a] shadow-[0_6px_16px_rgba(184,150,90,0.22)]"
                    : "hover:bg-[#b8965a]/10"
                }
              `}
            >
              <span
                className={`
                  text-[13px]
                  font-semibold
                  tracking-[0.2px]
                  leading-none
                  transition-all
                  duration-300
                  ${
                    location.pathname === "/contact"
                      ? "text-white"
                      : "text-[#111] hover:text-[#b8965a]"
                  }
                `}
              >
                Let’s Work Together
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* LANGUAGE TOGGLE */}
      <div className="absolute top-[27px] right-[80px] md:right-[25px] z-50 lg:hidden">
        <button
          onClick={toggleLang}
          className="text-sm font-semibold tracking-[2px] hover:opacity-70 transition cursor-pointer"
        >
          {lang === "EN" ? "DE" : "EN"}
        </button>
      </div>
    </header>
  );
};

export default Header;
