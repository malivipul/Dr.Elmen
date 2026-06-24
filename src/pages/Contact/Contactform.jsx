import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { addContact, getSettings } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const ContactForm = () => {
  const { lang } = useLanguage();

  const [socialLinks, setSocialLinks] = useState({
    linkedin: "https://www.linkedin.com/in/raphael-edlmann-60200059/",
    twitter: "https://x.com/RaphaelEdlmann",
    facebook: "https://www.facebook.com/profile.php?id=61587719828544",
    instagram: "https://www.instagram.com/edlmannraphael/",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });
  const [submitting, setSubmitting] = useState(false);

  // FETCH SOCIAL SETTINGS
  useEffect(() => {
    getSettings()
      .then((res) => {
        if (res.data) {
          setSocialLinks({
            linkedin: res.data.linkedin || "",
            twitter: res.data.twitter || "",
            facebook: res.data.facebook || "",
            instagram: res.data.instagram || "",
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching settings for contact form:", err);
      });
  }, []);

  // LOAD CALENDLY SCRIPT
  useEffect(() => {
    // CSS
    const existingCss = document.querySelector(
      'link[href="https://assets.calendly.com/assets/external/widget.css"]',
    );
    if (!existingCss) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // JS
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]',
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // CALENDLY POPUP
  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/contact-edlmann/30min?month=2026-05",
      });
    } else {
      window.open(
        "https://calendly.com/contact-edlmann/30min?month=2026-05",
        "_blank",
      );
    }
    return false;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ success: null, message: "" });

    addContact(formData)
      .then((res) => {
        setSubmitting(false);
        if (res.data && res.data.success) {
          setStatus({
            success: true,
            message:
              lang === "EN"
                ? "Thank you! Your message has been sent successfully."
                : "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
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

        // Auto-clear status after 5 seconds
        setTimeout(() => {
          setStatus({ success: null, message: "" });
        }, 5000);
      })
      .catch((err) => {
        console.error("Error submitting contact form:", err);
        setSubmitting(false);
        setStatus({
          success: false,
          message:
            err.response?.data?.message ||
            (lang === "EN"
              ? "Something went wrong. Please try again."
              : "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut."),
        });

        // Auto-clear status after 5 seconds
        setTimeout(() => {
          setStatus({ success: null, message: "" });
        }, 5000);
      });
  };

  return (
    <section className="relative overflow-hidden bg-[#f4f4f4] py-[40px] md:py-[45px]">
      {/* BG EFFECT */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] rounded-full bg-[#b8965a]/10 blur-[90px]"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[220px] h-[220px] rounded-full bg-[#0a3e40]/5 blur-[90px]"></div>
      </div>

      <div className="relative max-w-[1180px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            {/* GET IN TOUCH BOX */}
            {/* <div className="relative overflow-hidden rounded-[28px] bg-[#e7dfd7] border border-black/5 p-5 md:p-7 h-fit shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
              <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-black/5 blur-3xl rounded-full pointer-events-none"></div>

              <div className="absolute top-[-70px] left-[-70px] w-[180px] h-[180px] rounded-full bg-[#b8965a]/10 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-[480px]">
                <span className="text-[#b8965a] uppercase tracking-[2px] text-[12px] font-bold">
                  {lang === "EN" ? "Get In Touch" : "Kontakt"}
                </span>

                <h3 className="font-['Inter',sans-serif] text-[22px] md:text-[28px] text-black leading-[1.08] mt-3 mb-4 font-bold">
                  {lang === "EN"
                    ? "Let’s Build Something Great"
                    : "Lassen Sie uns gemeinsam etwas bewegen"}
                </h3>

                <p className="text-[14px] md:text-[16px] text-black/60 leading-[26px]">
                  {lang === "EN"
                    ? "I collaborate with organizations, leaders, and teams to create impactful workshops, speaking sessions, and transformation initiatives that drive meaningful results."
                    : "Ob strategische Workshops, inspirierende Keynotes oder Consulting Projekte – ich unterstütze Organisationen, Führungskräfte und Teams dabei, nachhaltigen Mehrwert zu schaffen."}
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-4 mt-7 flex-wrap">
                {socialLinks.linkedin && (
                  <Link
                    to={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px] flex text-black hover:text-white items-center justify-center border border-black/40 rounded-full hover:bg-[#b8965a] hover:border-[#b8965a] transition-all duration-300"
                  >
                    <FaLinkedinIn className="text-[18px] " />
                  </Link>
                )}

                {socialLinks.twitter && (
                  <Link
                    to={socialLinks.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px] flex text-black hover:text-white items-center justify-center border border-black/40 rounded-full hover:bg-[#b8965a] hover:border-[#b8965a] transition-all duration-300"
                  >
                    <FaXTwitter className="text-[18px] " />
                  </Link>
                )}

                {socialLinks.facebook && (
                  <Link
                    to={socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px] flex text-black hover:text-white items-center justify-center border border-black/40 rounded-full hover:bg-[#b8965a] hover:border-[#b8965a] transition-all duration-300"
                  >
                    <FaFacebookF className="text-[18px] " />
                  </Link>
                )}

                {socialLinks.instagram && (
                  <Link
                    to={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[45px] h-[45px] flex text-black hover:text-white items-center justify-center border border-black/40 rounded-full hover:bg-[#b8965a] hover:border-[#b8965a] transition-all duration-300"
                  >
                    <FaInstagram className="text-[18px] " />
                  </Link>
                )}
              </div>
            </div> */}

            {/* BOOKING BOX */}
            <div className="relative overflow-hidden rounded-[28px] bg-white border border-[#ece6dc] p-5 md:p-7 shadow-[0_15px_50px_rgba(0,0,0,0.04)]">
              <div className="absolute top-[-50px] right-[-50px] w-[160px] h-[160px] rounded-full bg-[#b8965a]/10 blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <span className="text-[#b8965a] uppercase tracking-[2px] text-[12px] font-bold">
                  {lang === "EN" ? "Appointment Booking" : "Terminbuchung"}
                </span>

                <h3 className="font-['Inter',sans-serif] text-[22px] md:text-[28px] text-black leading-[1.1] mt-3 font-bold">
                  {lang === "EN"
                    ? "Schedule Your Consultation"
                    : "Vereinbaren Sie Ihr persönliches Beratungsgespräch"}
                </h3>

                <p className="text-[14px] md:text-[16px] text-[#0a3e40] leading-[28px] mt-4">
                  {lang === "EN"
                    ? "Easily book a professional consultation session directly through the integrated Calendly scheduling system for workshops, strategy discussions, and collaboration meetings."
                    : "Buchen Sie Ihr persönliches Beratungsgespräch ganz einfach über das integrierte Calendly-Buchungssystem – für Workshops, Strategiegespräche und gemeinsame Projektgespräche."}
                </p>

                <button
                  onClick={openCalendly}
                  type="button"
                  className="mt-7 inline-flex items-center justify-center gap-3 px-7 h-[46px] rounded-full bg-[#b8965a] border border-[#b8965a] text-white text-[14px] font-bold hover:bg-transparent hover:text-[#b8965a] transition-all duration-300 cursor-pointer"
                >
                  {lang === "EN" ? "Book a Meeting" : "Termin vereinbaren"}
                  <span className="text-[18px] font-bold">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (CONTACT FORM) */}
          <div className="bg-white rounded-[24px] p-5 md:p-8 border border-[#ece6dc] shadow-[0_8px_24px_rgba(0,0,0,0.03)]">
            {/* TOP */}
            <div className="mb-6">
              <span className="text-[#b8965a] uppercase tracking-[2px] text-[12px] font-bold">
                {lang === "EN" ? "Contact" : "Kontakt"}
              </span>

              <h2 className="title-font text-[22px] md:text-[30px] leading-[1.05] text-black mt-2 mb-3 font-semibold">
                {lang === "EN"
                  ? "Let’s Start a Conversation"
                  : "Lassen Sie uns ins Gespräch kommen"}
              </h2>

              <p className="text-[15px] text-[#0a3e40] leading-[24px] max-w-[500px]">
                {lang === "EN"
                  ? "Whether it’s workshops, consulting, speaking engagements, or strategic collaborations — let’s connect and create meaningful impact together."
                  : "Ob strategische Workshops, Beratung, Keynotes oder Kooperationen – lassen Sie uns gemeinsam nachhaltige Wirkung schaffen."}
              </p>
            </div>

            {/* FORM IN A TABLE-BASED LAYOUT */}
            <form onSubmit={handleSubmit} className="w-full">
              <table className="w-full border-collapse">
                <tbody>
                  {/* NAME */}
                  <tr>
                    <td className="py-2">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={lang === "EN" ? "Your Name" : "Name"}
                        required
                        className="w-full h-[48px] rounded-[14px] border border-[#ece6dc] bg-[#faf8f4] px-4 text-[13px] text-black placeholder:text-[#6e6e6e] outline-none focus:border-[#b8965a] transition-all duration-300"
                      />
                    </td>
                  </tr>

                  {/* EMAIL */}
                  <tr>
                    <td className="py-2">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={
                          lang === "EN" ? "Email Address" : "E-Mail-Adresse"
                        }
                        required
                        className="w-full h-[48px] rounded-[14px] border border-[#ece6dc] bg-[#faf8f4] px-4 text-[13px] text-black placeholder:text-[#6e6e6e] outline-none focus:border-[#b8965a] transition-all duration-300"
                      />
                    </td>
                  </tr>

                  {/* SUBJECT */}
                  <tr>
                    <td className="py-2">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={lang === "EN" ? "Subject" : "Betreff"}
                        required
                        className="w-full h-[48px] rounded-[14px] border border-[#ece6dc] bg-[#faf8f4] px-4 text-[13px] text-black placeholder:text-[#6e6e6e] outline-none focus:border-[#b8965a] transition-all duration-300"
                      />
                    </td>
                  </tr>

                  {/* MESSAGE */}
                  <tr>
                    <td className="py-2">
                      <textarea
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={
                          lang === "EN" ? "Your Message" : "Ihre Nachricht"
                        }
                        required
                        className="w-full rounded-[18px] border border-[#ece6dc] bg-[#faf8f4] px-4 py-4 text-[13px] text-black placeholder:text-[#6e6e6e] outline-none resize-none focus:border-[#b8965a] transition-all duration-300"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* STATUS MESSAGES */}
              {status.message && (
                <div
                  className={`mt-4 p-3 rounded-[12px] text-center text-xs font-semibold border ${
                    status.success
                      ? "bg-[#eefcf3] text-[#1c6f3c] border-[#a3f0bd]"
                      : "bg-[#fdf2f2] text-[#9b1c1c] border-[#f8b4b4]"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* BUTTON */}
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center h-[46px] px-7 gap-3 rounded-full bg-[#b8965a] border border-[#b8965a] text-white text-[13px] font-bold tracking-[1.5px] hover:bg-transparent hover:text-[#b8965a] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {submitting
                    ? lang === "EN"
                      ? "SENDING..."
                      : "WIRD GESENDET..."
                    : lang === "EN"
                      ? "Send Message"
                      : "Anfrage senden"}
                  <span className="text-[18px] font-bold">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
