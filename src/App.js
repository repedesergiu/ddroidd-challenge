import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBarComponent from "./components/AppBar/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import theme from "./theme/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBarComponent />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
