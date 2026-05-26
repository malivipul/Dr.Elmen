import React, { useState } from "react";
import { addSubscriber } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const SubscribeModal = ({ isOpen, setIsOpen }) => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ success: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ success: null, message: "" });

    addSubscriber({ email })
      .then((res) => {
        setSubmitting(false);
        if (res.data && res.data.success) {
          setStatus({
            success: true,
            message: lang === "EN" 
              ? "Thank you! You have successfully subscribed." 
              : "Vielen Dank! Sie haben sich erfolgreich angemeldet."
          });
          setEmail("");
          // Close modal after 2 seconds on success
          setTimeout(() => {
            setIsOpen(false);
            setStatus({ success: null, message: "" });
          }, 2000);
        } else {
          setStatus({
            success: false,
            message: res.data?.message || (lang === "EN" ? "Something went wrong. Please try again." : "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.")
          });
        }
      })
      .catch((err) => {
        console.error("Error subscribing:", err);
        setSubmitting(false);
        setStatus({
          success: false,
          message: err.response?.data?.message || (lang === "EN" ? "Something went wrong. Please try again." : "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.")
        });
      });
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
      {/* MODAL */}
      <div className="relative w-full max-w-[460px] rounded-[24px] bg-white p-6 md:p-8 shadow-2xl animate-fadeIn border border-[#ece6dc]">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-[20px] text-black hover:rotate-90 transition duration-300 cursor-pointer"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* CONTENT */}
        <div className="text-center">
          
          {/* TITLE */}
          <h2 className="title-font text-[24px] md:text-[28px] leading-tight text-black">
            {lang === "EN" ? "Subscribe to AI & HR Insights" : "AI & HR Insights kostenlos abonnieren"}
          </h2>

          {/* DESC */}
          <p className="mt-3 text-[#5f5f5f] text-[14px] leading-[1.7] max-w-[360px] mx-auto">
            {lang === "EN"
              ? "Get the latest articles, guides, and tools on HR, AI and the future of work delivered to your inbox"
              : "Erhalten Sie die neuesten Artikel, Leitfäden und Tools zu HR, KI und der Zukunft der Arbeit direkt in Ihr Postfach."}
          </p>

          {/* TABLE-BASED FORM LAYOUT */}
          <form onSubmit={handleSubmit} className="mt-5">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  
                  <td className="py-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={lang === "EN" ? "Your email address" : "Ihre E-Mail Adresse"}
                      required
                      className="w-full h-[50px] rounded-[12px] border border-[#e5e5e5] px-4 text-[14px] outline-none focus:border-[#b8965a] transition bg-[#faf8f4]"
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* STATUS MESSAGES */}
            {status.message && (
              <div className={`mt-3 p-2.5 rounded-[10px] text-center text-xs font-semibold border ${
                status.success 
                  ? "bg-[#eefcf3] text-[#1c6f3c] border-[#a3f0bd]" 
                  : "bg-[#fdf2f2] text-[#9b1c1c] border-[#f8b4b4]"
              }`}>
                {status.message}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 w-full h-[50px] rounded-[12px] bg-black text-white text-[14px] font-bold border border-black hover:bg-[#b8965a] hover:border-[#b8965a] transition duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
            >
              <i className="fa-regular fa-envelope"></i>
              {submitting 
                ? (lang === "EN" ? "SUBSCRIBING..." : "WIRD ABONNIERT...")
                : (lang === "EN" ? "Subscribe" : "Abonnieren")}
            </button>
          </form>

          {/* BOTTOM TEXT */}
          <p className="mt-4 text-[12px] text-[#7a7a7a]">
            {lang === "EN" ? "No spam. Unsubscribe anytime." : "Keine unerwünschten E-Mails. Eine Abmeldung ist jederzeit möglich."}
          </p>

        </div>

      </div>
    </div>
  );
};

export default SubscribeModal;