import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getBlogById,
  getBlogs,
  getBlogComments,
  likeBlog,
  submitBlogComment,
  getSettings,
  getBlogBanner,
  IMG_URL,
  getBi,
  getCached,
  setCached,
  formatDate,
} from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
import SEO from "../../components/commen/SEO";
import Swal from "sweetalert2";
import Icon from "../../components/commen/Icon";

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
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [settings, setSettings] = useState(null);
  const cachedBanner = getCached("blogBanner");
  const [banner, setBanner] = useState(cachedBanner || null);
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isRead, setIsRead] = useState(false);

  const articleUrl = window.location.href;

  useEffect(() => {
    if (id) {
      window.scrollTo(0, 0);
      setLoading(true);

      // Check if already liked locally
      const liked = JSON.parse(localStorage.getItem("likedArticles") || "[]");
      setHasLiked(liked.includes(id));

      // Mark as read locally
      const read = JSON.parse(localStorage.getItem("readArticles") || "[]");
      setIsRead(read.includes(id));
      if (!read.includes(id)) {
        const newRead = [...read, id];
        localStorage.setItem("readArticles", JSON.stringify(newRead));
        setIsRead(true);
      }

      Promise.all([getBlogById(id), getBlogComments(id), getSettings(), getBlogBanner()])
        .then(([blogRes, commRes, settRes, bannerRes]) => {
          if (blogRes.data) {
            setBlog(blogRes.data);
            setLikes(blogRes.data.likes || 0);
          }
          if (commRes.data) setComments(commRes.data);
          if (settRes.data) setSettings(settRes.data);
          if (bannerRes.data) {
            setBanner(bannerRes.data);
            setCached("blogBanner", bannerRes.data);
          }
        })
        .catch((err) => console.error("Error loading blog details:", err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  useEffect(() => {
    getBlogs()
      .then((res) => {
        if (res.data) {
          const filteredRecent = res.data.filter((b) => {
            if (b._id === id) return false;
            const categoryStrEn = getBi(b.Category || b.category, "en").toLowerCase();
            const categoryStrDe = getBi(b.Category || b.category, "de").toLowerCase();
            const hasArchiveEn = categoryStrEn.split(",").map((c) => c.trim()).includes("archive");
            const hasArchiveDe = categoryStrDe.split(",").map((c) => c.trim()).some((c) => c === "archive" || c === "archiv");
            return !hasArchiveEn && !hasArchiveDe;
          });
          setRecentBlogs(filteredRecent.slice(0, 5));
        }
      })
      .catch((err) => console.error("Error fetching recent blogs:", err));
  }, [id]);

  const handleLike = async () => {
    if (isLiking) return;
    setIsLiking(true);
    try {
      // Toggle like based on current local state
      const { data } = await likeBlog(id, { unlike: hasLiked });
      if (data.success) {
        setLikes(data.likes);
        const liked = JSON.parse(localStorage.getItem("likedArticles") || "[]");
        if (hasLiked) {
          // Unlike
          setHasLiked(false);
          localStorage.setItem(
            "likedArticles",
            JSON.stringify(liked.filter((i) => i !== id)),
          );
        } else {
          // Like
          setHasLiked(true);
          localStorage.setItem("likedArticles", JSON.stringify([...liked, id]));
        }
      }
    } catch (err) {
      console.error("Failed to toggle like", err);
    } finally {
      setIsLiking(false);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentData.name || !commentData.email || !commentData.text) return;
    setSubmitting(true);
    try {
      await submitBlogComment(id, commentData);
      Swal.fire({
        icon: "success",
        title: lang === "EN" ? "Submitted!" : "Gesendet!",
        text:
          lang === "EN"
            ? "You have added comment successfully."
            : "Ihr Kommentar wurde erfolgreich hinzugefügt.",
        confirmButtonColor: "#b8965a",
      });
      setCommentData({ name: "", email: "", text: "" });
    } catch (err) {
      console.error("Failed to submit comment", err);
      Swal.fire({
        icon: "error",
        title: lang === "EN" ? "Error" : "Fehler",
        text:
          lang === "EN"
            ? "Failed to submit comment. Please try again."
            : "Kommentar konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
        confirmButtonColor: "#b8965a",
      });
    } finally {
      setSubmitting(false);
    }
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

  const currentBlog = blog;
  if (!currentBlog) return null;

  const title =
    typeof currentBlog.title === "object"
      ? getBi(currentBlog.title, lang)
      : currentBlog.title || "";
  const authorName = currentBlog.author || "Raphael Edlmann";
  const dateStr = formatDate(currentBlog.date) || "18.03.2026";
  const rawContent =
    typeof currentBlog.description === "object"
      ? getBi(currentBlog.description, lang)
      : currentBlog.description || currentBlog.desc || "";

  // Sanitize HTML
  const content = rawContent.replace(/&nbsp;/g, " ").replace(/ {2,}/g, " ");
  const readTime = getReadTime(rawContent, lang);
  const category =
    getBi(currentBlog.Category || currentBlog.category, lang) ||
    (lang === "EN" ? "Guides" : "Leitfäden");
  const tags = (currentBlog.Tags || currentBlog.tags || []).map((t) =>
    getBi(t, lang),
  );

  const imgSource = currentBlog.img
    ? currentBlog.img.startsWith("http") ||
      currentBlog.img.startsWith("/assets")
      ? currentBlog.img
      : `${IMG_URL}${currentBlog.img}`
    : "/assets/images/25.png";
  const innerImgSource = currentBlog.innerImg
    ? currentBlog.innerImg.startsWith("http") ||
      currentBlog.innerImg.startsWith("/assets")
      ? currentBlog.innerImg
      : `${IMG_URL}${currentBlog.innerImg}`
    : imgSource;
  const imgAlt = getBi(currentBlog.imgAlt, lang) || title;

  const bannerImg = banner?.img ? `${IMG_URL}${banner.img}` : "/assets/images/Untitled design (47).png";
  const bannerTitle = getBi(banner?.title, lang) || (lang === "EN" ? "Future of Work Insights" : "HR & KI Einblicke");

  return (
    <section className="bg-[#f4f4f4] pb-[90px]">
      <SEO
        title={title}
        description={stripHtml(rawContent).slice(0, 160)}
        keywords={tags.join(", ")}
      />
      {/* HERO IMAGE */}
      <div className="relative w-full overflow-hidden ">
        <img
          src={bannerImg}
          alt={bannerTitle}
          title={bannerTitle}
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
                    <Icon name="reg-user" />
                  </div>

                  <span className="font-medium">{authorName}</span>
                </div>

                {/* DATE */}
                <div className="flex items-center gap-3 text-[#6b6b6b] text-[15px]">
                  <div className="w-10 h-10 rounded-full bg-[#b8965a] text-white flex items-center justify-center shrink-0">
                    <Icon name="reg-calendar" />
                  </div>

                  <span className="font-medium">{dateStr}</span>
                </div>

                {/* READ TIME */}
                {isRead && (
                  <div className="flex items-center gap-3 text-[#6b6b6b] text-[15px]">
                    <div className="w-10 h-10 rounded-full bg-[#b8965a] text-white flex items-center justify-center shrink-0">
                      <Icon name="reg-clock" />
                    </div>

                    <span className="font-medium">{readTime}</span>
                  </div>
                )}
              </div>
            </div>

            {/* FEATURED IMAGE */}
            <div className="mb-10 overflow-hidden rounded-[20px] shadow-sm">
              <img
                src={innerImgSource}
                alt={imgAlt}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>

            {/* CONTENT */}
            <div
              className="blog-content  text-[#0a3e40] text-[14px] md:text-[16px] leading-[1.95]"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* LIKE + SHARE */}
            <div className="mt-12 border-t border-[#ddd] pt-8">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                {/* LIKE */}
                <button
                  onClick={handleLike}
                  disabled={isLiking}
                  className={`
                    flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all duration-300
                    ${isLiking ? "opacity-50 cursor-not-allowed" : "hover:scale-105 active:scale-95 cursor-pointer"}
                    ${hasLiked ? "bg-[#b8965a] border-[#b8965a] text-white shadow-md shadow-[#b8965a]/20" : "bg-white border-[#9f9992] text-black hover:bg-[#b8965a]/5"}
                  `}
                >
                  <Icon
                    name={hasLiked ? "heart" : "reg-heart"}
                    className={`text-[16px] ${hasLiked ? "animate-in zoom-in-110" : ""}`}
                  />
                  <span className="font-bold text-sm">
                    {likes} {lang === "EN" ? "Likes" : "Gefällt mir"}
                  </span>
                </button>

                {/* SHARE */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-1">
                    {lang === "EN" ? "Share" : "Teilen"}
                  </span>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#9f9992] flex items-center justify-center text-black hover:bg-[#b8965a] hover:border-[#b8965a] hover:text-white transition-all duration-300"
                  >
                    <Icon name="linkedin" />
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${articleUrl}&text=${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#9f9992] flex items-center justify-center text-black hover:bg-[#b8965a] hover:border-[#b8965a] hover:text-white transition-all duration-300"
                  >
                    <Icon name="x" />
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#9f9992] flex items-center justify-center text-black hover:bg-[#b8965a] hover:border-[#b8965a] hover:text-white transition-all duration-300"
                  >
                    <Icon name="facebook" />
                  </a>
                  <a
                    href={settings?.instagram || "https://www.instagram.com/"}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full border border-[#9f9992] flex items-center justify-center text-black hover:bg-[#b8965a] hover:border-[#b8965a] hover:text-white transition-all duration-300"
                  >
                    <Icon name="instagram" />
                  </a>
                </div>
              </div>
            </div>

            {/* COMMENTS */}
            <div className="mt-14" id="comments">
              {/* COMMENT BOX */}
              <div className="bg-white rounded-[28px] p-6 md:p-10 border border-[#e6dfd5] shadow-sm">
                <h3 className="title-font text-[24px] text-black mb-6 font-semibold">
                  {lang === "EN"
                    ? "Leave a Comment"
                    : "Hinterlasse einen Kommentar"}
                </h3>

                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder={lang === "EN" ? "Your Name *" : "Ihr Name *"}
                      value={commentData.name}
                      onChange={(e) =>
                        setCommentData({ ...commentData, name: e.target.value })
                      }
                      className="w-full px-5 py-3 rounded-xl border border-[#ddd] outline-none focus:border-[#b8965a] transition"
                    />
                    <input
                      type="email"
                      required
                      placeholder={
                        lang === "EN" ? "Your Email *" : "Ihre E-Mail *"
                      }
                      value={commentData.email}
                      onChange={(e) =>
                        setCommentData({
                          ...commentData,
                          email: e.target.value,
                        })
                      }
                      className="w-full px-5 py-3 rounded-xl border border-[#ddd] outline-none focus:border-[#b8965a] transition"
                    />
                  </div>
                  <textarea
                    required
                    value={commentData.text}
                    onChange={(e) =>
                      setCommentData({ ...commentData, text: e.target.value })
                    }
                    placeholder={
                      lang === "EN"
                        ? "Write your comment..."
                        : "Schreiben Sie Ihren Kommentar..."
                    }
                    className="w-full h-[140px] rounded-xl border border-[#ddd] p-5 outline-none resize-none text-[15px] focus:border-[#b8965a] transition"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-10 py-3.5 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-black hover:border-black transition duration-300 disabled:opacity-50"
                  >
                    {submitting
                      ? lang === "EN"
                        ? "Submitting..."
                        : "Wird gesendet..."
                      : lang === "EN"
                        ? "Post Comment"
                        : "Kommentar abschicken"}
                  </button>
                  <p className="text-[10px] text-gray-400 mt-2 italic">
                    *{" "}
                    {lang === "EN"
                      ? "Your email address will not be published. Comments require admin approval."
                      : "Ihre E-Mail-Adresse wird nicht veröffentlicht. Kommentare müssen vom Administrator genehmigt werden."}
                  </p>
                </form>
              </div>

              {/* LIST OF COMMENTS */}
              <div className="mt-12 space-y-6">
                <h4 className="font-bold text-black border-b border-[#ddd] pb-4 mb-6">
                  {comments.length} {lang === "EN" ? "Comments" : "Kommentare"}
                </h4>
                {comments.length > 0 ? (
                  comments.map((c, i) => (
                    <div key={c._id || i} className="flex gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-[#f5f3ef] flex items-center justify-center text-[#b8965a] shrink-0 border border-[#e6dfd5]">
                        <Icon name="user" className="text-lg" />
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-5 border border-[#e6dfd5] shadow-sm group-hover:border-[#b8965a]/30 transition-all">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-bold text-black text-sm">
                            {c.name}
                          </h4>
                          <span className="text-[10px] text-gray-400">
                            {new Date(c.createdAt).toLocaleDateString(
                              lang === "EN" ? "en-US" : "de-DE",
                            )}
                          </span>
                        </div>
                        <p className="text-[#0a3e40] text-sm leading-relaxed whitespace-pre-wrap">
                          {c.text}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center py-10 text-gray-400 text-sm italic">
                    {lang === "EN"
                      ? "Be the first to share your thoughts!"
                      : "Schreiben Sie als Erster einen Kommentar!"}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:sticky lg:top-[120px] h-fit text-left">
            {/* CATEGORY */}
            <div className="bg-[#e7dfd7] rounded-[28px] p-6 md:p-8 mb-7 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
              <h3 className="title-font text-[24px] md:text-[28px] text-black mb-6 text-left ">
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
                <h3 className="title-font text-[24px] md:text-[28px] text-black mb-6 text-left ">
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
              <h3 className="title-font text-[24px] md:text-[28px] text-black mb-7 text-left ">
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
                      getBi(item.Category || item.category, lang) || "AI & HR";
                    const itemImg = item.img
                      ? item.img.startsWith("http") ||
                        item.img.startsWith("/assets")
                        ? item.img
                        : `${IMG_URL}${item.img}`
                      : "/assets/images/blog2.png";
                    const itemImgAlt = getBi(item.imgAlt, lang) || itemTitle;

                    return (
                      <Link
                        key={item._id || idx}
                        to={`/blog-details/${item._id}`}
                        className="flex items-start text-left gap-4 pb-6 border-b border-[#ececec] last:border-0 last:mb-0 last:pb-0 group cursor-pointer"
                      >
                        <img
                          src={itemImg}
                          alt={itemImgAlt}
                          title={itemImgAlt}
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
                  <p className="text-gray-400 text-sm italic">
                    No recent posts found.
                  </p>
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
