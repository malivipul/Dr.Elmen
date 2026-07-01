import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { unsubscribeSubscriber } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "../../components/commen/Icon";
import SEO from "../../components/commen/SEO";

const Unsubscribe = () => {
  const { lang } = useLanguage();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading"); // loading, success, error
  const [message, setMessage] = useState("");

  const email = searchParams.get("email");
  const isDirectSuccess = searchParams.get("success") === "true";
  const directError = searchParams.get("error");

  useEffect(() => {
    // If backend redirected with direct error
    if (directError) {
      setStatus("error");
      setMessage(decodeURIComponent(directError));
      return;
    }

    // If backend redirected with direct success
    if (isDirectSuccess) {
      setStatus("success");
      setMessage(
        lang === "EN"
          ? "You have been successfully unsubscribed from our newsletter."
          : "Sie wurden erfolgreich von unserem Newsletter abgemeldet."
      );
      return;
    }

    // If we need to perform the unsubscribe request from the frontend
    if (!email) {
      setStatus("error");
      setMessage(
        lang === "EN"
          ? "No subscriber email address was provided in the unsubscribe link."
          : "Im Abmeldelink wurde keine E-Mail-Adresse des Abonnenten angegeben."
      );
      return;
    }

    unsubscribeSubscriber({ email })
      .then((res) => {
        if (res.data && res.data.success) {
          setStatus("success");
          setMessage(
            lang === "EN"
              ? "You have been successfully unsubscribed from our newsletter."
              : "Sie wurden erfolgreich von unserem Newsletter abgemeldet."
          );
        } else {
          setStatus("error");
          setMessage(
            res.data?.message ||
              (lang === "EN"
                ? "Failed to unsubscribe. The link might be invalid or expired."
                : "Abmeldung fehlgeschlagen. Der Link ist möglicherweise ungültig oder abgelaufen.")
          );
        }
      })
      .catch((err) => {
        console.error("Subscription unsubscribe error:", err);
        setStatus("error");
        setMessage(
          err.response?.data?.message ||
            (lang === "EN"
              ? "An error occurred while processing your unsubscribe request. Please try again later."
              : "Bei der Bearbeitung Ihrer Abmeldung ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.")
        );
      });
  }, [email, isDirectSuccess, directError, lang]);

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
                {lang === "EN" ? "Unsubscribing..." : "Wird abgemeldet..."}
              </h2>
              <p className="text-[#0a3e40] text-[15px] leading-relaxed">
                {lang === "EN"
                  ? "We are processing your unsubscribe request. Please wait..."
                  : "Wir bearbeiten Ihre Abmeldung. Bitte warten..."}
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
                {lang === "EN" ? "Unsubscribed" : "Abgemeldet"}
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
                {lang === "EN" ? "Request Failed" : "Fehlgeschlagen"}
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
                {email && !directError && (
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2.5 rounded-full bg-[#b8965a] text-white text-sm font-bold border border-[#b8965a] hover:bg-transparent hover:text-[#b8965a] transition duration-300 cursor-pointer"
                  >
                    {lang === "EN" ? "Retry Request" : "Erneut versuchen"}
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

export default Unsubscribe;
