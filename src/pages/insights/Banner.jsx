import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { getBlogBanner, getBi, IMG_URL, getCached, setCached } from "../../api/api";

const AboutBanner = () => {
  const { lang } = useLanguage();
  const cached = getCached("blogBanner");
  const [banner, setBanner] = useState(cached || null);

  useEffect(() => {
    getBlogBanner().then(({ data }) => {
      if (data) {
        setBanner(data);
        setCached("blogBanner", data);
      }
    });
  }, []);

  const title = getBi(banner?.title, lang) || (lang === "EN" ? "HR & AI Insights" : "HR & KI Einblicke");
  const bannerImg = banner?.img ? `${IMG_URL}${banner.img}` : "/assets/images/Untitled design (47).png";

  return (
    <section className="relative w-full h-[340px] md:h-[460px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img
          src={bannerImg}
          alt={title}
          className="w-full h-full object-cover md:object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>

      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1420px] mx-auto px-[24px] md:px-[40px] h-full flex flex-col justify-end md:justify-center pb-12 md:pb-0">

        {/* CONTENT BOX */}
        <div className="max-w-fit">

          {/* BREADCRUMB */}
          <div className="text-white text-[13px] md:text-sm mb-3 flex items-center gap-2 opacity-90 font-medium">

            <Link
              to="/"
              className="hover:underline"
            >
              Home
            </Link>

            <span>›</span>

            <span className="font-semibold">
              {title}
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-white text-[38px] md:text-5xl font-serif leading-none md:leading-tight drop-shadow-lg">
            {title}
          </h1>

        </div>

      </div>

    </section>
  );
};

export default AboutBanner;