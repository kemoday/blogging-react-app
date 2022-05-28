import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContextProvider";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to="/user/signin" />
        )
      }
    />
  );
};
