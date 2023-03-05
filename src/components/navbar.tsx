import React from "react";
import { Link } from "gatsby";
import { navigate } from "gatsby";
import logo from "../images/logo.png";

const NavBar = () => {
  const handleClick = () => {
    console.log("img click working");
    navigate("/");
  };

  return (
    <nav className="flex flex-row bg-background-grey justify-between font-lekton text-xl text-blue-400 underline h-16 items-center fixed w-screen text-tech-blue">
      <img
        src={logo}
        alt="logo"
        className="h-12 pl-2 cursor-pointer"
        onClick={handleClick}
      />
      <div className="p-1 pr-4 ">
        <Link to="/about" className="p-2">
          About
        </Link>
        <Link to="/projects" className="p-2">
          Projects
        </Link>
        <Link to="/contact" className="p-2">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
