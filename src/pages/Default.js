import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/defaultBcg.jpeg";
import { Link } from "react-router-dom";
const Default = () => {
  return (
    <>
      <Hero img={defaultBcg} title="404" max="true">
        <h2 className="text-uppercase">page not found</h2>
        <Link style={{ marginTop: "2rem" }} to="/" className="main-link">
          return home
        </Link>
      </Hero>
    </>
  );
};

export default Default;
