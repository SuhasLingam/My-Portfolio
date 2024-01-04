import Home2 from "./components/Home/Home2";
import Home1 from "./components/Home/home1";
import Navbar from "./components/navbar";
import ParticleBg from "./components/particle-bg";

import React from "react";

const App = () => {
  return (
    <>
      <div>
        <ParticleBg />
        <Navbar />
        <div>
          <Home1 />
          <Home2 />
        </div>
      </div>
    </>
  );
};

export default App;
