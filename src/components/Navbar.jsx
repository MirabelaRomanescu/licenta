import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Logo from "../assets/logoDiabookOrizontal.png";
import { FaUserAlt } from "react-icons/fa";
import Button from "./Button";
import "./styleNavbar.css";
import { handleSignOut } from "../functionalities/firebase/request";
import { AppContext } from "../AppContext";

const Navbar = ({ option }) => {
  const { setState } = useContext(AppContext);
  const history = useHistory();
  const activeStyle = {
    color: "white",
    backgroundColor: "#3DAA8D",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)",
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
          <NavLink to="/home">
            <img src={Logo} alt="logo" />
          </NavLink>
        </li>
        <li className="signOut">
          <div className="iconUser">
            <FaUserAlt />
          </div>
          <div className="divSignOutButton">
          <Button
            buttonName={"Sign Out"}
            styleButton={"signOutButton"}
            action={handleSignOutButton}
          />
          </div>
        </li>
        <li>
          <NavLink
            to="/alimentatie/calculator"
            style={option === "alimentatie" ? activeStyle : {}}
          >
            ALIMENTAȚIE
          </NavLink>
        </li>
        <li>
        <NavLink
            to="/despreDiabet/informatiiGenerale"
            style={option === "diabet" ? activeStyle : {}}
          >
            DESPRE DIABET
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/parametrii"
            style={option === "profile" ? activeStyle : {}}
          >
            PROFILUL MEU
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
