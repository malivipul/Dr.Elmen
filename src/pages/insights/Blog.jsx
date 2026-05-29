import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getBlogs,
  getBlogHeader,
  likeBlog,
  IMG_URL,
  getBi,
  formatDate,
} from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "../../components/commen/Icon";

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
const subscribebtn = {
  btn: { en: "Subscribe", de: "Abonnieren" },
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

const BlogSection = ({ setIsOpen }) => {
  const [active, setActive] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [blogList, setBlogList] = useState([]);
  const [header, setHeader] = useState(null);
  const [likedArticles, setLikedArticles] = useState([]);
  const [readArticles, setReadArticles] = useState([]);
  const { lang } = useLanguage();

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);

    // Delayed scroll ensures DOM renders before scrolling to guarantee success on all browsers
    setTimeout(() => {
      const sectionElement = document.getElementById("articles-section");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  // AUTO POPUP AFTER 2 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsOpen]);

  useEffect(() => {
    // Load liked and read articles from local storage
    const liked = JSON.parse(localStorage.getItem("likedArticles") || "[]");
    const read = JSON.parse(localStorage.getItem("readArticles") || "[]");
    setLikedArticles(liked);
    setReadArticles(read);

    getBlogHeader()
      .then((res) => {
        if (res.data) setHeader(res.data);
      })
      .catch((err) => console.error("Error fetching blog header:", err));

    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
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
  };

  const handleLike = async (e, id) => {
    e.preventDefault(); // Prevent link navigation
    e.stopPropagation();

    const isLiked = likedArticles.includes(id);
    try {
      const { data } = await likeBlog(id, { unlike: isLiked });
      if (data.success) {
        // Update local state
        let updatedLiked = [];
        if (isLiked) {
          updatedLiked = likedArticles.filter((i) => i !== id);
        } else {
          updatedLiked = [...likedArticles, id];
        }
        setLikedArticles(updatedLiked);
        localStorage.setItem("likedArticles", JSON.stringify(updatedLiked));

        // Update blogList to reflect new like count
        setBlogList((prev) =>
          prev.map((b) => (b._id === id ? { ...b, likes: data.likes } : b)),
        );
      }
    } catch (err) {
      console.error("Failed to toggle like", err);
    }
  };

  const rawBlogs = blogList;

  // Format into flat representations matching language choice
  const formattedBlogs = rawBlogs.map((b) => {
    const rawCategory = getBi(b.Category || b.category, lang).toLowerCase();
    const rawDescription =
      typeof b.description === "object"
        ? getBi(b.description, lang)
        : typeof b.desc === "object"
          ? getBi(b.desc, lang)
          : b.description || b.desc || "";
    // Tags are bilingual objects [{ en, de }]
    const rawTags = Array.isArray(b.Tags || b.tags)
      ? (b.Tags || b.tags).map((t) => getBi(t, lang).trim().toLowerCase())
      : [];
    return {
      _id: b._id,
      category: rawCategory,
      tags: rawTags,
      displayCategory: formatCategoryDisplay(rawCategory, lang),
      title: typeof b.title === "object" ? getBi(b.title, lang) : b.title,
      desc: stripHtml(rawDescription),
      img:
        b.img || b.image
          ? (b.img || b.image).startsWith("http") ||
            (b.img || b.image).startsWith("/assets")
            ? b.img || b.image
            : `${IMG_URL}${b.img || b.image}`
          : "/assets/images/blog2.png",
      imgAlt:
        getBi(b.imgAlt, lang) ||
        (typeof b.title === "object" ? getBi(b.title, lang) : b.title),
      date: formatDate(b.date) || "24.05.2026",
      read: getReadTime(rawDescription, lang),
      link: `/blog-details/${b._id}`,
      likes: b.likes || 0,
      isRead: readArticles.includes(b._id),
    };
  });

  // FILTER — match against both Category and Tags
  const filtered =
    active === "all"
      ? formattedBlogs
      : formattedBlogs.filter((item) => {
          // Check category
          const cats = (item.category || "")
            .split(",")
            .map((c) => c.trim().toLowerCase());
          if (cats.includes(active)) return true;
          // Check tags array
          if (item.tags && item.tags.includes(active)) return true;
          return false;
        });

  // PAGINATION
  const blogsPerPage = 7;
  const totalPages = Math.ceil(filtered.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;

  const paginatedBlogs = filtered.slice(startIndex, startIndex + blogsPerPage);

  // FIRST PAGE ONLY
  const latestArticle = currentPage === 1 ? paginatedBlogs[0] : null;

  // REMAINING BLOGS
  const recentArticles =
    currentPage === 1 ? paginatedBlogs.slice(1) : paginatedBlogs;

  // COLLECT ALL BLOG CATEGORIES FROM BACKEND
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

  const dynamicTabs = uniqueCategories.map((cat) => ({
    label: getCategoryLabel(cat, lang),
    value: cat,
  }));

  // TABS: "All" first, then all dynamic category tabs from the backend.
  const tabs = [
    { label: lang === "EN" ? "All" : "Alle", value: "all" },
    ...dynamicTabs,
  ];

  return (
    <section id="articles-section" className="bg-[#f4f4f4] py-[60px]">
      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[40px]">
        {/* TOP */}
        <div className="relative text-center mb-10">
          {/* SUBSCRIBE DESKTOP */}
          <div className="hidden md:block absolute right-0 top-0">
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-3 rounded-full text-white text-sm font-bold bg-[#b8965a]  transition duration-300 inline-flex items-center gap-2 cursor-pointer rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center gap-2"
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
              onClick={() => {
                setActive(tab.value);
                setCurrentPage(1);
              }}
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
        {/* BIG BLOG */}
        {currentPage === 1 && latestArticle && (
          <div className="bg-white border border-[#e6dfd5] rounded-[20px] overflow-hidden mb-8">
            <div className="grid lg:grid-cols-2 items-stretch">
              {/* LEFT */}
              <div className="p-7 md:p-10 text-left flex flex-col justify-center">
                <div className="flex items-center justify-between">
                  <span className="text-[#b8965a] text-xs tracking-[2px] uppercase font-semibold">
                    {latestArticle.displayCategory}
                  </span>
                  {/* LIKE */}
                  <button
                    onClick={(e) => handleLike(e, latestArticle._id)}
                    className={`flex items-center gap-1.5 text-xs font-bold transition-all ${likedArticles.includes(latestArticle._id) ? "text-[#b8965a]" : "text-gray-300 hover:text-[#b8965a]"}`}
                  >
                    {latestArticle.likes}
                    <Icon
                      name={likedArticles.includes(latestArticle._id) ? "heart" : "reg-heart"}
                    />
                  </button>
                </div>

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
                    className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center gap-2"
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
        )}

        {/* ALL BLOGS */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {recentArticles.map((item, i) => (
              <Card
                key={i}
                item={item}
                isLiked={likedArticles.includes(item._id)}
                onLike={(e) => handleLike(e, item._id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center ">
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
                onClick={() => {
                  setActive("all");
                  setCurrentPage(1);
                }}
                className="mt-6 text-[#b8965a] font-bold text-sm hover:underline cursor-pointer"
              >
                {lang === "EN" ? "Show all articles" : "Alle Artikel anzeigen"}
              </button>
            )}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            {/* Prev Button */}
            <button
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
              disabled={currentPage === 1}
              className={`px-5 py-2.5 rounded-full border text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                currentPage === 1
                  ? "border-[#d6d3cc] text-[#a09e99] bg-white/50 cursor-not-allowed opacity-50"
                  : "border-[#b8965a] bg-white text-[#b8965a] hover:bg-[#b8965a] hover:text-white cursor-pointer shadow-sm active:scale-95"
              }`}
            >
              <Icon name="chevron-left" className="text-[10px]" />
              <span className="mt-[-1px]">
                {lang === "EN" ? "Prev" : "Zurück"}
              </span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={i}
                    onClick={() => handlePageChange(pageNum)}
                    className={`
                      w-[44px]
                      h-[44px]
                      rounded-full
                      text-sm
                      font-bold
                      transition
                      duration-300
                      border
                      cursor-pointer
                      flex
                      items-center
                      justify-center
                      active:scale-95

                      ${
                        currentPage === pageNum
                          ? "bg-[#b8965a] border-[#b8965a] text-white shadow-[0_6px_20px_rgba(184,150,90,0.3)]"
                          : "bg-white border-[#d6d3cc] text-black hover:border-[#b8965a] hover:text-[#b8965a]"
                      }
                    `}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={() => {
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1);
                }
              }}
              disabled={currentPage === totalPages}
              className={`px-5 py-2.5 rounded-full border text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                currentPage === totalPages
                  ? "border-[#d6d3cc] text-[#a09e99] bg-white/50 cursor-not-allowed opacity-50"
                  : "border-[#b8965a] bg-white text-[#b8965a] hover:bg-[#b8965a] hover:text-white cursor-pointer shadow-sm active:scale-95"
              }`}
            >
              <span className="mt-[-1px]">
                {lang === "EN" ? "Next" : "Weiter"}
              </span>
              <Icon name="chevron-right" className="text-[10px]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const Card = ({ item, isLiked, onLike }) => (
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
    </div>

    {/* CONTENT */}
    <div className="p-4">
      {/* CATEGORY + LIKE */}
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#b8965a] uppercase tracking-[2px] font-semibold">
          {item.displayCategory}
        </span>
        <button
          onClick={onLike}
          className={`flex items-center gap-1.5 text-xs font-bold transition-all ${isLiked ? "text-[#b8965a]" : "text-gray-300 hover:text-[#b8965a]"}`}
        >
          {item.likes}
          <Icon name={isLiked ? "heart" : "reg-heart"} />
        </button>
      </div>

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
