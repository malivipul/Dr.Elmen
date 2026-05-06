import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BlogSection = () => {
  const [active, setActive] = useState("all");

  const data = [
    {
      category: "guides",
      title: "AI Implementation in HR",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      desc: "AI integration in HR systems.",
    },
    {
      category: "opinions",
      title: "AI Leadership",
      img: "/assets/images/people-office-analyzing-checking-finance-graphs.jpg",
      desc: "Future leadership with AI.",
    },
    {
      category: "case",
      title: "HR Case Study",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      desc: "Real transformation example.",
    },
  ];

  const filtered =
    active === "all" ? data : data.filter((item) => item.category === active);

  const tabs = ["All", "Guides", "Opinions", "Case"];

  return (
    <section className="bg-[#f5f3ef] py-[60px]">
      <div className="max-w-[1420px] mx-auto px-[20px] md:px-[40px] text-center">

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
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 py-2 rounded-full border ${
                active === tab
                  ? "border-[#b8965a] text-[#b8965a] bg-white"
                  : "border-[#d6d3cc] text-[#6b6b6b]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 🔴 MOBILE SLIDER */}
        <div className="block md:hidden mb-12">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.2}
            spaceBetween={16}
            loop={true}
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

        {/* 🟢 DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {filtered.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* 🔥 SUBSCRIBE BUTTON (LAST CENTER) */}
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
  <div className="group cursor-pointer transition duration-300 hover:-translate-y-1">
    <div className="overflow-hidden rounded-lg relative mb-4">
      <img
        src={item.img}
        className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
    </div>

    <span className="text-xs text-[#b8965a] uppercase">
      {item.category}
    </span>

    <h3 className="title-font text-lg text-black mt-2">
      {item.title}
    </h3>

    <p className="text-[#0a3e40] text-[14px] mt-2">
      {item.desc}
    </p>
  </div>
);

export default BlogSection;