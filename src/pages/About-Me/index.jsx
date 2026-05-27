import AboutBanner from "./AboutBanner";
import AboutProfile from "./AboutProfile";
import ExpertiseSection from "./ExpertiseSection";
import SectorsSection from "./SectorsSection";
import ContactCTASection from "./ContactCTASection";

import SEO from "../../components/commen/SEO";

const About = () => {
  return (
    <>
      <SEO page="about" />
      <AboutBanner />
      <AboutProfile />
      <ExpertiseSection />
      <SectorsSection />
      <ContactCTASection />
    </>
  );
};

export default About;
