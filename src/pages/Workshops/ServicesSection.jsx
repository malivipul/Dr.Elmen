import { Link } from "react-router-dom";

const ServicesSection = () => {

  const services = [
    {
      title: "Interim Management Services",
      slug: "/workshops-details/ai-strategy-workshop-for-hr",
      img: "/assets/images/unrecognizable-businesspeople-studying-statistics-holding-papers-with-hands.jpg",
      number: "01",
      points: [
        "Executive advisory and decision-making support.",
        "Operational leadership and stabilisation.",
        "Transformation program leadership.",
        "Stakeholder alignment and performance management.",
      ],
    },

    {
      title: "AI Strategy Workshop for HR",
      slug: "/workshops-details/ai-strategy-workshop-for-hr",
      img: "/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg",
      number: "02",
      points: [
        "Overview of AI in HR including trends, opportunities, and risks.",
        "Identification and prioritisation of high-impact AI use cases.",
        "Evaluation of ROI, feasibility, and business impact.",
        "Definition of implementation roadmap and governance model.",
      ],
    },

    {
      title: "Process Modelling & Workload Automation",
      slug: "/workshops-details/ai-strategy-workshop-for-hr",
      img: "/assets/images/close-up-data-center-programmers-using-pc-visualize-ai-neural-networks (1).jpg",
      number: "03",
      points: [
        "Automic Automation (UC4), BMC Control-M, IWS & SAP ERP workflow automation.",
        "Workload automation and orchestration.",
        "SAP integration and batch processing.",
        "AI-driven intelligent workflows.",
      ],
    },

    {
      title: "Digital Transformation Workshop",
      slug: "/workshops-details/ai-strategy-workshop-for-hr",
      img: "/assets/images/man-interacting-with-virtual-interface-modern-workspace.jpg",
      number: "04",
      points: [
        "Analysis of current HR processes and digital maturity.",
        "Identification of digital transformation opportunities.",
        "Evaluation of business impact and efficiency.",
        "Development of roadmap and implementation strategy.",
      ],
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-[60px]">

      {/* TOP */}
      <div className="max-w-[1100px] mx-auto px-[20px] md:px-[60px] text-center mb-10">

        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          Services
        </span>

        <h2 className="title-font text-2xl md:text-[36px] text-black mt-3 mb-3">
          Workshops & Consulting
        </h2>

        <p className="text-[#0a3e40] text-[16px] max-w-2xl mx-auto leading-relaxed">
          From strategic advisory to hands-on implementation —
          I deliver across the full transformation lifecycle.
        </p>

      </div>

   {/* SERVICES */}
<div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] space-y-6">

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
      className="block bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
    >

      <div className={`grid md:grid-cols-2 items-stretch ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>

        {/* IMAGE */}
        <div className="relative">

          <img
            src={service.img}
            className="w-full h-full min-h-[240px] md:min-h-[260px] object-cover"
            alt=""
          />

        </div>

        {/* CONTENT */}
        <div className="relative p-6 md:p-8 flex flex-col justify-center">

          {/* NUMBER */}
          <div className="absolute top-5 right-5 w-[42px] h-[42px] rounded-[12px] bg-[#0a3e40] border border-white/20 shadow-lg flex items-center justify-center">

            <span className="text-white text-[13px] font-semibold">
              {service.number}
            </span>

          </div>

          {/* TITLE */}
          <h3 className="title-font text-[24px] md:text-[30px] leading-tight text-black mb-5 pr-[70px]">
            {service.title}
          </h3>

          {/* POINTS */}
          <div className="space-y-3 text-[16px] text-[#0a3e40] leading-relaxed">

            {service.points.map((p, i) => (

              <div
                key={i}
                className="flex items-start gap-3"
              >

                <span className="text-[#b8965a] mt-[2px] text-[14px]">
                  ✔
                </span>

                <p>
                  {p}
                </p>

              </div>

            ))}

          </div>

          {/* BUTTON */}
          <div className="mt-6">

             <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 font-bold py-3 rounded-full bg-[#b8965a] text-white text-sm  border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300"
                >
                  Learn More

                  <i className="fa-solid fa-arrow-right text-[12px]"></i>

                </Link>
          </div>

        </div>

      </div>

    </Link>

  ))}

</div>

     

    </section>
  );
};

export default ServicesSection;