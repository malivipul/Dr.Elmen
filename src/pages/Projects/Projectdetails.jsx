import { useState } from "react";

const projects = [
  {
    title: "HM Business School",
    role: "Lecturer",
    logos: ["/assets/images/Picture8.png"],
    description:
      "Delivered high-impact seminars and supervised academic theses at the HM Business School, teaching groups of 20–30 students. Enabled students to develop practical, industry-relevant solutions in",
    points: [
      "Digital Transformation: Strategies and methodologies",
      "Topics in Business Informatics with a focus on Artificial Intelligence",
      "E-Business: Business models and applications",
      "Guided research projects from concept to completion using structured scientific methodologies and academic research frameworks.",
      "Strengthened students’ analytical thinking, qualitative and quantitative research capabilities, and application of theory to real-world business challenges.",
    ],
  },

  {
    title: "Airbus Defence & Space",
    role: "Interim Manager | IT Build & Operation Management",
    logos: ["/assets/images/Picture2.png"],
    description:
      "Starting point: Consolidation of various IT infrastructure service areas, with the option to expand build and operations management activities.",
    points: [
      "Led IT build and operations for core backend infrastructure services",
      "Delivered consistent service quality by managing SLA/OLA performance",
      "Optimising resource allocation, and developing robust technical architectures and operational standards.",
      "Drove measurable improvements in team performance and engagement by coaching 20–25 staff and aligning stakeholders through structured service governance and executive-level reporting.",
    ],
  },

  {
    title:
      "Microsoft Consulting Services | Deutsche Rentenversicherung",
    role: "IT Workflow Automation Engineer",
    logos: [
      "/assets/images/Picture4.png",
      "/assets/images/Picture2222.png",
    ],
    description:
      "Starting point: Advancing IT infrastructure automation to optimise internal processes and increase operational efficiency in the public sector.",
    points: [
      "Designed and implemented automated IT infrastructure workflows",
      "Eliminated manual deployment errors, and ensured seamless transition into stable service operations through structured testing and documentation.",
      "Delivered projects on time while significantly improving efficiency, reliability, and scalability of infrastructure processes.",
    ],
  },

  {
    title: "Bechtle Managed Services | Volkswagen AG",
    role: "Interim Manager & IT-Engineer",
    logos: [
      "/assets/images/Picture55.png",
      "/assets/images/Picture222.png",
    ],
    description:
      "Starting Point: Supporting a service transition, building a decentralized engineering team, and improving existing processes in software automation and deployment.",
    points: [
      "Led and coordinated a distributed engineering team (6 FTE), driving collaboration across locations and enabling decentralized service delivery",
      "Enabled additional cost efficiencies through on-time transition",
      "Reduced annual licensing costs by implementing a vendor-independent automation framework.",
      "Consistently achieved high service performance with SLA/OLA and system availability levels of 96–99%",
    ],
  },
];

export default function ProjectsSection() {

  const [flippedCard, setFlippedCard] = useState(null);

  return (
   <section className="py-[60px]  bg-[#f4f4f4] overflow-hidden">
  {/* TOP */}
<div className="text-center mb-14 px-5 md:px-0">
          <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
           Projects
          </span>

          <h2 className="title-font text-3xl md:text-[40px] text-black mt-2 mb-3">
           Transforming Ideas into Impactful Solutions
          </h2>

          <p className="text-[#0a3e40] text-[16px] max-w-[760px] mx-auto leading-[30px]">
A collection of strategic initiatives, technology-driven implementations, and business transformation projects focused on AI, HR innovation, automation, and operational excellence.          </p>

        </div>
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <div className="grid lg:grid-cols-2 gap-7">

          {projects.map((item, index) => (

            <div
              key={index}
              className={`group perspective-[2000px] ${flippedCard === index
                  ? "min-h-[620px] md:min-h-[560px]"
                  : "min-h-[420px] md:min-h-[430px]"
                }`}
              onClick={() =>
                setFlippedCard(flippedCard === index ? null : index)
              }
            >

              {/* FLIP CARD */}
              <div
                className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d]
                
                lg:group-hover:[transform:rotateY(180deg)]

                ${flippedCard === index
                    ? "[transform:rotateY(180deg)]"
                    : ""
                  }`}
              >

                {/* FRONT SIDE */}
                <div className="absolute inset-0 bg-white rounded-[20px] p-7 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] [backface-visibility:hidden] overflow-hidden">
                  {/* LOGOS */}
                  <div className="flex items-center gap-2 md:gap-3 flex-nowrap mb-7 relative z-10 overflow-x-auto scrollbar-hide">

                    {item.logos.map((logo, i) => (
                      <div
                        key={i}
                        className="bg-[#f4f4f4] rounded-[16px] md:rounded-[20px] px-3 md:px-5 py-3 md:py-4 border border-[#f4f4f4] shrink-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >

                        <img
                          src={logo}
                          alt="logo"
                          className="h-[32px] md:h-[46px] w-auto object-contain"
                        />

                      </div>
                    ))}

                  </div>

                  {/* TITLE */}
                  <h3 className="title-font text-[20px] md:text-[26px] text-black leading-[1.45] mb-4 relative z-10">
                    {item.title}
                  </h3>

                  {/* ROLE */}
                  <p className="text-[13px] uppercase tracking-[2px] text-[#b8965a] mb-5 relative z-10">
                    {item.role}
                  </p>

                  {/* LINE */}
                  <div className="w-full h-[1px] bg-[#ece6dc] mb-5"></div>

                  {/* DESCRIPTION */}
                  <p className="text-[16px] text-[#0a3e40] leading-[29px] relative z-10">
                    {item.description}
                  </p>

                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 bg-[#111111] rounded-[30px] p-7 md:p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.18)]">

                  {/* GLOW */}
                  <div className="absolute bottom-[-70px] right-[-70px] w-[180px] h-[180px] bg-[#d4b17d]/10 rounded-full blur-[80px]"></div>

                  {/* TITLE */}
                  <h3 className="title-font text-[21px] md:text-[23px] text-white mb-7 relative z-10">
                    Key Responsibilities & Achievements
                  </h3>

                  {/* BULLET POINTS */}
                  <div className="space-y-5 relative z-10">

                    {item.points.map((p, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4"
                      >

                        {/* ICON */}
                        <div className="min-w-[22px] h-[22px] rounded-full bg-[#d4b17d] flex items-center justify-center mt-1">

                          <span className="text-white text-[10px]">
                            ✔
                          </span>

                        </div>

                        {/* TEXT */}
                        <p className="text-[13px] text-[#e5e5e5] leading-[27px]">
                          {p}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}