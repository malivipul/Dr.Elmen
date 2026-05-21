import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-white py-[60px]">

      <div className="max-w-[1350px] mx-auto px-[20px] md:px-[40px]">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-[40%_60%] gap-10 items-center">

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
              <div className="w-full lg:w-[40%] flex flex-col items-center">

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
                    className="w-full text-center px-5 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition"
                  >
                    Contact Me
                  </Link>

                  {/* DOWNLOAD CV */}
                  <Link
                    to="/assets/images/Professional_CV_English-protected.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300"
                  >

                    <i className="fa-solid fa-download"></i>

                    Download CV

                  </Link>



                </div>

              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full lg:w-[60%]">

                <span className="text-[#b8965a] text-[11px] tracking-[3px] uppercase mb-5 block">
                  Vita
                </span>

                {/* INFO CARDS */}
                <div className="grid grid-cols-1 gap-5">

                  {/* ITEM */}
                  <div className="flex items-start gap-4 pb-5 border-b border-[#ddd5ca]">

                    {/* LEFT LINE */}
                    <div className="w-[2px] h-[70px] bg-[#b8965a] rounded-full"></div>

                    {/* CONTENT */}
                    <div>

                      <h4 className="text-[#b8965a] text-[15px] md:text-[15px] font-semibold leading-none mb-3">
                        Entrepreneur
                      </h4>

                      <p className="text-[#0a3e40] text-[13px] md:text-[15px] leading-relaxed">
                        Building ventures, and turning ideas into sustainable growth
                      </p>

                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-4 pb-5 border-b border-[#ddd5ca]">

                    <div className="w-[2px] h-[70px] bg-[#b8965a] rounded-full"></div>

                    <div>

                      <h4 className="text-[#b8965a] text-[15px] md:text-[15px] font-semibold leading-none mb-3">
                        HR, AI &amp; Business Process Expert
                      </h4>

                      <p className="text-[#0a3e40] text-[13px] md:text-[15px] leading-relaxed">
                        Specialised in AI-driven HR transformation and Workload Automation
                      </p>

                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-4 pb-5 border-b border-[#ddd5ca]">

                    <div className="w-[2px] h-[70px] bg-[#b8965a] rounded-full"></div>

                    <div>

                      <h4 className="text-[#b8965a] text-[15px] md:text-[15px] font-semibold leading-none mb-3">
                        Doctor of Business Administration (DBA)
                      </h4>

                      <p className="text-[#0a3e40] text-[13px] md:text-[15px] leading-relaxed">
                        Heriot Watt University, Edinburgh Business School
                      </p>

                    </div>

                  </div>

                  {/* ITEM */}
                  <div className="flex items-start gap-4 pb-5 border-b border-[#ddd5ca]">

                    <div className="w-[2px] h-[70px] bg-[#b8965a] rounded-full"></div>

                    <div>

                      <h4 className="text-[#b8965a] text-[15px] md:text-[15px] font-semibold leading-none mb-3">
                        Keynote Speaker
                      </h4>

                      <p className="text-[#0a3e40] text-[13px] md:text-[15px] leading-relaxed">
                        Speaking internationally on AI, the future of work, and digital transformation.
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