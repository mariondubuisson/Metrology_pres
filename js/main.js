// Contains polyfills for unrecognized functions
//require("@babel/polyfill");

import { Accordeon } from "./accordeon";
import { Timeline } from "./timeline";
import { detectBrowser } from "./compat";

import "../styles/style.css";

detectBrowser();

document.addEventListener("DOMContentLoaded", () => {
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
};
