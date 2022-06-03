import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { PrivateRoute } from "./components/Routes/PrivateRoute";
import { PublicRoute } from "./components/Routes/PublicRoute";
import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Post() {
  return (
    <Switch>
      <PublicRoute path="/user/signin" component={SignIn} />
      <PublicRoute path="/user/signup" component={SignUp} />
      <PrivateRoute path="/user/Dashboard" component={Dashboard} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
