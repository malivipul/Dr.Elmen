// PrivacyPolicy.jsx

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#f4f4f4] py-[60px] md:py-[60px]">

      <div className="max-w-[900px] mx-auto px-4 md:px-6">

        {/* TOP */}
        <div className="text-center max-w-[760px] mx-auto mb-10">

          <span className="text-[#b8965a] uppercase tracking-[3px] text-[11px] font-medium">
            Legal Information
          </span>

          <h1 className="title-font text-2xl md:text-[36px] leading-[1.05] text-black mt-3 mb-5">
            Privacy Policy
          </h1>

          <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[32px]">
            Information regarding the collection, use,
            and protection of personal data on this website.
          </p>

        </div>

        {/* CENTER BOX */}
        <div className="bg-[#e7dfd7] rounded-[34px] p-6 md:p-12">

          {/* CONTENT */}
          <div className="max-w-[900px] mx-auto space-y-12">

            {/* DATA COLLECTION */}
            <div className="text-left">

              <h3 className="title-font text-[26px] text-black mb-4">
                Data Collection
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                Personal data is collected only when voluntarily
                provided through contact forms, email communication,
                or website interactions.
              </p>

            </div>

            {/* USE OF INFORMATION */}
            <div className="text-left">

              <h3 className="title-font text-[26px] text-black mb-4">
                Use of Information
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                Information submitted through this website is used
                solely for communication, project inquiries,
                and professional collaboration purposes.
              </p>

            </div>

            {/* DATA PROTECTION */}
            <div className="text-left">

              <h3 className="title-font text-[26px] text-black mb-4">
                Data Protection
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                Appropriate technical and organisational measures
                are implemented to protect personal information
                against unauthorised access or misuse.
              </p>

            </div>

            {/* COOKIES */}
            <div className="text-left">

              <h3 className="title-font text-[26px] text-black mb-4">
                Cookies
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                This website may use cookies to improve user experience,
                website functionality, and performance analysis.
              </p>

            </div>

            {/* THIRD PARTY */}
            <div className="text-left">

              <h3 className="title-font text-[26px] text-black mb-4">
                Third-Party Services
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                External services or embedded content may process
                technical data according to their own privacy policies
                and regulations.
              </p>

            </div>

            {/* CONTACT */}
            <div className="text-left">

              <h3 className="title-font text-[26px] text-black mb-4">
                Contact
              </h3>

              <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
                For questions regarding privacy or personal data,
                please contact:
                <br />
                info@edlmann.com
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default PrivacyPolicy;