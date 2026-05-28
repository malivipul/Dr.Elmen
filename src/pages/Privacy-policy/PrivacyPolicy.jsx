import { useEffect, useState } from "react";
import { getSettings } from "../../api/api";
import { useLanguage } from "../../context/LanguageContext";

const PrivacyPolicy = () => {
  const { lang } = useLanguage();
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
            Privacy Policy
          </h1>

          <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[32px]">
            Information regarding the collection, use,
            and protection of personal data on this website.
          </p>

        </div>

        {/* CENTER BOX */}
        <div className="bg-[#e7dfd7] rounded-[34px] p-6 md:p-12">

        {/* OVERVIEW */}
<div className="text-left">

  <h3 className="title-font text-[26px] text-black mb-4">
    1. An Overview of Data Protection
  </h3>

  {/* GENERAL INFORMATION */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    General Information
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term “personal data” comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.
  </p>

  {/* DATA RECORDING */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Data Recording on This Website
  </h4>

  {/* CONTROLLER */}
  <h5 className="text-[16px] font-semibold text-black mb-3">
    Who is the responsible party for the recording of data on this website (i.e., the “controller”)?
  </h5>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    The data on this website is processed by the operator of the website, whose contact information is available under section “Information about the responsible party (referred to as the “controller” in the GDPR)” in this Privacy Policy.
  </p>

  {/* RECORD */}
  <h5 className="text-[16px] font-semibold text-black mb-3">
    How do we record your data?
  </h5>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-6">
    We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.
  </p>

  {/* PURPOSE */}
  <h5 className="text-[16px] font-semibold text-black mb-3">
    What are the purposes we use your data for?
  </h5>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns.
  </p>

  {/* RIGHTS */}
  <h5 className="text-[16px] font-semibold text-black mb-3">
    What rights do you have as far as your information is concerned?
  </h5>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
    You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency. Please do not hesitate to contact us at any time if you have questions about this or any other data protection related issues.
  </p>

</div>
{/* HOSTING */}
<div className="text-left">

  <h3 className="title-font text-[26px] text-black mb-4">
    2. Hosting
  </h3>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    We are hosting the content of our website at the following provider:
    <br /><br />

    united-domains GmbH
    <br />
    Gautinger Straße 10
    <br />
    82319 Starnberg
    <br />
    Germany
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    When you visit our website, united-domains may record various log files, including your IP address. We use united-domains on the basis of Art. 6(1)(f) GDPR. We have a legitimate interest in ensuring that our website is displayed as reliably as possible. If appropriate consent has been obtained, processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG. This consent can be revoked at any time.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    We have concluded a data processing agreement (DPA) with the provider to ensure GDPR-compliant processing of personal data.
  </p>

  {/* DATA PROCESSING */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Data Processing
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
    We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.
  </p>

</div>
{/* GENERAL INFORMATION */}
<div className="text-left">

  <h3 className="title-font text-[26px] text-black mb-4">
    3. General Information and Mandatory Information
  </h3>

  {/* DATA PROTECTION */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Data Protection
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Whenever you use this website, a variety of personal information will be collected. Personal data comprises data that can be used to personally identify you. This Data Protection Declaration explains which data we collect as well as the purposes we use this data for. It also explains how, and for which purpose the information is collected.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    We herewith advise you that the transmission of data via the Internet (i.e., through e-mail communications) may be prone to security gaps. It is not possible to completely protect data against third-party access.
  </p>

  {/* CONTROLLER */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Information About the Responsible Party (referred to as the “controller” in the GDPR)
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Angaben nach TMG § 5:
    <br /><br />

    {contactName}
    <br />
    {contactAddress}
    <br />
    Phone: <a href={`tel:${contactPhone}`} className="hover:text-[#b8965a] transition-colors">{contactPhone}</a>
    <br />
    E-Mail: <a href={`mailto:${contactEmail}`} className="hover:text-[#b8965a] transition-colors">{contactEmail}</a>
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    The controller is the natural person or legal entity that single-handedly or jointly with others makes decisions as to the purposes of and resources for the processing of personal data (e.g., names, e-mail addresses, etc.).
  </p>

  {/* STORAGE */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Storage Duration
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for which it was collected no longer applies. If you assert a justified request for deletion or revoke your consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.
  </p>

  {/* LEGAL BASIS */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    General Information on the Legal Basis for the Data Processing on This Website
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR or Art. 9 (2)(a) GDPR, if special categories of data are processed according to Art. 9 (1) DSGVO.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    In the case of explicit consent to the transfer of personal data to third countries, the data processing is also based on Art. 49 (1)(a) GDPR. If you have consented to the storage of cookies or to the access to information in your end device (e.g., via device fingerprinting), the data processing is additionally based on § 25 (1) TTDSG. The consent can be revoked at any time.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    If your data is required for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6(1)(b) GDPR. Furthermore, if your data is required for the fulfillment of a legal obligation, we process it on the basis of Art. 6(1)(c) GDPR.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    Furthermore, the data processing may be carried out on the basis of our legitimate interest according to Art. 6(1)(f) GDPR. Information on the relevant legal basis in each individual case is provided in the following paragraphs of this privacy policy.
  </p>

  {/* THIRD COUNTRY */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Information on Data Transfer to Third-Party Countries
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    We use, among other technologies, tools from companies located in third-party countries that are not secure under data protection law, as well as US tools whose providers are not certified under the EU-US Data Privacy Framework (DPF).
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    If these tools are enabled, your personal data may be transferred to and processed in these countries. We would like you to note that no level of data protection comparable to that in the EU can be guaranteed in third countries that are insecure in terms of data protection law.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    We would like to point out that the US, as a secure third-party country, generally has a level of data protection comparable to that of the EU. Data transfer to the US is therefore permitted if the recipient is certified under the “EU-US Data Privacy Framework” (DPF) or has appropriate additional assurances.
  </p>

  {/* RECIPIENTS */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Recipients of Personal Data
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    In the scope of our business activities, we cooperate with various external parties. In some cases, this also requires the transfer of personal data to these external parties.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    We only disclose personal data to external parties if this is required as part of the fulfillment of a contract, if we are legally obligated to do so, if we have a legitimate interest in the disclosure pursuant to Art. 6 (1)(f) GDPR, or if another legal basis permits the disclosure of this data.
  </p>

  {/* REVOCATION */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Revocation of Your Consent to the Processing of Data
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    A wide range of data processing transactions are possible only subject to your express consent. You can revoke at any time any consent you have already given us. This shall be without prejudice to the lawfulness of any data collection that occurred prior to your revocation.
  </p>

  {/* RIGHTS */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Right to Object to the Collection of Data
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    In the event that data are processed on the basis of Art. 6(1)(e) or (f) GDPR, you have the right to object to the processing of your personal data at any time.
  </p>

  {/* COMPLAINT */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Right to Log a Complaint with the Competent Supervisory Agency
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    In the event of violations of the GDPR, data subjects are entitled to log a complaint with a supervisory agency, in particular in the member state where they usually maintain their domicile, place of work or at the place where the alleged violation occurred.
  </p>

  {/* PORTABILITY */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Right to Data Portability
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format.
  </p>

  {/* RECTIFICATION */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Information About, Rectification and Eradication of Data
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    Within the scope of the applicable statutory provisions, you have the right to demand information about your archived personal data, their source and recipients as well as the purpose of the processing of your data at any time.
  </p>

  {/* RESTRICTIONS */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Right to Demand Processing Restrictions
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-6">
    You have the right to demand the imposition of restrictions as far as the processing of your personal data is concerned.
  </p>

  <ul className="space-y-4 text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] pl-5 list-disc">

    <li>
      In the event that you should dispute the correctness of your data archived by us, we will usually need some time to verify this claim.
    </li>

    <li>
      If the processing of your personal data was/is conducted in an unlawful manner, you have the option to demand the restriction of the processing of your data instead of demanding the eradication of this data.
    </li>

    <li>
      If we do not need your personal data any longer and you need it to exercise, defend or claim legal entitlements, you have the right to demand the restriction of the processing of your personal data instead of its eradication.
    </li>

    <li>
      If you have raised an objection pursuant to Art. 21(1) GDPR, your rights and our rights will have to be weighed against each other.
    </li>

  </ul>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mt-8">
    If you have restricted the processing of your personal data, these data may be processed only subject to your consent or to claim, exercise or defend legal entitlements or to protect the rights of other natural persons or legal entities or for important public interest reasons cited by the European Union or a member state of the EU.
  </p>

</div>
{/* RECORDING OF DATA */}
<div className="text-left">

  <h3 className="title-font text-[26px] text-black mb-4">
    4. Recording of Data on This Website
  </h3>

  {/* COOKIES */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Cookies
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Our websites and pages use what the industry refers to as “cookies.” Cookies are small data packages that do not cause any damage to your device. They are either stored temporarily for the duration of a session (session cookies) or they are permanently archived on your device (permanent cookies). Session cookies are automatically deleted once you terminate your visit. Permanent cookies remain archived on your device until you actively delete them, or they are automatically eradicated by your web browser.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Cookies can be issued by us (first-party cookies) or by third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services of third-party companies into websites (e.g., cookies for handling payment services).
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Cookies have a variety of functions. Many cookies are technically essential since certain website functions would not work in the absence of these cookies (e.g., the shopping cart function or the display of videos). Other cookies may be used to analyze user behavior or for promotional purposes.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Cookies, which are required for the performance of electronic communication transactions, for the provision of certain functions you want to use (e.g., for the shopping cart function) or those that are necessary for the optimization (required cookies) of the website (e.g., cookies that provide measurable insights into the web audience), shall be stored on the basis of Art. 6(1)(f) GDPR, unless a different legal basis is cited.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    The operator of the website has a legitimate interest in the storage of required cookies to ensure the technically error-free and optimized provision of the operator’s services. If your consent to the storage of the cookies and similar recognition technologies has been requested, the processing occurs exclusively on the basis of the consent obtained (Art. 6(1)(a) GDPR and § 25 (1) TTDSG); this consent may be revoked at any time.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    You have the option to set up your browser in such a manner that you will be notified any time cookies are placed and to permit the acceptance of cookies only in specific cases. You may also exclude the acceptance of cookies in certain cases or in general or activate the delete-function for the automatic eradication of cookies when the browser closes.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    If cookies are deactivated, the functions of this website may be limited. Which cookies and services are used on this website can be found in this privacy policy.
  </p>

  {/* REQUEST */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Request by E-Mail, Telephone, or Fax
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    If you contact us by e-mail, telephone or fax, your request, including all resulting personal data (name, request) will be stored and processed by us for the purpose of processing your request. We do not pass these data on without your consent.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    These data are processed on the basis of Art. 6(1)(b) GDPR if your inquiry is related to the fulfillment of a contract or is required for the performance of pre-contractual measures.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    In all other cases, the data are processed on the basis of our legitimate interest in the effective handling of inquiries submitted to us (Art. 6(1)(f) GDPR) or on the basis of your consent (Art. 6(1)(a) GDPR) if it has been obtained; the consent can be revoked at any time.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px]">
    The data sent by you to us via contact requests remain with us until you request us to delete, revoke your consent to the storage or the purpose for the data storage lapses (e.g. after completion of your request). Mandatory statutory provisions - in particular statutory retention periods - remain unaffected.
  </p>

</div>
{/* SOCIAL MEDIA */}
<div className="text-left">

  <h3 className="title-font text-[26px] text-black mb-4">
    5. Social Media
  </h3>

  {/* ERECHT24 */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    eRecht24 Safe Sharing Tool
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Users may share the content of this website and its pages in a data protection law compliant manner on social networks, such as Facebook, X et al. For this purpose, this website uses the eRecht24 Safe Sharing Tool. This tool does not establish a direct connection between the network and the user until the user has actively clicked on one of the buttons.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    The click on this button constitutes content as defined in Art. 6(1)(a) GDPR and § 25 (1) TTDSG. This consent may be revoked by the user at any time, which shall affect all future actions.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    This tool does not automatically transfer user data to the operators of these platforms. If the user is registered with one of the social networks, an information window will pop up as soon as the social media elements of Facebook, X et al is used, which allows the user to confirm the text prior to sending it.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Our users have the option to share the content of this website and its page in a data protection law compliant manner on social networks, without entire browsing histories are being generated by the operators of these networks.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    This service is used to obtain the consent to the use of certain technologies required by law. The legal basis for this is Art. 6(1)(c) GDPR.
  </p>

  {/* FACEBOOK */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Facebook
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    We have integrated elements of the social network Facebook on this website. The provider of this service is Meta Platforms Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland. According to Facebook’s statement the collected data will be transferred to the USA and other third-party countries too.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8 break-all">
    An overview of the Facebook social media elements is available under the following link:
    <br />
    <a href="https://developers.facebook.com/docs/plugins/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://developers.facebook.com/docs/plugins/</a>
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    If the social media element has been activated, a direct connection between your device and the Facebook server will be established. As a result, Facebook will receive information confirming your visit to this website with your IP address.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    If you click on the Facebook Like button while you are logged into your Facebook account, you can link content of this website to your Facebook profile. Consequently, Facebook will be able to allocate your visit to this website to your user account.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    We have to emphasize that we as the provider of the website do not receive any information on the content of the transferred data and its use by Facebook.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8 break-all">
    For more information, please consult the Data Privacy Policy of Facebook at:
    <br />
    <a href="https://de-de.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://de-de.facebook.com/privacy/explanation</a>
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    The use of this service is based on your consent in accordance with Art. 6 (1)(a) GDPR and § 25 (1) TTDSG. Consent can be revoked at any time.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Insofar as personal data is collected on our website with the help of the tool described here and forwarded to Facebook, we and Meta Platforms Ireland Limited are jointly responsible for this data processing (Art. 26 DSGVO).
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8 break-all">
    The wording of the agreement can be found under:
    <br />
    <a href="https://www.facebook.com/legal/controller_addendum" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://www.facebook.com/legal/controller_addendum</a>
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8 break-all">
    Details can be found here:
    <br />
    <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://www.facebook.com/legal/EU_data_transfer_addendum</a>
    <br />
    <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://de-de.facebook.com/help/566994660333381</a>
    <br />
    <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://www.facebook.com/policy.php</a>
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10 break-all">
    More information:
    <br />
    <a href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000GnywAAC&status=Active" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000GnywAAC&status=Active</a>
  </p>

  {/* WHATSAPP */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    WhatsApp
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    We have integrated elements of the messaging service WhatsApp on this website. The provider of this service is WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    If you contact us via WhatsApp or click on a WhatsApp link on this website, a direct connection between your device and WhatsApp’s servers may be established. As a result, WhatsApp may receive information confirming your visit to this website, including your IP address and other technical data.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    We would like to point out that by using WhatsApp, personal data may be transferred to servers in third countries, including the United States. We have no influence over the extent and further use of the data collected by WhatsApp.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    The use of WhatsApp is based on your consent in accordance with Art. 6 (1)(a) GDPR and § 25 (1) TTDSG. Consent can be revoked at any time.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8 break-all">
    Further information:
    <br />
    <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://www.whatsapp.com/legal/privacy-policy</a>
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10">
    The company is certified under the EU-US Data Privacy Framework (DPF), which ensures compliance with European data protection standards for data processing in the United States.
  </p>

  {/* X */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    X (formerly Twitter)
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    We have integrated functions of the social media platform X (formerly Twitter) into this website. These functions are provided by X Corp., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    If the social media element has been activated, a direct connection between your device and X’s server will be established. As a result, X will receive information on your visit to this website.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8 break-all">
    More details:
    <br />
    <a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://twitter.com/en/privacy</a>
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8 break-all">
    Data transfer details:
    <br />
    <a href="https://gdpr.twitter.com/en/controller-to-controller-transfers.html" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://gdpr.twitter.com/en/controller-to-controller-transfers.html</a>
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10 break-all">
    Privacy settings:
    <br />
    <a href="https://twitter.com/account/settings" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://twitter.com/account/settings</a>
  </p>

  {/* INSTAGRAM */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    Instagram
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    We have integrated functions of the public media platform Instagram into this website. These functions are being offered by Meta Platforms Ireland Limited, Dublin, Ireland.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    If the social media element has been activated, a direct connection between your device and Instagram’s server will be established.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8 break-all">
    Instagram Privacy Policy:
    <br />
    <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://privacycenter.instagram.com/policy/</a>
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-10 break-all">
    Data transfer information:
    <br />
    <a href="https://www.facebook.com/legal/EU_data_transfer_addendum" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://www.facebook.com/legal/EU_data_transfer_addendum</a>
    <br />
    <a href="https://de-de.facebook.com/help/566994660333381" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://de-de.facebook.com/help/566994660333381</a>
  </p>

  {/* LINKEDIN */}
  <h4 className="text-[18px] font-semibold text-black mb-3">
    LinkedIn
  </h4>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    This website uses elements of the LinkedIn network. The provider is LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Ireland.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    Any time you access a page of this website that contains elements of LinkedIn, a connection to LinkedIn’s servers is established. LinkedIn is notified that you have visited this website with your IP address.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] mb-8">
    The use of this service is based on your consent in accordance with Art. 6 (1)(a) GDPR and § 25 (1) TTDSG. Consent can be revoked at any time.
  </p>

  <p className="text-[15px] md:text-[16px] text-[#0a3e40] leading-[33px] break-all">
    For further information:
    <br />
    <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#b8965a] transition-colors">https://www.linkedin.com/legal/privacy-policy</a>
  </p>

</div>

        </div>

      </div>

    </section>
  );
};

export default PrivacyPolicy;
