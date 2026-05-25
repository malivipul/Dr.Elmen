import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProjects, getProjectHeader, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectsSection() {
  const [flippedCard, setFlippedCard] = useState(null);
  const [dbProjects, setDbProjects] = useState([]);
  const [header, setHeader] = useState(null);
  const { lang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    getProjects()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data) ? res.data : (res.data.value || []);
          setDbProjects(list);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err));

    getProjectHeader()
      .then((res) => {
        if (res.data) {
          setHeader(res.data);
        }
      })
      .catch((err) => console.error("Error fetching project header:", err));
  }, []);

  useEffect(() => {
    if (dbProjects.length > 0) {
      const searchParams = new URLSearchParams(location.search);
      if (searchParams.get("scrollTo") === "projects") {
        setTimeout(() => {
          const element = document.getElementById("projects-section");
          if (element) {
            const yOffset = -90; // clear the sticky header elegantly
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          }
        }, 600);
      }
    }
  }, [dbProjects, location.search]);

  const displayedProjects = dbProjects;

  const headerTitle = header ? getBi(header.title, lang) : "Projects";
  const headerSubtitle = header ? getBi(header.subtitle, lang) : "Transforming Ideas into Impactful Solutions";
  const headerDesc = header ? getBi(header.description, lang) : "A collection of strategic initiatives, technology-driven implementations, and business transformation projects focused on AI, HR innovation, automation, and operational excellence.";

  const getLogoUrl = (logo) => {
    if (!logo) return "";
    if (logo.startsWith("http") || logo.startsWith("/assets")) return logo;
    if (logo.startsWith("/uploads")) return `${IMG_URL}${logo}`;
    return `${IMG_URL}/uploads/${logo}`;
  };

  return (
    <section id="projects-section" className="py-[60px] bg-[#f4f4f4] overflow-hidden">
      {/* TOP */}
      <div className="text-center mb-14 px-5 md:px-0">
        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          {headerTitle}
        </span>

        <h2 className="title-font text-3xl md:text-[40px] text-black mt-2 mb-3 leading-[1.3]">
          {headerSubtitle}
        </h2>

        <p className="text-[#0a3e40] text-[16px] max-w-[760px] mx-auto leading-[30px] whitespace-pre-line">
          {headerDesc}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-7">
          {displayedProjects.map((item, index) => {
            const itemTitle = typeof item.title === "object" ? getBi(item.title, lang) : item.title;
            const itemRole = typeof item.role === "object" ? getBi(item.role, lang) : item.role;
            const itemDesc = typeof item.description === "object" ? getBi(item.description, lang) : (typeof item.desc === "object" ? getBi(item.desc, lang) : (item.description || item.desc || ""));
            const itemLogos = item.logos || [];

            return (
              <div
                key={index}
                id={`project-card-${index}`}
                className="group perspective-[2000px] cursor-pointer"
                onClick={() =>
                  setFlippedCard(flippedCard === index ? null : index)
                }
              >
                {/* FLIP CARD */}
                <div
                  className={`
                    relative w-full
                    transition-all duration-700
                    md:h-[430px]
                    [transform-style:preserve-3d]

                    lg:group-hover:[transform:rotateY(180deg)]

                    ${
                      flippedCard === index
                        ? "[transform:rotateY(180deg)]"
                        : ""
                    }
                  `}
                >
                  {/* FRONT SIDE */}
                  <div
                    className={`
                      bg-white
                      rounded-[20px]
                      p-7 md:p-8
                      shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                      overflow-hidden

                      md:absolute md:inset-0
                      [backface-visibility:hidden]

                      ${
                        flippedCard === index
                          ? "hidden md:block"
                          : "block"
                      }
                    `}
                  >
                    {/* LOGOS */}
                    <div className="flex items-center gap-2 md:gap-3 flex-nowrap mb-7 relative z-10 overflow-x-auto scrollbar-hide">
                      {itemLogos.map((logo, i) => (
                        <div
                          key={i}
                          className="bg-[#f4f4f4] rounded-[16px] md:rounded-[20px] px-3 md:px-5 py-3 md:py-4 border border-[#f4f4f4] shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        >
                          <img
                            src={getLogoUrl(logo)}
                            alt="logo"
                            className="h-[32px] md:h-[46px] w-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    {/* TITLE */}
                    <h3 className="title-font text-[20px] md:text-[26px] text-black leading-[1.45] mb-4 relative z-10">
                      {itemTitle}
                    </h3>

                    {/* ROLE */}
                    <p className="text-[13px] uppercase tracking-[2px] text-[#b8965a] mb-5 relative z-10">
                      {itemRole}
                    </p>

                    {/* LINE */}
                    <div className="w-full h-[1px] bg-[#ece6dc] mb-5"></div>

                    {/* DESCRIPTION */}
                    <p className="text-[16px] text-[#0a3e40] leading-[29px] relative z-10">
                      {itemDesc}
                    </p>
                  </div>

                  {/* BACK SIDE */}
                  <div
                    className={`
                      bg-[#111111]
                      rounded-[30px]
                      p-7 md:p-8
                      shadow-[0_15px_40px_rgba(0,0,0,0.18)]

                      /* MOBILE AUTO HEIGHT */
                      relative h-auto

                      /* DESKTOP FLIP */
                      md:absolute md:inset-0
                      md:h-full
                      [transform:rotateY(180deg)]
                      [backface-visibility:hidden]

                      ${
                        flippedCard === index
                          ? "block"
                          : "hidden md:block"
                      }
                    `}
                  >
                    {/* GLOW */}
                    <div className="absolute bottom-[-70px] right-[-70px] w-[180px] h-[180px] bg-[#d4b17d]/10 rounded-full blur-[80px]"></div>

                    {/* TITLE */}
                    <h3 className="title-font text-[21px] md:text-[23px] text-white mb-7 relative z-10">
                      {lang === "EN" ? "Key Responsibilities & Achievements" : "Wesentliche Aufgaben & Erfolge"}
                    </h3>

                    {/* BULLET POINTS */}
                    <div className="space-y-5 relative z-10">
                      {(item.points || []).map((p, i) => {
                        const pointText = typeof p === "object" ? getBi(p, lang) : p;
                        return (
                          <div
                            key={i}
                            className="flex items-start gap-4"
                          >
                            {/* ICON */}
                            <div className="min-w-[22px] h-[22px] rounded-full bg-[#d4b17d] flex items-center justify-center mt-1">
                              <span className="text-white text-[10px]">
                                ✔
                              </span>
                            </div>

                            {/* TEXT */}
                            <p className="text-[13px] text-[#e5e5e5] leading-[27px]">
                              {pointText}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}