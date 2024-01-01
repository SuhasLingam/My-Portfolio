import React from "react";
import Type from "./type";

const home1 = () => {
  return (
    <div>
      <div className=" p-2 block text-6xl fixed w-full z-20 items-center top-[330px] left-[150px] text-white">
        <p className=" flex items-center font-anton gap-5 relative">
          Hi There! <span className="animate-waving-hand ">👋🏻</span>
          <span className="fixed right-[150px] top-[190px]">
            <iframe
              className="md:w-[400px] md:h-[400px] "
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
