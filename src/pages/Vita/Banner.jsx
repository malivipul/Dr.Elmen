import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getVitaBanner, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const AboutBanner = () => {
  const [banner, setBanner] = useState(null);
  const { lang } = useLanguage();

  useEffect(() => {
    getVitaBanner()
      .then((res) => {
        if (res.data) {
          setBanner(res.data);
        }
      })
      .catch((err) => console.error("Error fetching Vita Banner:", err));
  }, []);

  const bannerImg = banner?.img 
    ? (banner.img.startsWith("http") || banner.img.startsWith("/assets") 
        ? banner.img 
        : `${IMG_URL}${banner.img}`)
    : "/assets/images/46.png";

  const bannerTitle = banner?.title 
    ? (typeof banner.title === "object" ? getBi(banner.title, lang) : banner.title)
    : "Vita";

  return (
    <section className="relative w-full h-[340px] md:h-[460px] overflow-hidden rounded-b-[40px]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bannerImg}
          alt="About Banner"
          className="w-full h-full object-cover object-[90%_center] md:object-center"
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1420px] mx-auto px-[24px] md:px-[40px] h-full flex flex-col justify-end md:justify-center pb-12 md:pb-0">
        {/* CONTENT BOX */}
        <div className="max-w-fit">
          {/* BREADCRUMB */}
          <div className="text-white text-[13px] md:text-sm mb-3 flex items-center gap-2 opacity-90 font-medium">
            <Link to="/" className="hover:underline">
              {lang === "EN" ? "Home" : "Startseite"}
            </Link>
            <span>›</span>
            <span className="font-semibold">
              {bannerTitle}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-white text-[38px] md:text-5xl font-serif leading-none md:leading-tight drop-shadow-lg">
            {bannerTitle}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;