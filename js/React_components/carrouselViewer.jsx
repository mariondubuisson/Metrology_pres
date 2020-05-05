import React from "react";

class CarrousselViewer extends React.Component {
  constructor(props) {
    super(props);
    this.viewRef = React.createRef();
    this.containerRef = React.createRef();
    this.state = {
      currentLeft: 0,
      rightArrowVisibility: "visible",
      leftArrowVisibility: "visible",
    };
  }
  componentDidMount() {
    this.setArrowsVisibility();
    window.addEventListener("resize", this.setArrowsVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setArrowsVisibility);
  }

  setArrowsVisibility = () => {
    const { currentLeft } = this.state;
    const rightArrowVisibility =
      this.containerRef.current.offsetWidth + currentLeft >
      this.viewRef.current.offsetWidth
        ? "visible"
        : "hidden";

    const leftArrowVisibility = currentLeft < 0 ? "visible" : "hidden";
    this.setState({ rightArrowVisibility, leftArrowVisibility });
  };

  onClickRightArrow = () => {
    this.setState(
      (state) => ({ currentLeft: state.currentLeft - 100 }),
      this.setArrowsVisibility
    );
  };

  onClickLeftArrow = () => {
    this.setState(
      (state) => ({ currentLeft: state.currentLeft + 100 }),
      this.setArrowsVisibility
    );
  };

  render() {
    const {
      currentLeft,
      rightArrowVisibility,
      leftArrowVisibility,
    } = this.state;
    return (
      <section className="carroussel">
        <span
          className="left_arrow"
          style={{ visibility: leftArrowVisibility }}
          onClick={this.onClickLeftArrow}
        >
          &lt;
        </span>
        <span
          className="right_arrow"
          style={{ visibility: rightArrowVisibility }}
          onClick={this.onClickRightArrow}
        >
          &gt;
        </span>
        <div ref={this.viewRef} className="carroussel_viewer">
          <div
            ref={this.containerRef}
            className="carroussel_container"
            style={{ left: currentLeft }}
          >
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

export { CarrousselViewer };
