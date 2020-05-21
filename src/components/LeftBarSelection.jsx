import React from "react";
import "./styleLeftBar.css";
import { NavLink } from "react-router-dom";

const Leftbar = ({ render }) => {
  const activeStyle={
    color:"white",
    fontWeight: "bold",
    backgroundColor: "#389B7E",
    boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)"
  }
  return (
    <div className="leftBar">
      <ul>
        {render.map((item, index) => (
          <li key={index}>
            <NavLink strict to={item.path} activeStyle={activeStyle}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leftbar;
