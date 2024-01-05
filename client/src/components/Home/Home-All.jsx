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
      <div>
        <ParticleBg />
        <Navbar />
        <div>
          <Home1 />
          <Intro />
          <Connect />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default homePage;
