import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <FaBars />
    </header>
  );
};

export default Header;