import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const LogoSlider = () => {

  const logos = [
    {
      id: 1,
      image: "/assets/images/Picture1.png",
    },
    {
      id: 2,
      image: "/assets/images/Picture2.png",
    },
    {
      id: 3,
      image: "/assets/images/Picture3.png",
    },
    {
      id: 4,
      image: "/assets/images/Picture4.png",
    },
    {
      id: 5,
      image: "/assets/images/Picture5.png",
    },
    {
      id: 6,
      image: "/assets/images/Picture6.png",
    },
    {
      id: 7,
      image: "/assets/images/Picture7.png",
    },
    {
      id: 8,
      image: "/assets/images/Picture8.png",
    },
  ];

  // CLICK FUNCTION
  const handleScroll = (id) => {

    const element = document.getElementById(`project-card-${id}`);

    if (element) {

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

    }
  };

  return (
    <section className="bg-white pb-[60px]">

      <div className="max-w-[1420px] mx-auto px-[20px]">

        {/* SINGLE BOX */}
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

            {logos.map((logo) => (

              <SwiperSlide key={logo.id}>

                <div
                  onClick={() => handleScroll(logo.id)}
                  className="flex justify-center cursor-pointer"
                >

                  <img
                    src={logo.image}
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