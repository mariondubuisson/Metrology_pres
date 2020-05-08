import React from "react";
import { Timeline } from "../timeline";
import { CarrousselViewer } from "../carrouselViewer";
import { Paragraph } from "../paragraph";

class QuoiSection extends React.Component {
  render() {
    return (
      <>
        <Paragraph
          subtitle="Métrologie, science de la mesure"
          content={
            <>
              Discipline qui comprend tous les aspects théoriques et pratiques
              des mesurages. <br />
              Elle rassemble l'ensemble des techniques et savoirs faire qui
              permettent de réaliser des mesures, de les interpréter et
              d'assurer leur fiabilité.
            </>
          }
        />

        <div className="examples_container">
          <span className="examples">
            <img
              src="img/IMG_0282.png"
              alt="physic_symbol"
              width="100px"
              height="100px"
            />
          </span>
          <span className="examples">
            Quantifier un phénomène physique ou une réaction chimique
          </span>
          <span className="examples">
            <img
              src="img/chemestry_symbol.png"
              alt="chemestry_symbol"
              width="100px"
              height="84px"
            />
          </span>
          <span className="examples">
            Déterminer les propriétés ou les caractéristiques d'un produit /
            d'un échantillon
          </span>
        </div>
        <h3 className="quote">S'il y a mesure il y a métrologie</h3>

        <p className="content">
          La science de la mesure est basée sur le raccordement au{" "}
          <a
            href="https://www.bipm.org/fr/measurement-units/"
            className="link"
            target="_blank"
          >
            système international
          </a>
          .
        </p>
        <div className="examples_container">
          <div className="pyramid-container">
            <div className="pyramid_level">
              <span>SI</span>
            </div>
            <div className="pyramid_level">
              <span>Etalon primaire</span>
            </div>
            <div className="pyramid_level">
              <span>Etalon secondaire</span>
            </div>
            <div className="pyramid_level">
              <span>Equipement de mesure</span>
            </div>
          </div>
          <p className="examples">
            Pyramide de raccordement au système international par
            l'intermédiaire d'une chaîne{" "}
            <span className="important_thing">ininterrompue et documentée</span>{" "}
            d'étalonnages dont chacun contribue à l'incertitude de mesure
          </p>
        </div>

        <Paragraph
          subtitle="Politique du CSTB"
          content={
            <>
              Tous les équipements de mesure doivent faire l'objet d'une
              traçabilité au Système International en étant intégrés au
              processus{" "}
              <span className="important_thing">Fonction Métrologie</span> du
              CSTB.
            </>
          }
        />
        <Paragraph
          subtitle="Définitions"
          content={
            <>
              <span className="important_thing">Etalonnage</span> : c'est
              comparer l'indication de notre équipement avec celle d'un étalon.
              Il est réalisé avec maîtrise des incertitudes suivant une
              procédure et fait l'objet d'un certificat d'étalonnage.
              <br />
              On en déduit une relation pour corriger les indications de
              l'équipement.
              <br />
              <br />
              <span className="important_thing">Vérification</span> : c'est
              comparer l'indication de notre équipement avec celle d'un étalon.
              Elle est réalisée avec maîtrise des incertitudes suivant une
              procédure et fait l'objet d'un constat de vérification.
              <br />
              On en déduit une conformité par rapport à une spécification.
              <br />
              <br />
              <span className="important_thing">Erreur</span> : c'est l'écart
              entre l'indication de notre appareil et celle de l'étalon. On peut
              la corriger par une régression, mais il restera toujours un résidu
              (appelé erreur d'interpolation).
              <br />
              <br />
              <span className="important_thing">Incertitude</span> : c'est
              quantifier le <span className="important_thing"> doute</span> que
              l'on a dans une mesure. Pour cela, on utilise les informations à
              notre disposition (incertitude d'étalonnage, erreur, dérive,
              stabilité, répétabilité influence de la température ...). Si on
              n'a pas ou peu d'informations, l'incertitude peut être très
              grande.
              <br />
              <img
                className="responsive_img"
                src="img/Process.jpg"
                alt="calibration_process"
                style={{ margin: "20px", alignSelf: "center" }}
              />
              <br />
              <span className="important_thing">
                Contrôle ou vérification intermédiaire
              </span>
              : c'est contrôler avant et/ou après un essai que la réponse de
              l'équipement est comprise dans un tunnel d'acceptabilité.
              <br />
              On en déduit si l'équipement dérive ou s'il y a une anomalie sur
              la chaîne de mesure.
            </>
          }
        />

        <h3 className="section_subtitle">
          Raccordement et suivi d'un équipement de mesure
        </h3>
        <CarrousselViewer>
          <Timeline
            timeline_type="timeline_equipment"
            items={[
              {
                title: "1. Achat",
                content: `Plage de mesure
                          Type de sortie (A/N)
                          Performances métrologiques
                          Méthode de mesure`,
              },
              {
                title: "2. Configuration",
                content: `Configurer la sortie analogique (type et plage correspondante)
                      Unité de l'affichage
                      Méthode de mesure ou résolution souhaitée`,
              },
              {
                title: "3. Premier étalonnage",
                content: `Définir les consignes d'étalonnage
                      Permet de connaître les erreurs de l'équipement (pour correction ou pour évaluer l'incertitude)
                      Définir une périodicité d'étalonnage (12 à 36 mois)`,
              },
              {
                title: "4. Vérification intermédiaire",
                content: `Moyen interne de s'assurer avant ou après un essai que l'équipement ne dérive pas, dans une certaine
              mesure (à définir)`,
              },
              {
                title: "5. Etalonnage n",
                content: `Périodiquement, le capteur est étalonné pour évaluer sa dérive et ajuster les corrections à appliquer
                      La périodicté peut être revue si l'équipement ne dérive pas`,
              },
            ]}
          />
        </CarrousselViewer>

        <p className="content">
          La procédure{" "}
          <a
            href="
            http://intranet.cstb.local/sites/dt/documentsQualite/TRONC%20COMMUN/Essais/AME_DT_R3.pdf"
            className="link"
            target="_blank"
          >
            DT/AME
          </a>{" "}
          décrit en détail le suivi des équipements de mesure au CSTB
          <br />
          Toutes les informations sur les équipements de mesure, sont
          accessibles par tous via la base{" "}
          <a
            href="http://metrologie.cstb.local/"
            className="link"
            target="_blank"
          >
            fiche de vie
          </a>
          .
        </p>
        <h3 className="section_subtitle">
          La fonction métrologie peut être associée à plusieurs niveaux
          d'exigence
        </h3>
        <div className="step_container">
          <div className="step_1">
            <h4 className="step_title">Mesure</h4>
            <p className="step_content">Traçabilité du matériel de mesure</p>
            <p className="step_sub">A la carte</p>
          </div>

          <div className="step_2">
            <h4 className="step_title">Essai à la demande</h4>
            <p className="step_content">
              +<br />
              <br />
              Méthode standard, documentée
              <br />
              <br />
              Maîtrise des facteurs influents
            </p>
            <p className="step_sub">Suivant un référentiel</p>
          </div>
          <div className="step_3">
            <h4 className="step_title">Essai accrédité</h4>
            <p className="step_content">
              +<br />
              <br />
              Etude interlaboratoires
              <br />
              <br />
              Maîtrise des incertitudes de mesures
              <br />
              <br />
              Audit externe (COFRAC)
            </p>
            <p className="step_sub">Suivant l'ISO 17025</p>
          </div>
        </div>
      </>
    );
  }
}

export { QuoiSection };
