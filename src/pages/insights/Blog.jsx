import React, { useState } from "react";
import { Link } from "react-router-dom";

const InsightsSection = () => {
  const [active, setActive] = useState("all");

  const data = [
    {
      category: "guides",
      title: "AI Implementation in HR",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
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

    {
      category: "guides",
      title: "Digital HR Strategy",
      img: "/assets/images/people-office-analyzing-checking-finance-graphs.jpg",
      desc: "Modern workforce transformation strategies.",
      link: "/blog-details",
    },

    {
      category: "opinions",
      title: "Future of AI in Business",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      desc: "Exploring innovation and automation.",
      link: "/blog-details",
    },

    {
      category: "case",
      title: "Enterprise AI Solutions",
      img: "/assets/images/people-office-analyzing-checking-finance-graphs.jpg",
      desc: "Real-world AI implementation case study.",
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
    <section className="bg-[#f5f3ef] py-[70px]">
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] text-center mb-10">
        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          Articles
        </span>

        <h2 className="title-font text-3xl md:text-[40px] text-black mt-2 mb-2">
          HR & AI Insights
        </h2>

        <p className="text-[#0a3e40] text-[16px] max-w-xl mx-auto leading-relaxed">
          Insights, strategies, and practical knowledge.        </p>
      </div>
      <div className="max-w-[1420px] mx-auto px-[20px] md:px-[40px]">

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">

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

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {filtered.map((item, i) => (
            <Card key={i} item={item} />
          ))}

        </div>

      </div>

    </section>
  );
};

const Card = ({ item }) => (
  <Link to={item.link} className="block">

    <div className="group cursor-pointer transition duration-300 hover:-translate-y-2 text-center">

      {/* IMAGE */}
      <div className="overflow-hidden rounded-[20px] relative mb-5">

        <img
          src={item.img}
          alt={item.title}
          className="w-full h-[240px] object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

      </div>

      {/* CATEGORY */}
      <span className="text-xs text-[#b8965a] uppercase tracking-[2px] block">
        {item.category}
      </span>

      {/* TITLE */}
      <h3 className="title-font text-[20px] text-black mt-3">
        {item.title}
      </h3>

      {/* DESC */}
      <p className="text-[#0a3e40] text-[16px] mt-3 leading-relaxed max-w-[90%] mx-auto">
        {item.desc}
      </p>

    </div>

  </Link>
);

export default InsightsSection;