import React from "react";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <section className="relative w-full h-[320px] md:h-[460px] overflow-hidden rounded-b-[40px]">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img 
          src="/assets/images/25.png"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1420px] mx-auto px-[20px] md:px-[40px] h-full flex flex-col justify-center">

        {/* 🔥 BREADCRUMB */}
        <div className="text-white text-sm mb-3 flex items-center gap-2 opacity-90">
          <Link to="/" className="hover:underline">Home</Link>
          <span>›</span>
          <span className="font-semibold">Author</span>
        </div>

        {/* TITLE */}
        <h1 className="text-white text-3xl md:text-5xl font-serif leading-tight">
          Author
        </h1>

      </div>

    </section>
  );
};

export default AboutBanner;