import { useState } from "react";

import Banner from "./Banner";
import Blog from "./Blog";

import SEO from "../../components/commen/SEO";

// MODAL
import SubscribeModal from "../../components/model/SubscribeModal";

const About = () => {
  // MODAL STATE
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SEO page="insights" />
      <Banner />

      <Blog setIsOpen={setIsOpen} />

      {/* SUBSCRIBE MODAL */}
      <SubscribeModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default About;
