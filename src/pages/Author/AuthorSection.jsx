import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const AuthorSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [bookList, setBookList] = useState([]);
  const { lang } = useLanguage();

  useEffect(() => {
    getBooks()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data)
            ? res.data
            : res.data.value || [];
          setBookList(list);
        }
      })
      .catch((err) => console.error("Error fetching books:", err));
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

  return (
    <section id="publications-section" className="bg-white py-[60px]">
      <div className="max-w-[1420px] mx-auto px-[20px] md:px-[40px]">
        {/* TITLE */}
        <div className="text-center mb-14">
          <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
            {lang === "EN" ? "Publications" : "Publikationen"}
          </span>

          <h2 className="title-font text-3xl md:text-4xl text-black py-4">
            {lang === "EN" ? "Author" : "Autor"}
          </h2>

          <p className="text-[#0a3e40] max-w-4xl mx-auto text-[16px] leading-relaxed">
            <span className="font-semibold italic">
              {lang === "EN"
                ? "My research is not just about AI and HR — it’s about opening new perspectives."
                : "Bei meiner Forschung geht es nicht nur um KI und HR – es geht darum, neue Perspektiven zu eröffnen."}
            </span>

            <br />

            {lang === "EN"
              ? "Whether it’s rethinking how organisations use AI, reshaping HR, or exploring new ways to work: I am most pleased when my publications encourage you to challenge existing models."
              : "Ob es darum geht, die Nutzung von KI in Unternehmen neu zu überdenken, HR neu zu gestalten oder neue Wege der Zusammenarbeit zu erkunden: Am meisten freut es mich, wenn meine Publikationen Sie dazu anregen, bestehende Modelle zu hinterfragen."}
          </p>
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
