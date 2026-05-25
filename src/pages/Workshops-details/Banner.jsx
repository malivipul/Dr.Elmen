import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getServiceBySlug, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const staticTitles = {
  "ai-strategy-workshop-for-hr": {
    en: "AI Strategy Workshop for HR",
    de: "KI-Strategie-Workshop für HR"
  },
  "interim-management-services": {
    en: "Interim Management Services",
    de: "Interim Management Services"
  },
  "process-modelling-and-workload-automation": {
    en: "Process Modelling & Workload Automation",
    de: "Prozessmodellierung & Workload-Automatisierung"
  },
  "digital-transformation-workshop": {
    en: "Digital Transformation Workshop",
    de: "Digitale Transformations-Workshop"
  }
};

const AboutBanner = () => {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (slug) {
      getServiceBySlug(slug)
        .then((res) => {
          if (res.data) {
            setTitle(getBi(res.data.title, lang));
          } else {
            setTitle(staticTitles[slug]?.[lang.toLowerCase()] || (lang === "EN" ? "Workshop Details" : "Workshop-Details"));
          }
        })
        .catch((err) => {
          console.error("Error fetching service for banner:", err);
          setTitle(staticTitles[slug]?.[lang.toLowerCase()] || (lang === "EN" ? "Workshop Details" : "Workshop-Details"));
        });
    } else {
      setTitle(lang === "EN" ? "Workshop Details" : "Workshop-Details");
    }
  }, [slug, lang]);

  return (
    <section className="relative w-full h-[340px] md:h-[460px] overflow-hidden rounded-b-[40px]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img
          src="/assets/images/25.png"
          alt="About Banner"
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

            <Link
              to="/"
              className="hover:underline"
            >
              {lang === "EN" ? "Home" : "Startseite"}
            </Link>

            <span>›</span>

            <span className="opacity-75">
             {lang === "EN" ? "Workshops" : "Workshops"}
            </span>
             <span>›</span>

            <span className="font-semibold">
              {title}
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-white text-[32px] md:text-5xl font-serif leading-none md:leading-tight drop-shadow-lg">
            {title}
          </h1>

        </div>

      </div>

    </section>
  );
};

export default AboutBanner;