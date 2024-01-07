import React, { useEffect, useState } from "react";
import ReactGitHubCalendar from "react-github-calendar";

const callender = () => {
  const explicitTheme = {
    dark: ["#383838", "#2463FF", "#033BDD", "#0D3EB5", "#052A85"],
  };

  return (
    <div className="sticky md:gap-11  flex md:flex-col flex-col items-center justify-center md:h-[400px]">
      <div>
        <h1 className="font-anton md:gap-2 md:text-6xl my-11 flex text-4xl text-white">
          Days I <b className="pl-2 text-blue-500"> Code</b>
        </h1>
      </div>
      <div className="md:w-max flex text-white">
        {
          <ReactGitHubCalendar
            username="SuhasLingam"
            colorScheme="dark"
            theme={explicitTheme}
          />
        }
      </div>
    </div>
  );
};

export default callender;
