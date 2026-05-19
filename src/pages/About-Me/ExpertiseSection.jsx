import {
  FaRobot,
  FaUsers,
  FaCogs,
  FaBullseye,
  FaGraduationCap,
} from "react-icons/fa";

const ExpertiseSection = () => {

  const expertise = [
    {
      icon: FaBullseye,
      title: "Interim Management",
      text: "I take on interim management roles, filling critical leadership positions during periods of transformation, growth, or transition.",
    },

    {
      icon: FaCogs,
      title: "Business Process & IT-Management",
      text: "I design and optimise business process models and workload automation solutions using Automic Automation (UC4), BMC Control-M, IBM IWS, and SAP ERP.",
    },

    {
      icon: FaRobot,
      title: "AI, HR & Digital Transformation",
      text: "I support organisations in leveraging AI, modernising HR, and accelerating digital transformation to create sustainable competitive advantage.",
    },

    {
      icon: FaGraduationCap,
      title: "Academic Teaching & Research",
      text: "I combine academic teaching experience with real-world business expertise to train organisations and teams in AI, HR, and digital transformation.",
    },

    {
      icon: FaUsers,
      title: "Keynote Expertise",
      text: "I provide engaging keynote expertise on AI, HR, and digital transformation, while helping promote your event through my social media reach and professional network.",
    },
  ];

  return (
    <section className="bg-[#f4f4f4] pb-[60px] md:pb-[60px]">

      <div className="max-w-[1320px] mx-auto px-4 md:px-7">

        {/* TOP */}
        <div className="max-w-[850px] mx-auto text-center mb-12 md:mb-10">

          {/* LABEL */}
          <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
            Areas of Expertise
          </span>

          {/* TITLE */}
          <h2 className="title-font text-[28px] sm:text-[32px] md:text-[36px] leading-[1.05] text-black mt-4 mb-5">
            Where I Create Value
          </h2>

          {/* TEXT */}
          <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[34px]">
            Six core disciplines at the intersection of technology, people and
organisational change to “Five core disciplines at the intersection of technology, people
and organisational change
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5">

          {expertise.map((item, index) => (
            <div
              key={index}
              className={`
                group
                bg-white
                rounded-[24px]
                p-5
                border
                border-[#ece6dc]
                hover:border-[#d4b17d]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]

                ${
                  index < 3
                    ? "xl:col-span-2"
                    : index === 3
                    ? "xl:col-start-2 xl:col-span-2"
                    : "xl:col-span-2"
                }
              `}
            >

              {/* ICON */}
              <div className="w-[52px] h-[52px] rounded-[16px] bg-[#faf6ef] flex items-center justify-center text-[#b8965a] text-[22px] mb-4 transition-all duration-500 group-hover:bg-[#b8965a] group-hover:text-white">

                <item.icon />

              </div>

              {/* TITLE */}
              <h3 className="title-font text-[18px] md:text-[20px] leading-[1.3] text-black mb-3">
                {item.title}
              </h3>

              {/* TEXT */}
              <p className="text-[#0a3e40] text-[14px] md:text-[15px] leading-[28px]">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ExpertiseSection;