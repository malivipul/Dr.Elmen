// Imprint.jsx

const Imprint = () => {
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
               Legal information and contact details in accordance with
  applicable regulations and digital service requirements.
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
        Raphael Edlmann
        <br />
        Interim Manager for AI &
        Business Process Transformation
        <br />
        Musterstraße 123
        <br />
        80331 Munich
        <br />
        Germany
      </p>

    </div>

    {/* CONTACT */}
    <div className="text-left">

      <h3 className="title-font text-[26px] text-black mb-4">
        Contact Details
      </h3>

      <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
        Phone: +49 123 456789
        <br />
        Email: info@edlmann.com
        <br />
        Website: www.edlmann.com
      </p>

    </div>

    {/* EU DISPUTE */}
    <div className="text-left">

     <h3 className="title-font text-[26px] text-black mb-4">
  Online Dispute Resolution
</h3>

<p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
  In the event of any dispute, consumers may use the
  European Union’s online dispute resolution platform
  to seek an amicable settlement for online services
  and digital agreements.
</p>

    </div>

    {/* DISPUTE */}
    <div className="text-left">

      <h3 className="title-font text-[26px] text-black mb-4">
        Consumer Arbitration Board
      </h3>

      <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
        We are neither willing nor obligated to participate
        in dispute resolution proceedings before a
        consumer arbitration board.
      </p>

    </div>

    {/* BRANDING */}
    <div className="text-left">

      <h3 className="title-font text-[26px] text-black mb-4">
        Branding & Webdesign
      </h3>

      <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
        Concept, branding and website design developed
        for digital communication and business positioning.
      </p>

    </div>

  </div>

</div>

      </div>

    </section>
  );
};

export default Imprint;