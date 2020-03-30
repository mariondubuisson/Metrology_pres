const accordeon = new Accordeon(document.querySelector(".accordeon"));

accordeon.initAccordeon();
// window.alert("mainjs");

const timelineEls = document.querySelectorAll(".timeline_container");

timelineEls.forEach(timelineEl => {
  const timeline = new Timeline(timelineEl);
  timeline.initTimeline();
});
