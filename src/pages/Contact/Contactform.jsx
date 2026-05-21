import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const ContactForm = () => {

  // LOAD CALENDLY SCRIPT
  useEffect(() => {

    // CSS
    const existingCss = document.querySelector(
      'link[href="https://assets.calendly.com/assets/external/widget.css"]'
    );

    if (!existingCss) {

      const link = document.createElement("link");

      link.href =
        "https://assets.calendly.com/assets/external/widget.css";

      link.rel = "stylesheet";

      document.head.appendChild(link);

    }

    // JS
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existingScript) {

      const script = document.createElement("script");

      script.src =
        "https://assets.calendly.com/assets/external/widget.js";

      script.async = true;

      document.body.appendChild(script);

    }

  }, []);

  // CALENDLY POPUP
  const openCalendly = (e) => {

    e.preventDefault();

    if (window.Calendly) {

      window.Calendly.initPopupWidget({

        url: "https://calendly.com/contact-edlmann/30min?month=2026-05",

      });

    } else {

      // FALLBACK
      window.open(
        "https://calendly.com/contact-edlmann/30min?month=2026-05",
        "_blank"
      );

    }

    return false;

  };

  return (

    <section className="relative overflow-hidden bg-[#f4f4f4] py-[40px] md:py-[45px]">

      {/* BG EFFECT */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-[#b8965a]/10 blur-[90px]"></div>

        <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] rounded-full bg-[#0a3e40]/5 blur-[90px]"></div>

      </div>

      <div className="relative max-w-[1180px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-5">

            {/* GET IN TOUCH BOX */}
            <div className="relative overflow-hidden rounded-[28px] bg-[#e7dfd7] border border-black/5 p-5 md:p-7 h-fit shadow-[0_15px_50px_rgba(0,0,0,0.05)]">

              {/* BLACK GRADIENT */}
              <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-black/5 blur-3xl rounded-full pointer-events-none"></div>

              {/* GOLD BLUR */}
              <div className="absolute top-[-70px] left-[-70px] w-[180px] h-[180px] rounded-full bg-[#b8965a]/10 blur-3xl pointer-events-none"></div>

              {/* CONTENT */}
              <div className="relative z-10 max-w-[480px]">

                <span className="text-[#b8965a] uppercase tracking-[2px] text-[12px] font-bold">
                  Get In Touch
                </span>

                <h3 className="font-['Inter',sans-serif] text-[22px] md:text-[28px] text-black leading-[1.08] mt-3 mb-4">
                  Let’s Build
                 
                  Something Great
                </h3>

                <p className="text-[14px] md:text-[16px] text-black/60 leading-[26px]">
                  I collaborate with organizations, leaders, and teams to
                  create impactful workshops, speaking sessions, and
                  transformation initiatives that drive meaningful results.
                </p>

              </div>

              {/* SOCIAL ICONS */}
              <div className="relative z-10 flex items-center gap-4 mt-7 flex-wrap">

                {/* LINKEDIN */}
                <Link
                  to="https://www.linkedin.com/in/raphael-edlmann-60200059/ "
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] flex items-center justify-center border border-black/40 rounded-full hover:bg-[#b8965a] hover:border-[#b8965a] transition-all duration-300"
                >
                  <FaLinkedinIn className="text-[14px] text-black" />
                </Link>

                {/* X */}
                <Link
                  to="https://x.com/RaphaelEdlmann "
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] flex items-center justify-center border border-black/40 rounded-full hover:bg-[#b8965a] hover:border-[#b8965a] transition-all duration-300"
                >
                  <FaXTwitter className="text-[14px] text-black" />
                </Link>

                {/* FACEBOOK */}
                <Link
                  to="https://www.facebook.com/profile.php?id=61587719828544 "
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] flex items-center justify-center border border-black/40 rounded-full hover:bg-[#b8965a] hover:border-[#b8965a] transition-all duration-300"
                >
                  <FaFacebookF className="text-[14px] text-black" />
                </Link>

                {/* INSTAGRAM */}
                <Link
                  to="https://www.instagram.com/edlmannraphael/ "
                  target="_blank"
                  rel="noreferrer"
                  className="w-[45px] h-[45px] flex items-center justify-center border border-black/40 rounded-full hover:bg-[#b8965a] hover:border-[#b8965a] transition-all duration-300"
                >
                  <FaInstagram className="text-[14px] text-black" />
                </Link>

              </div>

            </div>

            {/* BOOKING BOX */}
            <div className="relative overflow-hidden rounded-[28px] bg-white border border-[#ece6dc] p-5 md:p-7 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">

              {/* BLUR */}
              <div className="absolute top-[-50px] right-[-50px] w-[160px] h-[160px] rounded-full bg-[#b8965a]/10 blur-3xl pointer-events-none"></div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* LABEL */}
                <span className="text-[#b8965a] uppercase tracking-[2px] text-[12px] font-bold">
                  Appointment Booking
                </span>

                {/* TITLE */}
                <h3 className="font-['Inter',sans-serif] text-[22px] md:text-[28px] text-black leading-[1.1] mt-3">
                  Schedule Your
                  
                  Consultation
                </h3>

                {/* TEXT */}
                <p className="text-[14px] md:text-[16px] text-[#0a3e40] leading-[28px] mt-4">
                  Easily book a professional consultation session directly
                  through the integrated Calendly scheduling system for
                  workshops, strategy discussions, and collaboration meetings.
                </p>

                {/* BUTTON */}
                <button
                  onClick={openCalendly}
                  type="button"
                  className="
                    mt-7
                    inline-flex
                    items-center
                    justify-center
                    gap-3
                    px-7
                    h-[46px]
                    rounded-full
                    bg-[#b8965a]
                    border
                    border-[#b8965a]
                    text-white
                    text-[14px]
                    font-bold
                    hover:bg-transparent
                    hover:text-[#b8965a]
                    transition-all
                    duration-300
                  "
                >

                  Book a Meeting

                  <span className="text-[18px] font-bold">
                    →
                  </span>

                </button>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-[24px] p-5 md:p-6 border border-[#ece6dc] shadow-[0_8px_24px_rgba(0,0,0,0.03)]">

            {/* TOP */}
            <div className="mb-5">

              <span className="text-[#b8965a] uppercase tracking-[2px] text-[12px] font-bold">
                Contact
              </span>

              <h2 className="title-font text-[22px] md:text-[30px] leading-[1.05] text-black mt-2 mb-3">
                Let’s Start a
              
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