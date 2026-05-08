import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] py-[40px] md:py-[45px]">

      {/* BG EFFECT */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-[#b8965a]/10 blur-[90px]"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] rounded-full bg-[#0a3e40]/5 blur-[90px]"></div>
      </div>

      <div className="relative max-w-[1180px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-[24px] p-5 md:p-6 border border-[#ece6dc] shadow-[0_8px_24px_rgba(0,0,0,0.03)]">

            {/* TOP */}
            <div className="mb-5">

              <span className="text-[#b8965a] uppercase tracking-[2px] text-[10px] font-medium">
                Contact
              </span>

              <h2 className="title-font text-[22px] md:text-[30px] leading-[1.05] text-black mt-2 mb-3">
                Let’s Start a
                <br />
                Conversation
              </h2>

              <p className="text-[16px] text-[#0a3e40] leading-[24px] max-w-[500px]">
                Whether it’s workshops, consulting, speaking engagements,
                or strategic collaborations — let’s connect and create
                meaningful impact together.
              </p>

            </div>

           {/* FORM */}
<form className="space-y-3">

  {/* NAME */}
  <div>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full h-[48px] rounded-[14px] border border-[#ece6dc] bg-[#faf8f4] px-4 text-[13px] text-black placeholder:text-[#6e6e6e] outline-none focus:border-[#b8965a] transition-all duration-300"
    />
  </div>

  {/* EMAIL */}
  <div>
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
      title="Please enter a valid email address"
      className="w-full h-[48px] rounded-[14px] border border-[#ece6dc] bg-[#faf8f4] px-4 text-[13px] text-black placeholder:text-[#6e6e6e] outline-none focus:border-[#b8965a] transition-all duration-300"
    />
  </div>

  {/* SUBJECT */}
  <div>
    <input
      type="text"
      name="subject"
      placeholder="Subject"
      required
      className="w-full h-[48px] rounded-[14px] border border-[#ece6dc] bg-[#faf8f4] px-4 text-[13px] text-black placeholder:text-[#6e6e6e] outline-none focus:border-[#b8965a] transition-all duration-300"
    />
  </div>

  {/* MESSAGE */}
  <div>
    <textarea
      rows="4"
      name="message"
      placeholder="Your Message"
      required
      className="w-full rounded-[18px] border border-[#ece6dc] bg-[#faf8f4] px-4 py-4 text-[13px] text-black placeholder:text-[#6e6e6e] outline-none resize-none focus:border-[#b8965a] transition-all duration-300"
    ></textarea>
  </div>

  {/* BUTTON */}
  <button
    type="submit"
    className="inline-flex items-center justify-center h-[46px] px-7 rounded-full bg-[#111111] hover:bg-[#b8965a] text-white text-[13px] font-medium tracking-[1px] transition-all duration-500"
  >
    Send Message →
  </button>

</form>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#0a3e40] p-5 md:p-6 min-h-[520px] flex flex-col justify-between">

            {/* BG TEXT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              <div className="text-center text-[28px] md:text-[46px] font-bold text-white/5 leading-none select-none">
                Dr. Raphael Edlmann
              </div>

            </div>

            {/* TOP CONTENT */}
            <div className="relative z-10 max-w-[480px]">

              <span className="text-[#b8965a] uppercase tracking-[2px] text-[10px] font-medium">
                Get In Touch
              </span>

              <h3 className="title-font text-[22px] md:text-[30px] text-white leading-[1.02] mt-3 mb-4">
                Let’s Build
                <br />
                Something Great
              </h3>

              <p className="text-[14px] md:text-[16px] text-white/75 leading-[26px]">
                I collaborate with organizations, leaders, and teams to
                create impactful workshops, speaking sessions, and
                transformation initiatives that drive meaningful results.
              </p>

            </div>

            {/* SOCIAL BOXES */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">

              {/* SOCIAL BOX 1 */}
              <Link
                to="#"
                className="group relative overflow-hidden rounded-[22px] bg-white/10 backdrop-blur-xl border border-white/10 p-4 min-h-[160px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:bg-white/15"
              >

                {/* ICON */}
                <div className="w-[48px] h-[48px] rounded-full bg-white/70 flex items-center justify-center text-[#0a3e40] text-[24px] font-semibold transition-all duration-500 group-hover:scale-110">
                  ✦
                </div>

                {/* CONTENT */}
                <div>

                  <p className="text-white text-[16px] font-semibold mb-2">
                    Follow & Connect
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    <Link
                      to="#"
                      className="w-[28px] h-[28px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 text-[11px] hover:bg-[#b8965a] hover:text-white transition-all duration-300"
                    >
                      <FaInstagram />
                    </Link>

                    <Link
                      to="#"
                      className="w-[28px] h-[28px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 text-[11px] hover:bg-[#b8965a] hover:text-white transition-all duration-300"
                    >
                      <FaFacebookF />
                    </Link>

                  </div>

                </div>

              </Link>

              {/* SOCIAL BOX 2 */}
              <Link
                to="#"
                className="group relative overflow-hidden rounded-[22px] bg-white/10 backdrop-blur-xl border border-white/10 p-4 min-h-[160px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:bg-white/15"
              >

                {/* ICON */}
                <div className="w-[48px] h-[48px] rounded-full bg-white/70 flex items-center justify-center text-[#0a3e40] text-[24px] font-semibold transition-all duration-500 group-hover:scale-110">
                  ↗
                </div>

                {/* CONTENT */}
                <div>

                  <p className="text-white text-[16px] font-semibold mb-2">
                    Professional Network
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    <Link
                      to="#"
                      className="w-[28px] h-[28px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 text-[11px] hover:bg-[#b8965a] hover:text-white transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </Link>

                    <Link
                      to="#"
                      className="w-[28px] h-[28px] rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 text-[11px] hover:bg-[#b8965a] hover:text-white transition-all duration-300"
                    >
                      <FaXTwitter />
                    </Link>

                  </div>

                </div>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactForm;