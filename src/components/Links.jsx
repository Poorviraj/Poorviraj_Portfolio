import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Links = () => {
  const location = useLocation();

  const links = [
    { name: "Home", link: "/" },
    { name: "About Me", link: "/about" },
    { name: "Services", link: "/service" },
    { name: "Projects", link: "/project" },
  ];

  return (
    <nav className="flex flex-col sm:flex-row lg:flex gap-[40px] text-white">
      {links.map((item, index) => (
        <Link
          to={item.link}
          key={index}
          className={`${
            location.pathname === item.link ? "text-blue-500" : "text-[#C4C4C4]"
          } hover:text-gray-500 transition duration-300 ease-in-out hover:scale-105 cursor-pointer`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Links;
