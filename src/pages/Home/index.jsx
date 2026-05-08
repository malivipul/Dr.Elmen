import Hero from "./Hero";
import About from "./About";
import BlogSection from "./BlogSection";
import AuthorSection from "./AuthorSection";
import SpeakerSection from "./SpeakerSection";

import LogoSlider from "./LogoSlider";
import ServicesSection from "./ServicesSection";


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <LogoSlider />
      <BlogSection />
      <AuthorSection />
      <SpeakerSection />
      <ServicesSection />
    </>
  );
};

export default Home;