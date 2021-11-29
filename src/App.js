import React from "react";
import "./App.css";
import { useAuth } from "./hooks/useAuth/useAuth";

export const RouteNames = {
 
};

const App = () => {
  const { signed } = useAuth();

  return (
    <div>
 
    </div>
  );
};

export { App };
