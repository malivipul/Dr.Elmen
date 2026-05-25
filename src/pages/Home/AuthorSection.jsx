import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { getAuthor, getBooks, IMG_URL, getBi } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

import "swiper/css";

const AuthorSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [author, setAuthor] = useState(null);
  const [booksList, setBooksList] = useState([]);
  const { lang } = useLanguage();

  useEffect(() => {
    getAuthor()
      .then((res) => {
        if (res.data) setAuthor(res.data);
      })
      .catch((err) => console.error("Error fetching author details:", err));

    getBooks()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data) ? res.data : (res.data.value || []);
          setBooksList(list);
        }
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const staticBooks = [
    {
      img: "/assets/images/book1.jpeg",
      link: "https://link.springer.com/book/10.1007/978-3-030-56441-4",
    },
    {
      img: "/assets/images/book2.webp",
      link: "https://link.springer.com/chapter/10.1007/978-3-030-85521-5_3#citeas",
    },
    {
      img: "/assets/images/book3.webp",
      link: "#",
    },
  ];

  const rawBooks = booksList && booksList.length > 0 ? booksList : staticBooks;
  // Slice to the first 3 books
  const books = rawBooks.slice(0, 3);

  const label = author ? getBi(author.label, lang) : "Publications";
  const title = author ? getBi(author.title, lang) : "Author";
  const subtitle = author ? getBi(author.subtitle, lang) : "My research is not just about AI and HR — it’s about opening new perspectives.";
  const desc = author ? getBi(author.desc, lang) : "Whether it’s rethinking how organisations use AI, reshaping HR, or exploring new ways to work:\nI am most pleased when my publications encourage you to challenge existing models.";

  const handleClick = (index) => {
    if (window.innerWidth >= 1024) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[1220px] mx-auto px-[20px] md:px-[40px]">
        {/* TITLE */}
        <div className="text-center mb-14">
          <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
            {label}
          </span>

          <h2 className="title-font text-3xl md:text-4xl text-black py-4">
            {title}
          </h2>

          <p className="text-[#0a3e40] max-w-4xl mx-auto text-[16px] leading-relaxed whitespace-pre-line">
            <span className="font-semibold italic">
              {subtitle}
            </span>
            <br />
            {desc}
          </p>
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
                    className="group relative rounded-[28px] overflow-hidden cursor-pointer h-[650px] sm:h-[560px] md:h-[430px]"
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
                        <Link to={book.link || "#"} target="_blank" rel="noreferrer">
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
                            Order now →
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
                className="group relative rounded-[28px] overflow-hidden cursor-pointer h-[520px]"
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
                    <Link to={book.link || "#"} target="_blank" rel="noreferrer">
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
                        Order now →
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