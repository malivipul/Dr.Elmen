import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getBlogs, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

import "swiper/css";

const categoryTranslations = {
  guides: { en: "Guides", de: "Leitfäden" },
  opinions: { en: "Opinions", de: "Meinungen" },
  "case studies": { en: "Case Studies", de: "Fallstudien" },
  tools: { en: "Tools", de: "Werkzeuge" },
  archive: { en: "Archive", de: "Archiv" },
  hr: { en: "HR", de: "HR" },
  ai: { en: "AI", de: "KI" },
  leadership: { en: "Leadership", de: "Führung" },
};

const getCategoryLabel = (cat, currentLang) => {
  const translation = categoryTranslations[cat.toLowerCase()];
  if (translation) {
    return currentLang === "EN" ? translation.en : translation.de;
  }
  return cat
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatCategoryDisplay = (catStr, currentLang) => {
  if (!catStr) return "";
  return catStr
    .split(",")
    .map((c) => getCategoryLabel(c.trim(), currentLang))
    .join(", ");
};

const BlogSection = ({ setIsOpen }) => {
  const [active, setActive] = useState("all");
  const [blogList, setBlogList] = useState([]);
  const { lang } = useLanguage();

  useEffect(() => {
    getBlogs()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data)
            ? res.data
            : res.data.value || [];
          setBlogList(list);
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const staticBlogs = [
    {
      _id: "1",
      category: "guides",
      title: {
        en: "AI Implementation in HR",
        de: "KI-Implementierung im Personalwesen",
      },
      img: "/assets/images/blog2.png",
      desc: {
        en: "AI integration in HR is transforming recruitment, employee engagement, talent management, and workforce productivity.",
        de: "Die Integration von KI im Personalwesen transformiert die Personalbeschaffung, das Mitarbeiterengagement und das Talentmanagement.",
      },
      date: "May 22, 2025",
      read: "6 min read",
      link: "/blog-details",
    },
    {
      _id: "2",
      category: "opinions",
      title: { en: "AI Leadership", de: "KI-Führung" },
      img: "/assets/images/people-office-analyzing-checking-finance-graphs.jpg",
      desc: {
        en: "Modern leadership is evolving through AI-driven decision making, strategic innovation, and digital transformation.",
        de: "Die moderne Führung entwickelt sich durch KI-gestützte Entscheidungsfindung und strategische Innovation weiter.",
      },
      date: "May 18, 2025",
      read: "5 min read",
      link: "/blog-details",
    },
  ];

  const rawBlogs = blogList && blogList.length > 0 ? blogList : staticBlogs;

  // Format into flat representations matching language choice
  const formattedBlogs = rawBlogs.map((b) => {
    const rawCategory = String(b.Category || b.category || "").toLowerCase();
    return {
      _id: b._id,
      category: rawCategory,
      displayCategory: formatCategoryDisplay(rawCategory, lang),
      title: typeof b.title === "object" ? getBi(b.title, lang) : b.title,
      desc:
        typeof b.description === "object"
          ? getBi(b.description, lang)
          : typeof b.desc === "object"
            ? getBi(b.desc, lang)
            : b.description || b.desc || "",
      img:
        b.img || b.image
          ? (b.img || b.image).startsWith("http") ||
            (b.img || b.image).startsWith("/assets")
            ? b.img || b.image
            : `${IMG_URL}${b.img || b.image}`
          : "/assets/images/blog2.png",
      date: b.date || "May 2025",
      read: b.read || "5 min read",
      link: `/blog-details/${b._id}`,
    };
  });

  // FILTER
  const filtered =
    active === "all"
      ? formattedBlogs
      : formattedBlogs.filter((item) => {
          if (!item.category) return false;
          const cats = item.category
            .split(",")
            .map((c) => c.trim().toLowerCase());
          return cats.includes(active);
        });

  // LATEST ARTICLE
  const latestArticle = filtered[0];

  // NEXT BLOGS
  const recentArticles = filtered.slice(1, 6);

  // COLLECT DYNAMIC CATEGORIES EXCEPT 'all'
  const dynamicCategoriesSet = new Set();
  formattedBlogs.forEach((b) => {
    if (b.category) {
      b.category.split(",").forEach((cat) => {
        const trimmed = cat.trim().toLowerCase();
        if (trimmed && trimmed !== "all" && trimmed !== "alle") {
          dynamicCategoriesSet.add(trimmed);
        }
      });
    }
  });

  const uniqueCategories = Array.from(dynamicCategoriesSet);

  // TABS (Keep "All" as hardcoded first, the rest are dynamic)
  const tabs = [
    { label: lang === "EN" ? "All" : "Alle", value: "all" },
    ...uniqueCategories.map((cat) => ({
      label: getCategoryLabel(cat, lang),
      value: cat,
    })),
  ].slice(0, 7);

  return (
    <section className="bg-[#f5f3ef] py-[60px]">
      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[40px]">
        {/* TOP */}
        <div className="relative text-center mb-10">
          {/* SUBSCRIBE DESKTOP */}
          <div className="hidden md:block absolute right-0 top-0">
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-3 rounded-full bg-black text-white text-sm font-bold hover:bg-[#b8965a] hover:text-white transition duration-300 inline-flex items-center gap-2 cursor-pointer"
            >
              <i className="fa-regular fa-envelope"></i>
              Subscribe
            </button>
          </div>

          {/* SUBSCRIBE MOBILE */}
          <div className="absolute right-0 top-0 md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="w-[44px] h-[44px] rounded-full bg-black text-white border border-black hover:bg-transparent hover:text-black transition duration-300 flex items-center justify-center cursor-pointer"
            >
              <i className="fa-regular fa-envelope text-[15px]"></i>
            </button>
          </div>

          {/* LABEL */}
          <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
            Insights & Resources
          </span>

          {/* TITLE */}
          <h2 className="title-font text-2xl md:text-[36px] text-black leading-tight mb-5 mt-3">
            Articles & Tools
          </h2>

          {/* SUBTITLE */}
          <p className="text-[#0a3e40] text-[16px] leading-relaxed max-w-[760px] mx-auto">
            Insights, guides, tools, and perspectives on HR, AI and the future
            of work.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(tab.value)}
              className={`
                px-6
                py-2
                rounded-full
                border
                text-sm
                font-bold
                transition-all
                duration-300
                cursor-pointer
                ${
                  active === tab.value
                    ? "border-[#b8965a] bg-white text-[#b8965a] shadow-sm"
                    : "border-[#d6d3cc] text-[#6b6b6b] hover:border-[#b8965a] hover:text-[#b8965a]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* LATEST ARTICLE HEADING */}
        <h3 className="text-left text-[#b8965a] text-[16px]  font-bold mb-5">
          Latest Article
        </h3>
        {/* LATEST ARTICLE */}
        {latestArticle && (
          <div className="bg-white border border-[#e6dfd5] rounded-[20px] overflow-hidden mb-8">
            <div className="grid lg:grid-cols-2 items-stretch">
              {/* LEFT */}
              <div className="p-7 md:p-10 text-left flex flex-col justify-center">
                <span className="text-[#b8965a] text-xs tracking-[2px] uppercase font-semibold">
                  {latestArticle.displayCategory}
                </span>

                <h3 className="title-font text-[20px] md:text-[26px] font-medium leading-tight text-black mt-4 max-w-[500px]">
                  {latestArticle.title}
                </h3>

                <p className="text-[#0a3e40] text-[16px] leading-[1.9] mt-4 max-w-[500px] line-clamp-3">
                  {latestArticle.desc}
                </p>

                <div className="flex items-center gap-4 mt-5 text-[#7b7b7b] text-sm">
                  <span>{latestArticle.date}</span>

                  <span>•</span>

                  <span>{latestArticle.read}</span>
                </div>

                <div className="mt-6">
                  <Link
                    to={latestArticle.link}
                    className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center gap-2 cursor-pointer"
                  >
                    Read Article
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              {/* IMAGE */}
              <div className="relative w-full h-[260px] md:h-auto min-h-[340px] overflow-hidden">
                <img
                  src={latestArticle.img}
                  alt={latestArticle.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* RECENT ARTICLES */}
        <div className="mb-10">
          <h3 className="text-left text-[#b8965a] text-[16px]  font-bold mb-5">
            Recent Articles
          </h3>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {recentArticles.slice(0, 3).map((item, i) => (
              <SwiperSlide key={i}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <Link
            to="/insights"
            className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center justify-center"
          >
            View More Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

const Card = ({ item }) => (
  <Link
    to={item.link}
    className="group bg-white rounded-[18px] overflow-hidden border border-[#e6dfd5] hover:-translate-y-1 transition duration-300 block"
  >
    {/* IMAGE */}
    <div className="overflow-hidden relative">
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-[180px] object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
    </div>

    {/* CONTENT */}
    <div className="p-4">
      {/* CATEGORY */}
      <span className="text-[11px] text-[#b8965a] uppercase tracking-[2px] font-semibold">
        {item.displayCategory}
      </span>

      {/* TITLE */}
      <h3 className="title-font text-[22px] font-normal text-black mt-3 leading-[1.4]">
        {item.title}
      </h3>

      {/* DESC */}
      <p className="text-[#0a3e40] text-[15px] mt-3 leading-[1.7] line-clamp-2">
        {item.desc}
      </p>

      {/* DATE + READ */}
      <div className="flex items-center gap-3 mt-5 text-[#7b7b7b] text-[13px]">
        <span>{item.date}</span>

        <span>•</span>

        <span>{item.read}</span>
      </div>
    </div>
  </Link>
);

export default BlogSection;
