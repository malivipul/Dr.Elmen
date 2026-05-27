import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { getLogos, IMG_URL, getCached, setCached } from "../../api/api";

import "swiper/css";

const LogoSlider = () => {
  const cached = getCached("homeLogos");
  const [logoList, setLogoList] = useState(cached || []);
  const navigate = useNavigate();

  useEffect(() => {
    getLogos()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data) ? res.data : (res.data.value || []);
          setLogoList(list);
          setCached("homeLogos", list);
        }
      })
      .catch((err) => console.error("Error fetching logos:", err));
  }, []);

  const logos = logoList;

  if (logos.length === 0) return null;


  // CLICK FUNCTION
  const handleScroll = () => {
    navigate(`/projects?scrollTo=projects`);
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

            {logos.map((logo) => {
              const id = logo._id || logo.id;
              const logoPath = logo.image || logo.img;
              const imgSource = logoPath
                ? logoPath.startsWith("http") || logoPath.startsWith("/assets")
                  ? logoPath
                  : `${IMG_URL}${logoPath}`
                : "";

              return (
                <SwiperSlide key={id}>
                  <div
                    onClick={handleScroll}
                    className="flex justify-center cursor-pointer"
                  >
                    <img
                      src={imgSource}
                      className="h-[40px] md:h-[50px] object-contain opacity-80 hover:opacity-100 transition"
                      alt="logo"
                    />
                  </div>
                </SwiperSlide>
              );
            })}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default LogoSlider;