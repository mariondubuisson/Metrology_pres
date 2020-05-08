import React from "react";

function Paragraph({ subtitle, content }) {
  return (
    <>
      <h3 className="section_subtitle">{subtitle}</h3>
      <p className="content">{content}</p>
    </>
  );
}

export { Paragraph };
