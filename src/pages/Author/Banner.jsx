import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import {
  getAuthorBanner,
  getBi,
  IMG_URL,
  getCached,
  setCached,
} from "../../api/api";

const AboutBanner = () => {
  const { lang } = useLanguage();
  const cached = getCached("authorBanner");
  const [banner, setBanner] = useState(cached || null);

  useEffect(() => {
    getAuthorBanner().then(({ data }) => {
      if (data) {
        setBanner(data);
        setCached("authorBanner", data);
      }
    });
  }, []);

  const title =
    getBi(banner?.title, lang) || (lang === "EN" ? "Author" : "Autor");
  const bannerImg = banner?.img
    ? `${IMG_URL}${banner.img}`
    : "/assets/images/image (16).png";

  return (
    <section className="relative w-full h-[340px] md:h-[460px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 ">
        <img
          src={bannerImg}
          alt={title}
          className="w-full h-full object-cover object-[90%_center] md:object-top"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20"></div>
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

            <span className="font-semibold">{title}</span>
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
