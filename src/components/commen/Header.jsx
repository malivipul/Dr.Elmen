import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [lang, setLang] = useState("EN");

  // CONTENT
  const content = {
    EN: {
      left: [
        { name: "About Me", path: "/about" },
        { name: "HR & AI Insights", path: "/insights" },
        { name: "Author", path: "/author" },
        { name: "Speaker", path: "/speaker" },
      ],
      right: [
        { name: "Vita", path: "/vita" },
        { name: "Projects", path: "/projects" },
        { name: "Workshops", path: "/workshops" },
        { name: "Let’s Work", path: "/contact" },
      ],
      cta: "LET’S WORK →",
    },

    DE: {
      left: [
        { name: "Über mich", path: "/about" },
        { name: "HR & KI Einblicke", path: "/insights" },
        { name: "Autor", path: "/author" },
        { name: "Redner", path: "/speaker" },
      ],
      right: [
        { name: "Vita", path: "/vita" },
        { name: "Projekte", path: "/projects" },
        { name: "Workshops", path: "/workshops" },
        { name: "Kontakt", path: "/contact" },
      ],
      cta: "ZUSAMMENARBEIT →",
    },
  };

  const menuLeft = content[lang].left;
  const menuRight = content[lang].right;

  const toggleLang = () => {
    setLang(lang === "EN" ? "DE" : "EN");
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white">

      {/* HEADER */}
      <div className="max-w-[1450px] mx-auto px-[20px] md:px-[40px] py-6 flex items-center justify-between relative">

        {/* LEFT MENU */}
        <div className="hidden lg:flex items-center gap-9 flex-1 justify-end">

          {menuLeft.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative overflow-hidden"
            >
              <span
                className={`relative inline-block text-[16px] font-semibold tracking-wide transition-all duration-300
                ${
                  hoverIndex === i
                    ? "scale-105 font-['Caveat']"
                    : "scale-100"
                }`}
              >
                {item.name}

                {/* UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300
                  ${
                    hoverIndex === i
                      ? "w-full"
                      : "w-0"
                  }`}
                ></span>
              </span>
            </Link>
          ))}

        </div>

        {/* LOGO */}
        <div className="mx-10 shrink-0">
          <Link to="/">
            <h1 className="text-[24px] md:text-[30px] font-bold font-serif tracking-[1px] whitespace-nowrap">
              Dr. Raphael Edlmann
            </h1>
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="hidden lg:flex items-center gap-9 flex-1 justify-start">

          {menuRight.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onMouseEnter={() => setHoverIndex(i + 10)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative overflow-hidden"
            >
              <span
                className={`relative inline-block text-[16px] font-semibold tracking-wide transition-all duration-300
                ${
                  hoverIndex === i + 10
                    ? "scale-105 font-['Caveat']"
                    : "scale-100"
                }`}
              >
                {item.name}

                {/* UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-white transition-all duration-300
                  ${
                    hoverIndex === i + 10
                      ? "w-full"
                      : "w-0"
                  }`}
                ></span>
              </span>
            </Link>
          ))}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden absolute right-[20px] text-[30px]"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-[#f5f3ef] z-[100] transition-all duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-3xl text-black"
        >
          ×
        </button>

        <div className="pt-24 px-8 text-black">

          {[...menuLeft, ...menuRight].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              <p className="mb-6 text-[18px] font-medium hover:translate-x-2 transition-all duration-300">
                {item.name}
              </p>
            </Link>
          ))}

          {/* CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-8 bg-[#b8965a] text-white text-center py-4 rounded-full font-semibold tracking-wide hover:opacity-90 transition"
          >
            {content[lang].cta}
          </Link>

        </div>

      </div>

      {/* LANGUAGE TOGGLE */}
      <div className="absolute top-5 right-[70px] md:right-[40px] z-50">
        <button
          onClick={toggleLang}
          className="text-sm font-semibold tracking-[2px] hover:opacity-70 transition"
        >
          {lang}
        </button>
      </div>

    </header>
  );
};

export default Header;