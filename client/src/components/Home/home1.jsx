import React from "react";
import Type from "./type";

const home1 = () => {
  return (
    <div>
      <div className=" p-2 block text-6xl fixed md:w-max text-wrap  z-10 items-center top-[300px] left-[50px] align-middle md:top-[330px] md:left-[150px] text-white">
        <p className=" flex items-center font-anton gap-5">
          Hi There! <span className="animate-waving-hand ">👋🏻</span>
          <span className="fixed md:right-[50px] md:top-[100px]">
            <iframe
              className="lg:block hidden lg:w-[600px] lg:h-[600px] "
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
