import Home1 from "./components/Home/home1";
import Navbar from "./components/navbar";
import ParticleBg from "./components/particle-bg";
import React from "react";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <ParticleBg />
          <Home1 />
          <Home1 />
          <Home1 />
          <Home1 />
        </div>
      </div>
    </>
  );
};

export default App;
