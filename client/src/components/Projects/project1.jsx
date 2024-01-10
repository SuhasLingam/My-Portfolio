import React, { useState } from "react";
import recipeImage from "../../assets/recipe.png";
import weatherImage from "../../assets/weather.png";

const project1 = () => {
  const ProList = [
    {
      name: "Get Recipe App",
      link: "https://receipe-app-iota.vercel.app/",
      pic: recipeImage,
    },
    {
      name: "Weather App",
      link: "https://weather-app-rose-omega.vercel.app/",
      pic: weatherImage,
    },
    {
      name: "Get Recipe App",
      link: "https://receipe-app-iota.vercel.app/",
    },
    {
      name: "Get Recipe App",
      link: "https://receipe-app-iota.vercel.app/",
    },
    {
      name: "Get Recipe App",
      link: "https://receipe-app-iota.vercel.app/",
    },
    {
      name: "Get Recipe App",
      link: "https://receipe-app-iota.vercel.app/",
    },
    {
      name: "Get Recipe App",
      link: "https://receipe-app-iota.vercel.app/",
    },
    {
      name: "Get Recipe App",
      link: "https://receipe-app-iota.vercel.app/",
    },
  ];

  return (
    <div className="font-anton md:my-11 my-11 md:flex-col md:w-full md:h-full sticky flex flex-col w-full h-full text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-6xl md:mb-4 text-pretty flex items-center justify-center text-3xl">
          My Recent <b className="mx-3 text-blue-500"> Works</b>
        </h1>
        <h1 className="mb-9 md:text-xl font-thin">
          Here are few Projects i've Worked on Recently
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="md:gap-11 w-max md:grid-cols-4 gap-11 grid grid-cols-2">
          {ProList.map((items) => (
            <span className="md:w-[340px] w-[160px] rounded-2xl backdrop-blur-[10px] hover:transition-all ring-4 ring-opacity-50 ring-blue-500 hover:delay-75 hover:ease-in-out hover:shadow-blue-500 hover:shadow-custom md:flex-col  md:h-[450px] h-[240px] flex relative justify-center items-center">
              <div className="rounded-t-2xl absolute w-full h-[70%] top-0">
                <img
                  src={items.pic}
                  className="w-full rounded-t-2xl h-[100%]"
                />
                <div className="absolute w-full top-0 rounded-t-2xl h-[100%] hover:transition-all hover:ease-in-out  hover:bg-pink-300"></div>
              </div>
              <div className="absolute w-full h-[30%] items-center justify-center  flex rounded-b-2xl bottom-0 bg-transparent">
                <a className="p-3 border-2 rounded-lg" href={items.link}>
                  {items.name}
                </a>
              </div>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default project1;
