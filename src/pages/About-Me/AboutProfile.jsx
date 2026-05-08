import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] py-[60px] md:py-[60px]">

      {/* BG EFFECT */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-[#b8965a]/10 blur-[90px]"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] rounded-full bg-[#0a3e40]/5 blur-[90px]"></div>

      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 md:px-7">

        {/* ===================== */}
        {/* TOP SECTION */}
        {/* ===================== */}

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-12 items-start">

          {/* IMAGE SIDE */}
          <div className="relative flex justify-center lg:justify-start lg:sticky lg:top-[120px]">

            {/* IMAGE WRAPPER */}
            <div className="relative overflow-hidden rounded-[28px] md:rounded-[38px] w-full max-w-[500px] h-[460px] md:h-[580px] group">

              {/* BG SHAPE */}
              <div className="absolute -top-5 -right-5 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full bg-[#b8965a]/15 blur-3xl z-10"></div>

              {/* IMAGE */}
              <img
                src="/assets/images/2026_03_17_Raphael_Edlmann_About Me.jpg"
                alt="About"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"></div>

            </div>

          </div>

          {/* CONTENT SIDE */}
          <div>

            {/* LABEL */}
            <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
              Who I Am
            </span>

            {/* TITLE */}
            <h2 className="title-font text-[28px] sm:text-[32px] md:text-[36px] leading-[1.02] text-black mt-4 mb-5 md:mb-6">
              Building Smarter Organisations
            </h2>

            {/* TEXT */}
            <div className="space-y-4 md:space-y-5">

              {/* INTRO */}
              <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[33px]">
                Welcome — I’m glad you’re here.
              </p>

              {/* MAIN */}
              <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[33px]">
                I am an expert in AI, HR and business process
                transformation, helping organisations turn
                complexity into practical AI-driven solutions
                with real impact.
              </p>

              {/* EXPERIENCE */}
              <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[33px]">
                With over a decade leading softwarenaut GmbH,
                I have managed teams of up to 70 professionals,
                consistently delivering high-performance results
                across Aerospace, Finance, Automotive and
                Public Sector organisations.
              </p>

              {/* RESEARCH */}
              <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[33px]">
                My doctoral research at Heriot-Watt University
                focused on how AI recruitment technology shapes
                organisational trust — bringing academic rigour
                into every engagement and strategic decision.
              </p>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4 md:gap-x-10 md:gap-y-7 mt-8 md:mt-10 pt-7 md:pt-8 border-t border-[#ddd5ca]">

              {/* ITEM */}
              <div className="bg-white md:bg-transparent rounded-[20px] md:rounded-none border border-[#ece6dc] md:border-0 p-4 md:p-0 text-center md:text-left shadow-[0_8px_20px_rgba(0,0,0,0.03)] md:shadow-none">

                <h3 className="text-[#b8965a] text-[28px] md:text-[34px] font-semibold leading-none mb-2">
                  10+
                </h3>

                <p className="text-[#0a3e40] text-[12px] md:text-[14px] leading-[20px] md:leading-[22px]">
                  Years Leadership
                </p>

              </div>

              {/* ITEM */}
              <div className="bg-white md:bg-transparent rounded-[20px] md:rounded-none border border-[#ece6dc] md:border-0 p-4 md:p-0 text-center md:text-left shadow-[0_8px_20px_rgba(0,0,0,0.03)] md:shadow-none">

                <h3 className="text-[#b8965a] text-[28px] md:text-[34px] font-semibold leading-none mb-2">
                  70
                </h3>

                <p className="text-[#0a3e40] text-[12px] md:text-[14px] leading-[20px] md:leading-[22px]">
                  FTEs Managed
                </p>

              </div>

              {/* ITEM */}
              <div className="bg-white md:bg-transparent rounded-[20px] md:rounded-none border border-[#ece6dc] md:border-0 p-4 md:p-0 text-center md:text-left shadow-[0_8px_20px_rgba(0,0,0,0.03)] md:shadow-none">

                <h3 className="text-[#b8965a] text-[28px] md:text-[34px] font-semibold leading-none mb-2">
                  99%
                </h3>

                <p className="text-[#0a3e40] text-[12px] md:text-[14px] leading-[20px] md:leading-[22px]">
                  SLA Compliance
                </p>

              </div>

              {/* ITEM */}
              <div className="bg-white md:bg-transparent rounded-[20px] md:rounded-none border border-[#ece6dc] md:border-0 p-4 md:p-0 text-center md:text-left shadow-[0_8px_20px_rgba(0,0,0,0.03)] md:shadow-none">

                <h3 className="text-[#b8965a] text-[28px] md:text-[34px] font-semibold leading-none mb-2">
                  DBA
                </h3>

                <p className="text-[#0a3e40] text-[12px] md:text-[14px] leading-[20px] md:leading-[22px]">
                  Heriot-Watt University
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;