import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VitaTimeline = () => {

  const [hoverIndex, setHoverIndex] = useState(null);

  const data = [
    {
      year: "2014",
      icon: "fa-rocket",
      text: `2014 marks the first major milestone in my career. In that year, I completed my first long-term project in software automation for a major client in the aerospace and defense industry and graduated from the Technical University of Munich with a degree in Management & Technology (B.Sc.).

Furthermore, it marked the beginning of additional nationwide projects with renowned blue-chip companies in the field of infrastructure and business process automation.`,
    },
    {
      year: "2016",
      icon: "fa-gears",
      text: `Taking on my first interim management roles in IT Build, Operations, and Transition Management for renowned enterprise clients.

Key Achievements:
• Ensured SLA, OLA, and system availability compliance, consistently achieving 95–99%
• Eliminated a historical incident backlog (approx. 120 tickets) within two months after service takeover
• Optimized staffing and resource allocation, increasing productivity while reducing operational costs by approximately 25%`,
    },
    {
      year: "2018",
      icon: "fa-user-tie",
      text: `Promotion to the management team of softwarenaut GmbH, with primary responsibility for operations and human resource management (approx. 50–60 full-time employees and 10–20 freelancers).

Graduated with distinction with a Master’s degree in IT Management (M.Sc.) from FOM University of Applied Sciences for Economics and Management.`,
    },
    {
      year: "2019",
      icon: "fa-shield-halved",
      text: `New position as an Interim Manager in the defense sector, responsible for conducting project assessments, leading projects in software automation and deployment, and preparing Statements of Work (SoW) as well as SLA and OLA agreements.

Key Achievements:
• Successfully completed projects within the proposed timeframes.
• Transitioned the project into a service contract, contributing to a revenue increase of approximately 8%

Beginning of doctoral studies at Heriot-Watt University, Edinburgh Business School, with a research focus on AI recruitment technologies and trustworthiness.`,
    },
    {
      year: "2022",
      icon: "fa-chalkboard-user",
      text: `Interim Manager and Senior IT Expert specializing in the automation of integrated business processes in SAP.

Responsible for expanding the operational business area in workload automation and SAP ERP business process automation.

Appointed as a lecturer at HM Business School, teaching Business Informatics at Bachelor’s and master’s level, with courses in Digital Transformation, Business Research Methodology, E-Business Models and Applications, all with a focus on AI.`,
    },
    {
      year: "2025",
      icon: "fa-graduation-cap",
      text: `Doctorate in Business Management, with a dissertation titled: “Exploring the Influence of AI Recruitment Technology on Trustworthiness.”

Expanded operational business areas with major clients in the banking and financial services sector.

Appointed to the Innovation Agent Task Force – Automotive Skills Alliance (ASA) as a Subject Matter Expert for research initiatives in Human Resource Management and AI.

Key Achievements:
• Led successful transition management initiatives, negotiated new IT service contracts, and oversaw the recruitment, staffing, and development of new IT service teams
• Expanded the client portfolio, securing new accounts and achieving revenue growth of 20–30%`,
    },
    {
      year: "2026",
      icon: "fa-handshake",
      text: `Made it this far? Let’s connect and shape the future together.`,
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-[60px]">
{/* TOP */}
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] text-center mb-14">
        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          Vita
        </span>

        <h2 className="title-font text-3xl md:text-[40px] text-black mt-2 mb-2">
          Together Through the Years
        </h2>

        <p className="text-[#0a3e40] text-[16px] max-w-xl mx-auto leading-relaxed">
          A professional journey shaped by leadership, innovation, and continuous transformation across AI, HR, and business process management.
        </p>
      </div>

      {/* SLIDER */}
      <div className="max-w-[1250px] mx-auto px-[20px]">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          pagination={{
            el: ".custom-dots",
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i} className="h-full">

            <div
  className="bg-white rounded-[20px] p-8 
             h-[380px] flex flex-col justify-between relative 
             border border-[#f9f9f9] 
             shadow-[0_4px_20px_rgba(0,0,0,0.03)]
             transition duration-300"
  onMouseEnter={() => setHoverIndex(i)}
  onMouseLeave={() => setHoverIndex(null)}
>
                {/* ICON */}
                <div className="absolute top-6 right-6 text-[#b8965a] text-[28px]">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                <div>

                 {/* YEAR */}
<h3
  className="text-[#b8965a] text-[24px] font-semibold mb-1"
  style={{
    fontFamily: "Caveat, cursive",
    letterSpacing: "1px",
  }}
>
  {item.year}
</h3>

                  {/* LINE */}
                  <div className="w-[35px] h-[2px] bg-[#b8965a] mb-4"></div>

                  {/* TEXT */}
                  <p className="text-[#0a3e40] text-[16px] leading-relaxed whitespace-pre-line line-clamp-[10]">
                    {item.text}
                  </p>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

   {/* CONTROLS */}
<div className="relative flex items-center justify-between mt-12">

  {/* LEFT SIDE */}
  <div className="flex items-center gap-4 z-20">

    {/* LEFT BUTTON */}
    <button className="prev-btn w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center text-[#0a3e40] hover:bg-[#b8965a] hover:text-white transition-all duration-300 cursor-pointer">

      <i className="fa-solid fa-arrow-left"></i>

    </button>

    {/* RIGHT BUTTON */}
    <button className="next-btn w-11 h-11 rounded-full bg-[#b8965a] text-white flex items-center justify-center hover:opacity-80 transition-all duration-300 cursor-pointer">

      <i className="fa-solid fa-arrow-right"></i>

    </button>

  </div>

 {/* CENTER DOTS */}
<div className="absolute left-1/2 -translate-x-1/2 hidden md:block">

  <div className="custom-dots flex items-center justify-center gap-2"></div>

</div>

  {/* RIGHT SIDE */}
  <div className="z-20">

    <a
      href="/assets/files/cv.pdf"
      download
      className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 whitespace-nowrap"
    >

      <i className="fa-solid fa-download"></i>

      <span>Download CV</span>

    </a>

  </div>

</div>

      </div>

    </section>
  );
};

export default VitaTimeline;