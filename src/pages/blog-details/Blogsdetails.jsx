import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogById, getBlogs, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const stripHtml = (html) => {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
};

const getReadTime = (content, currentLang) => {
  const words = stripHtml(content).match(/\S+/g)?.length || 0;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return currentLang === "EN"
    ? `${minutes} min read`
    : `${minutes} Min. Lesezeit`;
};

const Blogsdetails = () => {
  const { id } = useParams();
  const { lang } = useLanguage();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  // LIKES
  const [likes, setLikes] = useState(128);

  // COMMENTS
  const [comments, setComments] = useState([
    {
      name: "Michael",
      text: "Great insights about AI and HR transformation.",
    },
  ]);
  const [commentText, setCommentText] = useState("");

  // SHARE URL
  const articleUrl = window.location.href;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getBlogById(id)
        .then((res) => {
          if (res.data) setBlog(res.data);
        })
        .catch((err) => console.error("Error fetching blog details:", err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  useEffect(() => {
    getBlogs()
      .then((res) => {
        if (res.data) {
          setRecentBlogs(res.data.slice(0, 5));
        }
      })
      .catch((err) => console.error("Error fetching recent blogs:", err));
  }, []);

  // ADD COMMENT
  const handleComment = () => {
    if (commentText.trim() === "") return;
    setComments([
      ...comments,
      {
        name: "Guest",
        text: commentText,
      },
    ]);
    setCommentText("");
  };

  // STATIC FALLBACK while loading or if API fails
  const staticBlog = {
    title: {
      en: "AI Implementation in HR",
      de: "KI-Implementierung im Personalwesen",
    },
    author: "Raphael Edlmann",
    date: "March 18, 2026",
    description: {
      en: "<p>Artificial Intelligence is transforming the future of human resources and workforce management. Organisations worldwide are increasingly integrating AI-driven systems to improve operational efficiency, recruitment strategies, and employee experiences.</p><p>Modern HR leaders are no longer relying solely on traditional methods. Predictive analytics, automation, and intelligent decision-making tools now help organisations reduce repetitive tasks while enabling more strategic leadership.</p><p>AI implementation in HR also creates opportunities for more personalised employee development, better performance insights, and faster recruitment processes.</p><p>However, technology alone is not enough. Companies must ensure ethical AI usage, transparent communication, and strong leadership throughout digital transformation initiatives.</p>",
      de: "Künstliche Intelligenz verändert die Zukunft der Personalabteilung und der Personalverwaltung.",
    },
    Category: "Guides",
    Tags: ["Leadership", "Innovation", "Strategy", "Future Work"],
    img: "/assets/images/25.png",
  };

  // SHOW LOADING SKELETON while fetching
  if (loading) {
    return (
      <section className="bg-[#f4f4f4] pb-[90px]">
        <div className="relative w-full overflow-hidden rounded-b-[45px] bg-gray-200 animate-pulse h-[260px] md:h-[460px]"></div>
        <div className="max-w-[1320px] mx-auto px-[20px] md:px-[40px] mt-[50px] md:mt-[70px]">
          <div className="grid lg:grid-cols-[1fr_360px] gap-14">
            <div className="space-y-5">
              <div className="h-10 bg-gray-200 rounded-[12px] animate-pulse w-3/4"></div>
              <div className="h-5 bg-gray-200 rounded animate-pulse w-1/3"></div>
              <div className="space-y-3 mt-8">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 bg-gray-200 rounded animate-pulse"
                    style={{ width: i % 3 === 2 ? "60%" : "100%" }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="h-40 bg-gray-200 rounded-[28px] animate-pulse"></div>
              <div className="h-40 bg-gray-200 rounded-[28px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentBlog = blog || staticBlog;

  const title =
    typeof currentBlog.title === "object"
      ? getBi(currentBlog.title, lang)
      : currentBlog.title || "";
  const authorName = currentBlog.author || "Raphael Edlmann";
  const dateStr = currentBlog.date || "March 18, 2026";
  const rawContent =
    typeof currentBlog.description === "object"
      ? getBi(currentBlog.description, lang)
      : currentBlog.description || currentBlog.desc || "";

  // Sanitize HTML: replace &nbsp; with regular spaces so text wraps normally
  const content = rawContent.replace(/&nbsp;/g, " ").replace(/ {2,}/g, " ");
  const readTime = getReadTime(rawContent, lang);
  const category = currentBlog.Category || currentBlog.category || "Guides";
  const tags = currentBlog.Tags ||
    currentBlog.tags || ["Leadership", "Innovation", "Strategy"];
  const imgSource = currentBlog.img
    ? currentBlog.img.startsWith("http") ||
      currentBlog.img.startsWith("/assets")
      ? currentBlog.img
      : `${IMG_URL}${currentBlog.img}`
    : "/assets/images/25.png";

  return (
    <section className="bg-[#f4f4f4] pb-[90px]">
      {/* HERO IMAGE */}
      <div className="relative w-full overflow-hidden ">
        <img
          src={imgSource}
          alt={title}
          className="w-full h-[260px] md:h-[460px] object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT AREA */}
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[40px] mt-[50px] md:mt-[70px]">
        <div className="grid lg:grid-cols-[1fr_360px] gap-14">
          {/* LEFT SIDE */}
          <div className="text-left">
            {/* TITLE */}
            <h1 className="title-font text-[34px] md:text-[50px] leading-tight text-black mb-7">
              {title}
            </h1>

            {/* AUTHOR + DATE */}
            <div className="flex flex-wrap items-start gap-6 md:gap-8 border-b border-[#ddd] pb-7 mb-10">
              <div className="flex items-center justify-center md:justify-start gap-4 md:gap-8 flex-wrap">
                {/* AUTHOR */}
                <div className="flex items-center gap-3 text-[#6b6b6b] text-[15px]">
                  <div className="w-10 h-10 rounded-full bg-[#b8965a] text-white flex items-center justify-center shrink-0">
                    <i className="fa-regular fa-user"></i>
                  </div>

                  <span className="font-medium">{authorName}</span>
                </div>

                {/* DATE */}
                <div className="flex items-center gap-3 text-[#6b6b6b] text-[15px]">
                  <div className="w-10 h-10 rounded-full bg-[#b8965a] text-white flex items-center justify-center shrink-0">
                    <i className="fa-regular fa-calendar"></i>
                  </div>

                  <span className="font-medium">{dateStr}</span>
                </div>

                {/* READ TIME */}
                <div className="flex items-center gap-3 text-[#6b6b6b] text-[15px]">
                  <div className="w-10 h-10 rounded-full bg-[#b8965a] text-white flex items-center justify-center shrink-0">
                    <i className="fa-regular fa-clock"></i>
                  </div>

                  <span className="font-medium">{readTime}</span>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div
              className="blog-content text-justify text-[#0a3e40] text-[14px] md:text-[16px] leading-[1.95]"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* LIKE + SHARE */}
            <div className="mt-12 border-t border-[#ddd] pt-8">
              <div className="flex items-center justify-between gap-4 flex-nowrap">
                {/* SHARE */}
                <div className="flex items-center gap-2 md:gap-4 shrink-0">
                  {/* LINKEDIN */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[38px] h-[38px] md:w-[40px] md:h-[40px] rounded-full border border-[#9f9992] flex items-center justify-center text-black text-[14px] hover:bg-[#b8965a] hover:text-white transition duration-300"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                  {/* X */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${articleUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[38px] h-[38px] md:w-[40px] md:h-[40px] rounded-full border border-[#9f9992] flex items-center justify-center text-black text-[14px] hover:bg-[#b8965a] hover:text-white transition duration-300"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  {/* FACEBOOK */}
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[38px] h-[38px] md:w-[40px] md:h-[40px] rounded-full border border-[#9f9992] flex items-center justify-center text-black text-[14px] hover:bg-[#b8965a] hover:text-white transition duration-300"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>

                  {/* INSTAGRAM */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[38px] h-[38px] md:w-[40px] md:h-[40px] rounded-full border border-[#9f9992] flex items-center justify-center text-black text-[13px] hover:bg-[#b8965a] hover:text-white transition duration-300"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* COMMENTS */}
            <div className="mt-14">
              {/* COMMENT BOX */}
              <div className="bg-white rounded-[28px] p-6 md:p-8 border border-[#e6dfd5]">
                <h3 className="title-font text-[24px] text-black mb-5 font-semibold">
                  {lang === "EN"
                    ? "Leave a Comment"
                    : "Hinterlasse einen Kommentar"}
                </h3>

                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder={
                    lang === "EN"
                      ? "Write your comment..."
                      : "Schreiben Sie Ihren Kommentar..."
                  }
                  className="w-full h-[160px] rounded-[20px] border border-[#ddd] p-5 outline-none resize-none text-[15px] focus:border-[#b8965a] transition"
                ></textarea>

                <button
                  onClick={handleComment}
                  className="mt-5 px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 cursor-pointer"
                >
                  {lang === "EN" ? "Post Comment" : "Kommentar abschicken"}
                </button>
              </div>

              {/* LIST OF COMMENTS */}
              {comments.length > 0 && (
                <div className="mt-8 space-y-4">
                  {comments.map((c, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-[20px] p-5 border border-[#e6dfd5]"
                    >
                      <h4 className="font-semibold text-black mb-1">
                        {c.name}
                      </h4>
                      <p className="text-[#0a3e40] text-sm">{c.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:sticky lg:top-[120px] h-fit text-left">
            {/* CATEGORY */}
            <div className="bg-[#e7dfd7] rounded-[28px] p-6 md:p-8 mb-7 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
              <h3 className="title-font text-[24px] md:text-[28px] text-black mb-6 text-left font-semibold">
                {lang === "EN" ? "Category" : "Kategorie"}
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 rounded-full bg-[#f5f3ef] text-[#0a3e40] text-sm transition duration-300 hover:bg-[#b8965a] hover:text-white cursor-pointer uppercase font-bold text-xs tracking-wider">
                  {category}
                </span>
              </div>
            </div>

            {/* TAGS */}
            {tags && tags.length > 0 && (
              <div className="bg-[#e7dfd7] rounded-[28px] p-6 md:p-8 mb-7 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
                <h3 className="title-font text-[24px] md:text-[28px] text-black mb-6 text-left font-semibold">
                  Tags
                </h3>

                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-5 py-2 rounded-full bg-[#f5f3ef] text-[#0a3e40] text-sm transition duration-300 hover:bg-[#b8965a] hover:text-white cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* RECENT POSTS */}
            <div className="bg-[#e7dfd7] rounded-[28px] p-6 md:p-8 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
              <h3 className="title-font text-[24px] md:text-[28px] text-black mb-7 text-left font-semibold">
                {lang === "EN" ? "Recent Posts" : "Aktuelle Beiträge"}
              </h3>

              <div className="space-y-6">
                {recentBlogs.length > 0 ? (
                  recentBlogs.slice(0, 3).map((item, idx) => {
                    const itemTitle =
                      typeof item.title === "object"
                        ? getBi(item.title, lang)
                        : item.title;
                    const itemCategory =
                      item.Category || item.category || "AI & HR";
                    const itemImg = item.img
                      ? item.img.startsWith("http") ||
                        item.img.startsWith("/assets")
                        ? item.img
                        : `${IMG_URL}${item.img}`
                      : "/assets/images/blog2.png";

                    return (
                      <Link
                        key={item._id || idx}
                        to={`/blog-details/${item._id}`}
                        className="flex items-start text-left gap-4 pb-6 border-b border-[#ececec] last:border-0 last:mb-0 last:pb-0 group cursor-pointer"
                      >
                        <img
                          src={itemImg}
                          alt={itemTitle}
                          className="w-[90px] h-[90px] rounded-[18px] object-cover shrink-0"
                        />
                        <div>
                          <p className="text-[#b8965a] text-xs uppercase tracking-[2px] mb-2 font-bold">
                            {itemCategory}
                          </p>
                          <h4 className="text-[17px] leading-[1.5] text-black group-hover:text-[#b8965a] transition line-clamp-2">
                            {itemTitle}
                          </h4>
                        </div>
                      </Link>
                    );
                  })
                ) : (
                  <>
                    <div className="flex items-start text-left gap-4 pb-6 border-b border-[#ececec] mb-6 group cursor-pointer">
                      <img
                        src="/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg"
                        alt=""
                        className="w-[90px] h-[90px] rounded-[18px] object-cover shrink-0"
                      />
                      <div>
                        <p className="text-[#b8965a] text-xs uppercase tracking-[2px] mb-2">
                          AI & HR
                        </p>
                        <h4 className="text-[17px] leading-[1.5] text-black group-hover:text-[#b8965a] transition">
                          AI Implementation in HR
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-start text-left gap-4 group cursor-pointer">
                      <img
                        src="/assets/images/people-office-analyzing-checking-finance-graphs.jpg"
                        alt=""
                        className="w-[90px] h-[90px] rounded-[18px] object-cover shrink-0"
                      />
                      <div>
                        <p className="text-[#b8965a] text-xs uppercase tracking-[2px] mb-2">
                          Leadership
                        </p>
                        <h4 className="text-[17px] leading-[1.5] text-black group-hover:text-[#b8965a] transition">
                          Future of AI in Business
                        </h4>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogsdetails;
