import React, { Children } from "react";
import { AccordeonSection } from "../accordeonSection";
import { QuoiSection } from "../Metrologie_sections/quoiSection";
import { QuiSection } from "../Metrologie_sections/quiSection";
import { CommentSection } from "../Metrologie_sections/commentSection";
import { PourquoiSection } from "../Metrologie_sections/pourquoiSection";
import { RessourcesSection } from "../Metrologie_sections/ressourcesSection";
import { TitleSlide } from "../titleSlide";

const Metrologie = () => (
  <div>
    <TitleSlide
      main_title="La métrologie"
      subtitle={`Cette présentation est une introduction à ce qu'est la métrologie
        L'objectif étant d'avoir d'avoir des bases communes pour travailler ensemble`}
    />

    <div className="accordeon">
      <AccordeonSection
        title="Qu'est-ce que la métrologie ?"
        content={<QuoiSection />}
      />
      <AccordeonSection title="Qui est concerné ?" content={<QuiSection />} />

      <AccordeonSection title="Comment faire ?" content={<CommentSection />} />

      <AccordeonSection
        title="Pour quoi faire ?"
        content={<PourquoiSection />}
      />

      <AccordeonSection title="Ressources" content={<RessourcesSection />} />
    </div>

    <section className="footer">
      <p className="content">Stay curious</p>
    </section>
  </div>
);

export { Metrologie };
