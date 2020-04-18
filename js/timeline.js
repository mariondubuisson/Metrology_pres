//window.alert("timelinejs");

class Timeline {
  constructor(fullContainerRef) {
    this.fullContainerRef = fullContainerRef;
    this.viewRef = fullContainerRef.querySelector(".view_timeline");
    this.containerRef = fullContainerRef.querySelector(".timeline_container");
    this.rightArrow = fullContainerRef.querySelector(".right_arrow");
    this.leftArrow = fullContainerRef.querySelector(".left_arrow");
    this.itemsNumber = this.getItemsNumber();
    this.currentLeft = 0;
  }

  getItemsNumber = () => {
    const items = this.containerRef.querySelectorAll(".timeline_item");

    return items.length;
  };

  initTimeline = () => {
    //   set the css property of the timeline container with the number of items its contain
    this.containerRef.style.setProperty("--n", this.itemsNumber);
    this.swipe();
    this.viewResizing();
  };

  viewResizing = () => {
    window.onresize = this.setArrowsVisibility;
  };

  setArrowsVisibility = () => {
    const viewWidth = this.viewRef.offsetWidth;
    const containerWidth = this.containerRef.offsetWidth;
    const shouldHideLeftArrow = this.currentLeft >= 0;
    const shouldHideRightArrow = viewWidth - this.currentLeft >= containerWidth;

    this.leftArrow.style.setProperty(
      "visibility",
      shouldHideLeftArrow ? "hidden" : "visible"
    );
    this.rightArrow.style.setProperty(
      "visibility",
      shouldHideRightArrow ? "hidden" : "visible"
    );
  };

  swipe = () => {
    this.rightArrow.onclick = () => {
      this.currentLeft -= 100;
      this.containerRef.style.setProperty("left", this.currentLeft + "px");
      this.setArrowsVisibility();
    };
    this.leftArrow.onclick = () => {
      this.currentLeft += 100;
      this.containerRef.style.setProperty("left", this.currentLeft + "px");
      this.setArrowsVisibility();
    };
    this.setArrowsVisibility();
  };
}

export { Timeline };
