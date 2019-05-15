import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/HomePage/Services";
import FeaturesProducts from "../components/HomePage/FeaturesProducts";

const HomePage = () => {
  return (
    <>
      <Hero title="amazing printers" max="true">
        <Link style={{ margin: "2rem" }} className="main-link" to="/products">
          our products
        </Link>
      </Hero>
      <Services />
      <FeaturesProducts />
    </>
  );
};

export default HomePage;
