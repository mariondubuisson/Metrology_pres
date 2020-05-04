import React from "react";
import classnames from "classnames";

class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.viewRef = React.createRef();
    this.containerRef = React.createRef();
    this.state = {
      currentLeft: 0,
      rightArrowVisibility: "hidden",
      leftArrowVisibility: "hidden",
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
    const { items, timeline_type } = this.props;
    const {
      currentLeft,
      rightArrowVisibility,
      leftArrowVisibility,
    } = this.state;

    return (
      <section className="timeline_full_container">
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
        <div ref={this.viewRef} className="view_timeline">
          <div
            ref={this.containerRef}
            className={classnames("timeline_container", timeline_type)}
            style={{
              left: currentLeft,
              "--n": items.length,
            }}
          >
            {items.map(({ title, content }, i) => (
              <div key={i} className="timeline_item">
                <h4 className="timeline_title">{title}</h4>
                <p className="timeline_content">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export { Timeline };
