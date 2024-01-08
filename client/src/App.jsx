import React from "react";
import HomePage from "./components/Home/Home-All";
import AboutAll from "./components/About/About-All";
import ProjectsAll from "./components/Projects/ProjectsAll";
import ParticleBg from "./components/particle-bg";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <ParticleBg />
      <HomePage />
      <AboutAll />
      <ProjectsAll />
      <Footer />
    </>
  );
};

export default App;
