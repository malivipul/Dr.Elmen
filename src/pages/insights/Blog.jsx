import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const categoryTranslations = {
  "guides": { en: "Guides", de: "Leitfäden" },
  "opinions": { en: "Opinions", de: "Meinungen" },
  "case studies": { en: "Case Studies", de: "Fallstudien" },
  "tools": { en: "Tools", de: "Werkzeuge" },
  "archive": { en: "Archive", de: "Archiv" },
  "hr": { en: "HR", de: "HR" },
  "ai": { en: "AI", de: "KI" },
  "leadership": { en: "Leadership", de: "Führung" }
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
    .replace(/<[^>]*>/g, " ")       // remove all HTML tags
    .replace(/&nbsp;/g, " ")        // decode &nbsp;
    .replace(/&amp;/g, "&")         // decode &amp;
    .replace(/&lt;/g, "<")          // decode &lt;
    .replace(/&gt;/g, ">")          // decode &gt;
    .replace(/&quot;/g, '"')        // decode &quot;
    .replace(/&#39;/g, "'")         // decode &#39;
    .replace(/\s+/g, " ")           // collapse multiple spaces
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
    getBlogs()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data) ? res.data : (res.data.value || []);
          setBlogList(list);
        }
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const staticBlogs = [
    {
      _id: "1",
      category: "guides",
      title: { en: "AI Implementation in HR", de: "KI-Implementierung im Personalwesen" },
      img: "/assets/images/blog2.png",
      desc: { en: "AI integration in HR is transforming recruitment, employee engagement, talent management, and workforce productivity through intelligent automation, predictive analytics, and digital innovation across modern organisations.", de: "Die Integration von KI im Personalwesen transformiert die Personalbeschaffung, das Mitarbeiterengagement und das Talentmanagement durch intelligente Automatisierung, prädiktive Analysen und digitale Innovation." },
      date: "May 22, 2025",
      read: "6 min read",
    },
    {
      _id: "2",
      category: "opinions",
      title: { en: "AI Leadership", de: "KI-Führung" },
      img: "/assets/images/people-office-analyzing-checking-finance-graphs.jpg",
      desc: { en: "Modern leadership is evolving through AI-driven decision making, strategic innovation, and digital transformation that empower organisations to adapt faster in a competitive business environment.", de: "Die moderne Führung entwickelt sich durch KI-gestützte Entscheidungsfindung, strategische Innovation und digitale Transformation weiter." },
      date: "May 18, 2025",
      read: "5 min read",
    },
    {
      _id: "3",
      category: "case studies",
      title: { en: "HR Case Study", de: "HR-Fallstudie" },
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      desc: { en: "Explore a real-world HR transformation case where AI-powered systems improved recruitment efficiency, employee experience, workflow automation, and operational performance successfully.", de: "Erkunden Sie ein reales Fallbeispiel für eine HR-Transformation, bei der KI-gestützte Systeme die Rekrutierungseffizienz, die Mitarbeitererfahrung und die Arbeitsablaufautomatisierung erfolgreich verbessert haben." },
      date: "May 12, 2025",
      read: "8 min read",
    },
    {
      _id: "4",
      category: "tools",
      title: { en: "AI Tools for HR Teams", de: "KI-Werkzeuge für HR-Teams" },
      img: "/assets/images/blog3.png",
      desc: { en: "Discover powerful AI tools designed for HR automation, employee analytics, recruitment optimisation, workflow management, and productivity enhancement in modern workplaces.", de: "Entdecken Sie leistungsstarke KI-Tools, die für die HR-Automatisierung, Mitarbeiteranalyse, Rekrutierungsoptimierung und Produktivitätssteigerung an modernen Arbeitsplätzen entwickelt wurden." },
      date: "May 08, 2025",
      read: "4 min read",
    },
    {
      _id: "5",
      category: "guides",
      title: { en: "Digital HR Transformation", de: "Digitale HR-Transformation" },
      img: "/assets/images/businessman-using-futuristic-technology-with-digital-interface.jpg",
      desc: { en: "Digital HR transformation combines AI technologies, automation strategies, and modern workforce solutions to improve operational efficiency and employee engagement across organisations.", de: "Die digitale HR-Transformation kombiniert KI-Technologien, Automatisierungsstrategien und moderne Belegschaftslösungen, um die betriebliche Effizienz und das Engagement der Mitarbeiter zu verbessern." },
      date: "May 06, 2025",
      read: "5 min read",
    },
    {
      _id: "6",
      category: "opinions",
      title: { en: "Future of AI in Business", de: "Zukunft der KI in Unternehmen" },
      img: "/assets/images/2151966708.jpg",
      desc: { en: "Exploring how AI is reshaping business strategy, leadership, and operational efficiency across global industries through innovation and digital transformation.", de: "Untersuchung, wie KI die Geschäftsstrategie, Führung und betriebliche Effizienz in globalen Branchen durch Innovation und digitale Transformation neu gestaltet." },
      date: "May 03, 2025",
      read: "7 min read",
    },
    {
      _id: "7",
      category: "tools",
      title: { en: "Top HR Automation Platforms", de: "Top HR Automatisierungsplattformen" },
      img: "/assets/images/close-up-data-center-programmers-using-pc-visualize-ai-neural-networks (1).jpg",
      desc: { en: "A curated overview of modern HR automation platforms helping organisations streamline workflows and employee management successfully.", de: "Ein kuratierter Überblick über moderne HR-Automatisierungsplattformen, die Unternehmen dabei helfen, Arbeitsabläufe und Mitarbeiterverwaltung erfolgreich zu optimieren." },
      date: "April 29, 2025",
      read: "4 min read",
    },
    {
      _id: "8",
      category: "case studies",
      title: { en: "AI Recruitment Success Story", de: "Erfolgsgeschichte der KI-Rekrutierung" },
      img: "/assets/images/book1.jpeg",
      desc: { en: "How AI recruitment systems improved candidate screening, hiring speed, and workforce planning for enterprise organisations worldwide.", de: "Wie KI-gestützte Rekrutierungssysteme das Kandidatenscreening, die Einstellungsgeschwindigkeit und die Personalplanung für globale Unternehmen verbessert haben." },
      date: "April 22, 2025",
      read: "6 min read",
    },
    {
      _id: "9",
      category: "guides",
      title: { en: "AI & Workforce Innovation", de: "KI & Innovation der Belegschaft" },
      img: "/assets/images/people-taking-part-high-protocol-event (3) (1).jpg",
      desc: { en: "AI and workforce innovation are transforming organisations through automation, strategic decision-making, and intelligent employee engagement solutions.", de: "KI und Belegschaftsinnovation verändern Unternehmen durch Automatisierung, strategische Entscheidungsfindung und intelligente Lösungen zur Mitarbeiterbindung." },
      date: "April 18, 2025",
      read: "5 min read",
    },
    {
      _id: "10",
      category: "opinions",
      title: { en: "AI & Leadership Strategy", de: "KI & Führungsstrategie" },
      img: "/assets/images/people-office-analyzing-checking-finance-graphs.jpg",
      desc: { en: "Understanding how AI leadership strategy can improve organisational agility, workforce planning, and operational excellence.", de: "Verstehen, wie KI-Führungsstrategien die Agilität von Organisationen, die Personalplanung und die operative Exzellenz verbessern können." },
      date: "April 12, 2025",
      read: "5 min read",
    },
    {
      _id: "11",
      category: "archive",
      title: { en: "AI Evolution in Enterprises", de: "KI-Entwicklung in Unternehmen" },
      img: "/assets/images/blog2.png",
      desc: { en: "Exploring how enterprise organisations adopted AI technologies to improve operational performance and long-term digital transformation strategies.", de: "Untersuchung, wie Unternehmen KI-Technologien eingeführt haben, um die betriebliche Leistung und langfristige digitale Transformationsstrategien zu verbessern." },
      date: "March 28, 2025",
      read: "5 min read",
    },
    {
      _id: "12",
      category: "archive",
      title: { en: "Workforce Automation Trends", de: "Trends in der Automatisierung der Belegschaft" },
      img: "/assets/images/businessman-using-futuristic-technology-with-digital-interface.jpg",
      desc: { en: "A detailed overview of workforce automation trends and how modern businesses are adapting to intelligent systems and AI-driven workflows.", de: "Ein detaillierter Überblick über Trends in der Automatisierung der Belegschaft und wie sich moderne Unternehmen an intelligente Systeme und KI-gestützte Arbeitsabläufe anpassen." },
      date: "March 15, 2025",
      read: "6 min read",
    },
  ];

  const rawBlogs = blogList && blogList.length > 0 ? blogList : staticBlogs;

  // Format into flat representations matching language choice
  const formattedBlogs = rawBlogs.map((b) => {
    const rawCategory = String(b.Category || b.category || "").toLowerCase();
    const rawDescription =
      typeof b.description === "object"
        ? getBi(b.description, lang)
        : typeof b.desc === "object"
        ? getBi(b.desc, lang)
        : b.description || b.desc || "";
    // Tags can be an array from API or fallback to empty
    const rawTags = Array.isArray(b.Tags || b.tags)
      ? (b.Tags || b.tags).map((t) => t.trim().toLowerCase())
      : [];
    return {
      _id: b._id,
      category: rawCategory,
      tags: rawTags,
      displayCategory: formatCategoryDisplay(rawCategory, lang),
      title: typeof b.title === "object" ? getBi(b.title, lang) : b.title,
      desc: stripHtml(rawDescription),
      img: (b.img || b.image)
        ? (b.img || b.image).startsWith("http") || (b.img || b.image).startsWith("/assets")
          ? (b.img || b.image)
          : `${IMG_URL}${b.img || b.image}`
        : "/assets/images/blog2.png",
      date: b.date || "May 2025",
      read: getReadTime(rawDescription, lang),
      link: `/blog-details/${b._id}`,
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

  const paginatedBlogs = filtered.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  // FIRST PAGE ONLY
  const latestArticle =
    currentPage === 1
      ? paginatedBlogs[0]
      : null;

  // REMAINING BLOGS
  const recentArticles =
    currentPage === 1
      ? paginatedBlogs.slice(1)
      : paginatedBlogs;

  // COLLECT DYNAMIC CATEGORIES AND TAGS
  const dynamicCategoriesSet = new Set();
  formattedBlogs.forEach((b) => {
    // Add each category
    if (b.category) {
      b.category.split(",").forEach((cat) => {
        const trimmed = cat.trim().toLowerCase();
        if (trimmed && trimmed !== "all" && trimmed !== "alle") {
          dynamicCategoriesSet.add(trimmed);
        }
      });
    }
    // Add each tag from Tags array
    if (b.tags && b.tags.length > 0) {
      b.tags.forEach((tag) => {
        const trimmed = tag.trim().toLowerCase();
        if (trimmed && trimmed !== "all" && trimmed !== "alle") {
          dynamicCategoriesSet.add(trimmed);
        }
      });
    }
  });

  const uniqueCategories = Array.from(dynamicCategoriesSet);

  // TABS (Keep "All" as hardcoded first, rest are dynamic from both Category + Tags)
  const tabs = [
    { label: lang === "EN" ? "All" : "Alle", value: "all" },
    ...uniqueCategories.map((cat) => ({
      label: getCategoryLabel(cat, lang),
      value: cat,
    })),
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
            Insights, guides, tools, and perspectives on HR, AI and the future of work.
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
                    className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center gap-2"
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

        {/* ALL BLOGS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">

          {recentArticles.map((item, i) => (
            <Card
              key={i}
              item={item}
            />
          ))}

        </div>

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
              className={`px-5 py-2.5 rounded-full border text-sm font-semibold tracking-wide transition-all duration-300 ${
                currentPage === 1
                  ? "border-[#d6d3cc] text-[#a09e99] bg-white/50 cursor-not-allowed opacity-50"
                  : "border-[#b8965a] bg-white text-[#b8965a] hover:bg-[#b8965a] hover:text-white cursor-pointer shadow-sm active:scale-95"
              }`}
            >
              {lang === "EN" ? "← Prev" : "← Zurück"}
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
              className={`px-5 py-2.5 rounded-full border text-sm font-semibold tracking-wide transition-all duration-300 ${
                currentPage === totalPages
                  ? "border-[#d6d3cc] text-[#a09e99] bg-white/50 cursor-not-allowed opacity-50"
                  : "border-[#b8965a] bg-white text-[#b8965a] hover:bg-[#b8965a] hover:text-white cursor-pointer shadow-sm active:scale-95"
              }`}
            >
              {lang === "EN" ? "Next →" : "Weiter →"}
            </button>
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
        alt={item.title}
        className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
      />

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
