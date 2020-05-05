import React from "react";

function TitleSlide({ main_title, subtitle }) {
  return (
    <section className="title_section">
      <h1 className="main_title">{main_title}</h1>

      <p className="subtitle">{subtitle}</p>
    </section>
  );
}

export { TitleSlide };
