import { useState } from "react";

const Hero = () => {
  const [hover, setHover] = useState(false);

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen flex items-end items-center overflow-hidden rounded-b-[40px] pt-[140px] pb-[60px]">

      {/* IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/2026_03_17_Raphael_Edlmann_Start Page.jpg"
          className="w-full h-full object-cover object-[70%_20%]"
          alt="hero"
        />
        <div className="absolute inset-0 bg-[#b8965a]/20"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1420px] mx-auto px-[20px] md:px-[40px] w-full text-center md:text-left mb-[75px] md:mb-0">

       <h2
  className="text-white font-medium leading-tight text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide"
  style={{
    fontFamily: hover
      ? "Caveat, cursive"
      : "Playfair Display, serif",
    letterSpacing: hover ? "1px" : "0px",
    transition: "0.4s ease",
  }}
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}
>
  Dr. Raphael Edlmann
</h2>
        {/* SUBTEXT */}
        <p className="text-white mt-3 text-base md:text-lg lg:text-xl">
          Interim Manager. AI, HR & Business Process Expert
        </p>

        {/* BUTTON CENTER */}
        <div className="w-full flex justify-center mt-8">
          <div className="flex items-center gap-3">

            <button className="px-8 py-3 rounded-full bg-[#b8965a] text-white border border-[#b8965a] hover:bg-transparent hover:border-white hover:text-white transition duration-300">
              Let’s work together
            </button>

            {/* EMAIL */}
            <a
              href="mailto:your@email.com"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-black hover:bg-gray-200 transition"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-[#25D366] hover:opacity-80 transition"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;