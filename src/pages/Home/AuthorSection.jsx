import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  getBookHeader,
  getBooks,
  IMG_URL,
  getBi,
  getCached,
  setCached,
} from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

import "swiper/css";

const AuthorSection = () => {
  const cachedHeader = getCached("homeBookHeader");
  const cachedBooks = getCached("homeBooks");

  const [activeIndex, setActiveIndex] = useState(null);
  const [header, setHeader] = useState(cachedHeader || null);
  const [booksList, setBooksList] = useState(cachedBooks || []);
  const [loading, setLoading] = useState(!cachedHeader || !cachedBooks);
  const { lang } = useLanguage();

  useEffect(() => {
    Promise.all([getBookHeader(), getBooks()])
      .then(([headRes, booksRes]) => {
        if (headRes.data) {
          setHeader(headRes.data);
          setCached("homeBookHeader", headRes.data);
        }
        if (booksRes.data) {
          const list = Array.isArray(booksRes.data)
            ? booksRes.data
            : booksRes.data.value || [];
          setBooksList(list);
          setCached("homeBooks", list);
        }
      })
      .catch((err) =>
        console.error("Error fetching book header or books:", err),
      )
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[500px] bg-white animate-pulse py-[60px]" />
    );
  }

  const books = booksList.slice(0, 3);

  const label =
    getBi(header?.label, lang) ||
    (lang === "EN" ? "Publications" : "Publikationen");
  const title =
    getBi(header?.title, lang) || (lang === "EN" ? "Author" : "Autor");
  const desc = getBi(header?.description, lang);

  const handleClick = (index) => {
    if (window.innerWidth >= 1024) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[60px]">
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

        {/* MOBILE + TABLET SLIDER */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },

              768: {
                slidesPerView: 3,
              },
            }}
          >
            {books.map((book, i) => {
              const bookPath = book.img || book.image;
              const imgSrc = bookPath
                ? bookPath.startsWith("http") || bookPath.startsWith("/assets")
                  ? bookPath
                  : `${IMG_URL}${bookPath}`
                : "/assets/images/book1.jpeg";

              return (
                <SwiperSlide key={i}>
                  <div
                    onClick={() => handleClick(i)}
                    className="group relative rounded-[28px] overflow-hidden cursor-pointer h-[500px] md:h-[580px] lg:h-[580px]"
                  >
                    {/* IMAGE */}
                    <img
                      src={imgSrc}
                      alt={book.title ? getBi(book.title, lang) : "book"}
                      className="w-full h-full object-cover transition duration-500"
                    />

                    {/* OVERLAY */}
                    <div
                      className={`
                        absolute inset-0
                        flex items-center justify-center
                        transition-all duration-500
                        ${activeIndex === i ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      {/* BLUR BOX */}
                      <div
                        className={`
                          bg-white/30
                          backdrop-blur-md
                          border border-white/20
                          rounded-[24px]
                          shadow-[0_10px_35px_rgba(0,0,0,0.18)]
                          w-[calc(100%-40px)]
                          h-[calc(100%-40px)]
                          flex items-center justify-center
                          transition-all duration-500
                          ${activeIndex === i ? "scale-100" : "scale-95"}
                        `}
                      >
                        {/* BUTTON */}
                        <Link
                          to={book.link || "#"}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span
                            className="
                              px-8 py-3
                              rounded-full
                              bg-[#b8965a]
                              text-white
                              text-sm
                              font-bold
                              border border-[#b8965a]
                              hover:bg-white
                              hover:text-[#b8965a]
                              transition duration-300
                              inline-block
                            "
                          >
                            {lang === "EN"
                              ? "Order now →"
                              : "Jetzt bestellen →"}
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-10">
          {books.map((book, i) => {
            const bookPath = book.img || book.image;
            const imgSrc = bookPath
              ? bookPath.startsWith("http") || bookPath.startsWith("/assets")
                ? bookPath
                : `${IMG_URL}${bookPath}`
              : "/assets/images/book1.jpeg";

            return (
              <div
                key={i}
                className="group relative rounded-[28px] overflow-hidden cursor-pointer h-[590px]"
              >
                {/* IMAGE */}
                <img
                  src={imgSrc}
                  alt={book.title ? getBi(book.title, lang) : "book"}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    flex items-center justify-center
                    transition-all duration-500
                    opacity-0 group-hover:opacity-100
                  "
                >
                  {/* BLUR BOX */}
                  <div
                    className="
                      bg-white/30
                      backdrop-blur-md
                      border border-white/20
                      rounded-[24px]
                      shadow-[0_10px_35px_rgba(0,0,0,0.18)]
                      w-[calc(100%-50px)]
                      h-[calc(100%-50px)]
                      flex items-center justify-center
                      transition-all duration-500
                      scale-95 group-hover:scale-100
                    "
                  >
                    {/* BUTTON */}
                    <Link
                      to={book.link || "#"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span
                        className="
                          px-8 py-3
                          rounded-full
                          bg-[#b8965a]
                          text-white
                          text-sm
                          font-bold
                          border border-[#b8965a]
                          hover:bg-white
                          hover:text-[#b8965a]
                          transition duration-300
                          inline-block
                        "
                      >
                        {lang === "EN" ? "Order now →" : "Jetzt bestellen →"}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
