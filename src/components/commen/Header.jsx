import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [lang, setLang] = useState("EN");

  // 🔥 CONTENT (same structure)
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

  const menuStyle = (index) => ({
    fontFamily: hoverIndex === index ? "Caveat, cursive" : "sans-serif",
    transform: hoverIndex === index ? "scale(1.05)" : "scale(1)",
    borderBottom: hoverIndex === index ? "2px solid white" : "none",
    transition: "0.3s",
  });

  const toggleLang = () => {
    setLang(lang === "EN" ? "DE" : "EN");
  };

  return (
    <header className="absolute top-[20px] left-0 w-full z-50 text-white">

      {/* SAME HEADER — NO CHANGE */}
      <div className="max-w-[1420px] mx-auto px-[20px] md:px-[40px] py-4 flex items-center justify-center">

        {/* LEFT MENU */}
        <div className="hidden lg:flex items-center gap-12 mr-8 font-semibold">
          {menuLeft.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <span style={menuStyle(i)}>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* LOGO */}
        <div className="mx-12">
          <Link to="/">
            <h1 className="text-lg md:text-2xl font-bold font-serif tracking-wide">
              Dr. Raphael Edlmann
            </h1>
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="hidden lg:flex items-center gap-12 ml-8 font-semibold ">
          {menuRight.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onMouseEnter={() => setHoverIndex(i + 10)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <span style={menuStyle(i + 10)}>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-2xl lg:hidden absolute right-[20px]"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      <div className={`fixed top-[90px] left-0 w-[300px] z-[100] transition ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="bg-[#f5f3ef] p-6 text-black">

          {[...menuLeft, ...menuRight].map((item, i) => (
            <Link key={i} to={item.path} onClick={() => setMenuOpen(false)}>
              <p className="mb-4">{item.name}</p>
            </Link>
          ))}

          <Link className="block mt-6 bg-[#b8965a] text-white text-center py-3 rounded-full">
            {content[lang].cta}
          </Link>
        </div>
      </div>

      {/* 🔥 LANGUAGE TOGGLE (ONLY ADD THIS) */}
      <div className="absolute top-[-10px] right-[20px] md:right-[40px] z-50">
        <button
          onClick={toggleLang}
          className="text-sm font-semibold tracking-wide"
        >
          {lang}
        </button>
      </div>

    </header>
  );
};

export default Header;