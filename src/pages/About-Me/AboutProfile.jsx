// AboutSection.jsx

const AboutSection = () => {
  return (
    <>
  
      {/* ========================= */}
      {/* SECTION 02 */}
      {/* ========================= */}

      <section className="bg-[#f4f4f4] py-[60px] md:py-[60px] ">
{/* TOP */}
<div className="max-w-[900px] mx-auto text-center mb-12 flex flex-col items-center px-4 md:px-0">

  {/* LABEL */}
  <span className="text-[#b8965a] uppercase tracking-[3px] text-[11px] font-medium">
    About Me
  </span>

  {/* TITLE */}
  <h2 className="title-font text-2xl md:text-[36px] leading-[1.02] text-black mt-3 mb-5 text-center">
    Interim Manager for
   
    AI, HR & Business
    <br />
    Transformation
  </h2>

  {/* TEXT */}
  <p className="text-[16px] text-[#0a3e40] leading-[33px] text-center max-w-[760px]">
    Shaping digital transformation and AI with integrity, clarity,
    and a long-term vision.
  </p>

</div>
        <div className="max-w-[1320px] mx-auto px-4 md:px-7">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">

            {/* IMAGE SIDE */}
            <div className="relative overflow-hidden rounded-[34px] min-h-[550px]">

              <img
                src="/assets/images/2026_03_17_Raphael_Edlmann_About Me.jpg"
                alt="About"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* FLOAT BOX */}
              <div className="absolute bottom-6 left-6 bg-white rounded-[24px] p-5 max-w-[310px] shadow-[0_15px_35px_rgba(0,0,0,0.08)]">

                <span className="text-[#b8965a] uppercase tracking-[2px] text-[11px] font-medium">
                  Interim Manager
                </span>

                <h4 className="title-font text-[22px] text-black leading-[1.2] mt-2 mb-3">
                  AI & Digital
                  Transformation
                </h4>

                <p className="text-[14px] text-[#0a3e40] leading-[27px]">
                  Driving innovation and process excellence across complex organisations.
                </p>

              </div>

            </div>

            {/* CONTENT SIDE */}
            <div>

              <span className="text-[#b8965a] uppercase tracking-[3px] text-[11px] font-medium">
                What I Do
              </span>

              <h2 className="title-font text-2xl md:text-[36px] leading-[1.02] text-black mt-3 mb-6">
                Building Smarter
                <br />
                Organisations
              </h2>

              <p className="text-[16px] text-[#0a3e40] leading-[33px] mb-8">
                My focus is on transforming the employee life cycle into
                a smarter, AI-enabled system. Through automation,
                process optimisation, and strategic leadership,
                I support organisations in attracting, developing,
                and retaining talent more effectively.
              </p>

              {/* LIST */}
              <div className="space-y-5">

                {[
                  "AI-enabled HR transformation",
                  "Business process automation",
                  "Strategic interim management",
                  "Digital transformation leadership",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

  <span className="text-[#b8965a] text-[20px] mt-[1px]">
    ✔
  </span>

                    <p className="text-[16px] text-[#0a3e40]">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default AboutSection;