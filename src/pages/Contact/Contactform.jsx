// ContactForm.jsx
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] py-[60px] md:py-[60px]">

      {/* BG EFFECT */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-[#b8965a]/10 blur-[120px]"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full bg-[#0a3e40]/5 blur-[120px]"></div>
      </div>

      <div className="relative max-w-[1320px] mx-auto px-4 md:px-7">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-[34px] p-6 md:p-9 border border-[#ece6dc] shadow-[0_15px_45px_rgba(0,0,0,0.04)]">

            {/* TOP */}
            <div className="mb-8">

              <span className="text-[#b8965a] uppercase tracking-[3px] text-[12px] font-medium">
                Contact
              </span>

              <h2 className="title-font text-[26px] md:text-[38px] leading-[1.05] text-black mt-3 mb-4">
                Let’s Start a
                <br />
                Conversation
              </h2>

              <p className="text-[16px] text-[#0a3e40] leading-[32px] max-w-[540px]">
                Whether it’s workshops, consulting, speaking engagements,
                or strategic collaborations — let’s connect and create
                meaningful impact together.
              </p>

            </div>

            {/* FORM */}
            <form className="space-y-5">

              {/* NAME */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-[62px] rounded-[18px] border border-[#ece6dc] bg-[#faf8f4] px-5 text-[15px] text-black placeholder:text-[#6e6e6e] outline-none focus:border-[#b8965a] transition-all duration-300"
                />
              </div>

              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[62px] rounded-[18px] border border-[#ece6dc] bg-[#faf8f4] px-5 text-[15px] text-black placeholder:text-[#6e6e6e] outline-none focus:border-[#b8965a] transition-all duration-300"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full h-[62px] rounded-[18px] border border-[#ece6dc] bg-[#faf8f4] px-5 text-[15px] text-black placeholder:text-[#6e6e6e] outline-none focus:border-[#b8965a] transition-all duration-300"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full rounded-[24px] border border-[#ece6dc] bg-[#faf8f4] px-5 py-5 text-[15px] text-black placeholder:text-[#6e6e6e] outline-none resize-none focus:border-[#b8965a] transition-all duration-300"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="inline-flex items-center justify-center h-[58px] px-9 rounded-full bg-[#111111] hover:bg-[#b8965a] text-white text-[15px] font-medium tracking-[1px] transition-all duration-500"
              >
                Send Message →
              </button>

            </form>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative overflow-hidden rounded-[34px] bg-[#0a3e40] p-6 md:p-9 min-h-[720px] flex flex-col justify-between">
            {/* BG TEXT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              <div className="text-center text-[45px] md:text-[70px] font-bold text-white/5 leading-none select-none">
                Dr. Raphael Edlmann
              </div>

            </div>
            {/* TOP CONTENT */}
            <div className="relative z-10 max-w-[500px]">

              <span className="text-[#b8965a] uppercase tracking-[3px] text-[12px] font-medium">
                Get In Touch
              </span>

              <h3 className="title-font text-[26px] md:text-[38px] text-white leading-[1.02] mt-4 mb-5">
                Let’s Build
                <br />
                Something Great
              </h3>

              <p className="text-[14px] md:text-[16px] text-white/75 leading-[33px]">
                I collaborate with organizations, leaders, and teams to
                create impactful workshops, speaking sessions, and
                transformation initiatives that drive meaningful results.
              </p>

            </div>

            {/* SOCIAL BOXES */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">

              {/* SOCIAL BOX 1 */}
              <a
                href="#"
                className="group relative overflow-hidden rounded-[36px] bg-white/10 backdrop-blur-xl border border-white/10 p-7 min-h-[240px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
              >

                {/* ICON */}
                <div className="w-[66px] h-[66px] rounded-full bg-white/70 flex items-center justify-center text-[#0a3e40] text-[38px] font-semibold transition-all duration-500 group-hover:scale-110">
                  ✦
                </div>

                {/* CONTENT */}
                <div>

                  <p className="text-white text-[22px] font-semibold mb-3">
                    Follow & Connect
                  </p>


                  <div className="flex items-center gap-2.5 mt-2">

                    {/* INSTAGRAM */}
                    <a
                      href="#"
                      className="w-[32px] h-[32px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 text-[13px] hover:bg-[#b8965a] hover:text-white transition-all duration-300"
                    >
                      <FaInstagram />
                    </a>

                    {/* FACEBOOK */}
                    <a
                      href="#"
                      className="w-[32px] h-[32px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 text-[13px] hover:bg-[#b8965a] hover:text-white transition-all duration-300"
                    >
                      <FaFacebookF />
                    </a>

                    
                  </div>
                </div>

              </a>

              {/* SOCIAL BOX 2 */}
              <a
                href="#"
                className="group relative overflow-hidden rounded-[36px] bg-white/10 backdrop-blur-xl border border-white/10 p-7 min-h-[240px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:bg-white/15"
              >

                {/* ICON */}
                <div className="w-[66px] h-[66px] rounded-full bg-white/70 flex items-center justify-center text-[#0a3e40] text-[38px] font-semibold transition-all duration-500 group-hover:scale-110">
                  ↗
                </div>

                {/* CONTENT */}
                <div>

                  <p className="text-white text-[22px] font-semibold mb-3">
                    Professional Network
                  </p>

                  <div className="flex items-center gap-2.5 mt-2">

                    {/* LINKEDIN */}
                    <a
                      href="#"
                      className="w-[32px] h-[32px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 text-[13px] hover:bg-[#b8965a] hover:text-white transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </a>

                    {/* X / TWITTER */}
                    <a
                      href="#"
                      className="w-[32px] h-[32px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 text-[13px] hover:bg-[#b8965a] hover:text-white transition-all duration-300"
                    >
                      <FaXTwitter />
                    </a>

                  </div>

                </div>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactForm;