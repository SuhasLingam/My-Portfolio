import Home1 from "./components/Home/home1";
import Navbar from "./components/navbar";
import ParticleBg from "./components/particle-bg";
import React from "react";

const App = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <div>
          <ParticleBg />
          <Home1 />
        </div>
      </div>
    </>
  );
};

export default App;
