import { useState } from "react";

import Hero from "./Hero";
import About from "./About";
import BlogSection from "./BlogSection";
import AuthorSection from "./AuthorSection";
import SpeakerSection from "./SpeakerSection";
import LogoSlider from "./LogoSlider";
import ServicesSection from "./ServicesSection";

// MODAL
import SubscribeModal from "../../components/model/SubscribeModal";
const Home = () => {

  // MODAL STATE
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hero />

      <About />

      <LogoSlider />

      {/* BLOG SECTION */}
      <BlogSection
        setIsOpen={setIsOpen}
      />

      <AuthorSection />

      <SpeakerSection />

      <ServicesSection />

      {/* SUBSCRIBE MODAL */}
      <SubscribeModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Home;