/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./screen/Login";
import Home from "./screen/Home";
import { AppContext } from "./AppContext";
import PrivateRoute from "./PrivateRoute";
import Register from "./screen/Register";
import Error from "./screen/Error";

const App = () => {
  const [state, setState] = useState(null);
  console.log("function", state);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {!!state && state.error ? <Error errorMessage={state.message} /> : ""}
      <BrowserRouter>
        <h1>App</h1>
        <section>
          <Switch>
            <PrivateRoute path="/home" component={Home}></PrivateRoute>
            <Route path="/register" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/" exact component={Login}></Route>
          </Switch>
        </section>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
