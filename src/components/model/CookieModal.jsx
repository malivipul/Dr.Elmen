import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { saveCookieConsent, getCookieConsent } from "../../api/api";

const translations = {
  EN: {
    title: "We Value Your Privacy",
    description: "We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalised content and targeted advertisements, to analyse our website traffic, and to understand where our visitors are coming from.",
    agree: "I agree",
    decline: "I decline",
    customize: "Change my preferences",
    preferences: "Cookie Preferences",
    prefDescription: "You can choose which cookies you would like to allow. Strictly necessary cookies are required for the website to function properly and cannot be disabled.",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    savePreferences: "Save Preferences",
    back: "Back",
    categories: {
      necessary: {
        title: "Strictly Necessary Cookies",
        // desc: "These cookies are essential for the website to function properly. They cannot be disabled."
      },
      preferences: {
        title: "Preference Cookies",
        // desc: "These cookies enable the website to remember information that changes the way the website behaves or looks, like your preferred language."
      },
      analytics: {
        title: "Analytics Cookies",
        // desc: "These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously."
      },
      marketing: {
        title: "Marketing Cookies",
        // desc: "These cookies are used to track visitors across websites to allow publishers to display relevant and engaging ads."
      }
    }
  },
  DE: {
    title: "Wir schätzen Ihre Privatsphäre",
    description: "Wir verwenden Cookies und andere Tracking-Technologien, um Ihr Nutzungserlebnis auf unserer Website zu verbessern, Ihnen personalisierte Inhalte und gezielte Werbung anzuzeigen, den Datenverkehr auf unserer Website zu analysieren und nachzuvollziehen, woher unsere Besucher kommen.",
    agree: "Ich stimme zu",
    decline: "Ich lehne ab",
    customize: "Meine Einstellungen ändern",
    preferences: "Cookie-Einstellungen",
    prefDescription: "Sie können auswählen, welche Cookies Sie zulassen möchten. Notwendige Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.",
    acceptAll: "Alle akzeptieren",
    rejectAll: "Alle ablehnen",
    savePreferences: "Einstellungen speichern",
    back: "Zurück",
    categories: {
      necessary: {
        title: "Unbedingt erforderliche Cookies",
        // desc: "Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Sie können nicht deaktiviert werden."
      },
      preferences: {
        title: "Präferenz-Cookies",
        // desc: "Diese Cookies ermöglichen es der Website, sich an Informationen zu erinnern, die das Verhalten oder Aussehen der Website verändern, wie z. B. Ihre bevorzugte Sprache."
      },
      analytics: {
        title: "Analyse-Cookies",
        // desc: "Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym sammeln und melden."
      },
      marketing: {
        title: "Marketing-Cookies",
        // desc: "Diese Cookies werden verwendet, um Besuchern über Websites hinweg zu folgen, damit Publisher relevante und ansprechende Werbung anzeigen können."
      }
    }
  }
};

const Toggle = ({ checked, onChange, disabled }) => {
  return (
    <button
      type="button"
      onClick={disabled ? undefined : () => onChange(!checked)}
      disabled={disabled}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${checked ? "bg-[#b8965a]" : "bg-[#2d2d2d]"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? "translate-x-5" : "translate-x-0"
          }`}
      />
    </button>
  );
};

const CookieModal = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.DE;

  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [visitorId, setVisitorId] = useState("");

  const getOrGenerateVisitorId = () => {
    let vid = localStorage.getItem("cookieVisitorId");
    if (!vid) {
      try {
        if (window.crypto && window.crypto.randomUUID) {
          vid = window.crypto.randomUUID();
        }
      } catch (e) { }
      if (!vid) {
        vid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
          const r = (Math.random() * 16) | 0;
          const v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        });
      }
      localStorage.setItem("cookieVisitorId", vid);
    }
    return vid;
  };

  useEffect(() => {
    const vid = getOrGenerateVisitorId();
    setVisitorId(vid);

    const saved = localStorage.getItem("cookieConsentSaved") === "true";
    const localConsentStr = localStorage.getItem("cookieConsent");

    if (localConsentStr) {
      try {
        const localConsent = JSON.parse(localConsentStr);
        setPreferences(!!localConsent.preferences);
        setAnalytics(!!localConsent.analytics);
        setMarketing(!!localConsent.marketing);
        window.cookieConsent = localConsent;
        window.dispatchEvent(new CustomEvent("cookieConsentUpdated", { detail: localConsent }));
      } catch (e) {
        console.error("Error parsing local cookie consent", e);
      }
    }

    if (!saved) {
      setIsVisible(true);
    } else {
      // Async verification with the server
      getCookieConsent(vid)
        .then((res) => {
          if (res.data && res.data.success && res.data.data) {
            const serverConsent = res.data.data;
            const updatedConsent = {
              necessary: true,
              preferences: !!serverConsent.preferences,
              analytics: !!serverConsent.analytics,
              marketing: !!serverConsent.marketing,
            };
            localStorage.setItem("cookieConsent", JSON.stringify(updatedConsent));
            setPreferences(updatedConsent.preferences);
            setAnalytics(updatedConsent.analytics);
            setMarketing(updatedConsent.marketing);
            window.cookieConsent = updatedConsent;
            window.dispatchEvent(new CustomEvent("cookieConsentUpdated", { detail: updatedConsent }));
          }
        })
        .catch((err) => {
          console.warn("Could not retrieve cookie consent from server, using local cache.", err);
        });
    }

    // Window event listener to reopen consent modal programmatically
    const handleOpenModal = () => {
      setIsVisible(true);
      setShowPreferences(true); // Open directly to preferences mode on manual request
    };

    window.addEventListener("openCookieModal", handleOpenModal);
    return () => {
      window.removeEventListener("openCookieModal", handleOpenModal);
    };
  }, []);

  const handleSave = async (consentChoices) => {
    const consentObj = {
      necessary: true,
      preferences: !!consentChoices.preferences,
      analytics: !!consentChoices.analytics,
      marketing: !!consentChoices.marketing,
    };

    localStorage.setItem("cookieConsent", JSON.stringify(consentObj));
    localStorage.setItem("cookieConsentSaved", "true");
    window.cookieConsent = consentObj;
    window.dispatchEvent(new CustomEvent("cookieConsentUpdated", { detail: consentObj }));

    setIsVisible(false);

    try {
      await saveCookieConsent({
        visitorId,
        necessary: true,
        preferences: consentObj.preferences,
        analytics: consentObj.analytics,
        marketing: consentObj.marketing,
        consentVersion: "1.0",
      });
    } catch (error) {
      console.error("Failed to sync cookie consent with database", error);
    }
  };

  const handleAgreeAll = () => {
    const choices = { preferences: true, analytics: true, marketing: true };
    setPreferences(true);
    setAnalytics(true);
    setMarketing(true);
    handleSave(choices);
  };

  const handleDeclineAll = () => {
    const choices = { preferences: false, analytics: false, marketing: false };
    setPreferences(false);
    setAnalytics(false);
    setMarketing(false);
    handleSave(choices);
  };

  const handleSavePreferences = () => {
    handleSave({ preferences, analytics, marketing });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 right-3 z-[9999] w-[590px] max-w-[calc(100%-32px)] bg-[#171717]/95 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-[#2d2d2d] p-4 md:p-6 flex flex-col transition-all duration-300">
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#b8965a]">
        {showPreferences ? t.preferences : t.title}
      </h3>

      {showPreferences && (
        <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed mb-2">
          {t.prefDescription}
        </p>
      )}

      {!showPreferences ? (
        <>
          <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed mb-2">
            {t.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleAgreeAll}
              className="bg-[#b8965a] border border-[#b8965a] text-white hover:bg-transparent hover:text-[#b8965a] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer text-sm"
            >
              {t.agree}
            </button>

            <button
              onClick={handleDeclineAll}
              className="bg-transparent border border-[#2d2d2d] text-gray-300 hover:text-white hover:border-gray-500 font-semibold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer text-sm"
            >
              {t.decline}
            </button>

            <button
              onClick={() => setShowPreferences(true)}
              className="bg-transparent border border-[#b8965a] text-[#b8965a] hover:bg-[#b8965a] hover:text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer text-sm"
            >
              {t.customize}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4 my-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
            {/* Strictly Necessary */}
            <div className="flex items-center justify-between gap-2 p-2 mb-2 rounded-lg bg-[#222222]/50 border border-[#2d2d2d]/30">
              <div className="flex-1 pr-2">
                <h4 className="text-[14px] font-bold text-[#b8965a]">{t.categories.necessary.title}</h4>
                {t.categories.necessary.desc && (
                  <p className="text-gray-400 text-xs mt-1 leading-normal">{t.categories.necessary.desc}</p>
                )}
              </div>
              <div className="flex-shrink-0">
                <Toggle checked={true} disabled={true} onChange={() => { }} />
              </div>
            </div>

            {/* Preferences */}
            <div className="flex items-center justify-between gap-2 p-2 mb-2 rounded-lg bg-[#222222]/50 border border-[#2d2d2d]/30">
              <div className="flex-1 pr-2">
                <h4 className="text-[14px] font-bold text-white">{t.categories.preferences.title}</h4>
                {t.categories.preferences.desc && (
                  <p className="text-gray-400 text-xs mt-1 leading-normal">{t.categories.preferences.desc}</p>
                )}
              </div>
              <div className="flex-shrink-0">
                <Toggle checked={preferences} onChange={setPreferences} />
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between gap-2 p-2 mb-2 rounded-lg bg-[#222222]/50 border border-[#2d2d2d]/30">
              <div className="flex-1 pr-2">
                <h4 className="text-[14px] font-bold text-white">{t.categories.analytics.title}</h4>
                {t.categories.analytics.desc && (
                  <p className="text-gray-400 text-xs mt-1 leading-normal">{t.categories.analytics.desc}</p>
                )}
              </div>
              <div className="flex-shrink-0">
                <Toggle checked={analytics} onChange={setAnalytics} />
              </div>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between gap-2 p-2 mb-2 rounded-lg bg-[#222222]/50 border border-[#2d2d2d]/30">
              <div className="flex-1 pr-2">
                <h4 className="text-[14px] font-bold text-white">{t.categories.marketing.title}</h4>
                {t.categories.marketing.desc && (
                  <p className="text-gray-400 text-xs mt-1 leading-normal">{t.categories.marketing.desc}</p>
                )}
              </div>
              <div className="flex-shrink-0">
                <Toggle checked={marketing} onChange={setMarketing} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 ">
            <button
              onClick={handleAgreeAll}
              className="bg-[#b8965a] border border-[#b8965a] text-white hover:bg-transparent hover:text-[#b8965a] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer text-sm"
            >
              {t.acceptAll}
            </button>
            <button
              onClick={handleDeclineAll}
              className="bg-transparent border border-[#2d2d2d] text-gray-300 hover:text-white hover:border-gray-500 font-semibold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer text-sm"
            >
              {t.rejectAll}
            </button>
            <button
              onClick={handleSavePreferences}
              className="bg-[#b8965a] border border-[#b8965a] text-white hover:bg-transparent hover:text-[#b8965a] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer text-sm"
            >
              {t.savePreferences}
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default CookieModal;