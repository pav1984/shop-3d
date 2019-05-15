import React from "react";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpg";

import Info from "../components/AboutPage/Info";

const AboutPage = () => {
  return (
    <>
      <Hero img={aboutBcg} />
      <Info />
    </>
  );
};

export default AboutPage;
