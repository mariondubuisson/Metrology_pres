// Contains polyfills for unrecognized functions
//require("@babel/polyfill");

import ReactDOM from "react-dom";
import React from "react";
import { App } from "./React_components/app";
import { Accordeon } from "./accordeon";
import { Timeline } from "./timeline";
import { detectBrowser } from "./compat";
import { Sipoc } from "./SIPOC";

import "../styles/style.scss";

detectBrowser();

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
  main();
});

const main = () => {
  const accordeon = new Accordeon(document.querySelector(".accordeon"));
  accordeon.initAccordeon();

  const timelineEls = Array.from(
    document.querySelectorAll(".timeline_full_container")
  );
  timelineEls.forEach((timelineEl) => {
    const timeline = new Timeline(timelineEl);
    timeline.initTimeline();
  });

  const SIPOC = new Sipoc(document.querySelector(".SIPOC_full_container"));

  SIPOC.initSipoc();
};
