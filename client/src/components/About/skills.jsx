import React from "react";
import {
  BashOriginal,
  VscodeOriginal,
  TailwindcssPlain,
  Windows8Original,
  SolidityOriginal,
  SshOriginalWordmark,
  CPlain,
  CplusplusOriginal,
  AnacondaOriginal,
  PythonOriginalWordmark,
  ReactOriginal,
  Css3Original,
  DebianOriginal,
  DockerOriginalWordmark,
  GitOriginal,
  GithubOriginal,
  HerokuOriginalWordmark,
  Html5Original,
  LinuxOriginal,
  JavascriptOriginal,
  MysqlOriginalWordmark,
  UbuntuPlain,
} from "devicons-react";
import block from "../../assets/blockchain-icon.svg";
import { SiVercel } from "react-icons/si";
import sock from "../../assets/socket-io-icon.svg";

const skills = () => {
  const SkillIcons = [
    {
      name: <CPlain size={50} />,
    },
    {
      name: <CplusplusOriginal size={50} />,
    },
    {
      name: <PythonOriginalWordmark size={50} />,
    },
    {
      name: <Html5Original size={50} />,
    },
    {
      name: <Css3Original size={50} />,
    },
    {
      name: <TailwindcssPlain size={50} />,
    },
    {
      name: <JavascriptOriginal size={50} />,
    },
    {
      name: <ReactOriginal size={50} />,
    },
    {
      name: <SolidityOriginal size={50} />,
    },
    {
      name: <BashOriginal size={50} />,
    },
    {
      name: <VscodeOriginal size={50} />,
    },
    {
      name: <Windows8Original size={50} />,
    },
    {
      name: <AnacondaOriginal size={50} />,
    },
    {
      name: <img src={sock} className="size-[60px]" />,
    },
    {
      name: <DockerOriginalWordmark size={50} />,
    },
    {
      name: <GitOriginal size={50} />,
    },
    {
      name: <GithubOriginal size={50} />,
    },
    {
      name: <SiVercel className="text-black" size={50} />,
    },
    {
      name: <LinuxOriginal size={50} />,
    },
    {
      name: <DebianOriginal size={50} />,
    },
    {
      name: <MysqlOriginalWordmark size={50} />,
    },
    {
      name: <SshOriginalWordmark size={50} />,
    },
    {
      name: <UbuntuPlain size={50} />,
    },
    {
      name: <img src={block} className="size-[70px]" />,
    },
  ];

  return (
    <div className="md:flex-col md:items-center md:justify-center md:w-full md:h-screen sticky flex">
      <h1 className="md:mb-[60px] md:text-6xl font-anton text-blue-500">
        My Tech Stack
      </h1>

      <div className="md:gap-9 md:h-fit md:grid-cols-6 md:grid-rows-4 grid grid-flow-row text-white">
        {SkillIcons.map((i) => (
          <span className="md:w-[150px] rounded-2xl hover:transition-all hover:ease-in-out hover:delay-75 ring-2 hover:shadow-custom hover:shadow-blue-600 ring-white md:h-[90px] justify-center items-center flex md:p-4 md:text-3xl bg-blue-900 bg-opacity-[60%] ">
            {i.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default skills;
