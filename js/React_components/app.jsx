import React from "react";
import { Metrologie } from "./pages/metrologie";
import { Incertitude } from "./pages/incertitude";
import { Router } from "@reach/router";
import { ScrollToTop } from "./scrollToTop";

const App = () => (
  <Router primary={false}>
    <ScrollToTop path="/">
      <Metrologie path="/" />
      <Incertitude path="/incertitude" />
    </ScrollToTop>
  </Router>
);

export { App };
