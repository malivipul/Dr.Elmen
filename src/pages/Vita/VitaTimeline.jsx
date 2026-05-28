import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVitaTimeline, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const findTimelineItems = (value) => {
  if (!value) return [];

  if (Array.isArray(value)) {
    const timelineItems = value.filter((item) => {
      if (!item || typeof item !== "object") return false;
      return (
        item.year ||
        item.years ||
        item.date ||
        item.period ||
        item.title ||
        item.heading ||
        item.text ||
        item.description ||
        item.desc ||
        item.content
      );
    });

    if (timelineItems.length) return timelineItems;

    for (const item of value) {
      const nestedItems = findTimelineItems(item);
      if (nestedItems.length) return nestedItems;
    }

    return [];
  }

  if (typeof value !== "object") return [];

  const preferredKeys = [
    "items",
    "timeline",
    "timelines",
    "cards",
    "cardData",
    "vitaTimeline",
    "value",
    "data",
  ];

  for (const key of preferredKeys) {
    const nestedItems = findTimelineItems(value[key]);
    if (nestedItems.length) return nestedItems;
  }

  for (const nestedValue of Object.values(value)) {
    const nestedItems = findTimelineItems(nestedValue);
    if (nestedItems.length) return nestedItems;
  }

  return [];
};

const VitaTimeline = () => {
  const [activeArrow, setActiveArrow] = useState("left");
  const [timelineData, setTimelineData] = useState(null);
  const { lang } = useLanguage();

  useEffect(() => {
    let isMounted = true;

    getVitaTimeline()
      .then((res) => {
        if (!isMounted) return;
        setTimelineData(res.data || null);
      })
      .catch((err) => console.error("Error fetching Vita Timeline:", err));

    return () => {
      isMounted = false;
    };
  }, []);

  const sectionData =
    timelineData?.data && !Array.isArray(timelineData.data)
      ? timelineData.data
      : timelineData?.value && !Array.isArray(timelineData.value)
        ? timelineData.value
        : timelineData;

  const title =
    sectionData?.title || sectionData?.heading
      ? getBi(sectionData.title || sectionData.heading, lang)
      : lang === "EN"
        ? "Together Through the Years"
        : "Gemeinsam durch die Jahre";

  const subtitle =
    sectionData?.subtitle || sectionData?.description || sectionData?.text
      ? getBi(
          sectionData.subtitle || sectionData.description || sectionData.text,
          lang,
        )
      : lang === "EN"
        ? "A professional journey shaped by leadership, innovation, and continuous transformation across AI, HR, and business process management."
        : "Ein beruflicher Werdegang, gepraegt von Fuehrung, Innovation und kontinuierlicher Transformation in den Bereichen KI, HR und Geschaeftsprozessmanagement.";

  const items = findTimelineItems(timelineData)
    .map((item) => {
      const rawText =
        item.text ||
        item.description ||
        item.desc ||
        item.content ||
        item.details ||
        item.title ||
        item.heading;

      const year = getBi(
        item.year || item.years || item.date || item.period || item.duration,
        lang,
      );
      const text = getBi(rawText, lang);

      return {
        year: year.replace(/-/g, "\u2011"), // Non-breaking hyphen
        icon: item.icon || "fa-rocket",
        // Replace hyphens with non-breaking hyphens, but avoid replacing them inside HTML tags
        text: text,
      };
    })
    .filter((item) => item.year || item.text);

  return (
    <section className="bg-[#f4f4f4] py-[60px]">
      {/* TOP */}
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] text-center mb-14">
        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          Vita
        </span>

        <h2 className="title-font text-3xl md:text-[40px] text-black mt-2 mb-2">
          {title}
        </h2>

        <div
          className="rich-text text-[#0a3e40] text-[16px] max-w-xl mx-auto leading-relaxed"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      </div>

      {/* SLIDER */}
      <div className="max-w-[1450px] mx-auto px-[20px]">
        {items.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={items.length > 2}
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
              <SwiperSlide key={`${item.year}-${i}`} className="h-full">
                <div className="bg-white rounded-[20px] p-8 h-[550px] md:h-[470px] flex flex-col justify-between relative border border-[#f9f9f9] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition duration-300">
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
                      className="rich-text text-[#0a3e40] text-[15px] md:text-[16px] leading-relaxed max-h-[400px] md:max-h-[360px] overflow-y-auto pr-2 custom-scrollbar timeline-text"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="bg-white rounded-[20px] p-8 border border-[#f9f9f9] text-center text-[#0a3e40]">
            {lang === "EN"
              ? "No timeline items available."
              : "Keine Vita-Eintraege verfuegbar."}
          </div>
        )}

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
