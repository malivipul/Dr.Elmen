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

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

      {/* RIGHT SIDE FIRST */}
      <div className="relative overflow-hidden rounded-[28px] bg-[#e7dfd7] border border-black/5 p-5 md:p-7 h-fit shadow-[0_15px_50px_rgba(0,0,0,0.05)]">

        {/* BLACK GRADIENT */}
        <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-black/5 blur-3xl rounded-full pointer-events-none"></div>

        {/* GOLD BLUR */}
        <div className="absolute top-[-70px] left-[-70px] w-[180px] h-[180px] rounded-full bg-[#b8965a]/10 blur-3xl pointer-events-none"></div>

        {/* TOP CONTENT */}
        <div className="relative z-10 max-w-[480px]">

          <span className="text-[#b8965a] uppercase tracking-[2px] text-[10px] font-semibold">
            Get In Touch
          </span>

          <h3 className="font-['Inter',sans-serif] text-[22px] md:text-[28px] text-black leading-[1.08] mt-3 mb-4 font-semibold">
            Let’s Build
            <br />
            Something Great
          </h3>

          <p className="text-[14px] md:text-[15px] text-black/60 leading-[26px]">
            I collaborate with organizations, leaders, and teams to
            create impactful workshops, speaking sessions, and
            transformation initiatives that drive meaningful results.
          </p>

        </div>

        {/* SOCIAL ICONS */}
        <div className="relative z-10 flex items-center gap-3 mt-7 flex-wrap">

          {/* INSTAGRAM */}
          <Link
            to="#"
            className="group w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#962fbf] flex items-center justify-center text-white text-[16px] shadow-md transition-all duration-500 hover:-translate-y-1 hover:scale-105"
          >
            <FaInstagram />
          </Link>

          {/* FACEBOOK */}
          <Link
            to="#"
            className="group w-[42px] h-[42px] rounded-full bg-[#1877F2] flex items-center justify-center text-white text-[16px] shadow-md transition-all duration-500 hover:-translate-y-1 hover:scale-105"
          >
            <FaFacebookF />
          </Link>

          {/* LINKEDIN */}
          <Link
            to="#"
            className="group w-[42px] h-[42px] rounded-full bg-[#0A66C2] flex items-center justify-center text-white text-[16px] shadow-md transition-all duration-500 hover:-translate-y-1 hover:scale-105"
          >
            <FaLinkedinIn />
          </Link>

          {/* X / TWITTER */}
          <Link
            to="#"
            className="group w-[42px] h-[42px] rounded-full bg-black flex items-center justify-center text-white text-[16px] shadow-md transition-all duration-500 hover:-translate-y-1 hover:scale-105"
          >
            <FaXTwitter />
          </Link>

        </div>

      </div>

      {/* LEFT SIDE SECOND */}
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

    </div>

  </div>

</section>
  );
};

export default ContactForm;