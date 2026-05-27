import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getServiceHeader, getBi, getCached, setCached, IMG_URL } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const AboutBanner = () => {
  const cached = getCached("serviceHeader");
  const [header, setHeader] = useState(cached || null);
  const [loading, setLoading] = useState(!cached);
  const { lang } = useLanguage();

  useEffect(() => {
    getServiceHeader()
      .then((res) => {
        if (res.data) {
          setHeader(res.data);
          setCached("serviceHeader", res.data);
        }
      })
      .catch((err) => console.error("Error fetching service header:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="w-full h-[340px] md:h-[460px] bg-[#111]" />;
  }

  const bannerTitle = header ? getBi(header.subtitle, lang) : (lang === "EN" ? "Workshops" : "Workshops");
  const bannerImg = header?.img || header?.image || header?.bannerImg;
  const imageUrl = bannerImg
    ? bannerImg.startsWith("http") || bannerImg.startsWith("/assets")
      ? bannerImg
      : `${IMG_URL}${bannerImg}`
    : "/assets/images/2151966708.jpg";

  return (
    <section className="relative w-full h-[340px] md:h-[460px] overflow-hidden bg-[#111]">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={bannerTitle}
          className="w-full h-full object-cover object-center"
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1420px] mx-auto px-[24px] md:px-[40px] h-full flex flex-col justify-end md:justify-center pb-12 md:pb-0">
        {/* CONTENT BOX */}
        <div className="max-w-fit">
          {/* BREADCRUMB */}
          <div className="text-white text-[13px] md:text-sm mb-3 flex items-center gap-2 opacity-90 font-medium">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>›</span>
            <span className="font-semibold">{bannerTitle}</span>
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
