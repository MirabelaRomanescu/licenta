import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaUserAlt } from "react-icons/fa";
import Button from "./Button";
import "./styleNavbar.css";
import { handleSignOut } from "../functionalities/firebase/request";
import { AppContext } from "../AppContext";

const Navbar = ({option}) => {
  const { setState } = useContext(AppContext);
  const history = useHistory();
  const email = localStorage.getItem("user");
  const activeStyle = {
    fontWeight: "bold",
    color: "white",
  };

  const handleSignOutButton = async () => {
    const result = await handleSignOut();
    if (result) {
      setState(result);
    } else {
      setState(null);
      history.push("/login");
    }
  };

  return (
    <div className="navbar">
      <ul className="primaryUL">
        <li className="logo">
          <NavLink to="\home">
            <img src={Logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/parametrii"
            style={option === "profile" ? activeStyle : {}}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/alimentatie"
            style={option === "alimentatie" ? activeStyle : {}}
          >
            Alimentatie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/despreDiabet"
            style={option === "diabet" ? activeStyle : {}}
          >
            Despre Diabet
          </NavLink>
        </li>
        <li className="signOut">
          <FaUserAlt />
          <ul className="secondaryUL">
            <li>{email}</li>
            <li>
              <Button
                buttonName={"Sign Out"}
                styleButton={"signOutButton"}
                action={handleSignOutButton}
              />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
