import React, { useContext } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { userLogin } from "../functionalities/mocks";
import Form from "../components/Form";
import { handleLogin } from "../functionalities/firebase/request";
import logo from "../assets/logo.png";
import "./styleScreen.css";
import { AppContext } from "../AppContext";

const Login = () => {
  const { setState } = useContext(AppContext);
  const history = useHistory();
  const onSubmit = async (params) => {
    const result = await handleLogin(params);
    if (!result.error) {
      history.push("/home");
    } else {
      setState({ error: result.error, message: result.message });
    }
  };
  return (
    <div className="loginComponent">
      <div className="container">
        <h3>Conecteaza-te cu contul </h3>
        <img src={logo} className="logo" alt="logo" />
        <Form initialValue={userLogin} onSubmit={onSubmit} />
        <p>
          Nu ai cont? Inregistreazate <NavLink to={"/register"}>aici</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
