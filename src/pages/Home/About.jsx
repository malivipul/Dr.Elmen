import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getHomeAbout,
  IMG_URL,
  getBi,
  getCached,
  setCached,
} from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const cached = getCached("homeIntro");
  const [about, setAbout] = useState(cached || null);
  const [loading, setLoading] = useState(!cached);
  const { lang } = useLanguage();

  useEffect(() => {
    getHomeAbout()
      .then((res) => {
        if (res.data) {
          setAbout(res.data);
          setCached("homeIntro", res.data);
        }
      })
      .catch((err) => console.error("Error fetching home intro:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-white py-[60px]">
        <div className="max-w-[1350px] mx-auto px-4 md:px-7 h-[400px] rounded-[38px] bg-gray-50 animate-pulse" />
      </div>
    );
  }

  const label =
    getBi(about?.label, lang) || (lang === "EN" ? "About Me" : "Über mich");
  const title =
    getBi(about?.title, lang) ||
    (lang === "EN"
      ? "Interim Manager for AI, HR and Business Process Transformation"
      : "Interim Manager für KI, HR und Geschäftsprozess-Transformation");
  const quote = getBi(about?.quote, lang);
  const desc = getBi(about?.desc, lang);
  const imgUrl =
    about && about.img
      ? `${IMG_URL}${about.img}`
      : "/assets/images/2026_03_17_Raphael_Edlmann_About Me.jpg";

  // Use uploaded CV from database if available, else standard fallback
  const cvUrl =
    about && about.cv
      ? `${IMG_URL}${about.cv}`
      : "/assets/images/Professional_CV_English-protected.pdf";

  const vitaItems =
    Array.isArray(about?.vita) && about.vita.length > 0 ? about.vita : [];
  const vitaTitle = getBi(about?.vitaTitle, lang) || "Vita";

  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[1350px] mx-auto px-[20px] md:px-[40px]">
        {/* MAIN GRID */}
        <div className="grid md:grid-cols-[40%_60%] gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-[620px]">
            {/* LABEL */}
            <span className="text-[#b8965a] text-xs tracking-[2px] uppercase mb-4 block">
              {label}
            </span>

            {/* TITLE */}
            <h2 className="title-font text-2xl md:text-[36px] text-black leading-tight mb-5">
              {title}
            </h2>

            {/* TEXT */}
            <div className="max-w-[58ch] space-y-5 text-[#0a3e40] text-[14px] md:text-[16px] leading-[1.8]">
              {quote && (
                <div
                  className="rich-text font-semibold italic"
                  dangerouslySetInnerHTML={{ __html: quote }}
                />
              )}

              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#f5f3ef] rounded-[22px] p-6 md:p-8 border border-[#e6dfd5] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* LEFT SIDE */}
              <div className="w-full lg:w-[40%] flex flex-col items-center">
                {/* IMAGE */}
                <div className="w-[250px] h-[330px] rounded-[20px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
                  <img
                    src={imgUrl}
                    className="w-full h-full object-cover"
                    alt="profile"
                  />
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col gap-3 mt-6 w-full">
                  <Link
                    to="/contact"
                    className="w-full text-center px-5 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition"
                  >
                    {lang === "EN" ? "Contact Me" : "Kontakt  "}
                  </Link>

                  {/* DOWNLOAD CV */}
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300"
                  >
                    <i className="fa-solid fa-download"></i>

                    {lang === "EN" ? "Download CV" : "Download CV "}
                  </a>
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full lg:w-[60%]">
                <span className="text-[#b8965a] text-[11px] tracking-[3px] uppercase mb-5 block">
                  {vitaTitle}
                </span>

                {/* INFO CARDS */}
                <div className="grid grid-cols-1 gap-5">
                  {vitaItems.length > 0 ? (
                    vitaItems.map((item, index) => {
                      const itemDegree = getBi(item.degree, lang);
                      const itemUni = getBi(item.university, lang);
                      return (
                        <div
                          key={index}
                          className="flex items-start gap-4 pb-5 border-b border-[#ddd5ca] last:border-0"
                        >
                          {/* LEFT LINE */}
                          <div className="w-[2px] h-[70px] bg-[#b8965a] rounded-full"></div>
                          {/* CONTENT */}
                          <div>
                            <h4 className="text-[#b8965a] text-[15px] font-semibold leading-none mb-3">
                              {itemDegree}
                            </h4>
                            <p className="text-[#0a3e40] text-[13px] md:text-[15px] leading-relaxed">
                              {itemUni}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-gray-300 text-xs italic">
                      No highlights listed yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
