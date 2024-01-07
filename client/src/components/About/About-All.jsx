import React from "react";
import Navbar from "../navbar";
import ParticleBg from "../particle-bg";
import Footer from "../footer";
import About1 from "./about1";
import Skills from "./skills";

const AboutAll = () => {
  return (
    <div>
      <ParticleBg />
      <Navbar />
      <About1 />
      <Skills />
      <Footer />
    </div>
  );
};

export default AboutAll;
