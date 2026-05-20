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
       { name: "Speaker", path: "/#speaker-section" },
      ],

      right: [
        { name: "Vita", path: "/vita" },
        { name: "Projects", path: "/projects" },
        { name: "Workshops", path: "/workshops" },
        { name: "Let’s Work Together", path: "/contact" },
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
      <div className="max-w-[1450px] mx-auto px-[0px] md:px-[40px] py-6 flex items-center justify-between relative">

        {/* LEFT MENU */}
        <div className="hidden lg:flex items-center gap-9 flex-1 justify-end">

          {menuLeft.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative flex items-center h-[30px]"
            >
              <span
                className={`
                  relative
                  inline-block
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${
                    hoverIndex === i ? "font-['Caveat']" : ""
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    bg-white
                    transition-all
                    duration-300
                    ${
                      hoverIndex === i ? "w-full" : "w-0"
                    }
                  `}
                ></span>

              </span>
            </Link>
          ))}

        </div>

        {/* LOGO */}
        <div className="mx-10 shrink-0">
          <Link to="/">
            <h1 className="text-[20px] md:text-[30px] font-bold font-serif leading-tight">
              Dr. Raphael
              <br className="block md:hidden" />
              <span className="md:ml-2">Edlmann</span>
            </h1>
          </Link>
        </div>

        {/* RIGHT MENU */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-start">

          {menuRight.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onMouseEnter={() => setHoverIndex(i + 10)}
              onMouseLeave={() => setHoverIndex(null)}
              className="relative flex items-center h-[30px]"
            >
              <span
                className={`
                  relative
                  inline-block
                  text-[16px]
                  font-semibold
                  tracking-wide
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ${
                    hoverIndex === i + 10 ? "font-['Caveat']" : ""
                  }
                `}
              >
                {item.name}

                <span
                  className={`
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    bg-white
                    transition-all
                    duration-300
                    ${
                      hoverIndex === i + 10 ? "w-full" : "w-0"
                    }
                  `}
                ></span>

              </span>
            </Link>
          ))}

        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden absolute right-[20px] top-5 text-[28px] text-white"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
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
      w-[32px]
      h-[32px]
      rounded-full
      border
      border-[#e3ddd3]
      bg-white
      text-[18px]
      text-black
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:bg-[#b8965a]
      hover:border-[#b8965a]
      hover:text-white
      active:scale-90
    "
  >
    ×
  </button>

{/* MENU ITEMS */}
<div className="relative z-10 pt-8">

  {[...menuLeft, ...menuRight].map((item, i) => (

    <Link
      key={i}
      to={item.path}
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
          location.pathname === item.path
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
            location.pathname === item.path
              ? "text-white"
              : "text-[#111] hover:text-[#b8965a]"
          }
        `}
      >
        {item.name}
      </span>

    </Link>

  ))}

</div>
</div>

      </div>

      {/* LANGUAGE TOGGLE */}
      <div className="absolute top-[30px] right-[80px] md:right-[25px] z-50">
        <button
          onClick={toggleLang}
          className="text-sm font-semibold tracking-[2px] hover:opacity-70 transition"
        >
          {lang === "EN" ? "DE" : "EN"}
        </button>
      </div>

    </header>
  );
};

export default Header;