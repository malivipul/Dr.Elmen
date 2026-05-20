import { useState } from "react";
import { Link } from "react-router-dom";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const AuthorSection = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  // ALL BOOKS
  const allBooks = [
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

    {
      img: "/assets/images/book4.webp",
      link: "#",
    },

    {
      img: "/assets/images/book5.webp",
      link: "#",
    },
  ];

  // ONLY LATEST 3 BOOKS
  const books = allBooks.slice(0, 3);

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
            Publications
          </span>

          <h2 className="title-font text-3xl md:text-4xl text-black py-4">
            Author
          </h2>

          <p className="text-[#0a3e40] max-w-4xl mx-auto text-[16px] leading-relaxed">

            <span className="font-semibold italic">
              My research is not just about AI and HR — it’s about opening new perspectives.
            </span>

            <br />

            Whether it’s rethinking how organisations use AI, reshaping HR, or exploring new ways to work:
            I am most pleased when my publications encourage you to challenge existing models.

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

            {books.map((book, i) => (

              <SwiperSlide key={i}>

                <div
                  onClick={() => handleClick(i)}
                  className="
                    group relative rounded-[28px] overflow-hidden cursor-pointer
                    h-[500px] sm:h-[520px] md:h-[430px]
                  "
                >

                  {/* IMAGE */}
                  <img
                    src={book.img}
                    alt="book"
                    className="w-full h-full object-cover transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div
                    className={`
                      absolute inset-0
                      flex items-center justify-center
                      transition-all duration-500
                      ${
                        activeIndex === i
                          ? "opacity-100"
                          : "opacity-0"
                      }
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
                        ${
                          activeIndex === i
                            ? "scale-100"
                            : "scale-95"
                        }
                      `}
                    >

                      {/* BUTTON */}
                      <Link
                        to={book.link}
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
                          Order now →
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

          {books.map((book, i) => (

            <div
              key={i}
              className="
                group relative rounded-[28px] overflow-hidden cursor-pointer
                h-[520px]
              "
            >

              {/* IMAGE */}
              <img
                src={book.img}
                alt="book"
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
                    to={book.link}
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
                      Order now →
                    </span>

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AuthorSection;