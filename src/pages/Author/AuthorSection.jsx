import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBookHeader, getBooks, IMG_URL, getBi, getCached, setCached } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const AuthorSection = () => {
  const cachedHeader = getCached("authorPageBookHeader");
  const cachedBooks = getCached("authorPageBooks");

  const [activeIndex, setActiveIndex] = useState(null);
  const [header, setHeader] = useState(cachedHeader || null);
  const [bookList, setBookList] = useState(cachedBooks || []);
  const [loading, setLoading] = useState(!cachedHeader || !cachedBooks);
  const { lang } = useLanguage();

  useEffect(() => {
    Promise.all([getBookHeader(), getBooks()])
      .then(([headRes, booksRes]) => {
        if (headRes.data) {
          setHeader(headRes.data);
          setCached("authorPageBookHeader", headRes.data);
        }
        if (booksRes.data) {
          const list = Array.isArray(booksRes.data)
            ? booksRes.data
            : booksRes.data.value || [];
          setBookList(list);
          setCached("authorPageBooks", list);
        }
      })
      .catch((err) => console.error("Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);

  const formattedBooks = bookList.map((b) => ({
    _id: b._id,
    title: typeof b.title === "object" ? getBi(b.title, lang) : b.title,
    img:
      b.img || b.image
        ? (b.img || b.image).startsWith("http") ||
          (b.img || b.image).startsWith("/assets")
          ? b.img || b.image
          : `${IMG_URL}${b.img || b.image}`
        : "/assets/images/book1.jpeg",
    link: b.link || "#",
  }));

  const handleClick = (index) => {
    if (window.innerWidth >= 1024) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) {
    return <div className="w-full h-[400px] bg-white animate-pulse" />;
  }

  const label = getBi(header?.label, lang) || (lang === "EN" ? "Publications" : "Publikationen");
  const title = getBi(header?.title, lang) || (lang === "EN" ? "Author" : "Autor");
  const desc = getBi(header?.description, lang);

  return (
    <section id="publications-section" className="bg-white py-[60px]">
      <div className="max-w-[1420px] mx-auto px-[20px] md:px-[40px]">
        {/* TITLE */}
        <div className="text-center mb-14">
          <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
            {label}
          </span>

          <h2 className="title-font text-3xl md:text-4xl text-black py-4">
            {title}
          </h2>

          <div
            className="rich-text text-[#0a3e40] max-w-[850px] w-full mx-auto text-[16px] leading-relaxed transition-all duration-300"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>

        {/* BOOKS GRID */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {formattedBooks.map((book, i) => (
              <div
                key={i}
                onClick={() => handleClick(i)}
                className="group relative rounded-[28px] overflow-hidden cursor-pointer w-full h-[500px] md:h-[580px] lg:h-[580px] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* IMAGE */}
                <img
                  src={book.img}
                  alt={book.title || "book"}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    activeIndex === i
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  } bg-black/20`}
                >
                  {/* BLUR BOX */}
                  <div
                    className={`bg-white/30 backdrop-blur-md border border-white/20 rounded-[24px] shadow-[0_10px_35px_rgba(0,0,0,0.18)] w-[calc(100%-40px)] h-[calc(100%-40px)] flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ${
                      activeIndex === i
                        ? "scale-100"
                        : "scale-95 group-hover:scale-100"
                    }`}
                  >
                    {/* BUTTON */}
                    <Link to={book.link} target="_blank" rel="noreferrer">
                      <span className="px-6 py-2.5 rounded-full bg-[#b8965a] text-white text-xs font-bold border border-[#b8965a] hover:bg-white hover:text-[#b8965a] transition duration-300 inline-block">
                        {lang === "EN" ? "Order now →" : "Jetzt bestellen →"}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {bookList.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-[30px] border border-dashed border-gray-200">
            <p className="text-gray-400 italic">No publications found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AuthorSection;
