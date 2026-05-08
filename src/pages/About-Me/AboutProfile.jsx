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

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-12 items-center">

          {/* IMAGE SIDE */}
          <div className="relative flex justify-center lg:justify-start">

            {/* IMAGE WRAPPER */}
            <div className="relative overflow-hidden rounded-[28px] md:rounded-[38px] w-full max-w-[520px] h-[500px] md:h-[620px] group">

              {/* BG SHAPE */}
              <div className="absolute -top-6 -right-6 w-[120px] md:w-[140px] h-[120px] md:h-[140px] rounded-full bg-[#b8965a]/15 blur-3xl z-10"></div>

              {/* IMAGE */}
              <img
                src="/assets/images/2026_03_17_Raphael_Edlmann_About Me.jpg"
                alt="About"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>

              {/* FLOAT CARD */}
              <div className="absolute bottom-4 md:bottom-5 left-4 md:left-5 right-4 md:right-5 bg-white/95 backdrop-blur-xl rounded-[22px] md:rounded-[26px] p-4 md:p-5 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">

                <span className="text-[#b8965a] uppercase tracking-[2px] text-[9px] md:text-[10px] font-medium">
                  Dr. Raphael Edlmann, DBA
                </span>

                <h3 className="title-font text-[20px] md:text-[22px] text-black leading-[1.15] mt-2 mb-3">
                  AI, HR & Business
                  Transformation
                </h3>

                <p className="text-[13px] md:text-[14px] text-[#0a3e40] leading-[24px] md:leading-[26px]">
                  Interim Manager · Speaker · Researcher
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3 mt-5">

                  <Link
                    to="/contact"
                    className="flex-1 text-center px-5 py-3 rounded-full bg-[#b8965a] text-white text-[13px] md:text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition"
                  >
                    Contact Me
                  </Link>

                  <Link
                    to="/assets/images/Professional_CV_English.pdf"
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#b8965a] text-white text-[13px] md:text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition"
                  >
                    <i className="fa-solid fa-download"></i>

                    Download CV
                  </Link>

                </div>

              </div>

            </div>

          </div>

          {/* CONTENT SIDE */}
          <div>

            {/* LABEL */}
            <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
              About Me
            </span>

            {/* TITLE */}
            <h2 className="title-font text-[28px] sm:text-[32px] md:text-[36px] leading-[1.02] text-black mt-4 mb-5 md:mb-6">
              Interim Manager for
            
              AI, HR & Business
              <br />
              Transformation
            </h2>

            {/* TEXT */}
            <div className="space-y-4 md:space-y-5">

              <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[34px] font-semibold italic">
                “Shaping digital transformation and AI with integrity,
                clarity and a long-term vision.”
              </p>

              <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[33px]">
                Welcome — I’m glad you’re here.
              </p>

              <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[33px]">
                I am an expert in AI, HR and business process
                transformation, and a recognised speaker at
                international conferences and public forums.
              </p>

              <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[33px]">
                With over a decade leading softwarenaut GmbH —
                a Munich-based technology firm serving DAX-listed
                clients across Aerospace & Defence, Finance,
                Automotive and the Public Sector.
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

        {/* ===================== */}
        {/* BOTTOM SECTION */}
        {/* ===================== */}

        <div className="relative mt-15 md:mt-15 overflow-hidden rounded-[28px] md:rounded-[38px] bg-white border border-[#ece6dc] p-5 sm:p-6 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)]">

          {/* BG EFFECT */}
          <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-[#b8965a]/10 blur-[90px] pointer-events-none"></div>

          {/* TOP */}
          <div className="relative z-10 max-w-[850px] mx-auto text-center">

            {/* LABEL */}
            <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
              What I Focus On
            </span>

            {/* TITLE */}
            <h2 className="title-font text-[28px] sm:text-[32px] md:text-[36px] leading-[1.05] text-black mt-4 mb-5 md:mb-6">
              Building Smarter
              Organisations
            </h2>

            {/* TEXT */}
            <p className="text-[#0a3e40] text-[15px] md:text-[16px] leading-[30px] md:leading-[33px]">
              My doctoral research at Heriot-Watt University's
              Edinburgh Business School examined how AI recruitment
              technology shapes organisational trust.
            </p>

          </div>

          {/* FOCUS GRID */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-10 md:mt-12">

            {[
              "AI-enabled HR transformation",
              "Business process automation",
              "Strategic interim management",
              "Digital transformation leadership",
              "EU research & innovation policy",
              "Academic teaching & research",
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-[20px] md:rounded-[24px] bg-[#faf8f4] border border-[#ece6dc] p-5 md:p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-[#111111]"
              >

                {/* LINE */}
                <div className="flex items-start gap-3">

                  {/* CHECK ICON */}
                  <span className="text-[#b8965a] text-[16px] md:text-[18px] mt-[2px] transition-all duration-500 group-hover:text-white">
                    ✔
                  </span>

                  {/* TEXT */}
                  <h3 className="text-[16px] md:text-[18px] text-black leading-[28px] md:leading-[30px] transition-all duration-500 group-hover:text-white">
                    {item}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutSection;