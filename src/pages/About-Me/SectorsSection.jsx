const SectorsSection = () => {

  const sectors = [
    "Aerospace & Defence",
    "Automotive",
    "Finance & Banking",
    "Public Sector",
    "Higher Education",
    "EU Innovation Policy",
    "SAP Enterprise",
    "HR Technology",
    "IT Infrastructure",
    "AI & Automation",
  ];

  return (
    <section className="bg-[#050505] py-[60px] md:py-[60px] overflow-hidden relative">

      {/* BG EFFECT */}
      <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-[#b8965a]/10 blur-[100px]"></div>

      <div className="max-w-[1320px] mx-auto px-4 md:px-7 relative z-10">

        {/* TOP */}
        <div className="max-w-[900px] mx-auto text-center mb-12 md:mb-10">

          {/* LABEL */}
          <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
            Sectors Served
          </span>

          {/* TITLE */}
          <h2 className="title-font text-[28px] sm:text-[32px] leading-[1.05] text-white mt-4 mb-6">
            Industries & Domains
          </h2>

          {/* TEXT */}
          <p className="text-white/65 text-[15px] md:text-[16px] leading-[30px] md:leading-[35px]">
            Cross-industry experience spanning enterprise
            technology, policy and academia.
          </p>

        </div>

        {/* SECTORS */}
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-4">

          {sectors.map((item, index) => (
            <div
              key={index}
              className="group min-h-[56px] md:h-[58px] px-4 md:px-7 rounded-full border border-white/10 bg-white/[0.04] hover:bg-[#b8965a] transition-all duration-500 flex items-center justify-center md:justify-start gap-2.5 md:gap-3"
            >

              {/* ICON */}
              <span className="min-w-[20px] w-[20px] h-[20px] rounded-full bg-[#b8965a] flex items-center justify-center text-white text-[10px]">
                ✔
              </span>

              {/* TEXT */}
              <span className="text-white text-[13px] sm:text-[14px] md:text-[16px] text-center md:text-left font-medium leading-[20px] transition-all duration-500">
                {item}
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default SectorsSection;