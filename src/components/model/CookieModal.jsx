import { useState, useEffect } from "react";

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAction = (status) => {
    localStorage.setItem("cookieConsent", status);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
<div className="fixed bottom-6 right-6 z-[9999] w-[600px] max-w-[calc(100%-32px)] bg-[#171717] text-white rounded-lg shadow-2xl border border-[#2d2d2d] p-7">      <h3 className="text-2xl font-bold mb-4">
        We use cookies
      </h3>

      <p className="text-gray-300 text-[15px] leading-7 mb-6">
        We use cookies and other tracking technologies to improve your
        browsing experience on our website, to show you personalized
        content and targeted ads, to analyze our website traffic, and
        to understand where our visitors are coming from.
      </p>

      <div className="flex flex-wrap gap-3">
  <button
    onClick={() => handleAction("true")}
    className="bg-[#b8965a] border border-[#b8965a] text-white hover:bg-transparent hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
  >
    I agree
  </button>

  <button
    onClick={() => handleAction("false")}
    className="bg-[#b8965a] border border-[#b8965a] text-white hover:bg-transparent hover:text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
  >
    I decline
  </button>

  <button
    className="bg-white border border-white text-black hover:bg-transparent hover:text-white hover:border-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
  >
    Change my preferences
  </button>
</div>
    </div>
  );
};

export default CookieModal;