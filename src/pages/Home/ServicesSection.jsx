import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getServices,
  getServiceHeader,
  IMG_URL,
  getBi,
  getCached,
  setCached,
} from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "../../components/commen/Icon";

const getOrderId = (service, fallback) => {
  const value = Number(service?.orderId);
  return Number.isFinite(value) && value > 0 ? value : fallback;
};

const ServicesSection = () => {
  const cachedServices = getCached("servicesList");
  const cachedHeader = getCached("serviceHeader");

  const [servicesList, setServicesList] = useState(cachedServices || []);
  const [header, setHeader] = useState(cachedHeader || null);
  const { lang } = useLanguage();

  useEffect(() => {
    getServiceHeader()
      .then((res) => {
        if (res.data) {
          setHeader(res.data);
          setCached("serviceHeader", res.data);
        }
      })
      .catch((err) => console.error("Error fetching service header:", err));

    getServices()
      .then((res) => {
        if (res.data) {
          const list = Array.isArray(res.data)
            ? res.data
            : res.data.value || [];
          setServicesList(list);
          setCached("servicesList", list);
        }
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);

  const displayList = [...servicesList].sort(
    (a, b) => getOrderId(a, 999) - getOrderId(b, 999),
  );

  const formattedServices = displayList.map((service, index) => {
    const title =
      typeof service.title === "object"
        ? getBi(service.title, lang)
        : service.title;
    const slug = service.slug;
    const img =
      service.img && !service.img.startsWith("/assets")
        ? `${IMG_URL}${service.img}`
        : service.img || "/assets/images/blog2.png";
    const imgAlt = getBi(service.imgAlt, lang) || title;
    const number = String(index + 1).padStart(2, "0");

    let points = [];
    if (service.outerpoints && service.outerpoints.length > 0) {
      points = service.outerpoints.map((p) =>
        typeof p === "object" ? getBi(p, lang) : p,
      );
    } else if (service.sections && service.sections.length > 0) {
      points = (service.sections[0].points || []).map((p) =>
        typeof p === "object" ? getBi(p, lang) : p,
      );
    } else if (service.points) {
      points = service.points.map((p) =>
        typeof p === "object" ? getBi(p, lang) : p,
      );
    }

    return { title, slug, img, imgAlt, number, points };
  });

  const hSubtitle = header
    ? getBi(header.subtitle, lang)
    : lang === "EN"
      ? "Services"
      : "Leistungen";
  const hTitle = header
    ? getBi(header.title, lang)
    : lang === "EN"
      ? "Consulting"
      : "Consulting";
 const rawDesc = header ? getBi(header.description, lang) : (lang === "EN" 
  ? "From strategic advisory to hands-on implementation — I deliver across the full transformation lifecycle." 
  : "Von der strategischen Beratung bis zur operativen Umsetzung – ich begleite Transformation über den gesamten Veränderungsprozess hinweg.");

// This removes <p> or any other HTML tags
const hDesc = rawDesc.replace(/<\/?[^>]+(>|$)/g, "");
  return (
    <section className="bg-[#f4f4f4] py-[60px]">
      {/* TOP HEADER */}
      <div className="max-w-[1300px] mx-auto px-[20px] md:px-[60px] text-center mb-12">
        <span className="text-[#b8965a] text-xs tracking-[3px] uppercase">
          {hSubtitle}
        </span>
        <h2 className="title-font text-2xl md:text-[36px] text-black mt-3 mb-3">
          {hTitle}
        </h2>
        <p className="text-[#0a3e40] text-[16px] max-w-2xl mx-auto leading-relaxed">
          {hDesc}
        </p>
      </div>

      {/* SERVICES GRID (2 CARDS PER ROW) */}
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] grid grid-cols-1 md:grid-cols-2 gap-8">
        {formattedServices.map((service, index) => (
          <Link
            key={index}
            to={`/workshops-details/${service.slug}`}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex flex-col bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
          >
            {/* IMAGE (TOP) */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={service.img}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                alt={service.imgAlt}
                title={service.imgAlt}
              />
              {/* NUMBER BADGE */}
              <div className="absolute top-4 right-4 w-[42px] h-[42px] rounded-[12px] bg-[#0a3e40] border border-white/20 shadow-lg flex items-center justify-center z-10">
                <span className="text-white text-[13px] font-semibold">
                  {service.number}
                </span>
              </div>
            </div>

            {/* CONTENT (BOTTOM) */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
              {/* 1 ROW: LEFT TITLE & RIGHT BUTTON */}
              <div className="flex flex-row items-center justify-between gap-4 mt-auto w-full">
                {/* LEFT TITLE */}
                <h3 className="title-font text-[20px] md:text-[24px] leading-tight text-black font-medium group-hover:text-[#b8965a] transition duration-300 flex-grow max-w-[70%]">
                  {service.title}
                </h3>

                {/* RIGHT BUTTON */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 px-5 py-3 font-bold rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] group-hover:bg-transparent group-hover:text-[#b8965a] transition duration-300 whitespace-nowrap">
                    {lang === "EN" ? "Learn More" : "Mehr erfahren"}
                    <Icon name="arrow-right" className="text-[12px]" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {formattedServices.length === 0 && (
          <div className="col-span-1 md:col-span-2 text-center py-20 bg-white rounded-[24px] border border-dashed border-[#ddd]">
            <p className="text-gray-400 italic">No items currently listed.</p>
          </div>
        )}
      </div>

      {/* LETS WORK TOGETHER CTA */}
      <div className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] mt-16">
        <div className="relative overflow-hidden rounded-[24px] min-h-[320px] flex items-center ">
          {/* BG IMAGE */}
          <div className="absolute inset-0">
            <img
              src="/assets/images/ctobanner.jpg"
              className="w-full h-full object-cover object-[10%_top]"
              alt="cta"
            />
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* CONTENT */}
          <div className="relative z-10 w-full px-8 md:px-14 py-10">
            <div className="max-w-[620px]">
              {/* ICON + TITLE */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[44px] h-[44px] rounded-full bg-[#0a3e40] flex items-center justify-center text-white text-[22px] shadow-lg">
                  <Icon name="reg-calendar" />
                </div>
                <h3 className="title-font text-2xl md:text-[36px] leading-tight text-black font-semibold">
                  {lang === "EN" ? "Let’s work together" : "Let’s work together"}
                </h3>
              </div>

              {/* TEXT */}
              <p className="text-[#0a3e40] text-[17px] leading-[1.9] max-w-[530px]">
                {lang === "EN"
                  ? "Looking to solve a specific challenge or start your AI transformation journey?"
                  : "Stehen Sie vor einer konkreten Herausforderung oder möchten Sie Ihre KI-Transformation gezielt auf den Weg bringen?"}
              </p>

              {/* BUTTON */}
              <div className="mt-7">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 font-bold py-3 rounded-full bg-[#b8965a] text-white text-sm border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300"
                >
                  {lang === "EN" ? "Learn More" : "Mehr erfahren"}
                  <Icon name="arrow-right" className="text-[12px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;