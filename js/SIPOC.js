class Sipoc {
  constructor(fullContainerRef) {
    this.fullContainerRef = fullContainerRef;
    this.viewRef = fullContainerRef.querySelector(".SIPOC_view");
    this.containerRef = fullContainerRef.querySelector(".SIPOC_container");
    this.items = this.createItems();
    this.currentVisibleContent = this.items[0].content;

    this.rightArrow = fullContainerRef.querySelector(".right_arrow");
    this.leftArrow = fullContainerRef.querySelector(".left_arrow");

    this.currentLeft = 0;
  }

  createItems = () => {
    const items = this.containerRef.querySelectorAll(".SIPOC_item");

    return Array.from(items).map((item) => ({
      header: item.querySelector(".SIPOC_item_header"),
      content: item.querySelector(".SIPOC_item_content"),
    }));
  };

  viewContentOnclickHeader = () => {
    this.items.forEach((item) => {
      item.header.onclick = () => {
        this.currentVisibleContent.style.setProperty("visibility", "hidden");

        item.content.style.setProperty("visibility", "visible");

        this.currentVisibleContent = item.content;

        // item.header.style.setProperty("color", "var(--brown)");
      };
    });
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

  initSipoc = () => {
    this.swipe();
    this.viewResizing();
    this.viewContentOnclickHeader();
  };
}

export { Sipoc };
