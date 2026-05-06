const About = () => {
  return (
    <section className="bg-white py-[80px]">

      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px]">

        {/* 🔥 MAIN GRID */}
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
                Shaping digital transformation and AI with integrity, clarity and a long-term vision. Welcome — I’m glad you’re here.
              </p>

              <p className="text-[#0a3e40] text-[16px] leading-relaxed">
                I am an expert in AI, HR and business process transformation, and a recognised speaker at international conferences and public forums. As an interim manager, I help organisations translate complexity into practical, AI-driven solutions with real impact.
              </p>

              <p className="text-[#0a3e40] text-[16px] leading-relaxed">
                On this website, you will find everything you need to know about my work, upcoming engagements and publications. In my blog “HR & AI Insights,” I share current perspectives and insights on AI and HR.
              </p>

              <p className="text-[#0a3e40] text-[16px] leading-relaxed">
                Feel free to subscribe to my newsletter, connect with me on social media, or explore collaboration opportunities. I look forward to hearing from you.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE (IMAGE + BIO CARD) */}
          <div className="bg-[#f5f3ef] rounded-[18px] p-6 md:p-8 border border-[#e6dfd5] shadow-[0_8px_25px_rgba(0,0,0,0.05)]">

  

            {/* BIO */}
            <div className="text-center">

              <span className="text-[#b8965a] text-[11px] tracking-[3px] uppercase mb-2 block">
                vita
              </span>

              <h3 className="title-font text-[22px] md:text-[26px] text-black mb-3">
               Impactful Leadership
              </h3>


 {/* IMAGE */}
            <div className="flex justify-center mb-6">
              <div className="w-[200px] h-[260px] rounded-[16px] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
                <img
                  src="/assets/images/2026_03_17_Raphael_Edlmann_About Me.jpg"
                  className="w-full h-full object-cover"
                  alt="profile"
                />
              </div>
            </div>
            {/* SMALL INFO GRID */}
<div className="flex flex-wrap justify-center gap-8 mb-6 text-center">

  <div>
    <h4 className="text-[#b8965a] font-semibold">B.Sc.</h4>
    <p className="text-sm">TU Munich</p>
  </div>

  <div>
    <h4 className="text-[#b8965a] font-semibold">M.Sc.</h4>
    <p className="text-sm">FOM University</p>
  </div>

  <div>
    <h4 className="text-[#b8965a] font-semibold">Dr.</h4>
    <p className="text-sm">Heriot-Watt</p>
  </div>

  <div>
    <h4 className="text-[#b8965a] font-semibold">ASA</h4>
    <p className="text-sm">Innovation Task</p>
  </div>

</div>
              {/* BUTTONS */}
              <div className="flex flex-wrap justify-center gap-3">

                <a
                  href="#"
                  className="px-5 py-2 rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition"
                >
                  Contact Me
                </a>

                <a
                  href="/assets/files/cv.pdf"
                  download
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition"
                >
                  <i className="fa-solid fa-download"></i>
                  Download CV
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;