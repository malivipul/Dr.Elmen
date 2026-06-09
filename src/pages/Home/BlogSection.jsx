import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getBlogs, getBlogHeader, IMG_URL, getBi, formatDate } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "../../components/commen/Icon";

import "swiper/css";

const cleanRichText = (value = "") =>
  String(value)
    .replace(/<\/p>\s*<p[^>]*>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?p[^>]*>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;|\u00a0/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .trim();

// Strip HTML tags and decode common entities for plain-text preview
const stripHtml = (html) => {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/<[^>]*>/g, " ") // remove all HTML tags
    .replace(/&nbsp;/g, " ") // decode &nbsp;
    .replace(/&amp;/g, "&") // decode &amp;
    .replace(/&lt;/g, "<") // decode &lt;
    .replace(/&gt;/g, ">") // decode &gt;
    .replace(/&quot;/g, '"') // decode &quot;
    .replace(/&#39;/g, "'") // decode &#39;
    .replace(/\s+/g, " ") // collapse multiple spaces
    .trim();
};

const getReadTime = (content, currentLang) => {
  const text = stripHtml(content);
  const words = text.match(/\S+/g)?.length || 0;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return currentLang === "EN"
    ? `${minutes} min read`
    : `${minutes} Min. Lesezeit`;
};

const getCategoryLabel = (cat) => {
  return cat
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatCategoryDisplay = (catStr) => {
  if (!catStr) return "";
  return catStr
    .split(",")
    .map((c) => getCategoryLabel(c.trim()))
    .join(", ");
};

const BlogSection = ({ setIsOpen }) => {
  const [active, setActive] = useState("all");
  const [blogList, setBlogList] = useState([]);
  const [header, setHeader] = useState(null);
  const [readArticles, setReadArticles] = useState([]);
  const { lang } = useLanguage();

  useEffect(() => {
    // Load read articles from local storage
    const read = JSON.parse(localStorage.getItem("readArticles") || "[]");
    setReadArticles(read);

    getBlogHeader()
      .then((res) => {
        if (res.data) setHeader(res.data);
      })
      .catch((err) => console.error("Error fetching blog header:", err));

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

  const rawBlogs = blogList;

  // Format into flat representations matching language choice
  const formattedBlogs = rawBlogs.map((b) => {
    const rawCategory = getBi(b.Category || b.category, lang).toLowerCase();
    const rawTitle =
      typeof b.title === "object" ? getBi(b.title, lang) : b.title;
    const rawDesc =
      typeof b.description === "object"
        ? getBi(b.description, lang)
        : typeof b.desc === "object"
          ? getBi(b.desc, lang)
          : b.description || b.desc || "";

    return {
      _id: b._id,
      category: rawCategory,
      displayCategory: formatCategoryDisplay(rawCategory),
      title: cleanRichText(rawTitle),
      desc: cleanRichText(rawDesc),
      isRead: readArticles.includes(b._id),
      img:
        b.img || b.image
          ? (b.img || b.image).startsWith("http") ||
            (b.img || b.image).startsWith("/assets")
            ? b.img || b.image
            : `${IMG_URL}${b.img || b.image}`
          : "/assets/images/blog2.png",
      imgAlt: getBi(b.imgAlt, lang) || cleanRichText(rawTitle),
      date: formatDate(b.date) || "24.05.2026",
      read: getReadTime(rawDesc, lang),
      link: `/blog-details/${b._id}`,
    };
  });

  // FILTER
  const filtered =
    active === "all"
      ? formattedBlogs.filter(
          (item) =>
            !item.category
              ?.split(",")
              .map((c) => c.trim().toLowerCase())
              .includes("archive"),
        )
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

  // COLLECT DYNAMIC CATEGORIES FROM BACKEND
  const dynamicCategoriesSet = new Set();
  formattedBlogs.forEach((b) => {
    if (b.category) {
      b.category.split(",").forEach((cat) => {
        const trimmed = cat.trim().toLowerCase();
        if (trimmed && !["all", "alle"].includes(trimmed)) {
          dynamicCategoriesSet.add(trimmed);
        }
      });
    }
  });

  const uniqueCategories = Array.from(dynamicCategoriesSet);
  const archiveCategory = uniqueCategories.includes("archive")
    ? ["archive"]
    : [];
  const otherCategories = uniqueCategories.filter((cat) => cat !== "archive");

  const dynamicTabs = [...archiveCategory, ...otherCategories].map((cat) => ({
    label: getCategoryLabel(cat),
    value: cat,
  }));

  // TABS: "All" first, then up to 4 category tabs, with Archive prioritized if present.
  const tabs = [
    { label: lang === "EN" ? "All" : "Alle", value: "all" },
    ...dynamicTabs.slice(0, 4),
  ];
  const subscribebtn = {
    btn: { en: "Subscribe", de: "Abonnieren" },
  };
  return (
    <section className="bg-[#f5f3ef] py-[60px]">
      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[40px]">
        {/* TOP */}
        <div className="relative text-center mb-10">
          {/* SUBSCRIBE DESKTOP */}
          <div className="hidden md:block absolute right-0 top-0">
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center gap-2 cursor-pointer"
            >
              <Icon name="reg-envelope" />
              {subscribebtn.btn[lang === "EN" ? "en" : "de"]}
            </button>
          </div>

          {/* SUBSCRIBE MOBILE */}
          <div className="absolute right-0 top-0 md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="w-[44px] h-[44px] rounded-full bg-[#b8965a] text-white border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 flex items-center justify-center cursor-pointer"
            >
              <Icon name="reg-envelope" className="text-[15px]" />
            </button>
          </div>

          {/* LABEL */}
          <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
            {header?.label
              ? getBi(header.label, lang)
              : lang === "EN"
                ? "Insights & Resources"
                : "Einblicke & Ressourcen"}
          </span>

          {/* TITLE */}
          <h2 className="title-font text-2xl md:text-[36px] text-black leading-tight mb-5 mt-3">
            {header?.header
              ? getBi(header.header, lang)
              : lang === "EN"
                ? "Articles & Tools"
                : "Artikel & Werkzeuge"}
          </h2>

          {/* SUBTITLE */}
          <p className="text-[#0a3e40] text-[16px] leading-relaxed max-w-[760px] mx-auto">
            {header?.text
              ? getBi(header.text, lang)
              : lang === "EN"
                ? "Insights, guides, tools, and perspectives on HR, AI and the future of work."
                : "Einblicke, Leitfäden, Tools und Perspektiven zu HR, KI und der Zukunft der Arbeit."}
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
        {latestArticle ? (
          <>
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

                    {latestArticle.isRead && (
                      <>
                        <span>•</span>
                        <span>{latestArticle.read}</span>
                      </>
                    )}
                  </div>

                  <div className="mt-6">
                    <Link
                      to={latestArticle.link}
                      className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center gap-2 cursor-pointer"
                    >
                      Read Article
                      <Icon name="arrow-right" />
                    </Link>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="relative w-full h-[260px] md:h-auto min-h-[260px] overflow-hidden">
                  <img
                    src={latestArticle.img}
                    alt={latestArticle.imgAlt}
                    title={latestArticle.imgAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RECENT ARTICLES */}
            {recentArticles.length > 0 && (
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
            )}

            {/* BUTTON */}
            <div className="flex justify-center">
              <Link
                to="/insights"
                className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center justify-center"
              >
                View More Articles
              </Link>
            </div>
          </>
        ) : (
          <div className="bg-white border border-[#e6dfd5] rounded-[20px] py-20 text-center shadow-sm">
            <div className="w-16 h-16 bg-[#f5f3ef] rounded-full flex items-center justify-center mx-auto mb-4 text-[#b8965a]">
              <Icon name="reg-file-lines" className="text-2xl" />
            </div>
            <h3 className="title-font text-xl text-black mb-2">
              {blogList.length === 0
                ? lang === "EN"
                  ? "No Articles Published"
                  : "Keine Artikel veröffentlicht"
                : lang === "EN"
                  ? "No Articles Found"
                  : "Keine Artikel gefunden"}
            </h3>
            <p className="text-[#0a3e40] text-sm max-w-xs mx-auto">
              {blogList.length === 0
                ? lang === "EN"
                  ? "We haven't published any articles yet. Please check back soon."
                  : "Wir haben noch keine Artikel veröffentlicht. Bitte schauen Sie bald wieder vorbei."
                : lang === "EN"
                  ? "We couldn't find any articles matching your current filter. Try selecting another category."
                  : "Wir konnten keine Artikel finden, die Ihrem aktuellen Filter entsprechen. Versuchen Sie, eine andere Kategorie auszuwählen."}
            </p>
            {blogList.length > 0 && (
              <button
                onClick={() => setActive("all")}
                className="mt-6 text-[#b8965a] font-bold text-sm hover:underline cursor-pointer"
              >
                {lang === "EN" ? "Show all articles" : "Alle Artikel anzeigen"}
              </button>
            )}
          </div>
        )}
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
        alt={item.imgAlt}
        title={item.imgAlt}
        className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
      />
      {item.isRead && (
        <div className="absolute top-3 left-3 bg-[#b8965a] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md z-10 uppercase tracking-wider">
          Read
        </div>
      )}
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

        {item.isRead && (
          <>
            <span>•</span>
            <span>{item.read}</span>
          </>
        )}
      </div>
    </div>
  </Link>
);

export default BlogSection;
