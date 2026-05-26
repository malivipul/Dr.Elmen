import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjectHeader, getBi, IMG_URL } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const ProjectBanner = () => {
  const [banner, setBanner] = useState(null);
  const { lang } = useLanguage();

  useEffect(() => {
    let isMounted = true;

    getProjectHeader()
      .then((res) => {
        if (!isMounted) return;
        setBanner(res.data || null);
      })
      .catch((err) => console.error("Error fetching project header:", err));

    return () => {
      isMounted = false;
    };
  }, []);

  const sectionData =
    banner?.data && !Array.isArray(banner.data)
      ? banner.data
      : banner;
  const imagePath = sectionData?.img || sectionData?.image || sectionData?.bannerImg;
  const bannerImg = imagePath
    ? imagePath.startsWith("http") || imagePath.startsWith("/assets")
      ? imagePath
      : `${IMG_URL}${imagePath}`
    : "/assets/images/project.jpeg";
  const bannerTitle = lang === "EN" ? "Projects" : "Projekte";

  return (
    <section className="relative w-full h-[340px] md:h-[460px] overflow-hidden ">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bannerImg}
          alt={bannerTitle}
          className="w-full h-full object-cover md:object-cover object-center"
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

            <span>{">"}</span>

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

export default ProjectBanner;
