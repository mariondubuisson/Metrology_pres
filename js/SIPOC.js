class Sipoc {
  constructor(fullContainerRef) {
    this.fullContainerRef = fullContainerRef;
    this.viewRef = fullContainerRef.querySelector(".SIPOC_view");
    this.containerRef = fullContainerRef.querySelector(".SIPOC_container");
    this.items = this.createItems();
    this.currentVisibleItem = this.items[0];
    this.rightArrow = fullContainerRef.querySelector(".right_arrow");
    this.leftArrow = fullContainerRef.querySelector(".left_arrow");

    this.currentLeft = 0;
  }

  createItems = () => {
    const itemNodes = this.containerRef.querySelectorAll(".SIPOC_item");

    return Array.from(itemNodes).map((itemNode) => ({
      itemNode,
      headerNode: itemNode.querySelector(".SIPOC_item_header"),
    }));
  };

  selectCurrentVisibleItem = (item) => {
    this.currentVisibleItem.itemNode.classList.remove("SIPOC_item--selected");
    item.itemNode.classList.add("SIPOC_item--selected");
    this.currentVisibleItem = item;
  };

  viewResizing = () => {
    window.addEventListener("resize", this.setArrowsVisibility);
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
    this.selectCurrentVisibleItem(this.currentVisibleItem);
    this.items.forEach((item) => {
      item.headerNode.onclick = () => this.selectCurrentVisibleItem(item);
    });
  };
}

export { Sipoc };
