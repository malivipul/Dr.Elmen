import React, { useState, useEffect } from "react";
import { addSubscriber } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "../commen/Icon";

const SubscribeModal = ({ isOpen, setIsOpen }) => {
  const { lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      setStatus({
        success: false,
        message:
          lang === "EN"
            ? "You must agree to the Privacy Policy to subscribe."
            : "Sie müssen der Datenschutzerklärung zustimmen, um das Abonnement abzuschließen.",
      });
      return;
    }

    setSubmitting(true);
    setStatus({ success: null, message: "" });

    addSubscriber({ email })
      .then((res) => {
        setSubmitting(false);
        if (res.data && res.data.success) {
          setStatus({
            success: true,
            message:
              lang === "EN"
                ? "A confirmation email has been sent. Please check your inbox."
                : "Eine Bestätigungs-E-Mail wurde gesendet. Bitte überprüfen Sie Ihr Postfach.",
          });
          setEmail("");
          setConsent(false);
          // Close modal after 3 seconds on success
          setTimeout(() => {
            setIsOpen(false);
            setStatus({ success: null, message: "" });
          }, 3000);
        } else {
          setStatus({
            success: false,
            message:
              res.data?.message ||
              (lang === "EN"
                ? "Something went wrong. Please try again."
                : "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut."),
          });
        }
      })
      .catch((err) => {
        console.error("Error subscribing:", err);
        setSubmitting(false);
        setStatus({
          success: false,
          message:
            err.response?.data?.message ||
            (lang === "EN"
              ? "Something went wrong. Please try again."
              : "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut."),
        });
      });
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4">
      {/* MODAL */}
      <div className="relative w-full max-w-[460px] h-auto max-h-[90vh] overflow-y-auto rounded-[24px] bg-white p-6 md:p-8 shadow-2xl animate-fadeIn border border-[#ece6dc]">
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 md:right-5 md:top-5 top-3 text-[20px] text-black hover:rotate-90 transition duration-300 cursor-pointer"
        >
          <Icon name="xmark" />
        </button>

        {/* CONTENT */}
        <div className="text-center">
          {/* TITLE */}
          <h2 className="title-font text-[24px] md:text-[28px] leading-tight text-black">
            {lang === "EN"
              ? "Subscribe to HR & AI Insights"
              : "HR & AI Insights abonnieren"}
          </h2>

          {/* DESC */}
          <p className="mt-3 text-[#5f5f5f] text-[14px] leading-[1.7] max-w-[360px] mx-auto">
            {lang === "EN"
              ? "Get the latest articles, guides, and tools on HR, AI and the future of work delivered to your inbox."
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
                      placeholder={
                        lang === "EN"
                          ? "Your email address"
                          : "Ihre E-Mail Adresse"
                      }
                      required
                      className="w-full h-[50px] rounded-[12px] border border-[#e5e5e5] px-4 text-[14px] outline-none focus:border-[#b8965a] transition bg-[#faf8f4]"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-left">
                    <label className="flex items-start gap-2.5 text-xs text-[#5f5f5f] cursor-pointer selection:bg-transparent">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        required
                        className="mt-0.5 accent-[#b8965a] cursor-pointer"
                      />
                      <span>
                        {lang === "EN" ? (
                          <>
                            I agree to receive the newsletter and have read the{" "}
                            <a
                              href="/privacy-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#b8965a] hover:underline font-semibold"
                            >
                              Privacy Policy
                            </a>
                            .
                          </>
                        ) : (
                          <>
                            Ich stimme dem Erhalt des Newsletters zu und habe die{" "}
                            <a
                              href="/privacy-policy"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#b8965a] hover:underline font-semibold"
                            >
                              Datenschutzerklärung
                            </a>{" "}
                            gelesen.
                          </>
                        )}
                      </span>
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* STATUS MESSAGES */}
            {status.message && (
              <div
                className={`mt-3 p-2.5 rounded-[10px] text-center text-xs font-semibold border ${
                  status.success
                    ? "bg-[#eefcf3] text-[#1c6f3c] border-[#a3f0bd]"
                    : "bg-[#fdf2f2] text-[#9b1c1c] border-[#f8b4b4]"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-4 w-full h-[50px] rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center gap-2 text-[14px] hover:border-[#b8965a] justify-center disabled:opacity-50 cursor-pointer"
            >
              <Icon name="reg-envelope" />
              {submitting
                ? lang === "EN"
                  ? "SUBSCRIBING..."
                  : "WIRD ABONNIERT..."
                : lang === "EN"
                  ? "Subscribe"
                  : "Abonnieren"}
            </button>
          </form>

          {/* BOTTOM TEXT */}
          <p className="mt-4 text-[12px] text-[#7a7a7a]">
            {lang === "EN"
              ? "No spam. Unsubscribe anytime."
              : "Keine unerwünschten E-Mails. Eine Abmeldung ist jederzeit möglich."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeModal;
