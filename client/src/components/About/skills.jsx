import React from "react";

const skills = () => {
  const SkillIcons = [
    {
      name: "devicon-solidity-plain",
      mark: "solidity",
    },
  ];

  return (
    <div>
      <div className="sticky grid items-center justify-between h-full grid-flow-col grid-cols-4 grid-rows-4 space-y-5 text-white">
        {SkillIcons.map((i) => (
          <span className="w-[150px] h-[90px] justify-center items-center flex p-4 text-3xl bg-red-700 border-2">
            <i class={i.name}></i>
          </span>
        ))}
      </div>
    </div>
  );
};

export default skills;
