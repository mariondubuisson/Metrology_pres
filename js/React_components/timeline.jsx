import React from "react";
import classnames from "classnames";

class Timeline extends React.Component {
  render() {
    const { items, timeline_type } = this.props;

    return (
      <div
        className={classnames("timeline_container", timeline_type)}
        style={{
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
    );
  }
}

export { Timeline };
