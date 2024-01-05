import React from "react";
import { FaGithub, FaInstagram, FaMedium, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const footer = () => {
  const IconsLinks = [
    { name: <FaGithub size={15} />, link: "/" },
    { name: <FaLinkedin size={15} />, link: "/" },
    { name: <BsTwitterX size={15} />, link: "/" },
    { name: <FaMedium size={15} />, link: "/" },
    { name: <FaInstagram size={15} />, link: "/" },
  ];

  return (
    <footer className="font-anton md:flex-row md:justify-between md:p-4 sticky z-10 flex flex-col items-center justify-center p-2 m-auto text-sm text-white bg-gray-700">
      <div className="flex">© 2024 Sl. All Rights Reserved</div>
      <div className="md:ml-6 flex">Made with 💜 by Suhas Srinivas Lingam</div>

      <div className="flex items-center mr-6">
        <ul className="md:gap-4 flex flex-row gap-2 mt-1">
          {IconsLinks.map((link) => (
            <li>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default footer;
