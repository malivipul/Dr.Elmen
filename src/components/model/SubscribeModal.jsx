// src/components/model/SubscribeModal.jsx

import React from "react";

const SubscribeModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">

      {/* MODAL */}
      <div className="relative w-full max-w-[440px] rounded-[24px] bg-white p-6 md:p-8 shadow-2xl animate-fadeIn">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-[20px] text-black hover:rotate-90 transition duration-300"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* CONTENT */}
        <div className="text-center">

          {/* TITLE */}
          <h2 className="title-font text-[26px] md:text-[34px] leading-tight text-black">
            Subscribe to
            <br />
            AI & HR Insights
          </h2>

          {/* DESC */}
          <p className="mt-4 text-[#5f5f5f] text-[15px] leading-[1.8] max-w-[340px] mx-auto">
            Get the latest articles, guides, and tools on HR, AI and the future of work delivered to your inbox
          </p>

          {/* INPUT */}
          <div className="mt-6">

            <input
              type="email"
              placeholder="Your email address"
              className="w-full h-[52px] rounded-[12px] border border-[#e5e5e5] px-4 text-[14px] outline-none focus:border-black transition"
            />

          </div>

          {/* BUTTON */}
          <button className="mt-4 w-full h-[52px] rounded-[12px] bg-black text-white text-[14px] font-bold border border-black hover:bg-transparent hover:text-black transition duration-300 inline-flex items-center justify-center gap-2">

            <i className="fa-regular fa-envelope"></i>

            Subscribe

          </button>

          {/* BOTTOM TEXT */}
          <p className="mt-4 text-[13px] text-[#7a7a7a]">
            No spam. Unsubscribe anytime.
          </p>

        </div>

      </div>

    </div>
  );
};

export default SubscribeModal;