const SpeakerSection = () => {
  return (
    <section className="relative w-full py-[40px]">

      {/* BG IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/22.jpg"
          className="w-full h-full object-cover"
          alt="speaker"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* CONTENT */}
      <div className="relative max-w-[1200px] mx-auto px-[20px] md:px-[40px]">

        {/* TOP */}
        <div className="text-left pt-[20px] pb-[20px]">

          <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
            Speaker
          </span>

          <h2 className="title-font text-3xl md:text-[42px] text-white mt-3 mb-3">
            Inspiring Talks That Drive Action
          </h2>

        </div>

        {/* WHITE BOX */}
        <div className="bg-white/95 rounded-2xl p-6 md:p-10 mt-[10px] mb-[10px] max-w-[600px]">

          <div className="text-[#0a3e40]">

            <p className="text-sm md:text-[16px] leading-relaxed mb-4 italic font-semibold">
              Looking for a speaker who cuts through the noise and delivers real insights? Book me for your next event.
            </p>

            <p className="text-sm md:text-[16px] leading-relaxed mb-4">
              My talks don’t just fill a slot — they challenge perspectives, spark action, and leave your audience with practical strategies they can apply immediately.
            </p>

            <p className="text-sm md:text-[16px] leading-relaxed mb-4 font-semibold italic">
              More attention. More relevance. More impact.
            </p>

            <p className="text-sm md:text-[16px] leading-relaxed mb-6">
              Beyond the stage, I amplify your event through my network and social media channels — extending your reach, increasing visibility, and making sure the impact goes far beyond the room.
            </p>

            {/* BUTTON */}
            <a
              href="#"
              className="inline-block text-[#b8965a] text-sm font-medium hover:underline transition duration-300"
            >
              Work with me →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SpeakerSection;