import React from "react";
import classnames from "classnames";

class Processline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVisibleItemIndex: 0,
    };
  }

  onClickSelecItem = (i) => {
    this.setState({ currentVisibleItemIndex: i });
  };

  render() {
    return (
      <div
        className="Processline_container"
        style={{ "--n": this.props.items.length }}
      >
        {this.props.items.map(({ title, content }, i) => (
          <div
            key={i}
            className={classnames("Processline_item", {
              "Processline_item--selected":
                i === this.state.currentVisibleItemIndex,
            })}
            onClick={() => this.onClickSelecItem(i)}
          >
            <h4 className="Processline_item_header">{title}</h4>
            <div className="Processline_item_content">{content}</div>
          </div>
        ))}
      </div>
    );
  }
}

export { Processline };
