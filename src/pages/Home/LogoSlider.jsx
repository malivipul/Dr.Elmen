import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const LogoSlider = () => {
  const logos = [
    "/assets/images/Picture1.png",
    "/assets/images/Picture2.png",
    "/assets/images/Picture3.png",
    "/assets/images/Picture4.png",
    "/assets/images/Picture5.png",
    "/assets/images/Picture6.png",
    "/assets/images/Picture7.png",
    "/assets/images/Picture8.png",
  ];

  return (
    <section className="bg-white pb-[40px]">

      <div className="max-w-[1420px] mx-auto px-[20px]">

        {/* 🔥 SINGLE BOX */}
        <div className="bg-white border border-[#eee] rounded-2xl py-6 px-4 shadow-sm">

          <Swiper
            modules={[Autoplay]}
            slidesPerView={6}
            spaceBetween={40}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center">
                  <img
                    src={logo}
                    className="h-[40px] md:h-[50px] object-contain opacity-80 hover:opacity-100 transition"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default LogoSlider;