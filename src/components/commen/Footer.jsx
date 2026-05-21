import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[60px] pb-[30px] rounded-t-[40px]">

      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[40px]">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_0.9fr] gap-[40px] md:gap-[20px] text-center md:text-left">

          {/* LEFT */}
          <div className="space-y-4 flex flex-col items-center md:items-start">

            {/* LOGO */}
            <div>

              <h1 className="text-[22px] md:text-[36px] leading-tight title-font whitespace-nowrap">
                Dr. Raphael Edlmann
              </h1>

            </div>

            {/* TEXT */}
            <p className="text-sm text-white/60 leading-relaxed max-w-[320px] text-center md:text-left">
              Interim Manager • AI, HR & Business Transformation - Helping organisations transform with practical, high-impact strategies.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-3 justify-center md:justify-start">

              <Link
                to="https://www.linkedin.com/in/raphael-edlmann-60200059/ "
                target="_blank"
                rel="noreferrer"
                className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition-all duration-300"
              >
                <i className="fa-brands fa-linkedin-in text-[14px] text-white"></i>
              </Link>

              <Link
                to="https://x.com/raphaeledlmann"
                target="_blank"
                rel="noreferrer"
                className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition-all duration-300"
              >
                <i className="fa-brands fa-x-twitter text-[14px] text-white"></i>
              </Link>

              <Link
                to="https://www.facebook.com/profile.php?id=61587719828544 "
                target="_blank"
                rel="noreferrer"
                className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition-all duration-300"
              >
                <i className="fa-brands fa-facebook-f text-[14px] text-white"></i>
              </Link>

              <Link
                to="https://www.instagram.com/edlmannraphael/ "
                target="_blank"
                rel="noreferrer"
                className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition-all duration-300"
              >
                <i className="fa-brands fa-instagram text-[14px] text-white"></i>
              </Link>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">

            <h4 className="font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-white/60">

              <li>
                <Link
                  to="/about"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  About Me
                </Link>
              </li>

              <li>
                <Link
                  to="/insights"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  HR & AI Insights
                </Link>
              </li>

              <li>
                <Link
                  to="/author"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  Author
                </Link>
              </li>

              <li>
                <Link
                  to="/#speaker-section"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  Speaker
                </Link>
              </li>

              <li>
                <Link
                  to="/vita"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  Vita
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/workshops"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  Workshops & Consulting
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="hover:text-[#b8965a] transition"
                >
                  Lets Work Together
                </Link>
              </li>

            </ul>

          </div>

          {/* SERVICES */}
          <div className="text-center md:text-left">

            <h4 className="font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-white/60">

              <li>
                <Link
                  to="/workshops-details/ai-strategy-workshop-for-hr"
                  className="hover:text-[#b8965a] transition"
                >
                  AI Strategy Workshop for HR
                </Link>
              </li>

              <li>
                <Link
                  to="/workshops-details/ai-strategy-workshop-for-hr"
                  className="hover:text-[#b8965a] transition"
                >
                  Digital Transformation Workshop
                </Link>
              </li>

              <li>
                <Link
                  to="/workshops-details/ai-strategy-workshop-for-hr"
                  className="hover:text-[#b8965a] transition"
                >
                  Process Modelling & Automation
                </Link>
              </li>

              <li>
                <Link
                  to="/workshops-details/ai-strategy-workshop-for-hr"
                  className="hover:text-[#b8965a] transition"
                >
                  Interim Management Services
                </Link>
              </li>

            </ul>

          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">

            <h4 className="font-semibold mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/60">

              {/* EMAIL */}
              <div className="flex items-center gap-3 justify-center md:justify-start">

                <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-lg shrink-0">
                  <i className="fa-regular fa-envelope text-[#b8965a]"></i>
                </div>

                <a
                  href="mailto:contact@edlmann.com"
                  className="hover:text-[#b8965a] transition duration-300"
                >
                  contact@edlmann.com
                </a>

              </div>
              {/* PHONE */}
              <div className="flex items-center gap-3 justify-center md:justify-start">

                <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-lg shrink-0">
                  <i className="fa-solid fa-phone text-[#b8965a]"></i>
                </div>

                <span>
                  +49 162 523 50 273
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/40 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 text-center md:text-left">

          <p>
            © 2026 Dr. Raphael Edlmann. All rights reserved. Designed by{" "}

            <Link
              to="https://anaxistech.com"
              target="_blank"
              className="
    text-[#d4872a]
    text-[12px]
    font-semibold
    transition-all
    duration-300
    hover:text-white
    hover:underline
    decoration-white
    underline-offset-4
  "
            >
              AnaxisTech
            </Link>

          </p>

          <div className="flex gap-6 justify-center">

            <Link
              to="/imprint"
              className="hover:text-[#b8965a]"
            >
              Imprint
            </Link>

            <Link
              to="/privacy-policy"
              className="hover:text-[#b8965a]"
            >
              Privacy Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;