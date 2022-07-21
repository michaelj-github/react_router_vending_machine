import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/fries">
        Fries
      </NavLink>
      <NavLink exact to="/popcorn">
        Popcorn
      </NavLink>
      <NavLink exact to="/oreos">
        Oreos
      </NavLink>
    </nav>
  );
}

export default NavBar;