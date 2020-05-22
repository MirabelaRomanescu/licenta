import React, { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { userLogin } from "../functionalities/mocks";
import Form from "../components/Form";
import {
  handleLogin,
  handleLoginWithGoogle,
} from "../functionalities/firebase/request";
import logo from "../assets/logo.png";
import "./styleScreen.css";
import { AppContext } from "../AppContext";
import { FcGoogle } from "react-icons/fc";

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
        <img src={logo} className="logo" alt="logo" />
        <Form
          initialValue={userLogin}
          onSubmit={onSubmit}
          buttonName={"Login"}
        />
        <p> ------------- or --------------</p>
        <button onClick={loginwithGoogle}>
          Login with <FcGoogle />
        </button>
        <p>
          Nu ai cont? Înregistrează-te <NavLink to={"/register"}>aici</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
