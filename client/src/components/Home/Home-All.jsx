import React from "react";
import Intro from "./intro";
import Home1 from "./home1";
import Navbar from "../navbar";
import ParticleBg from "../particle-bg";
import Connect from "./connect";
import Footer from "../footer";

const homePage = () => {
  return (
    <div>
      <ParticleBg />
      <Navbar />
      <Home1 />
      <Intro />
      <Connect />
    </div>
  );
};

export default homePage;
