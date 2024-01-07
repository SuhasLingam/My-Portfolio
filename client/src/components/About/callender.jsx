import React from "react";
import ReactGitHubCalendar from "react-github-calendar";

const callender = () => {
  return (
    <div className="sticky gap-11 flex flex-col items-center justify-center h-[400px]">
      <div>
        <h1 className="font-anton flex gap-2 text-6xl text-white">
          Days I <b className=" text-blue-500"> Code</b>
        </h1>
      </div>
      <div className="w-max flex text-white">
        <ReactGitHubCalendar username="SuhasLingam" />
      </div>
    </div>
  );
};

export default callender;
