const accordeon = new Accordeon(document.querySelector(".accordeon"));

accordeon.initAccordeon();

const timelineEls = document.querySelectorAll(".timeline_container");

timelineEls.forEach(timelineEl => {
  const timeline = new Timeline(timelineEl);

  console.log("Mes timelines containers", timeline);
  timeline.initTimeline();
});
// regarde combien il y a d'item dans la section
// retourne le nombre d'items
