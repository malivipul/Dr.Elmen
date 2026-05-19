import { Link } from "react-router-dom";

const ContactCTASection = () => {
  return (
    <section className="bg-[#f4f4f4] py-[60px] md:py-[60px]">

      <div className="max-w-[1320px] mx-auto px-4 md:px-7">

        {/* CTA BOX */}
        <div className="relative overflow-hidden rounded-[28px] bg-[#e7dfd7] px-5 sm:px-8 md:px-12 py-8 md:py-10 border border-[#ddd5ca]">

          {/* BG EFFECT */}
          <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-[#b8965a]/10 blur-[90px]"></div>

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            {/* LEFT SIDE */}
            <div className="max-w-[760px]">

              {/* LABEL */}
              <span className="text-[#b8965a] uppercase tracking-[3px] text-[10px] md:text-[11px] font-medium">
                Get In Touch
              </span>

              {/* TITLE */}
              <h2 className="title-font text-[28px] sm:text-[32px] leading-[1.05] text-black mt-4 mb-5">
                Ready to work together?
              </h2>

              {/* TEXT */}
              <p className="text-[#0a3e40] text-[15px] md:text-[17px] leading-[30px] md:leading-[34px]">
                Whether you need an interim manager for a transformation
                project, a speaker for your next conference, or a
                research collaborator — let’s start a conversation.
              </p>

            </div>
<div className="flex flex-col items-start sm:items-end gap-3 w-full">

  {/* BUTTON */}
  <Link
    to="/contact"
    className="
      w-full
      sm:w-[240px]
      h-[50px]
      px-6
      rounded-full
      bg-[#b8965a]
      hover:bg-black
      text-white
      text-[14px]
      font-bold
      tracking-[0.3px]
      transition-all
      duration-500
      inline-flex
      items-center
      justify-center
      gap-2
    "
  >

    <span className="leading-none">
      Let’s Work Together
    </span>

    <i className="fa-solid fa-arrow-right text-[14px] mt-[1px]"></i>

  </Link>

  {/* BUTTON */}
  <Link
    to="/contact"
    className="
      w-full
      sm:w-[240px]
      h-[50px]
      px-6
      rounded-full
      border
      border-black/10
      hover:bg-black
      hover:text-white
      text-black
      text-[14px]
      font-bold
      tracking-[0.3px]
      transition-all
      duration-500
      inline-flex
      items-center
      justify-center
      gap-2
      bg-white/40
    "
  >

    <i className="fa-brands fa-whatsapp text-[15px]"></i>

    <span className="leading-none">
      WhatsApp Me
    </span>

  </Link>

</div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactCTASection;