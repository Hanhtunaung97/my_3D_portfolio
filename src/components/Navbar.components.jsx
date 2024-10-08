import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponents = () => {
  return (
    <header className=" header">
      <NavLink
        to={"/"}
        className={
          "w-10 h-10 bg-white shadow-md flex justify-center items-center rounded-lg font-bold font-heading hover:-translate-y-0.5 hover:shadow-md hover:scale-105 transition-all"
        }
      >
        <p className="blue-gradient_text">TH</p>
      </NavLink>
      <nav className=" flex gap-7 text-lg font-medium font-heading">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : " text-black"
          }
        >
          <p className="hover:-translate-y-0.5 hover:scale-105 transition-all">
            About
          </p>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : " text-black"
          }
        >
          <p className="hover:-translate-y-0.5 hover:scale-105 transition-all">
            Projects
          </p>
        </NavLink>
      </nav>
    </header>
  );
};

export default NavbarComponents;
