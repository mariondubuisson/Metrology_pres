import React from "react";
import { Paragraph } from "../paragraph";

const Quoisection = () => (
  <>
    <Paragraph
      subtitle="Mesure"
      content={
        <>
          <strong>Incertitude de mesure</strong> : caractérise la dispersion des
          valeurs attribuées à un mesurande.
          <br />
          <strong>Mesurande</strong> : grandeur que l'on veut mesurer.
          <br />
          <strong>Mesurage</strong> : processus consistant à obtenir
          expérimentalement une ou plusieurs valeurs que l'on peut
          raisonnablement attribuer à une grandeur.
          <br />
          <strong>Valeur vraie</strong> : valeur que l'on obtiendrait si le
          mesurage était parfait. Comme il ne l'est jamais, cette valeur est{" "}
          <strong>toujours inconnue</strong>.
        </>
      }
    />
    <Paragraph
      subtitle="Etalonnage"
      content={
        <>
          <strong>Incertitude d'étalonnage</strong> : c'est le doute associé à
          l'opération d'étalonnage.
          <br />
          C'est à dire que c'est le doute associé à l'erreur annoncée dans le
          certificat d'étalonnage.
          <br />
          Elle est évaluée par le laboratoire d'étalonnage et prendra une part
          significative dans l'évaluation de l'incertitude de mesure.
        </>
      }
    />
  </>
);

export { Quoisection };
