import React from "react";
import Type from "./type";

const home1 = () => {
  return (
    <div id="Main-Container" className=" md:flex sticky z-10 w-full m-auto">
      <div className="text-white  justify-center flex w-full md:pl-11 pl-4 pt-[120px] flex-col font-anton text-4xl md:text-6xl">
        {/** Name and TyperWriter */}
        <div className="md:space-y-4 md:m-0 m-auto space-y-2">
          <h1 className="flex">
            Hi There <span className="animate-waving-hand">👋🏻</span>
          </h1>

          <h1>
            I'M <span className="text-blue-500">SUHAS SRINIVAS LINGAM</span>
          </h1>
        </div>
        <div className="flex w-full text-blue-500 mt-[70px] md:mt-[120px] ">
          <Type />
        </div>
      </div>

      <div className="w-max flex items-center justify-center m-auto">
        {/** Image  */}
        <iframe
          className="md:size-[450px] size-[270px] md:mr-[150px] sticky"
          src="https://lottie.host/embed/0f0b95c2-c88d-41bc-a384-9eb5efd586e4/sX8ASpkm0i.json"
        ></iframe>
      </div>
    </div>
  );
};

export default home1;
