import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "./styleScreen.css";

const Error = ({ errorMessage }) => {
  const { setState } = useContext(AppContext);
  const errorHandle = () => {
    localStorage.removeItem("error");
    localStorage.removeItem("errorMessage");
    setState(null);
  };

  return (
    <div className="errorScreen">
      <div className="errorComponent">
        <h1> Error </h1>
        <div className="errorMessage">
          <p> {errorMessage}</p>
        </div>
        <div className="errorAction">
          <button onClick={errorHandle}> Continue </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
