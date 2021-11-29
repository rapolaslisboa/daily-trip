import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { useAuth } from "./hooks/useAuth";
import { ForgotPassword } from "./screens/ForgotPassword/ForgotPassword";
import { SignIn } from "./screens/SignIn/SignIn";
import { SignUp } from "./screens/SignUp/SignUp";

export const RouteNames = {
  SignIn: () => "/",
  SignUp: () => "/sign-up",
  ForgotPassword: () => "/forget-password",
  Main: () => "/",
};

const App = () => {
  const { signed } = useAuth();

  let routes = (
    <Switch>
      <Route path={RouteNames.SignIn()} exact component={SignIn} />
      <Route path={RouteNames.SignUp()} component={SignUp} />
      <Route path={RouteNames.ForgotPassword()} component={ForgotPassword} />

      <Redirect to={RouteNames.SignIn()} />
    </Switch>
  );

  if (signed) {
    routes = (
      <Switch>
        {/* <Route path={RouteNames.Main()} exact component={Main} />
        <Redirect to={RouteNames.Main()} /> */}
      </Switch>
    );
  }

  return <Fragment>{routes}</Fragment>;
};

export { App };
