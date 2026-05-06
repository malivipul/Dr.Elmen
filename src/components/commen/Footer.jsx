const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[60px] pb-[30px] rounded-t-[40px]">

      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[40px]">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10 text-center md:text-left">

          {/* LEFT */}
          <div className="space-y-4 flex flex-col items-center md:items-start">

            <div>
              <h1 className="text-xl md:text-3xl leading-tight title-font">
                Dr. Raphael
              </h1>
              <h2 className="text-xl md:text-3xl leading-tight title-font">
                Edlmann
              </h2>
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-xs text-center md:text-left">
              Interim Manager • AI, HR & Business Transformation — Helping organisations transform with practical, high-impact strategies.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 pt-3 justify-center md:justify-start">
              <a href="#" className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition">
                <i className="fa-brands fa-linkedin-in text-[14px]"></i>
              </a>
              <a href="#" className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition">
                <i className="fa-brands fa-x-twitter text-[14px]"></i>
              </a>
              <a href="#" className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition">
                <i className="fa-brands fa-facebook-f text-[14px]"></i>
              </a>
              <a href="#" className="w-[45px] h-[45px] flex items-center justify-center border border-white/40 rounded-full hover:bg-[#b8965a] transition">
                <i className="fa-brands fa-instagram text-[14px]"></i>
              </a>
            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-5">Quick Links</h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-[#b8965a]">About Me</a></li>
              <li><a href="#" className="hover:text-[#b8965a]">HR & AI Insights</a></li>
              <li><a href="#" className="hover:text-[#b8965a]">Author</a></li>
              <li><a href="#" className="hover:text-[#b8965a]">Speaker</a></li>
              <li><a href="#" className="hover:text-[#b8965a]">Vita</a></li>
              <li><a href="#" className="hover:text-[#b8965a]">Projects</a></li>
              <li><a href="#" className="hover:text-[#b8965a]">Workshops & Consulting</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-5">Services</h4>

            <ul className="space-y-3 text-sm text-white/60">
              <li>AI Strategy Workshop for HR</li>
              <li>Digital Transformation Workshop</li>
              <li>Process Modelling & Automation</li>
              <li>Interim Management Services</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-5">Contact</h4>

            <div className="space-y-4 text-sm text-white/60">

              {/* EMAIL */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 justify-center md:justify-start">
                <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-lg">
                  <i className="fa-regular fa-envelope text-[#b8965a]"></i>
                </div>
                <span>contact@edlmann.com</span>
              </div>

              {/* PHONE */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 justify-center md:justify-start">
                <div className="w-[36px] h-[36px] flex items-center justify-center bg-white/10 rounded-lg">
                  <i className="fa-solid fa-phone text-[#b8965a]"></i>
                </div>
                <span>+49 162 523 50 273</span>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 text-center md:text-left">

          <p>
            © 2026 Dr. Raphael Edlmann. All rights reserved. Designed by{" "}
            <a href="https://anaxistech.com" target="_blank" className="text-[#d4872a] font-semibold">
              Anaxistech
            </a>
          </p>

          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-[#b8965a]">Imprint</a>
            <a href="#" className="hover:text-[#b8965a]">Privacy Policy</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;