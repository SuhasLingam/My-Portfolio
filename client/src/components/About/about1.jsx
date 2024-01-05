import React from "react";

const about1 = () => {
  return (
    <div>
      <div className="font-anton md:w-full md:h-screen sticky flex text-white">
        {/**Whoami */}
        <div className="md:w-full md:h-full md:bg-transparent md:justify-center md:items-center md:flex-col flex">
          <h1 className="md:text-6xl md:justify-center md:items-center md:flex">
            <b className="px-2 text-blue-500">Who</b> Am I ?
          </h1>
          <p className="text-wrap md:text-3xl md:p-8 md:text-justify">
            This is{" "}
            <b className="md:p-2 text-blue-500">SUHAS SRINIVAS LINGAM</b> , from
            Visakhapatnam, popularly known as “the city of destiny”, in Andhra
            Pradesh. I’m a Third year student at SRM University, pursuing
            <b className="md:p-2 text-blue-500">computer science</b>
            engineering. <br /> Im the CyberSecurity{" "}
            <b className="md:p-2 text-blue-500">Head</b> of the Technical Club
            called as CodeChefSrmRmp and Core Team of various Clubs and
            Communities across India
          </p>
        </div>
        {/**Image */}
        <div className="md:w-[85%] md:h-screen md:justify-center md:items-center flex">
          <iframe
            className="md:size-[420px]"
            src="https://lottie.host/embed/086d9b97-1b15-4f32-8452-94dae03ddcbf/hZCHOCzWpT.json"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default about1;
