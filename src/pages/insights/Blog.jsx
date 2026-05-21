import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogSection = ({ setIsOpen }) => {

  const [active, setActive] = useState("all");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  // AUTO POPUP AFTER 5 SECONDS
  useEffect(() => {

    const timer = setTimeout(() => {

      setIsOpen(true);

    }, 2000);

    return () => clearTimeout(timer);

  }, [setIsOpen]);

  const data = [
    {
      category: "guides",
      title: "AI Implementation in HR",
      img: "/assets/images/blog2.png",
      desc: "AI integration in HR is transforming recruitment, employee engagement, talent management, and workforce productivity through intelligent automation, predictive analytics, and digital innovation across modern organisations.",
      date: "May 22, 2025",
      read: "6 min read",
      link: "/blog-details",
    },

    {
      category: "opinions",
      title: "AI Leadership",
      img: "/assets/images/people-office-analyzing-checking-finance-graphs.jpg",
      desc: "Modern leadership is evolving through AI-driven decision making, strategic innovation, and digital transformation that empower organisations to adapt faster in a competitive business environment.",
      date: "May 18, 2025",
      read: "5 min read",
      link: "/blog-details",
    },

    {
      category: "case studies",
      title: "HR Case Study",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      desc: "Explore a real-world HR transformation case where AI-powered systems improved recruitment efficiency, employee experience, workflow automation, and operational performance successfully.",
      date: "May 12, 2025",
      read: "8 min read",
      link: "/blog-details",
    },

    {
      category: "tools",
      title: "AI Tools for HR Teams",
      img: "/assets/images/blog3.png",
      desc: "Discover powerful AI tools designed for HR automation, employee analytics, recruitment optimisation, workflow management, and productivity enhancement in modern workplaces.",
      date: "May 08, 2025",
      read: "4 min read",
      link: "/blog-details",
    },

    {
      category: "guides",
      title: "Digital HR Transformation",
      img: "/assets/images/businessman-using-futuristic-technology-with-digital-interface.jpg",
      desc: "Digital HR transformation combines AI technologies, automation strategies, and modern workforce solutions to improve operational efficiency and employee engagement across organisations.",
      date: "May 06, 2025",
      read: "5 min read",
      link: "/blog-details",
    },

    {
      category: "opinions",
      title: "Future of AI in Business",
      img: "/assets/images/2151966708.jpg",
      desc: "Exploring how AI is reshaping business strategy, leadership, and operational efficiency across global industries through innovation and digital transformation.",
      date: "May 03, 2025",
      read: "7 min read",
      link: "/blog-details",
    },

    {
      category: "tools",
      title: "Top HR Automation Platforms",
      img: "/assets/images/close-up-data-center-programmers-using-pc-visualize-ai-neural-networks (1).jpg",
      desc: "A curated overview of modern HR automation platforms helping organisations streamline workflows and employee management successfully.",
      date: "April 29, 2025",
      read: "4 min read",
      link: "/blog-details",
    },

    {
      category: "case studies",
      title: "AI Recruitment Success Story",
      img: "/assets/images/book1.jpeg",
      desc: "How AI recruitment systems improved candidate screening, hiring speed, and workforce planning for enterprise organisations worldwide.",
      date: "April 22, 2025",
      read: "6 min read",
      link: "/blog-details",
    },

    {
      category: "guides",
      title: "AI & Workforce Innovation",
      img: "/assets/images/people-taking-part-high-protocol-event (3) (1).jpg",
      desc: "AI and workforce innovation are transforming organisations through automation, strategic decision-making, and intelligent employee engagement solutions.",
      date: "April 18, 2025",
      read: "5 min read",
      link: "/blog-details",
    },

    {
      category: "opinions",
      title: "AI & Leadership Strategy",
      img: "/assets/images/people-office-analyzing-checking-finance-graphs.jpg",
      desc: "Understanding how AI leadership strategy can improve organisational agility, workforce planning, and operational excellence.",
      date: "April 12, 2025",
      read: "5 min read",
      link: "/blog-details",
    },

    // ARCHIVE BLOG 1
    {
      category: "archive",
      title: "AI Evolution in Enterprises",
      img: "/assets/images/blog2.png",
      desc: "Exploring how enterprise organisations adopted AI technologies to improve operational performance and long-term digital transformation strategies.",
      date: "March 28, 2025",
      read: "5 min read",
      link: "/blog-details",
    },

    // ARCHIVE BLOG 2
    {
      category: "archive",
      title: "Workforce Automation Trends",
      img: "/assets/images/businessman-using-futuristic-technology-with-digital-interface.jpg",
      desc: "A detailed overview of workforce automation trends and how modern businesses are adapting to intelligent systems and AI-driven workflows.",
      date: "March 15, 2025",
      read: "6 min read",
      link: "/blog-details",
    },
  ];

  // FILTER
  const filtered =
    active === "all"
      ? data
      : data.filter((item) => item.category === active);

  // PAGINATION
  const blogsPerPage = 7;

  const totalPages = Math.ceil(filtered.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;

  const paginatedBlogs = filtered.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  // FIRST PAGE ONLY
  const latestArticle =
    currentPage === 1
      ? paginatedBlogs[0]
      : null;

  // REMAINING BLOGS
  const recentArticles =
    currentPage === 1
      ? paginatedBlogs.slice(1)
      : paginatedBlogs;

  // TABS
  const tabs = [
    { label: "All", value: "all" },
    { label: "Guides", value: "guides" },
    { label: "Opinions", value: "opinions" },
    { label: "Case Studies", value: "case studies" },
    { label: "Tools", value: "tools" },
    { label: "Archive", value: "archive" },
  ];

  return (
    <section className="bg-[#f4f4f4] py-[60px]">

      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[40px]">

        {/* TOP */}
        <div className="relative text-center mb-10">

          {/* SUBSCRIBE DESKTOP */}
          <div className="hidden md:block absolute right-0 top-0">

            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-3 rounded-full bg-black text-white text-sm font-bold hover:bg-[#b8965a] hover:text-white transition duration-300 inline-flex items-center gap-2"
            >

              <i className="fa-regular fa-envelope"></i>

              Subscribe

            </button>

          </div>

          {/* SUBSCRIBE MOBILE */}
          <div className="absolute right-0 top-0 md:hidden">

            <button
              onClick={() => setIsOpen(true)}
              className="w-[44px] h-[44px] rounded-full bg-black text-white border border-black hover:bg-transparent hover:text-black transition duration-300 flex items-center justify-center"
            >

              <i className="fa-regular fa-envelope text-[15px]"></i>

            </button>

          </div>

          {/* LABEL */}
          <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
            Insights & Resources
          </span>

          {/* TITLE */}
          <h2 className="title-font text-2xl md:text-[36px] text-black leading-tight mb-5 mt-3">
            Articles & Tools
          </h2>

          {/* SUBTITLE */}
          <p className="text-[#0a3e40] text-[16px] leading-relaxed max-w-[760px] mx-auto">
            Insights, guides, tools, and perspectives on HR, AI and the future of work.
          </p>

        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">

          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => {
                setActive(tab.value);
                setCurrentPage(1);
              }}
              className={`
                px-6
                py-2
                rounded-full
                border
                text-sm
                font-bold
                transition-all
                duration-300
                ${
                  active === tab.value
                    ? "border-[#b8965a] bg-white text-[#b8965a] shadow-sm"
                    : "border-[#d6d3cc] text-[#6b6b6b] hover:border-[#b8965a] hover:text-[#b8965a]"
                }
              `}
            >
              {tab.label}
            </button>
          ))}

        </div>
{/* LATEST ARTICLE HEADING */}
<h3 className="text-left text-[#b8965a] text-[16px]  font-bold mb-5">
  Latest Article
</h3>
        {/* BIG BLOG */}
        {currentPage === 1 && latestArticle && (
          <div className="bg-white border border-[#e6dfd5] rounded-[20px] overflow-hidden mb-8">

            <div className="grid lg:grid-cols-2 items-stretch">

              {/* LEFT */}
              <div className="p-7 md:p-10 text-left flex flex-col justify-center">

                <span className="text-[#b8965a] text-xs tracking-[2px] uppercase font-semibold">
                  {latestArticle.category}
                </span>

                <h3 className="title-font text-[20px] md:text-[26px] font-medium leading-tight text-black mt-4 max-w-[500px]">
                  {latestArticle.title}
                </h3>

                <p className="text-[#0a3e40] text-[16px] leading-[1.9] mt-4 max-w-[500px] line-clamp-3">
                  {latestArticle.desc}
                </p>

                <div className="flex items-center gap-4 mt-5 text-[#7b7b7b] text-sm">

                  <span>{latestArticle.date}</span>

                  <span>•</span>

                  <span>{latestArticle.read}</span>

                </div>

                <div className="mt-6">

                  <Link
                    to={latestArticle.link}
                    className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center gap-2"
                  >
                    Read Article

                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>

                </div>

              </div>

              {/* IMAGE */}
              <div className="relative w-full h-[260px] md:h-auto min-h-[340px] overflow-hidden">

                <img
                  src={latestArticle.img}
                  alt={latestArticle.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

              </div>

            </div>

          </div>
        )}

        {/* ALL BLOGS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">

          {recentArticles.map((item, i) => (
            <Card
              key={i}
              item={item}
            />
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-3 mt-10">

          {[...Array(totalPages)].map((_, i) => (

            <button
              key={i}
              onClick={() => {

                setCurrentPage(i + 1);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

              }}
              className={`
                w-[44px]
                h-[44px]
                rounded-full
                text-sm
                font-bold
                transition
                duration-300
                border

                ${
                  currentPage === i + 1
                    ? "bg-[#b8965a] border-[#b8965a] text-white"
                    : "bg-white border-[#d6d3cc] text-black hover:border-[#b8965a] hover:text-[#b8965a]"
                }
              `}
            >
              {i + 1}
            </button>

          ))}

        </div>

      </div>

    </section>
  );
};

const Card = ({ item }) => (
  <Link
    to={item.link}
    className="group bg-white rounded-[18px] overflow-hidden border border-[#e6dfd5] hover:-translate-y-1 transition duration-300 block"
  >

    {/* IMAGE */}
    <div className="overflow-hidden relative">

      <img
        src={item.img}
        alt={item.title}
        className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
      />

    </div>

    {/* CONTENT */}
    <div className="p-4">

      {/* CATEGORY */}
      <span className="text-[11px] text-[#b8965a] uppercase tracking-[2px] font-semibold">
        {item.category}
      </span>

      {/* TITLE */}
      <h3 className="title-font text-[22px] font-normal text-black mt-3 leading-[1.4]">
        {item.title}
      </h3>

      {/* DESC */}
      <p className="text-[#0a3e40] text-[15px] mt-3 leading-[1.7] line-clamp-2">
        {item.desc}
      </p>

      {/* DATE + READ */}
      <div className="flex items-center gap-3 mt-5 text-[#7b7b7b] text-[13px]">

        <span>{item.date}</span>

        <span>•</span>

        <span>{item.read}</span>

      </div>

    </div>

  </Link>
);

export default BlogSection;