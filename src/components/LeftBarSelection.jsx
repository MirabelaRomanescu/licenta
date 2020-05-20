import React from "react";
import "./styleLeftBar.css";
import { NavLink } from "react-router-dom";

const Leftbar = ({ render }) => {
  const activeStyle={
    color:"white",
    fontWeight: "bold"
  }
  return (
    <div className="leftBar">
      <h3>LeftBar</h3>
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
