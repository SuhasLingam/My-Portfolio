import React from "react";
import Type from "./type";

const home1 = () => {
  return (
    <div className="container">
      <div id="Main-Container" className="w-screen border-2 sticky flex z-10">
        <div className="text-white items-center flex border-2 w-full pl-11 pt-[120px] flex-wrap font-anton text-6xl">
          {/** Name and TyperWriter */}
          <h1 className="flex">
            Hi There <span className="animate-waving-hand">👋🏻</span>
          </h1>

          <h1>
            I'M <span className="text-blue-500">SUHAS SRINIVAS LINGAM</span>
          </h1>
          <div className="flex w-full text-blue-500 mt-[150px]">
            <Type />
          </div>
        </div>

        <div className=" w-full flex justify-center">
          {/** Image  */}
          <iframe
            className="size-[500px]"
            src="https://lottie.host/embed/0f0b95c2-c88d-41bc-a384-9eb5efd586e4/sX8ASpkm0i.json"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default home1;
