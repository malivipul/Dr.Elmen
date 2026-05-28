import { useEffect, useState } from "react";
import { getSettings } from "../../api/api";

const Imprint = () => {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    getSettings().then((res) => {
      if (res.data) setSettings(res.data);
    });
  }, []);

  const contactName = "Dr. Raphael Edlmann";
  const contactAddress = "Wolfratshauser Str. 96 H, 81379 Munich, Germany";
  const contactPhone = settings?.phone || "+49 152 523 50 273";
  const contactEmail = settings?.email || "contact@edlmann.com";

  return (
    <section className="bg-[#f4f4f4] py-[60px] md:py-[60px]">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        {/* TOP */}
        <div className="text-center max-w-[760px] mx-auto mb-10">
          <span className="text-[#b8965a] uppercase tracking-[3px] text-[11px] font-medium">
            Legal Information
          </span>

          <h1 className="title-font text-2xl md:text-[36px] leading-[1.05] text-black mt-3 mb-5">
            Imprint
          </h1>

          <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[32px]">
            Legal information and contact details in accordance with applicable
            regulations and digital service requirements.
          </p>
        </div>
        {/* CENTER BOX */}
        <div className="bg-[#e7dfd7] rounded-[34px] p-6 md:p-12">
          {/* CONTENT */}
          <div className="max-w-[900px] mx-auto space-y-12">
            {/* ADDRESS */}
            <div className="text-left">
              <h3 className="title-font text-[26px] text-black mb-4">
                Address
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                {contactName}
                <br />
                {contactAddress}
              </p>
            </div>

            {/* CONTACT */}
            <div className="text-left">
              <h3 className="title-font text-[26px] text-black mb-4">
                Contact
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                Phone: <a href={`tel:${contactPhone}`} className="hover:text-[#b8965a] transition-colors">{contactPhone}</a>
                <br />
                E-mail: <a href={`mailto:${contactEmail}`} className="hover:text-[#b8965a] transition-colors">{contactEmail}</a>
              </p>
            </div>

            {/* EU DISPUTE */}
            <div className="text-left">
              <h3 className="title-font text-[26px] text-black mb-4">
                EU Dispute Resolution
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] break-words">
                The European Commission provides a platform for online dispute
                resolution (ODR):
                <br />
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://ec.europa.eu/consumers/odr/</a>
                <br />
                Our e-mail address can be found above in the site notice.
              </p>
            </div>

            {/* DISPUTE */}
            <div className="text-left">
              <h3 className="title-font text-[26px] text-black mb-4">
                Dispute Resolution Proceedings
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                We are not willing or obliged to participate in dispute
                resolution proceedings before a consumer arbitration board.
              </p>
            </div>

            {/* BRANDING */}
            <div className="text-left">
              <h3 className="title-font text-[26px] text-black mb-4">
                Branding and Webdesign
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                <a
                  href="https://anaxistech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b8965a] transition duration-300"
                >
                  AnaxisTech LLP
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Imprint;
