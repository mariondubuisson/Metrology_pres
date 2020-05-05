import React from "react";
import { Timeline } from "../timeline";
import { CarrousselViewer } from "../carrouselViewer";

class CommentSection extends React.Component {
  render() {
    return (
      <>
        <h3 className="section_subtitle">
          Intégration à la fonction métrologie
        </h3>
        <CarrousselViewer>
          <Timeline
            timeline_type="timeline_process"
            items={[
              {
                title: "1. Animateur métro",
                content: `Interlocuteur en charge d'un parc d'équipement.
                      Il est nécessaire qu'il soit utilisateur des
                      équipements pour connaître leur fonctionnement et
                      leurs besoins métrologiques.`,
              },
              {
                title: "2. Inventaire des équipements",
                content: `Identifier tous les équipements et appareils de mesure
                      utilisés.
                      Récupérer les informations utiles à leur
                      fonctionnement (manuel utilisateur, factures,
                      historique des maintenances et réparations ...)`,
              },
              {
                title: "3. Base fiche de vie",
                content: `Au CSTB, l'outil de gestion des équipements est Fiche
                      de Vie, accessible par tous.
                      Enregistrer tous les équipements de mesure dans cette
                      base avec les informations utiles à leur
                      fonctionnement.`,
              },
              {
                title: "4. Raccordement au SI",
                content: `Identifier par type d'équipement et par utilisation
                      les besoins en terme de traçabilité au SI.
                      Type de raccordement, plage et incertitude.`,
              },
              {
                title: "5. Documents et traçabilité",
                content: `Documenter par des procédures et enregistrements
                      toutes les preuves de traçabilité (raccordement,
                      calibrages, contrôles ...)`,
              },
            ]}
          />
        </CarrousselViewer>

        <h3 className="section_subtitle">Avancement CAPE</h3>
        <section className="bar_graph">
          <div className="bar_container full">VAC Essais</div>
          <div className="bar_container half">VAC R&E</div>
          <div className="bar_container full">EAU Essais</div>
          <div className="bar_container quarter">EAU R&E</div>
          <div className="bar_container trois_quart">EIT</div>
        </section>

        <p className="content">
          Dans les activités du processus R3, l'intégration à la fonction
          métrologie est acquise.
          <br />
          Une phase d'optimisation est en cours, pour évaluer la capabilité des
          équipements et mettre à jour les calculs d'incertitudes.
        </p>

        <h3 className="section_subtitle">
          La capabilité, clef de l'information
        </h3>
        <p className="content">
          Les critères de capabilité sont définis lors de l'étude de
          faisabilité. Il s'agit de définir de quoi devra être capable
          l'équipement ou la méthode de mesure.
          <br />
          Exemples : mesurer un déplacement avec une incertitude de &plusmn; 1µm
          ou mesurer un débit massique avec une incertitude de &plusmn; 2 %.
          <br />
          <br />
          Lorsqu'un équipement revient d'étalonnage, l'étude du certificat
          permet d'évaluer la capabilité de l'équipement.
        </p>
        <section className="row_container">
          <div className="logigram_item">
            <h3 className="logigram_item_title">Application unique</h3>
            <p className="logigram_item_content">
              Les critères de capabilité sont fixés par les référentiels
              d'essai, et renseignés dans la fiche de vie.
              <br />
              l'animateur métro vérifie que l'équipement est conforme aux
              critères.
            </p>
          </div>

          <div className="logigram_item">
            <h3 className="logigram_item_title">Utilisation sur mesure</h3>
            <p className="logigram_item_content">
              Les critères de capabilité vont dépendre de l'affaire.
              <br />
              L'animateur métro évalue les performances de l'équipement
              (incertitude de mesure sur la plage raccordée par exemple).
            </p>
          </div>
        </section>

        <p className="content">
          Avec cette information, disponible dans Fiche de Vie, il sera facile
          d'évaluer si le laboratoire dispose d'un équipement capable de
          réaliser les mesures envisagées, ou de planifier l'achat ou le
          raccordement spécifique d'un équipement en vue de l'affaire.
        </p>
      </>
    );
  }
}

export { CommentSection };
