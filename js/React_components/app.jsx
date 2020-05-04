import React from "react";
import { AccordeonSection } from "./accordeonSection";
import { Timeline } from "./timeline";
import { QuoiSection } from "./Metrologie_sections/quoiSection";

class App extends React.Component {
  render() {
    return (
      <div>
        <section className="title_section">
          <h1 className="main_title">La métrologie</h1>

          <p className="subtitle">
            Cette présentation est une introduction à ce qu'est la métrologie
            <br />
            L'objectif étant d'avoir d'avoir des bases communes pour travailler
            ensemble
          </p>
        </section>

        <div className="accordeon">
          <AccordeonSection
            title="Qu'est-ce que la métrologie ?"
            content={<QuoiSection />}
          />
          <AccordeonSection
            title="Qui est concerné ?"
            content={
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
                      (raccordement métrologique effectué par un prestataire ou
                      sur site par une personne habilitée).
                    </p>
                  </div>

                  <div className="logigram_item">
                    <h3 className="logigram_item_title">
                      Animateur métrologie du laboratoire
                    </h3>
                    <p className="logigram_item_content">
                      Il s'assure que les équipements sont opérationels et que
                      leur raccordement métrologique est à jour.
                      <br />
                      Il évalue la capabilité et réalise ou s'assure que les
                      contrôles en services sont réalisés et enregistrés.
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
                          Identifie la méthode et les équipements de mesure.{" "}
                          <br />
                          Détermine les{" "}
                          <span className="important_thing">
                            critères de capabilité
                          </span>{" "}
                          = les performances métrologiques souhaitée
                          (exactitude, répétabilité, incertitude ...).
                          <br />
                        </div>
                      </div>

                      <div className="SIPOC_item">
                        <h4 className="SIPOC_item_header">
                          Fonction métrologie
                        </h4>
                        <div className="SIPOC_item_content">
                          L'animateur métrologie, par l'intermédiaire de
                          raccordements métrologiques et de l'exploitation des
                          documents à sa disposition va{" "}
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
                        <h4 className="SIPOC_item_header">
                          Technicien.ne.s mesures
                        </h4>
                        <div className="SIPOC_item_content">
                          <span className="important_thing">Réalise</span> et{" "}
                          <span className="important_thing">enregistre</span>{" "}
                          les contrôles et vérifications intermédiaires prévus.
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
                          <span className="important_thing">Corriger</span> les
                          mesures à partir des données d'étalonnage
                          <br />
                          <span className="important_thing">
                            Evaluer le doute
                          </span>{" "}
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
            }
          />

          <AccordeonSection
            title="Comment faire ?"
            content={
              <>
                <h3 className="section_subtitle">
                  Intégration à la fonction métrologie
                </h3>

                <Timeline
                  timeline_type="timeline_process"
                  items={[
                    {
                      title: "1. Animateur métro",
                      content: `Interlocuteur en charge d'un parc d'équipement.\n
                      Il est nécessaire qu'il soit utilisateur des
                      équipements pour connaître leur fonctionnement et
                      leurs besoins métrologiques.`,
                    },
                    {
                      title: "2. Inventaire des équipements",
                      content: `Identifier tous les équipements et appareils de mesure
                      utilisés.\n
                      Récupérer les informations utiles à leur
                      fonctionnement (manuel utilisateur, factures,
                      historique des maintenances et réparations ...)`,
                    },
                    {
                      title: "3. Base fiche de vie",
                      content: `Au CSTB, l'outil de gestion des équipements est Fiche
                      de Vie, accessible par tous.\n
                      Enregistrer tous les équipements de mesure dans cette
                      base avec les informations utiles à leur
                      fonctionnement.`,
                    },
                    {
                      title: "4. Raccordement au SI",
                      content: `Identifier par type d'équipement et par utilisation
                      les besoins en terme de traçabilité au SI.\n
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

                <h3 className="section_subtitle">Avancement CAPE</h3>
                <section className="bar_graph">
                  <div className="bar_container full">VAC Essais</div>
                  <div className="bar_container half">VAC R&E</div>
                  <div className="bar_container full">EAU Essais</div>
                  <div className="bar_container quarter">EAU R&E</div>
                  <div className="bar_container trois_quart">EIT</div>
                </section>

                <p className="content">
                  Dans les activités du processus R3, l'intégration à la
                  fonction métrologie est acquise.
                  <br />
                  Une phase d'optimisation est en cours, pour évaluer la
                  capabilité des équipements et mettre à jour les calculs
                  d'incertitudes.
                </p>

                <h3 className="section_subtitle">
                  La capabilité, clef de l'information
                </h3>
                <p className="content">
                  Les critères de capabilité sont définis lors de l'étude de
                  faisabilité. Il s'agit de définir de quoi devra être capable
                  l'équipement ou la méthode de mesure.
                  <br />
                  Exemples : mesurer un déplacement avec une incertitude de
                  &plusmn; 1µm ou mesurer un débit massique avec une incertitude
                  de &plusmn; 2 %.
                  <br />
                  <br />
                  Lorsqu'un équipement revient d'étalonnage, l'étude du
                  certificat permet d'évaluer la capabilité de l'équipement.
                </p>
                <section className="row_container">
                  <div className="logigram_item">
                    <h3 className="logigram_item_title">Application unique</h3>
                    <p className="logigram_item_content">
                      Les critères de capabilité sont fixés par les référentiels
                      d'essai, et renseignés dans la fiche de vie.
                      <br />
                      l'animateur métro vérifie que l'équipement est conforme
                      aux critères.
                    </p>
                  </div>

                  <div className="logigram_item">
                    <h3 className="logigram_item_title">
                      Utilisation sur mesure
                    </h3>
                    <p className="logigram_item_content">
                      Les critères de capabilité vont dépendre de l'affaire.
                      <br />
                      L'animateur métro évalue les performances de l'équipement
                      (incertitude de mesure sur la plage raccordée par
                      exemple).
                    </p>
                  </div>
                </section>

                <p className="content">
                  Avec cette information, disponible dans Fiche de Vie, il sera
                  facile d'évaluer si le laboratoire dispose d'un équipement
                  capable de réaliser les mesures envisagées, ou de planifier
                  l'achat ou le raccordement spécifique d'un équipement en vue
                  de l'affaire.
                </p>
              </>
            }
          />

          <AccordeonSection
            title="Pour quoi faire ?"
            content={
              <>
                <p className="content">
                  Prendre en considération tous les aspects théoriques et
                  pratiques ainsi que leurs limites lors d'une mesure permet
                  d'en{" "}
                  <span className="important_thing">assurer la validité</span>.
                </p>
                <div className="cloud_ideas_container">
                  <span className="cloud_idea_1">Confiance</span>
                  <span className="cloud_idea_2">Maîtrise</span>
                  <span className="cloud_idea_3">Traçabilité</span>
                  <span className="cloud_idea_4">Fiabilité</span>
                  <span className="cloud_idea_5">Robustesse</span>
                  <span className="cloud_idea_6">Gain de temps</span>
                  <span className="cloud_idea_7">Gain d'énergie</span>
                </div>
                <p className="content">
                  Faire étalonner les équipements de mesure permet de{" "}
                  <span className="important_thing">
                    connaître leur biais et donc de maîtriser le doute{" "}
                  </span>
                  (diminuer l'incertitude) autour de la mesure. <br />
                  En identifiant avec le client le niveau de maîtrise attendu
                  des résultats, on optimise les efforts à fournir et assure une
                  traçabilité de l'affaire.
                </p>
              </>
            }
          />

          <AccordeonSection
            title="Ressources"
            content={
              <>
                <a
                  href="http://intranet.cstb.local/sites/dt/Pages/documentsqualite.aspx?RootFolder=%2Fsites%2Fdt%2FdocumentsQualite%2FTRONC%20COMMUN%2FEssais&FolderCTID=0x0120001D6F99AD2EE36244AD6256AFCD3AF004&View={568C3D7B-EDFC-4039-9F4C-7C3CF20D8103}"
                  className="link"
                  target="_blank"
                >
                  Procédures du LCM
                </a>
                <a
                  href="http://www.cfmetrologie.com/fr/faq-mesure"
                  className="link"
                  target="_blank"
                >
                  Collège Français de Métrologie
                </a>
              </>
            }
          />
        </div>

        <section className="footer">
          <p className="content">Stay curious</p>
        </section>
      </div>
    );
  }
}

export { App };
