import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import recipeImage from "../../assets/recipe.png";
import weatherImage from "../../assets/weather.png";
import quoteImage from "../../assets/quote.png";
import calImage from "../../assets/cal.png";
import BuyImage from "../../assets/bmc.png";
import comingImage from "../../assets/coming.jpg";
import bugImage from "../../assets/bug.jpg";
import YanamImage from "../../assets/Yanam.png";

const project1 = () => {
  const ProList = [
    {
      name: "Agile Yanam",
      link: "https://agile-yanam-web.vercel.app/",
      pic: YanamImage,
      git: "https://github.com/SuhasLingam/Agile-YANAM-Web",
      text: "The Agile Yanam is a SaaS platform made up of React js and Tailwind Css",
    },
    {
      name: "Buy Me A Coffee Dapp",
      link: "https://buy-me-a-coffee-blockchain.vercel.app/",
      pic: BuyImage,
      git: "https://github.com/SuhasLingam/BuyMeACoffee-Blockchain",
      text: "This is a React.js and Tailwind CSS project with Hardhat for decentralized finance. It utilizes smart contracts, likely on Ethereum, ensuring secure transactions and a user-friendly experience. ",
    },
    {
      name: "Get Recipe App",
      link: "https://receipe-app-iota.vercel.app/",
      pic: recipeImage,
      git: "https://github.com/SuhasLingam/receipe-app",
      text: "The Recipe App is a React.js and Tailwind CSS project with API integration, providing users with a seamless experience to explore and discover recipes. The application offers a visually appealing interface, making it easy for users to find and try out new recipes.",
    },
    {
      name: "Weather App",
      link: "https://weather-app-rose-omega.vercel.app/",
      pic: weatherImage,
      git: "https://github.com/SuhasLingam/weather-app",
      text: "The Weather App, built with React js and Tailwind CSS, seamlessly integrates weather data through APIs, providing users with a sleek and responsive platform for real-time weather updates and forecasts.",
    },
    {
      name: "Random Quote Generator",
      link: "https://random-quotes-orpin-one.vercel.app/",
      pic: quoteImage,
      git: "https://github.com/SuhasLingam/Random-Quotes-Generator",
      text: "The Random Quote Generator, built with React.js and Tailwind CSS, provides a sleek interface for exploring curated quotes. It seamlessly integrates external APIs for a dynamic user experience.",
    },
    {
      name: "Calculator",
      link: "https://calculator-react-app-seven.vercel.app/",
      pic: calImage,
      git: "https://github.com/SuhasLingam/Calculator",
      text: "The React and Tailwind CSS Calculator offers a user-friendly design with advanced functionality. Built using React.js and Tailwind CSS, it ensures a responsive and visually appealing experience for performing various calculations.",
    },
    {
      name: "Bug Bounty Automation Tool",
      link: "",
      pic: bugImage,
      git: "https://github.com/SuhasLingam/BugBounty-Automation-Tool",
      text: "Built a Bash-based Bug Bounty Recon tool using assetfinder, amass, httprobe, subjack, nmap, Wayback, and eyewitness. Streamlines asset and subdomain identification for efficient bug bounty hunting. Ensure necessary tools are installed for optimal performance.",
    },
    {
      name: "Coming Soon",
      link: "",
      pic: comingImage,
      git: "",
      text: "Coming Soon",
    },
  ];

  return (
    <div className="font-anton md:my-11 my-11 md:flex-col md:w-full md:h-full md:pt-[80px] sticky flex flex-col w-full h-full text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="md:text-6xl md:mb-4 text-pretty flex items-center justify-center text-3xl">
          My Recent <b className="mx-3 text-blue-500"> Works</b>
        </h1>
        <h1 className="mb-9 md:text-xl font-thin">
          Here are few Projects i've Worked on Recently
        </h1>
      </div>

      <div className="flex items-center justify-center">
        <div className="md:gap-11 w-max md:grid-cols-4 gap-11 grid grid-cols-1">
          {ProList.map((items) => (
            <span className="md:w-[340px] w-[300px] rounded-2xl backdrop-blur-[10px] hover:transition-all ring-4 ring-opacity-50 ring-blue-500 hover:delay-75 hover:ease-in-out hover:shadow-blue-500 hover:shadow-custom md:flex-col md:h-[450px] h-[400px] flex relative justify-center items-center">
              <div className="rounded-t-2xl absolute w-full h-[70%] top-0">
                <img
                  src={items.pic}
                  className="w-full rounded-t-2xl h-[100%]"
                />
                <div className="absolute w-full opacity-0 hover:opacity-100 top-0 rounded-t-2xl h-[100%] hover:transition-all hover:ease-in-out hover:bg-blue-400">
                  <p className="text-wrap p-2 text-lg font-bold text-justify">
                    {items.text}
                  </p>
                </div>
              </div>
              <div className="absolute w-full h-[30%] items-center justify-center  flex flex-col rounded-b-2xl bottom-0 bg-transparent">
                <a className="p-3 border-2 rounded-lg" href={items.link}>
                  {items.name}
                </a>

                <a className="md:p-3 pt-3" href={items.git}>
                  <b className="rounded-xl flex items-center justify-center gap-2 p-2 border-2">
                    <FaGithub /> Github
                  </b>
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
