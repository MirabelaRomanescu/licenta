import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContext } from "./AppContext";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
import Alimentatie from "./screen/Alimentatie";
import Diabet from "./screen/Diabet";
import Login from "./screen/Login";
import Register from "./screen/Register";
import PrivateRoute from "./PrivateRoute";
import Error from "./screen/Error";
import "./App.css";

const App = () => {
  const [state, setState] = useState(null);
  console.log("function", state);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {!!state && state.error ? <Error errorMessage={state.message} /> : ""}
      <BrowserRouter>
        <section>
          <Switch>
            <PrivateRoute path="/home" component={Home}></PrivateRoute>
            <PrivateRoute path="/profile/:section" component={Profile}></PrivateRoute>
            <PrivateRoute path="/alimentatie" component={Alimentatie}></PrivateRoute>
            <PrivateRoute path="/despreDiabet" component={Diabet}></PrivateRoute>
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
