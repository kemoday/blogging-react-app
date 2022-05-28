import React from "react";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Dashboard from "./Dashboard/Dashboard";
import SignUp from "./SignUp";

export default function Post() {
  return (
    <Switch>
      <Route path="/user/signin" component={SignUp} />
      <Route path="/user/signup" component={SignUp} />
      <Route path="/user/Dashboard" component={Dashboard} />
      <Route component={PageNotFound} />
    </Switch>
  );
}
