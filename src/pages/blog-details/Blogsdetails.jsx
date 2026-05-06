import React from "react";

const Blogsdetails = () => {
  return (
    <section className="bg-[#f4f4f4] pb-[90px]">

      {/* HERO IMAGE */}
      <div className="relative w-full overflow-hidden rounded-b-[45px]">

        <img
          src="/assets/images/25.png"
          alt="About Banner"
          className="w-full h-[260px] md:h-[460px] object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

      </div>

      {/* CONTENT AREA */}
      <div className="max-w-[1320px] mx-auto px-[20px] md:px-[40px] mt-[50px] md:mt-[70px]">

        <div className="grid lg:grid-cols-[1fr_360px] gap-14">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            {/* TITLE */}
            <h1 className="title-font text-[34px] md:text-[50px] leading-tight text-black mb-7">
              AI Implementation in HR
            </h1>

            {/* AUTHOR + DATE */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 border-b border-[#ddd] pb-7 mb-10">

              {/* AUTHOR */}
              <div className="flex items-center gap-3 text-[#6b6b6b] text-[15px]">

                <div className="w-10 h-10 rounded-full bg-[#b8965a] text-white flex items-center justify-center shrink-0">
                  <i className="fa-regular fa-user"></i>
                </div>

                <span className="font-medium">
                  Raphael Edlmann
                </span>

              </div>

              {/* DATE */}
              <div className="flex items-center gap-3 text-[#6b6b6b] text-[15px]">

                <div className="w-10 h-10 rounded-full bg-[#b8965a] text-white flex items-center justify-center shrink-0">
                  <i className="fa-regular fa-calendar"></i>
                </div>

                <span className="font-medium">
                  March 18, 2026
                </span>

              </div>

            </div>

            {/* CONTENT */}
            <div className="space-y-7 text-[#0a3e40] text-[16px] md:text-[17px] leading-[1.95]">

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

              <p>
                The future of HR is increasingly connected to data-driven leadership and intelligent systems.
                Organisations that embrace these changes responsibly can unlock sustainable growth and stronger
                workforce engagement.
              </p>

              <p>
                AI is not replacing human leadership — it is enhancing the ability of leaders to make smarter,
                faster, and more impactful decisions.
              </p>

              <p>
                As digital transformation accelerates, HR departments are becoming strategic innovation hubs
                that shape organisational resilience and future success.
              </p>

              <p>
                Ultimately, the integration of AI in HR should always support human potential, creativity,
                and meaningful workplace experiences.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:sticky lg:top-[120px] h-fit text-center lg:text-left">

            {/* CATEGORY */}
            <div className="bg-white rounded-[28px] p-6 md:p-8 mb-7 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">

              <h3 className="title-font text-[24px] md:text-[28px] text-black mb-6 text-center lg:text-left">
                Category
              </h3>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">

                <span className="px-5 py-2 rounded-full bg-[#f5f3ef] text-[#0a3e40] text-sm transition duration-300 hover:bg-[#b8965a] hover:text-white cursor-pointer">
                  Guides
                </span>

                <span className="px-5 py-2 rounded-full bg-[#f5f3ef] text-[#0a3e40] text-sm transition duration-300 hover:bg-[#b8965a] hover:text-white cursor-pointer">
                  HR
                </span>

                <span className="px-5 py-2 rounded-full bg-[#f5f3ef] text-[#0a3e40] text-sm transition duration-300 hover:bg-[#b8965a] hover:text-white cursor-pointer">
                  AI
                </span>

              </div>

            </div>

            {/* TAGS */}
            <div className="bg-white rounded-[28px] p-6 md:p-8 mb-7 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">

              <h3 className="title-font text-[24px] md:text-[28px] text-black mb-6 text-center lg:text-left">
                Tags
              </h3>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3">

                <span className="px-5 py-2 rounded-full border border-[#d8d8d8] text-sm text-[#0a3e40] hover:bg-[#b8965a] hover:text-white transition duration-300 cursor-pointer">
                  Leadership
                </span>

                <span className="px-5 py-2 rounded-full border border-[#d8d8d8] text-sm text-[#0a3e40] hover:bg-[#b8965a] hover:text-white transition duration-300 cursor-pointer">
                  Innovation
                </span>

                <span className="px-5 py-2 rounded-full border border-[#d8d8d8] text-sm text-[#0a3e40] hover:bg-[#b8965a] hover:text-white transition duration-300 cursor-pointer">
                  Strategy
                </span>

                <span className="px-5 py-2 rounded-full border border-[#d8d8d8] text-sm text-[#0a3e40] hover:bg-[#b8965a] hover:text-white transition duration-300 cursor-pointer">
                  Future Work
                </span>

              </div>

            </div>

            {/* RECENT POSTS */}
            <div className="bg-white rounded-[28px] p-6 md:p-8 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">

              <h3 className="title-font text-[24px] md:text-[28px] text-black mb-7 text-center lg:text-left">
                Recent Posts
              </h3>

              {/* POST 1 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 pb-6 border-b border-[#ececec] mb-6 group cursor-pointer">

                <img
                  src="/assets/images/240_F_1942873505_xvkW6maBqx4FrGYE4x6fFX3HXnvBSwoQ (1).jpg"
                  alt=""
                  className="w-[90px] h-[90px] rounded-[18px] object-cover shrink-0"
                />

                <div>

                  <p className="text-[#b8965a] text-xs uppercase tracking-[2px] mb-2">
                    AI & HR
                  </p>

                  <h4 className="text-[17px] leading-[1.5] text-black group-hover:text-[#b8965a] transition">
                    AI Implementation in HR
                  </h4>

                </div>

              </div>

              {/* POST 2 */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group cursor-pointer">

                <img
                  src="/assets/images/people-office-analyzing-checking-finance-graphs.jpg"
                  alt=""
                  className="w-[90px] h-[90px] rounded-[18px] object-cover shrink-0"
                />

                <div>

                  <p className="text-[#b8965a] text-xs uppercase tracking-[2px] mb-2">
                    Leadership
                  </p>

                  <h4 className="text-[17px] leading-[1.5] text-black group-hover:text-[#b8965a] transition">
                    Future of AI in Business
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Blogsdetails;