import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVitaTimeline, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VitaTimeline = () => {
  const [activeArrow, setActiveArrow] = useState("left");
  const [hoverIndex, setHoverIndex] = useState(null);
  const [timelineData, setTimelineData] = useState(null);
  const { lang } = useLanguage();

  useEffect(() => {
    getVitaTimeline()
      .then((res) => {
        if (res.data) {
          setTimelineData(res.data);
        }
      })
      .catch((err) => console.error("Error fetching Vita Timeline:", err));
  }, []);

  const title = timelineData?.title
    ? typeof timelineData.title === "object"
      ? getBi(timelineData.title, lang)
      : timelineData.title
    : lang === "EN"
      ? "Together Through the Years"
      : "Gemeinsam durch die Jahre";

  const subtitle = timelineData?.subtitle
    ? typeof timelineData.subtitle === "object"
      ? getBi(timelineData.subtitle, lang)
      : timelineData.subtitle
    : lang === "EN"
      ? "A professional journey shaped by leadership, innovation, and continuous transformation across AI, HR, and business process management."
      : "Ein beruflicher Werdegang, geprägt von Führung, Innovation und kontinuierlicher Transformation in den Bereichen KI, HR und Geschäftsprozessmanagement.";

  const rawItems = timelineData?.items || [];

  const cleanHtml = (html) => {
    if (!html) return "";
    return html.replace(/&nbsp;/g, " ").replace(/\u00a0/g, " ");
  };

  const items = rawItems.map((item) => {
    const rawText =
      typeof item.text === "object" ? getBi(item.text, lang) : item.text;
    return {
      year: item.year,
      icon: item.icon || "fa-rocket",
      text: cleanHtml(rawText),
    };
  });

  return (
    <section className="bg-[#f4f4f4] py-[60px]">
      {/* TOP */}
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] text-center mb-14">
        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          {lang === "EN" ? "Vita" : "Vita"}
        </span>

        <h2 className="title-font text-3xl md:text-[40px] text-black mt-2 mb-2">
          {title}
        </h2>

        <p className="text-[#0a3e40] text-[16px] max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* SLIDER */}
      <div className="max-w-[1250px] mx-auto px-[20px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{
            el: ".custom-dots",
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {items.map((item, i) => (
            <SwiperSlide key={i} className="h-full">
              <div
                className="bg-white rounded-[20px] p-8 h-[550px] md:h-[450px] flex flex-col justify-between relative border border-[#f9f9f9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition duration-300"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* ICON */}
                <div className="absolute top-6 right-6 text-[#b8965a] text-[28px]">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                <div>
                  {/* YEAR */}
                  <h3
                    className="text-[#b8965a] text-[24px] font-semibold mb-1"
                    style={{
                      fontFamily: "Caveat, cursive",
                      letterSpacing: "1px",
                    }}
                  >
                    {item.year}
                  </h3>

                  {/* LINE */}
                  <div className="w-[35px] h-[2px] bg-[#b8965a] mb-4"></div>

                  {/* TEXT */}
                  <div
                    className="text-[#0a3e40] text-[15px] md:text-[16px] leading-relaxed overflow-y-auto overflow-x-hidden pr-2 custom-scrollbar timeline-text break-words"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTROLS */}
        <div className="relative flex items-center justify-between mt-12">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-4 z-20">
            {/* LEFT BUTTON */}
            <button
              onClick={() => setActiveArrow("left")}
              className={`prev-btn w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                activeArrow === "left"
                  ? "border-[#b8965a] bg-[#b8965a] text-white"
                  : "border-gray-300 bg-transparent text-[#0a3e40]"
              }`}
            >
              <i className="fa-solid fa-arrow-left text-[14px]"></i>
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => setActiveArrow("right")}
              className={`next-btn w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                activeArrow === "right"
                  ? "border-[#b8965a] bg-[#b8965a] text-white"
                  : "border-gray-300 bg-transparent text-[#0a3e40]"
              }`}
            >
              <i className="fa-solid fa-arrow-right text-[14px]"></i>
            </button>
          </div>

          {/* CENTER DOTS */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <div className="custom-dots flex items-center justify-center gap-2"></div>
          </div>

          {/* RIGHT SIDE */}
          <div className="z-20">
            <Link
              to="/assets/images/Professional_CV_English-protected.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="fa-solid fa-download text-[13px]"></i>
              <span>
                {lang === "EN" ? "Download CV" : "Lebenslauf herunterladen"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitaTimeline;
