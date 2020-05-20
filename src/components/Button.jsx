import React from "react";
import "./styleButton.css";

const Button = ({ type, action, buttonName, styleButton }) => {
  return (
    <button
      type={type || "button"}
      onClick={action}
      className={`generalButton ${styleButton}`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
