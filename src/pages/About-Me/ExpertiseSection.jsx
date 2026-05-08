import {
  FaRobot,
  FaUsers,
  FaCogs,
  FaBullseye,
  FaGraduationCap,
  FaGlobeEurope,
} from "react-icons/fa";

const ExpertiseSection = () => {

  const expertise = [
    {
      icon: FaRobot,
      title: "AI & Digital Transformation",
      text: "Translating AI strategy into operational reality. Helping organisations adopt AI-driven solutions — from HR technology to enterprise automation — with clarity and accountability.",
    },
    {
      icon: FaUsers,
      title: "HR Technology & Analytics",
      text: "Research-backed expertise in AI recruitment technology, predictive HR analytics and workforce transformation. Published in peer-reviewed Springer journals.",
    },
    {
      icon: FaCogs,
      title: "Business Process & IT Management",
      text: "Hands-on delivery in SAP ERP automation, IT infrastructure, workload automation and process orchestration for DAX-listed enterprises across key industries.",
    },
    {
      icon: FaBullseye,
      title: "Interim Management",
      text: "Stepping into leadership roles across IT Build & Operations, Project, Service and Transition Management with teams of 5–15. Consistent 96–99% SLA delivery.",
    },
    {
      icon: FaGraduationCap,
      title: "Academic Teaching & Research",
      text: "Lecturer at Munich University of Applied Sciences. Delivers seminars on digital transformation, AI in e-commerce and business informatics for Bachelor programmes.",
    },
    {
      icon: FaGlobeEurope,
      title: "EU Innovation & Policy",
      text: "Committee expert at the Automotive Skills Alliance, Brussels. Supporting EU research funding proposals in HRM and AI — bridging academia and industry at policy level.",
    },
  ];

  return (
    <section className="bg-[#f4f4f4]] pb-[60px] md:pb-[60px]">

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
            Six core disciplines at the intersection of technology,
            people and organisational change.
          </p>

        </div>

       {/* GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

  {expertise.map((item, index) => (
    <div
      key={index}
      className="group bg-white rounded-[24px] p-5 border border-[#ece6dc] hover:border-[#d4b17d] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]"
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