class Timeline {
  constructor(containerRef) {
    this.containerRef = containerRef;
    this.itemsNumber = this.getItemsNumber();
  }

  getItemsNumber = () => {
    const items = this.containerRef.querySelectorAll(".timeline_item");

    return items.length;
  };

  initTimeline = () => {
    //   set the css property of the timeline container with the number of items its contain
    this.containerRef.style.setProperty("--n", this.itemsNumber);
  };
}
