// Contains polyfills for unrecognized functions
require("@babel/polyfill");

import { Accordeon } from "./accordeon";
import { Timeline } from "./timeline";
import { detectBrowser } from "./compat";

detectBrowser();

const accordeon = new Accordeon(document.querySelector(".accordeon"));
accordeon.initAccordeon();

const timelineEls = Array.from(
  document.querySelectorAll(".timeline_container")
);
timelineEls.forEach(timelineEl => {
  const timeline = new Timeline(timelineEl);
  timeline.initTimeline();
});
