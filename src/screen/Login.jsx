import React, { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { userLogin } from "../functionalities/mocks";
import Form from "../components/Form";
import {
  handleLogin,
  handleLoginWithGoogle,
} from "../functionalities/firebase/request";
import logo from "../assets/logoDiabookVertical.png";
import "./styleScreen.css";
import { AppContext } from "../AppContext";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { setState } = useContext(AppContext);
  const history = useHistory();
  const onSubmit = async (params) => {
    const result = await handleLogin(params);
    if (!result.error) {
      setState(result);
      history.push("/home");
    } else {
      setState(result);
    }
  };
  const loginwithGoogle = async () => {
    const result = await handleLoginWithGoogle();
    if (!result.error) {
      setState(result);
      history.push("/home");
    } else {
      setState(result);
    }
  };
  return (
    <div className="loginComponent">
      <div className="container">
        <h1>CONECTARE</h1>
        <img src={logo} className="verticalLogo" alt="logo" />
        <Form
          initialValue={userLogin}
          onSubmit={onSubmit}
          buttonName={"Conectează-te"}
        />
        <p>sau</p>
        <button className="generalButton" onClick={loginwithGoogle}>
          Conectează-te cu contul &nbsp; <FaGoogle  />
        </button>
        <div className="formSeparationLine"></div>
        <p>
          Nu ai cont Diabook? Înregistrează-te <NavLink className="linkStyle" to={"/register"}>aici</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
