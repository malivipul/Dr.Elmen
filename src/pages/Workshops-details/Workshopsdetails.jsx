import { useParams, Link } from "react-router-dom";

const workshopDetails = {
  "ai-strategy-workshop-for-hr": {
    title: "AI Strategy Workshop for HR",

    objective:
      "Enable HR leaders to identify, prioritize, and implement high-impact AI use cases that enhance efficiency, decision-making, and employee experience.",

    sections: [
      {
        heading: "Introduction & Strategic Framing",
        points: [
          "Overview of AI in HR (trends, opportunities, risks)",
          "Alignment with business and HR strategy",
          "Key success factors and governance considerations",
        ],
      },

      {
        heading: "Use Case Identification",
        points: [
          "Mapping HR processes (e.g., recruiting, talent development, workforce planning)",
          "Identifying AI-driven optimization potential",
          "Benchmarking best practices and industry examples",
        ],
      },

      {
        heading: "Prioritization & Business Impact",
        points: [
          "Evaluating use cases based on value, feasibility, and risk",
          "Defining quick wins vs. strategic initiatives",
          "Estimating ROI and efficiency gains",
        ],
      },

      {
        heading: "Technology Advisory",
        points: [
          "Evaluation of suitable AI tools, platforms, and vendors",
          "Integration into existing HR systems and IT landscape",
          "Build vs. buy vs. partner decisions",
          "Definition of implementation architecture and delivery approach (e.g., agile, pilot-based)",
        ],
      },
    ],

    outcomes: [
      "Clear AI strategy for HR aligned with business objectives",
      "Prioritized portfolio of AI use cases with defined business impact",
      "Quantified efficiency gains and cost-saving potential",
      "Customized technology approach and implementation",
      "Established governance and foundation for sustainable AI adoption",
    ],

    note:
      "Depending on the scope, a tailored team of experts can be provided to support both consulting and technology implementation, working in a vendor-independent manner to ensure objective solution design, efficient delivery, and sustainable outcomes.",
  },
};

export default function WorkshopDetailsPage() {
  const { slug } = useParams();

  const workshop = workshopDetails[slug];

  if (!workshop) {
    return (
      <div className="py-32 text-center text-2xl">
        Workshop Not Found
      </div>
    );
  }

  return (
    <section className="bg-[#f4f4f4] min-h-screen py-10 md:py-14">

      <div className="max-w-[1320px] mx-auto px-4 md:px-7">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-7 items-start">

          {/* LEFT CONTENT */}
          <div>

            {/* MAIN BOX */}
            <div className="bg-white rounded-[30px] p-5 md:p-8 border border-[#ece6dc] shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">

              {/* BG EFFECT */}
              <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-[#d4b17d]/10 rounded-full blur-[80px]"></div>

              {/* TITLE */}
              <h1 className="title-font text-[30px] md:text-[36px] leading-[1.15] text-black mb-5 relative z-10">
                {workshop.title}
              </h1>

              {/* OBJECTIVE */}
              <div className="mb-8 relative z-10">

                <h2 className="title-font text-[22px] md:text-[26px] mb-4 text-black">
                  Objective
                </h2>

                <p className="text-[16px] text-[#0a3e40] leading-[30px]">
                  {workshop.objective}
                </p>

              </div>

              {/* WORKSHOP STRUCTURE */}
              <div className="relative z-10">

                <h2 className="title-font text-[22px] md:text-[26px] mb-5 text-black">
                  Workshop Structure
                </h2>

                {/* CARDS */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

                  {workshop.sections.map((section, index) => (
                    <div
                      key={index}
                      className="group bg-[#faf8f4] hover:bg-white rounded-[24px] p-5 border border-[#ece6dc] hover:border-[#d4b17d] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
                    >

                      {/* HEADING */}
                      <div className="flex items-start gap-3 mb-5">

                        <div className="min-w-[36px] h-[36px] rounded-full bg-[#b8965a] text-white flex items-center justify-center text-[12px] font-semibold">
                          {index + 1}
                        </div>

                        <h3 className="title-font !font-['Inter',sans-serif] text-[24px] leading-[1.35] text-black">
                          {section.heading}
                        </h3>

                      </div>

                      {/* POINTS */}
                      <div className="space-y-3">

                        {section.points.map((point, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3"
                          >

                            {/* ICON */}
                            <span className="text-[#b8965a] mt-[4px]">
                              ✔
                            </span>

                            <p className="text-[16px] text-[#0a3e40] leading-[29px]">
                              {point}
                            </p>

                          </div>
                        ))}

                      </div>

                    </div>
                  ))}

                </div>

              </div>

            </div>

            {/* OUTCOMES + SUPPORT */}
            <div className="mt-7">

              {/* OUTCOMES */}
              <div className="bg-[#050505] rounded-[30px] p-5 md:p-7 relative overflow-hidden mb-7">

                {/* EFFECT */}
                <div className="absolute bottom-[-80px] right-[-80px] w-[180px] h-[180px] bg-[#d4b17d]/10 rounded-full blur-[70px]"></div>

                <h2 className="title-font text-[22px] md:text-[24px] mb-6 text-white relative z-10">
                  Key Outcomes
                </h2>

                {/* OUTCOMES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">

                  {workshop.outcomes.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-white/[0.06] hover:bg-white/[0.10] border border-white/10 hover:border-[#d4b17d]/40 rounded-[22px] px-5 py-5 transition-all duration-500 hover:-translate-y-1"
                    >

                      <div className="flex items-start gap-3">

                        {/* ICON */}
                        <span className="text-[#b8965a] mt-[4px]">
                          ✔
                        </span>

                        <p className="text-[16px] text-[#f5f5f5] leading-[30px]">
                          {item}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </div>

              {/* ADDITIONAL SUPPORT */}
              <div className="group bg-[#faf8f4] hover:bg-white border border-[#d9bb86] rounded-[30px] p-5 md:p-7 relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]">

                <h3 className="title-font text-[22px] md:text-[24px] mb-5 text-black">
                  Additional Support
                </h3>

                <p className="text-[16px] text-[#0a3e40] leading-[34px]">
                  {workshop.note}
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT STICKY BOX */}
          <div className="lg:sticky lg:top-[120px] h-fit">

            <div className="bg-[#e7dfd7] rounded-[22px] p-6 overflow-hidden relative border border-[#ece6dc]">

              {/* EFFECT */}
              <div className="absolute top-[-60px] right-[-60px] w-[150px] h-[150px] bg-[#d4b17d]/10 rounded-full blur-[60px]"></div>

              {/* TITLE */}
              <h3 className="title-font text-[28px] text-black mb-6 relative z-10 leading-[1.3]">
                Workshops & Consulting
              </h3>

              {/* SERVICES */}
              <div className="space-y-4 relative z-10">

                {[
                  "AI Strategy Consulting",
                  "Technology Advisory",
                  "HR Process Optimization",
                  "Implementation Support",
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white hover:bg-[#111111] border border-[#ece6dc] hover:border-[#111111] rounded-[18px] px-5 py-4 transition-all duration-500"
                  >

                    <div className="flex items-center justify-between gap-4">

                      {/* TEXT */}
                      <p className="text-[16px] text-[#111111] group-hover:text-white leading-[28px] transition-all duration-500">
                        {service}
                      </p>

                      {/* ARROW */}
                      <span className="text-[20px] text-[#b8965a] transition-all duration-500 group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}