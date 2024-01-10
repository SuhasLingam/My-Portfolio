import React from "react";
import recipeImage from "../../assets/recipe.png";

const project1 = () => {
  const ProList = [
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
        <div className="md:gap-11 w-max md:grid-cols-4 gap-[50px] grid grid-cols-2 m-auto">
          {ProList.map((items) => (
            <span className="md:w-[340px] w-[200px] rounded-2xl backdrop-blur-[10px] hover:transition-all ring-4 ring-blue-500 hover:delay-75 hover:ease-in-out hover:shadow-blue-500 hover:shadow-custom md:flex-col  md:h-[450px] h-[310px] flex relative justify-center items-center">
              <a href={items.link}>{items.name}</a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default project1;
