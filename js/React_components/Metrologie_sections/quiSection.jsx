import React from "react";

class QuiSection extends React.Component {
  render() {
    return (
      <>
        <h3 className="section_subtitle">
          Les acteurs de la fonction métrologie
        </h3>
        <section className="row_container">
          <div className="logigram_item">
            <h3 className="logigram_item_title">
              Laboratoire central de métrologie
            </h3>
            <p className="logigram_item_content">
              Il pilote la fonction métrologie au CSTB.
              <br />
              Réalise des raccordements métrologiques (étalonnages et
              vérification).
              <br />
              Défini les procédures, et assure la traçabilité au SI.
              <br />
              Accompagne les équipes et coordonne la sous-traitance
              (raccordement métrologique effectué par un prestataire ou sur site
              par une personne habilitée).
            </p>
          </div>

          <div className="logigram_item">
            <h3 className="logigram_item_title">
              Animateur métrologie du laboratoire
            </h3>
            <p className="logigram_item_content">
              Il s'assure que les équipements sont opérationels et que leur
              raccordement métrologique est à jour.
              <br />
              Il évalue la capabilité et réalise ou s'assure que les contrôles
              en services sont réalisés et enregistrés.
            </p>
          </div>
        </section>

        <h3 className="section_subtitle">
          La fonction métrologie dans le processus affaire
        </h3>

        <section className="SIPOC_full_container">
          <span className="left_arrow">&lt;</span>
          <span className="right_arrow">&gt;</span>
          <div className="SIPOC_view">
            <div className="SIPOC_container">
              <div className="SIPOC_item">
                <h4 className="SIPOC_item_header">Client</h4>
                <div className="SIPOC_item_content">
                  Il exprime son besoin, définissant ainsi le{" "}
                  <span className="important_thing">
                    niveau de maîtrise attendu
                  </span>
                  .
                </div>
              </div>

              <div className="SIPOC_item">
                <h4 className="SIPOC_item_header">Equipe projet</h4>
                <div className="SIPOC_item_content">
                  Etudie la faisabilité.
                  <br />
                  Identifie la méthode et les équipements de mesure. <br />
                  Détermine les{" "}
                  <span className="important_thing">
                    critères de capabilité
                  </span>{" "}
                  = les performances métrologiques souhaitée (exactitude,
                  répétabilité, incertitude ...).
                  <br />
                </div>
              </div>

              <div className="SIPOC_item">
                <h4 className="SIPOC_item_header">Fonction métrologie</h4>
                <div className="SIPOC_item_content">
                  L'animateur métrologie, par l'intermédiaire de raccordements
                  métrologiques et de l'exploitation des documents à sa
                  disposition va{" "}
                  <span className="important_thing">
                    évaluer la capabilité des équipements de mesure
                  </span>
                  .<br />
                  La capabilité d'un équipement de mesure est liée à ses{" "}
                  <span className="important_thing">
                    conditions d'utilisation
                  </span>
                  .
                </div>
              </div>

              <div className="SIPOC_item">
                <h4 className="SIPOC_item_header">Technicien.ne.s mesures</h4>
                <div className="SIPOC_item_content">
                  <span className="important_thing">Réalise</span> et{" "}
                  <span className="important_thing">enregistre</span> les
                  contrôles et vérifications intermédiaires prévus.
                  <br />
                  S'assure que l'équipement est utilisé dans les{" "}
                  <span className="important_thing">
                    conditions prévues
                  </span>{" "}
                  (plage de fonctionnement, réglages, méthode ...).
                </div>
              </div>

              <div className="SIPOC_item">
                <h4 className="SIPOC_item_header">
                  Exploitation
                  <br />
                  des mesures
                </h4>
                <div className="SIPOC_item_content">
                  <span className="important_thing">Corriger</span> les mesures
                  à partir des données d'étalonnage
                  <br />
                  <span className="important_thing">Evaluer le doute</span>{" "}
                  (incertitude) sur les mesures.
                </div>
              </div>
            </div>
          </div>
        </section>

        <h3 className="section_subtitle">Dans quelles activités ?</h3>
        <div className="examples_container">
          <span className="examples important_thing">
            Qu'est-ce que vous vendez à vos clients ?
          </span>
          <span className="examples">
            Des résultats de mesure
            <br />
            <img
              src="img/thermometer.png"
              alt="thermometer_symbol"
              width="100px"
              height="100px"
            />
            <img
              src="img/Manometer.png"
              alt="thermometer_symbol"
              width="69px"
              height="100px"
            />
          </span>

          <span className="examples">
            Des interprétations, une expertise
            <br />
            <img
              src="img/loupe_symbol.png"
              alt="chemestry_symbol"
              width="88px"
              height="70px"
            />
          </span>
        </div>

        <h3 className="quote">Tout le monde est concerné</h3>
      </>
    );
  }
}

export { QuiSection };
