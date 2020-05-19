import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const userId = localStorage.getItem("id");
  const error = parseInt(localStorage.getItem("error"));
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!userId && !error ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
