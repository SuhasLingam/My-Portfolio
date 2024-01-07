import React from "react";
import Navbar from "../navbar";
import ParticleBg from "../particle-bg";
import Footer from "../footer";
import About1 from "./about1";
import Skills from "./skills";
import Callender from "./callender";

const AboutAll = () => {
  return (
    <div>
      <ParticleBg />
      <Navbar />
      <About1 />
      <Skills />
      <Callender />
      <Footer />
    </div>
  );
};

export default AboutAll;
