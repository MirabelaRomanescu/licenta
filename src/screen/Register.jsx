import React, { useContext } from "react";
import Form from "../components/Form";
import { userRegister } from "../functionalities/mocks";
import { useHistory } from "react-router-dom";
import { handleRegister } from "../functionalities/firebase/request";
import { AppContext } from "../AppContext";
import "./styleScreen.css";

export default function Register() {
  const { setState } = useContext(AppContext);
  const history = useHistory();
  const onSubmit = async (params) => {
    if (params.password === params.password2) {
      const result = await handleRegister(params);
      if (!result.error) {
        history.push("/home");
      } else {
        setState({ ...result, navbar: "don't appear" });
      }
    } else {
      localStorage.setItem("error", 1);
      localStorage.setItem(
        "errorMessage",
        "Nu ai scris corect una dintre parole!"
      );
      setState({ error: 1, message: "Nu ai scris corect una dintre parole!" });
    }
  };
  return (
    <div className="registerComponent">
      <div className="container">
        <h1>ÎNREGISTRARE</h1>
        <Form
          initialValue={userRegister}
          onSubmit={onSubmit}
          buttonName={"Register"}
        />
      </div>
    </div>
  );
}
