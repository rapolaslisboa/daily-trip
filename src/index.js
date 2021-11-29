import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
