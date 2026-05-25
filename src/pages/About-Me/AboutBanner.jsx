import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAboutBanner, getBi, IMG_URL } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const AboutBanner = () => {
  const [banner, setBanner] = useState(null);
  const { lang } = useLanguage();

  useEffect(() => {
    getAboutBanner()
      .then((res) => {
        if (res.data) {
          setBanner(res.data);
        }
      })
      .catch((err) => console.error("Error fetching about banner:", err));
  }, []);

  const title = banner ? getBi(banner.title || banner.heading, lang) : "About Me";
  const breadcrumbTitle = banner ? getBi(banner.breadcrumb || banner.title || banner.heading, lang) : "About Me";
  const imagePath = banner?.img || banner?.image;
  const imageUrl = imagePath
    ? imagePath.startsWith("http") || imagePath.startsWith("/assets")
      ? imagePath
      : `${IMG_URL}${imagePath}`
    : "/assets/images/about.jpg";

  return (
    <section className="relative w-full h-[340px] md:h-[460px] overflow-hidden ">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>

       
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1420px] mx-auto px-[24px] md:px-[40px] h-full flex flex-col justify-end md:justify-center pb-12 md:pb-0">

        {/* CONTENT BOX */}
        <div className="max-w-fit">

         {/* BREADCRUMB */}
<div className="text-white text-[15px] md:text-sm mb-3 flex items-center gap-2 opacity-90 font-medium">

  <Link
    to="/"
    className="hover:underline"
  >
    Home
  </Link>

  <span className="text-[16px] leading-none">›</span>

  <span className="font-semibold">
    {breadcrumbTitle}
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
