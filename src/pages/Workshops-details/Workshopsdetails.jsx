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
        heading: "Technology Advisory & Customized Implementation Approach",
        points: [
          "Evaluation of suitable AI tools, platforms, and vendors",
          "Integration into existing HR systems and IT landscape",
          "Build vs. buy vs. partner decisions",
          "Definition of implementation architecture and delivery approach (e.g., agile, pilot-based)",
        ],
      },

      {
        heading: "Solution Design & Roadmap",
        points: [
          "Designing target processes with AI integration",
          "Defining data requirements and system landscape",
          "Creating a phased implementation roadmap",
        ],
      },

      {
        heading: "Change & Governance",
        points: [
          "Addressing ethical, legal, and compliance aspects",
          "Change management and stakeholder engagement",
          "Defining roles, responsibilities, and operating model",
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
<section className="bg-[#f4f4f4] min-h-screen py-8 md:py-10">

  <div className="max-w-[1320px] mx-auto px-4 md:px-7">

    {/* FULL WIDTH */}
    <div className="bg-white rounded-[30px] p-5 md:p-8 border border-[#ece6dc] shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">

      {/* BG EFFECT */}
      <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-[#d4b17d]/10 rounded-full blur-[80px]"></div>

      {/* TITLE */}
      <h1 className="title-font text-[30px] md:text-[42px] leading-[1.15] text-black mb-5 max-w-4xl relative z-10">
        {workshop.title}
      </h1>

      {/* OBJECTIVE */}
      <div className="mb-7 relative z-10">

        <h2 className="title-font text-xl md:text-2xl mb-4 text-black">
          Objective
        </h2>

        <p className="text-[16px] text-[#0a3e40] leading-[29px] relative z-10">
          {workshop.objective}
        </p>

      </div>

      {/* STRUCTURE */}
      <div className="mb-8 relative z-10">

        <h2 className="title-font text-xl md:text-2xl mb-4 text-black">
          Workshop Structure
        </h2>

        {/* 2 CARDS IN 1 ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {workshop.sections.map((section, index) => (
            <div
              key={index}
              className="group bg-[#faf8f4] hover:bg-white rounded-[22px] p-4 md:p-5 border border-[#ece6dc] hover:border-[#d4b17d] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)]"
            >

              {/* HEADING */}
              <div className="flex items-start gap-3 mb-4 relative z-10">

                <div className="min-w-[34px] h-[34px] rounded-full bg-[#b8965a] text-white flex items-center justify-center text-[11px] font-semibold transition-all duration-500 group-hover:scale-110">
                  {index + 1}
                </div>

                <h3 className="title-font text-xl md:text-2xl mb-1 text-black leading-[1.3]">
                  {section.heading}
                </h3>

              </div>

              {/* POINTS */}
              <div className="space-y-2.5">

                {section.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5"
                  >

                    {/* SIMPLE BULLET */}
                    <span className="text-[#0a3e40] text-[15px] leading-[28px] mt-[1px] transition-all duration-300 group-hover:text-[#b8965a]">
                      ✓
                    </span>

                    <p className="text-[16px] text-[#0a3e40] leading-[28px] relative z-10">
                      {point}
                    </p>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* OUTCOMES */}
      <div className="bg-[#111111] rounded-[26px] p-5 md:p-6 relative overflow-hidden mb-6">

        <div className="absolute bottom-[-80px] right-[-80px] w-[180px] h-[180px] bg-[#d4b17d]/10 rounded-full blur-[70px]"></div>

        <h2 className="title-font text-xl md:text-2xl mb-5 text-white relative z-10">
          Key Outcomes
        </h2>

        {/* 2 CARDS IN 1 ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">

          {workshop.outcomes.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#d4b17d]/40 rounded-[18px] p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)]"
            >

              <div className="flex items-start gap-2.5">

                {/* SIMPLE BULLET */}
                <span className="text-[#d4b17d] text-[15px] leading-[28px] mt-[1px] transition-all duration-300 group-hover:scale-110">
                  ✓
                </span>

                <p className="text-[16px] text-[#f1f1f1] leading-[28px] relative z-10">
                  {item}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* NOTE */}
      <div className="group bg-[#faf8f4] hover:bg-white border border-[#ece6dc] hover:border-[#d4b17d] rounded-[24px] p-4 md:p-5 relative z-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]">

        <h3 className="title-font text-xl md:text-2xl mb-4 text-black">
          Additional Support
        </h3>

        <p className="text-[16px] text-[#0a3e40] leading-[29px] relative z-10">
          {workshop.note}
        </p>

      </div>

    </div>

  </div>

</section>
  );
}