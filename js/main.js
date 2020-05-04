// Contains polyfills for unrecognized functions
//require("@babel/polyfill");

import ReactDOM from "react-dom";
import React from "react";
import { App } from "./React_components/app";

import { detectBrowser } from "./compat";
import { Sipoc } from "./SIPOC";

import "../styles/style.scss";

detectBrowser();

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
  main();
});

const main = () => {
  const SIPOC = new Sipoc(document.querySelector(".SIPOC_full_container"));

  SIPOC.initSipoc();
};
