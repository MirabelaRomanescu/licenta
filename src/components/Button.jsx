import React from "react";
import "./styleButton.css";

const Button = ({ type, action, buttonName,style }) => {
  return (
    <button type={type || "button"} onClick={action} className={`generalButton ${style}`}>
      {buttonName}
    </button>
  );
};

export default Button;
