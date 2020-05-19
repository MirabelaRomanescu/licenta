import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to="\home">
            <img src={Logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeStyle={activeStyle}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/alimentatie" activeStyle={activeStyle}>
            Alimentatie
          </NavLink>
        </li>
        <li>
          <NavLink to="/despreDiabet" activeStyle={activeStyle}>
            Despre Diabet
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
