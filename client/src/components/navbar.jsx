import React from "react";

const Links = [
  { name: "Home", link: "/" },
  { name: "Home", link: "/" },
  { name: "Home", link: "/" },
  { name: "Home", link: "/" },
];

const navbar = () => {
  return (
    <div className="bg-gradient-to-tr from-yellow-400 via-red-400 to-pink-500 p-5">
      <ul>
        {Links.map((link) => (
          <li ref={link}> {link.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default navbar;
