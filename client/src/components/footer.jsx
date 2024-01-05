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
    <footer className="font-anton sticky z-10 flex flex-row justify-between p-4 text-sm text-white bg-gray-700">
      <div>© 2024 Sl. All Rights Reserved</div>
      <div className="md:ml-6">Made with 💜 by Suhas Srinivas Lingam</div>

      <div className="flex items-center mr-6">
        <ul className="flex flex-row gap-4">
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
