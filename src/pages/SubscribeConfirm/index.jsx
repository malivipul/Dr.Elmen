import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { confirmSubscriber } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "../../components/commen/Icon";
import SEO from "../../components/commen/SEO";

const SubscribeConfirm = () => {
  const { lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading"); // loading, success, error
  const [message, setMessage] = useState("");

  const email = searchParams.get("email");

  useEffect(() => {
    if (!email) {
      setStatus("error");
      setMessage(
        lang === "EN"
          ? "No subscriber email address was provided in the confirmation link."
          : "Im Bestätigungslink wurde keine E-Mail-Adresse des Abonnenten angegeben."
      );
      return;
    }

    confirmSubscriber({ email })
      .then((res) => {
        if (res.data && res.data.success) {
          setStatus("success");
          setMessage(
            lang === "EN"
              ? "Your subscription has been confirmed. Thank you for subscribing to HR & AI Insights!"
              : "Ihr Abonnement wurde erfolgreich bestätigt. Vielen Dank für Ihre Anmeldung zu HR & AI Insights!"
          );
        } else {
          setStatus("error");
          setMessage(
            res.data?.message ||
              (lang === "EN"
                ? "Failed to confirm subscription. The confirmation link might be invalid or expired."
                : "Abonnement konnte nicht bestätigt werden. Der Link ist möglicherweise ungültig oder abgelaufen.")
          );
        }
      })
      .catch((err) => {
        console.error("Subscription confirmation error:", err);
        setStatus("error");
        setMessage(
          err.response?.data?.message ||
            (lang === "EN"
              ? "An error occurred while confirming your subscription. Please try again later."
              : "Bei der Bestätigung Ihres Abonnements ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.")
        );
      });
  }, [email, lang]);

  return (
    <>
      <SEO page="privacy-policy" /> {/* Fallback layout metadata */}
      
      <section className="bg-[#f5f3ef] min-h-[70vh] flex items-center justify-center py-20 px-4">
        <div className="w-full max-w-[500px] bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-[#ece6dc] text-center animate-fadeIn">
          
          {/* LOADING STATE */}
          {status === "loading" && (
            <div className="space-y-6">
              <div className="w-16 h-16 bg-[#b8965a]/10 text-[#b8965a] rounded-full flex items-center justify-center mx-auto animate-spin">
                <Icon name="spinner" className="text-2xl" />
              </div>
              <h2 className="title-font text-2xl text-black">
                {lang === "EN" ? "Confirming..." : "Wird bestätigt..."}
              </h2>
              <p className="text-[#0a3e40] text-[15px] leading-relaxed">
                {lang === "EN"
                  ? "We are verifying and activating your newsletter subscription. Please wait..."
                  : "Wir überprüfen und aktivieren Ihr Newsletter-Abonnement. Bitte warten..."}
              </p>
            </div>
          )}

          {/* SUCCESS STATE */}
          {status === "success" && (
            <div className="space-y-6">
              <div className="w-16 h-16 bg-[#22c55e]/15 text-[#22c55e] rounded-full flex items-center justify-center mx-auto border border-[#22c55e]/30 scale-100 transition-transform duration-500">
                <Icon name="check" className="text-2xl" />
              </div>
              <h2 className="title-font text-2xl md:text-3xl text-black">
                {lang === "EN" ? "Subscription Confirmed!" : "Abonnement bestätigt!"}
              </h2>
              <p className="text-[#0a3e40] text-[15px] leading-relaxed">
                {message}
              </p>
              <div className="pt-4">
                <Link
                  to="/"
                  className="px-8 py-3 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 inline-flex items-center gap-2"
                >
                  {lang === "EN" ? "Back to Homepage" : "Zurück zur Startseite"}
                  <Icon name="arrow-right" />
                </Link>
              </div>
            </div>
          )}

          {/* ERROR STATE */}
          {status === "error" && (
            <div className="space-y-6">
              <div className="w-16 h-16 bg-[#ef4444]/15 text-[#ef4444] rounded-full flex items-center justify-center mx-auto border border-[#ef4444]/30">
                <Icon name="xmark" className="text-2xl" />
              </div>
              <h2 className="title-font text-2xl text-black">
                {lang === "EN" ? "Confirmation Failed" : "Bestätigung fehlgeschlagen"}
              </h2>
              <p className="text-[#0a3e40] text-[15px] leading-relaxed">
                {message}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/"
                  className="px-6 py-2.5 rounded-full border border-[#d6d3cc] text-[#6b6b6b] text-sm font-bold hover:border-[#b8965a] hover:text-[#b8965a] transition duration-300"
                >
                  {lang === "EN" ? "Go to Homepage" : "Zurück zur Startseite"}
                </Link>
                {email && (
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2.5 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 cursor-pointer"
                  >
                    {lang === "EN" ? "Retry Confirmation" : "Erneut versuchen"}
                  </button>
                )}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default SubscribeConfirm;
