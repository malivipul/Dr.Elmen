import React from "react";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <section className="relative w-full h-[340px] md:h-[460px] overflow-hidden rounded-b-[40px]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">

        <img
          src="/assets/images/25.png"
          alt="About Banner"
          className="w-full h-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35"></div>

      
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1420px] mx-auto px-[24px] md:px-[40px] h-full flex flex-col justify-end md:justify-center pb-12 md:pb-0">

        {/* CONTENT BOX */}
        <div className="max-w-fit">

          {/* BREADCRUMB */}
          <div className="text-white text-[13px] md:text-sm mb-3 flex items-center gap-2 opacity-90 font-medium">

            <Link
              to="/"
              className="hover:underline"
            >
              Home
            </Link>

            <span>›</span>

            <span className="font-semibold">
             Workshops
            </span>
             <span>›</span>

            <span className="font-semibold">
            WorkShops-Details
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-white text-[38px] md:text-5xl font-serif leading-none md:leading-tight drop-shadow-lg">
           WorkShops-Details
          </h1>

        </div>

      </div>

    </section>
  );
};

export default AboutBanner;