import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const AuthorSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [bookList, setBookList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { lang } = useLanguage();

  const itemsPerPage = 6;

  useEffect(() => {
    getBooks()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data) ? res.data : (res.data.value || []);
          setBookList(list);
        }
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const staticBooks = [
    {
      _id: "1",
      title: { en: "AI Implementation in HR", de: "KI-Implementierung im Personalwesen" },
      img: "/assets/images/book1.jpeg",
      link: "https://link.springer.com/book/10.1007/978-3-030-56441-4",
    },
    {
      _id: "2",
      title: { en: "AI Leadership", de: "KI-Führung" },
      img: "/assets/images/book2.webp",
      link: "https://link.springer.com/chapter/10.1007/978-3-030-85521-5_3#citeas",
    },
    {
      _id: "3",
      title: { en: "HR Case Study", de: "HR-Fallstudie" },
      img: "/assets/images/book3.webp",
      link: "#",
    },
    {
      _id: "4",
      title: { en: "AI Tools for HR Teams", de: "KI-Werkzeuge für HR-Teams" },
      img: "/assets/images/book4.webp",
      link: "#",
    },
    {
      _id: "5",
      title: { en: "Digital HR Transformation", de: "Digitale HR-Transformation" },
      img: "/assets/images/book5.webp",
      link: "#",
    },
    {
      _id: "6",
      title: { en: "Future of Work", de: "Zukunft der Arbeit" },
      img: "/assets/images/book2.webp",
      link: "#",
    },
    {
      _id: "7",
      title: { en: "AI Ethics in HR", de: "KI-Ethik im HR-Bereich" },
      img: "/assets/images/book3.webp",
      link: "#",
    }
  ];

  const rawBooks = bookList && bookList.length > 0 ? bookList : staticBooks;

  const formattedBooks = rawBooks.map((b) => ({
    _id: b._id,
    title: typeof b.title === "object" ? getBi(b.title, lang) : b.title,
    img: (b.img || b.image)
      ? (b.img || b.image).startsWith("http") || (b.img || b.image).startsWith("/assets")
        ? (b.img || b.image)
        : `${IMG_URL}${b.img || b.image}`
      : "/assets/images/book1.jpeg",
    link: b.link || "#",
  }));

  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = formattedBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(formattedBooks.length / itemsPerPage);

  const handleClick = (index) => {
    if (window.innerWidth >= 1024) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    setActiveIndex(null);
    
    // Delayed scroll ensures DOM renders before scrolling to guarantee success on all browsers
    setTimeout(() => {
      const sectionElement = document.getElementById("publications-section");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <section id="publications-section" className="bg-white py-[60px]">
      <div className="max-w-[1220px] mx-auto px-[20px] md:px-[40px]">
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

        {/* MOBILE + TABLET SLIDER */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={currentBooks.length > 2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {currentBooks.map((book, i) => (
              <SwiperSlide key={i}>
                <div
                  onClick={() => handleClick(i)}
                  className="group relative rounded-[28px] overflow-hidden cursor-pointer h-[650px] sm:h-[560px] md:h-[430px]"
                >
                  {/* IMAGE */}
                  <img
                    src={book.img}
                    alt={book.title || "book"}
                    className="w-full h-full object-cover transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      activeIndex === i ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* BLUR BOX */}
                    <div
                      className={`bg-white/30 backdrop-blur-md border border-white/20 rounded-[24px] shadow-[0_10px_35px_rgba(0,0,0,0.18)] w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center transition-all duration-500 ${
                        activeIndex === i ? "scale-100" : "scale-95"
                      }`}
                    >
                      {/* BUTTON */}
                      <Link to={book.link} target="_blank" rel="noreferrer">
                        <span className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-white hover:text-[#b8965a] transition duration-300 inline-block">
                          {lang === "EN" ? "Order now →" : "Jetzt bestellen →"}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-10">
          {currentBooks.map((book, i) => (
            <div
              key={i}
              className="group relative rounded-[28px] overflow-hidden cursor-pointer h-[520px]"
            >
              {/* IMAGE */}
              <img
                src={book.img}
                alt={book.title || "book"}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                {/* BLUR BOX */}
                <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-[24px] shadow-[0_10px_35px_rgba(0,0,0,0.18)] w-[calc(100%-50px)] h-[calc(100%-50px)] flex items-center justify-center transition-all duration-500 scale-95 group-hover:scale-100">
                  {/* BUTTON */}
                  <Link to={book.link} target="_blank" rel="noreferrer">
                    <span className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-white hover:text-[#b8965a] transition duration-300 inline-block">
                      {lang === "EN" ? "Order now →" : "Jetzt bestellen →"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION CONTROLS */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-14">
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
                  ? "border-[#ece7de] text-[#a09e99] cursor-not-allowed opacity-50"
                  : "border-[#b8965a] text-[#b8965a] hover:bg-[#b8965a] hover:text-white cursor-pointer shadow-sm active:scale-95"
              }`}
            >
              {lang === "EN" ? "← Prev" : "← Zurück"}
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-11 h-11 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center active:scale-95 ${
                      currentPage === pageNum
                        ? "bg-[#b8965a] text-white shadow-[0_6px_20px_rgba(184,150,90,0.3)]"
                        : "border border-[#ece7de] text-black hover:border-[#b8965a] hover:text-[#b8965a]"
                    }`}
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
                  ? "border-[#ece7de] text-[#a09e99] cursor-not-allowed opacity-50"
                  : "border-[#b8965a] text-[#b8965a] hover:bg-[#b8965a] hover:text-white cursor-pointer shadow-sm active:scale-95"
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

export default AuthorSection;