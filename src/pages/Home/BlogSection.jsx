import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { Link } from "react-router";

const BlogSection = () => {
  const [active, setActive] = useState("all");

  const data = [
    {
      category: "guides",
      title: "AI Implementation in HR",
      img: "/assets/images/blog2.png",
      desc: "AI integration in HR systems.",
      link: "/blog-details",
    },

    {
      category: "opinions",
      title: "AI Leadership",
      img: "/assets/images/people-office-analyzing-checking-finance-graphs.jpg",
      desc: "Future leadership with AI.",
      link: "/blog-details",
    },

    {
      category: "case",
      title: "HR Case Study",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      desc: "Real transformation example.",
      link: "/blog-details",
    },
  ];

  // FILTER
  const filtered =
    active === "all"
      ? data
      : data.filter((item) => item.category === active);

  // TABS
  const tabs = [
    { label: "All", value: "all" },
    { label: "Guides", value: "guides" },
    { label: "Opinions", value: "opinions" },
    { label: "Case", value: "case" },
  ];

  return (
    <section className="bg-[#f5f3ef] py-[60px]">

      <div className="max-w-[1420px] mx-auto px-[20px] md:px-[40px] text-center">

        {/* TOP */}
        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          Articles
        </span>

        <h2 className="title-font text-3xl md:text-[38px] text-black py-3">
          HR & AI Insights
        </h2>

        <p className="text-[#0a3e40] text-[16px] max-w-xl mx-auto mb-10">
          Insights, strategies, and practical knowledge.
        </p>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">

          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActive(tab.value)}
              className={`
                px-6
                py-2
                rounded-full
                border
                text-sm
                font-medium
                transition-all
                duration-300
                ${active === tab.value
                  ? "border-[#b8965a] bg-white text-[#b8965a] shadow-sm"
                  : "border-[#d6d3cc] text-[#6b6b6b] hover:border-[#b8965a] hover:text-[#b8965a]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}

        </div>

        {/* MOBILE SLIDER */}
        <div className="block md:hidden mb-12">

          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.15}
            spaceBetween={16}
            loop={filtered.length > 1}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
          >

            {filtered.map((item, i) => (
              <SwiperSlide key={i}>
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">

          {filtered.map((item, i) => (
            <Card key={i} item={item} />
          ))}

        </div>

        {/* BUTTON */}
        <div className="flex justify-center">

          <button className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

const Card = ({ item }) => (
  <Link
    to={item.link}
    className="group cursor-pointer transition duration-300 hover:-translate-y-1 block"
  >

    {/* IMAGE */}
    <div className="overflow-hidden rounded-[18px] relative mb-4">

      <img
        src={item.img}
        alt={item.title}
        className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>

    </div>

    {/* CATEGORY */}
    <span className="text-xs text-[#b8965a] uppercase tracking-[2px]">
      {item.category}
    </span>

    {/* TITLE */}
    <h3 className="title-font text-[20px] text-black mt-2">
      {item.title}
    </h3>

    {/* DESC */}
    <p className="text-[#0a3e40] text-[16px] mt-2 leading-relaxed">
      {item.desc}
    </p>

  </Link>
);

export default BlogSection;