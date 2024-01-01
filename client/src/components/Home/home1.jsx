import React from "react";
import Type from "./type";

const home1 = () => {
  return (
    <div>
      <div className="p-2 flex-wrap block md:text-5xl lg:text-6xl md:left-[60px] md:top-[250px] text-4xl fixed text-wrap z-10 items-center top-[210px] left-[30px] align-middle lg:top-[330px] lg:left-[150px] text-white">
        <p className="font-anton flex items-center gap-5">
          Hi There! <span className="animate-waving-hand ">👋🏻</span>
          <span className="fixed top-[530px] left-[100px]  ">
            <iframe
              className="md:block lg:w-[500px] lg:h-[500px] md:fixed md:right-[60px] md:top-[170px] md:w-[300px] md:h-[300px] lg:fixed lg:right-[100px] lg:top-[120px]"
              src="https://lottie.host/embed/0f0b95c2-c88d-41bc-a384-9eb5efd586e4/sX8ASpkm0i.json"
            ></iframe>
          </span>
        </p>
        <p className=" md:items-center font-anton gap-5 mt-6 mb-[100px]">
          I'M <span className="text-blue-500">SUHAS SRINIVAS LINGAM</span>
        </p>
        <span className="font-anton text-blue-500">
          <Type />
        </span>
      </div>
    </div>
  );
};

export default home1;
