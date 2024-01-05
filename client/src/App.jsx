import Intro from "./components/Home/intro";
import Home1 from "./components/Home/home1";
import Navbar from "./components/navbar";
import ParticleBg from "./components/particle-bg";
import React from "react";
import Connect from "./components/connect";

const App = () => {
  return (
    <>
      <div>
        <ParticleBg />
        <Navbar />
        <div>
          <Home1 />
          <Intro />
          <Connect />
        </div>
      </div>
    </>
  );
};

export default App;
