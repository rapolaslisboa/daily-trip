import React, {Fragment} from "react";
import "./App.css";
import { useAuth } from "./hooks/useAuth";
import { SignIn } from "./screens/SignIn/SignIn";

export const RouteNames = {};

const App = () => {
  const { signed } = useAuth();

  return (
    <Fragment>
      <SignIn />
    </Fragment>
  );
};

export { App };
