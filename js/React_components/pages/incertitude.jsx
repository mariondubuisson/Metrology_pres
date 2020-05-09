import React from "react";
import { TitleSlide } from "../titleSlide";
import { AccordeonSection } from "../accordeonSection";

import { Link } from "@reach/router";
import { Quoisection } from "../Incertitude_sections/quoisection";

const Incertitude = () => (
  <div>
    <TitleSlide
      main_title="L'incertitude"
      subtitle={`Cette présentation abordera le concept d'incertitude de mesure
        ainsi que les méthodes et outils à votre disposition pour les évaluer`}
    />

    <div className="accordeon">
      <AccordeonSection
        title="Qu'est-ce que l'incertitude ?"
        content={<Quoisection />}
      />
    </div>
    <section className="footer">
      <Link to="/" className="down_arrow">
        &lt;
      </Link>
    </section>
  </div>
);

export { Incertitude };
