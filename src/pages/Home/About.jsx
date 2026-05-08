import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-white py-[60px]">

      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[40px]">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* LABEL */}
            <span className="text-[#b8965a] text-xs tracking-[2px] uppercase mb-4 block">
              About Me
            </span>

            {/* TITLE */}
            <h2 className="title-font text-2xl md:text-[36px] text-black leading-tight mb-5">
              Interim Manager for AI, HR and Business Process Transformation
            </h2>

            {/* TEXT */}
            <div className="space-y-5">

              <p className="text-[#0a3e40] text-[16px] leading-relaxed font-semibold italic">
                "Shaping digital transformation and AI with integrity, clarity and a long-term vision."
              </p>

              <p className="text-[#0a3e40] text-[16px] leading-relaxed">
                Welcome — I’m glad you’re here.
              </p>

              <p className="text-[#0a3e40] text-[16px] leading-relaxed">
                I am an expert in AI, HR and business process transformation, and a recognised speaker at international conferences and public forums. As an interim manager, I help organisations translate complexity into practical, AI-driven solutions with real impact.
              </p>

              <p className="text-[#0a3e40] text-[16px] leading-relaxed">
                On this website, you will find everything you need to know about my work, upcoming engagements and publications. In my blog “HR & AI Insights,” I share current perspectives and insights on AI and HR. Feel free to subscribe to my newsletter, connect with me on social media, or explore collaboration opportunities. I look forward to hearing from you.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#f5f3ef] rounded-[22px] p-6 md:p-8 border border-[#e6dfd5] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">

            {/* TOP */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

              {/* LEFT SIDE */}
              <div className="flex flex-col items-center">

                {/* IMAGE */}
                <div className="w-[250px] h-[330px] rounded-[20px] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
                  <img
                    src="/assets/images/2026_03_17_Raphael_Edlmann_About Me.jpg"
                    className="w-full h-full object-cover"
                    alt="profile"
                  />
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col gap-3 mt-6 w-full">

                  <Link
                    to="/contact"
                    className="w-full text-center px-5 py-3 rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition"
                  >
                    Contact Me
                  </Link>

                  <Link
                    to="/assets/images/Professional_CV_English.pdf"
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition"
                  >
                    <i className="fa-solid fa-download"></i>

                    Download CV
                  </Link>

                </div>

              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 w-full">

                <span className="text-[#b8965a] text-[11px] tracking-[3px] uppercase mb-2 block">
                  Vita
                </span>

                <h3 className="title-font text-[24px] md:text-[28px] text-black mb-7 leading-tight">
                  Impactful Leadership
                </h3>

                {/* INFO CARDS */}
                <div className="grid grid-cols-2 md:grid-cols-1 gap-5 mt-8">

                  {/* ITEM */}
                  <div className="flex items-start gap-3 pb-4 md:pb-6 border-b border-[#ddd5ca]">

                    {/* LEFT LINE */}
                    <div className="w-[2px] h-[45px] bg-[#b8965a] rounded-full"></div>

                    {/* CONTENT */}
                    <div>
                      <h4 className="text-[#b8965a] text-[18px] md:text-[20px] font-semibold leading-none mb-2 md:mb-3">
                        B.Sc.
                      </h4>

                      <p className="text-[#0a3e40] text-[14px] md:text-[16px] tracking-[0.3px]">
                        Technical University of Munich
                      </p>
                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-3 pb-4 md:pb-6 border-b border-[#ddd5ca]">

                    <div className="w-[2px] h-[45px] bg-[#b8965a] rounded-full"></div>

                    <div>
                      <h4 className="text-[#b8965a] text-[18px] md:text-[20px] font-semibold leading-none mb-2 md:mb-3">
                        M.Sc.
                      </h4>

                      <p className="text-[#0a3e40] text-[14px] md:text-[16px] tracking-[0.3px]">
                        FOM University, Munich
                      </p>
                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-3 pb-4 md:pb-6 border-b border-[#ddd5ca]">

                    <div className="w-[2px] h-[45px] bg-[#b8965a] rounded-full"></div>

                    <div>
                      <h4 className="text-[#b8965a] text-[18px] md:text-[20px] font-semibold leading-none mb-2 md:mb-3">
                        DBA
                      </h4>

                      <p className="text-[#0a3e40] text-[14px] md:text-[16px] tracking-[0.3px]">
                        Heriot-Watt University, Edinburgh
                      </p>
                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-3 pb-4 md:pb-0 border-b md:border-b-0 border-[#ddd5ca]">

                    <div className="w-[2px] h-[45px] bg-[#b8965a] rounded-full"></div>

                    <div>
                      <h4 className="text-[#b8965a] text-[18px] md:text-[20px] font-semibold leading-none mb-2 md:mb-3">
                        ASA
                      </h4>

                      <p className="text-[#0a3e40] text-[14px] md:text-[16px] tracking-[0.3px]">
                        Innovation Task Force Expert
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;