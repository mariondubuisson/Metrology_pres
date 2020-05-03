import React from "react";
import classnames from "classnames";

class AccordeonSection extends React.Component {
  state = {
    isOpen: false,
  };

  toggleIsOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <section className="accordeon_section">
        <h2 className="accordeon_section_title" onClick={this.toggleIsOpen}>
          {this.props.title}
        </h2>
        <div
          className={classnames("accordeon_section_content", {
            "accordeon_section_content--hide": !this.state.isOpen,
          })}
        >
          {this.props.content}
        </div>
      </section>
    );
  }
}

export { AccordeonSection };
