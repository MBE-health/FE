import React from "react";
import "./styles/global.css";
import "./styles/reset.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { HeaderMenu, Login } from "./components";
import AppNav from "./AppNav";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderMenu />
      <AppNav />
      <Login />
    </ThemeProvider>
  );
}

export default App;
