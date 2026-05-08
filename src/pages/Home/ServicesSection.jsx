import { useState } from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {

  const services = [
    {
      title: "AI Strategy Workshop for HR",
      slug: "/workshops-details/ai-strategy-workshop-for-hr",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      number: "01",
      points: [
        "Overview of AI in HR including trends, opportunities, and risks.",
        "Identification and prioritisation of high-impact AI use cases.",
        "Evaluation of ROI, feasibility, and business impact.",
        "Definition of implementation roadmap and governance model.",
      ],
    },

    {
      title: "Digital Transformation Workshop",
      slug: "/workshops-details/ai-strategy-workshop-for-hr",
      img: "/assets/images/man-interacting-with-virtual-interface-modern-workspace.jpg",
      number: "02",
      points: [
        "Analysis of current HR processes and digital maturity.",
        "Identification of digital transformation opportunities.",
        "Evaluation of business impact and efficiency.",
        "Development of roadmap and implementation strategy.",
      ],
    },

    {
      title: "Process Modelling & Automation",
      slug: "/workshops-details/ai-strategy-workshop-for-hr",
      img: "/assets/images/close-up-data-center-programmers-using-pc-visualize-ai-neural-networks (1).jpg",
      number: "03",
      points: [
        "End-to-end modelling of business processes.",
        "Workload automation and orchestration.",
        "SAP integration and batch processing.",
        "AI-driven intelligent workflows.",
      ],
    },

    {
      title: "Interim Management Services",
      slug: "/workshops-details/ai-strategy-workshop-for-hr",
      img: "/assets/images/unrecognizable-businesspeople-studying-statistics-holding-papers-with-hands.jpg",
      number: "04",
      points: [
        "Executive advisory and decision-making support.",
        "Operational leadership and stabilisation.",
        "Transformation program leadership.",
        "Stakeholder alignment and performance management.",
      ],
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-[60px]">

      {/* TOP */}
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] text-center mb-14">

        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          Services
        </span>

        <h2 className="title-font text-3xl md:text-[40px] text-black mt-2 mb-2">
          Workshops & Consulting
        </h2>

        <p className="text-[#0a3e40] text-[16px] max-w-xl mx-auto leading-relaxed">
          From strategic advisory to hands-on implementation — I deliver across the full transformation lifecycle.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[60px] grid md:grid-cols-2 gap-12">

        {services.map((service, index) => (

          <Link
            key={index}
            to={service.slug}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={service.img}
                className="w-full h-[240px] object-cover"
                alt=""
              />

              <span className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-sm rounded-full">
                {service.number}
              </span>

            </div>

            {/* CONTENT */}
            <div className="p-7">

              <h3 className="title-font text-xl md:text-2xl mb-4">
                {service.title}
              </h3>

              <div className="space-y-3 text-[15px] text-[#0a3e40]">

  {service.points.map((p, i) => (

    <div
      key={i}
      className="flex items-start gap-3"
    >

      <span className="text-[#b8965a] mt-[1px]">
        ✔
      </span>

      <p>
        {p}
      </p>

    </div>

  ))}

</div>

              <div className="mt-5">

                <span className="inline-block px-5 py-2 rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition">
                  Learn more →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
};

export default ServicesSection;