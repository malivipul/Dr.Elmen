import React from "react";

const Blogsdetails = () => {
  return (
    <section className="bg-[#f5f3ef] pb-[80px]">

    {/* HERO IMAGE */}
<div className="relative w-full overflow-hidden rounded-b-[40px]">

  <img
    src="/assets/images/25.png"
    alt="About Banner"
    className="w-full h-[340px] md:h-[460px] object-cover md:object-cover object-center"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/35"></div>

</div>
      {/* CONTENT AREA */}
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[40px] mt-[60px]">

        <div className="grid lg:grid-cols-[1fr_320px] gap-14">

          {/* LEFT SIDE */}
          <div>

            {/* TITLE */}
            <h1 className="title-font text-[34px] md:text-[58px] leading-tight text-black mb-7">
              AI Implementation in HR
            </h1>

            {/* AUTHOR + DATE */}
            <div className="flex flex-wrap items-center gap-8 border-b border-[#ddd] pb-6 mb-8">

              <div className="flex items-center gap-3 text-[#6b6b6b] text-[15px]">
                <i className="fa-regular fa-user text-[#b8965a]"></i>
                <span>Raphael Edlmann</span>
              </div>

              <div className="flex items-center gap-3 text-[#6b6b6b] text-[15px]">
                <i className="fa-regular fa-calendar text-[#b8965a]"></i>
                <span>March 18, 2026</span>
              </div>

            </div>

            {/* CONTENT */}
            <div className="space-y-7 text-[#0a3e40] text-[17px] leading-[1.9]">

              <p>
                Artificial Intelligence is transforming the future of human resources and workforce management.
                Organisations worldwide are increasingly integrating AI-driven systems to improve operational
                efficiency, recruitment strategies, and employee experiences.
              </p>

              <p>
                Modern HR leaders are no longer relying solely on traditional methods. Predictive analytics,
                automation, and intelligent decision-making tools now help organisations reduce repetitive tasks
                while enabling more strategic leadership.
              </p>

              <p>
                AI implementation in HR also creates opportunities for more personalised employee development,
                better performance insights, and faster recruitment processes.
              </p>

              <p>
                However, technology alone is not enough. Companies must ensure ethical AI usage, transparent
                communication, and strong leadership throughout digital transformation initiatives.
              </p>

              <p>
                HR professionals should focus on balancing innovation with human-centered values to maintain
                trust and collaboration inside organisations.
              </p>

              <p>
                Successful AI adoption depends on employee readiness, organisational culture, and long-term
                strategic vision. Businesses that invest in both people and technology will remain competitive
                in the evolving digital economy.
              </p>

             

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* CATEGORY */}
            <div className="bg-white rounded-[24px] p-8 mb-7 shadow-sm">

              <h3 className="title-font text-[26px] text-black mb-6">
                Category
              </h3>

              <div className="flex flex-wrap gap-3">

                <span className="px-5 py-2 rounded-full bg-[#f5f3ef] text-[#0a3e40] text-sm">
                  Guides
                </span>

                <span className="px-5 py-2 rounded-full bg-[#f5f3ef] text-[#0a3e40] text-sm">
                  HR
                </span>

                <span className="px-5 py-2 rounded-full bg-[#f5f3ef] text-[#0a3e40] text-sm">
                  AI
                </span>

              </div>

            </div>

            {/* TAGS */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm">

              <h3 className="title-font text-[26px] text-black mb-6">
                Tags
              </h3>

              <div className="flex flex-wrap gap-3">

                <span className="px-5 py-2 rounded-full border border-[#d8d8d8] text-sm text-[#0a3e40]">
                  Leadership
                </span>

                <span className="px-5 py-2 rounded-full border border-[#d8d8d8] text-sm text-[#0a3e40]">
                  Innovation
                </span>

                <span className="px-5 py-2 rounded-full border border-[#d8d8d8] text-sm text-[#0a3e40]">
                  Strategy
                </span>

                <span className="px-5 py-2 rounded-full border border-[#d8d8d8] text-sm text-[#0a3e40]">
                  Future Work
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Blogsdetails;