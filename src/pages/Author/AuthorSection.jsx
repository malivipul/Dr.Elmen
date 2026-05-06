import { useState } from "react";

const AuthorSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const books = [
    {
      img: "/assets/images/book1.png",
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

  const handleClick = (index) => {
    if (window.innerWidth >= 768) return; // desktop ignore
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[60px]">
      <div className="max-w-[1220px] mx-auto px-[20px] md:px-[40px]">

        {/* TITLE */}
        {/* <div className="text-center mb-14">

        

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
        </div> */}

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {books.map((book, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className="group relative rounded-2xl overflow-hidden h-[520px] cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={book.img}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition duration-300
                ${
                  activeIndex === i
                    ? "opacity-100"
                    : "opacity-0 md:group-hover:opacity-100"
                }`}
              >

                <div className="bg-white/40 backdrop-blur-[2px] rounded-xl p-5 m-5 
                  w-[calc(100%-40px)] h-[calc(100%-40px)] 
                  flex items-center justify-center text-center
                  transform translate-y-1/2 group-hover:translate-y-0
                  transition duration-500 ease-out">

                  <a href={book.link} target="_blank">
                    <span className="px-7 py-3 rounded-full 
                      bg-[#b8965a] text-white text-sm font-medium 
                      border border-[#b8965a]
                      hover:bg-white hover:text-[#b8965a] 
                      transition duration-300">
                      Order now →
                    </span>
                  </a>

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