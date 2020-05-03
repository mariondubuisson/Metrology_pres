import React from "react";
import { AccordeonSection } from "./accordeonSection";

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
            content={
              <>
                <p className="content">
                  Métrologie = science de la mesure <br />
                  Discipline qui comprend tous les aspects théoriques et
                  pratiques des mesurages. <br />
                  Elle rassemble l'ensemble des techniques et savoirs faire qui
                  permettent de réaliser des mesures, de les interpréter et
                  d'assurer leur fiabilité.
                </p>
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
                    Déterminer les propriétés ou les caractéristiques d'un
                    produit / d'un échantillon
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
                    <span className="important_thing">
                      ininterrompue et documentée
                    </span>{" "}
                    d'étalonnages dont chacun contribue à l'incertitude de
                    mesure
                  </p>
                </div>
                <h3 className="section_subtitle">Politique du CSTB</h3>
                <p className="content">
                  Tous les équipements de mesure doivent faire l'objet d'une
                  traçabilité au Système International en étant intégrés au
                  processus{" "}
                  <span className="important_thing">Fonction Métrologie</span>{" "}
                  du CSTB.
                </p>
                <h3 className="section_subtitle">Définitions</h3>
                <p className="content">
                  <span className="important_thing">Etalonnage</span> : c'est
                  comparer l'indication de notre équipement avec celle d'un
                  étalon. Il est réalisé avec maîtrise des incertitudes suivant
                  une procédure et fait l'objet d'un certificat d'étalonnage.
                  <br />
                  On en déduit une relation pour corriger les indications de
                  l'équipement.
                </p>
                <p className="content">
                  <span className="important_thing">Vérification</span> : c'est
                  comparer l'indication de notre équipement avec celle d'un
                  étalon. Elle est réalisée avec maîtrise des incertitudes
                  suivant une procédure et fait l'objet d'un constat de
                  vérification.
                  <br />
                  On en déduit une conformité par rapport à une spécification.
                </p>
                <p className="content">
                  <span className="important_thing">Erreur</span> : c'est
                  l'écart entre l'indication de notre appareil et celle de
                  l'étalon. On peut la corriger par une régression, mais il
                  restera toujours un résidu (appelé erreur d'interpolation).
                </p>
                <p className="content">
                  <span className="important_thing">Incertitude</span> : c'est
                  quantifier le <span className="important_thing"> doute</span>{" "}
                  que l'on a dans une mesure. Pour cela, on utilise les
                  informations à notre disposition (incertitude d'étalonnage,
                  erreur, dérive, stabilité, répétabilité influence de la
                  température ...). Si on n'a pas ou peu d'informations,
                  l'incertitude peut être très grande.
                </p>
                <img
                  className="responsive_img"
                  src="img/Process.jpg"
                  alt="calibration_process"
                  style={{ margin: "20px", alignSelf: "center" }}
                />
                <p className="content">
                  <span className="important_thing">
                    Contrôle ou vérification intermédiaire
                  </span>
                  : c'est contrôler avant et/ou après un essai que la réponse de
                  l'équipement est comprise dans un tunnel d'acceptabilité.
                  <br />
                  On en déduit si l'équipement dérive ou s'il y a une anomalie
                  sur la chaîne de mesure.
                </p>
                <h3 className="section_subtitle">
                  Raccordement et suivi d'un équipement de mesure
                </h3>
                <section className="timeline_full_container">
                  <span className="left_arrow">&lt;</span>
                  <span className="right_arrow">&gt;</span>
                  <div className="view_timeline">
                    <div className="timeline_container timeline_equipment">
                      <div className="timeline_item">
                        <h4 className="timeline_title">1. Achat</h4>
                        <p className="timeline_content">
                          Plage de mesure <br />
                          Type de sortie (A/N) <br />
                          Performances métrologiques <br />
                          Méthode de mesure
                        </p>
                      </div>

                      <div className="timeline_item">
                        <h4 className="timeline_title">2. Configuration</h4>
                        <p className="timeline_content">
                          Configurer la sortie analogique (type et plage
                          correspondante)
                          <br />
                          Unité de l'affichage <br />
                          Méthode de mesure ou résolution souhaitée
                        </p>
                      </div>

                      <div className="timeline_item">
                        <h4 className="timeline_title">
                          3. Premier étalonnage
                        </h4>
                        <p className="timeline_content">
                          Définir les consignes d'étalonnage <br />
                          Permet de connaître les erreurs de l'équipement (pour
                          correction ou pour évaluer l'incertitude)
                          <br />
                          Définir une périodicité d'étalonnage (12 à 36 mois)
                        </p>
                      </div>

                      <div className="timeline_item">
                        <h4 className="timeline_title">
                          4. Vérification intermédiaire
                        </h4>
                        <p className="timeline_content">
                          Moyen interne de s'assurer avant ou après un essai que
                          l'équipement ne dérive pas, dans une certaine mesure
                          (à définir)
                        </p>
                      </div>

                      <div className="timeline_item">
                        <h4 className="timeline_title">5. Etalonnage n</h4>
                        <p className="timeline_content">
                          Périodiquement, le capteur est étalonné pour évaluer
                          sa dérive et ajuster les corrections à appliquer
                          <br />
                          La périodicté peut être revue si l'équipement ne
                          dérive pas
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

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
                    <p className="step_content">
                      Traçabilité du matériel de mesure
                    </p>
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
            }
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

                <section className="timeline_full_container">
                  <span className="left_arrow">&lt;</span>
                  <span className="right_arrow">&gt;</span>
                  <div className="view_timeline">
                    <div className="timeline_container timeline_process">
                      <div className="timeline_item">
                        <h4 className="timeline_title">1. Animateur métro</h4>
                        <p className="timeline_content">
                          Interlocuteur en charge d'un parc d'équipement.
                          <br />
                          Il est nécessaire qu'il soit utilisateur des
                          équipements pour connaître leur fonctionnement et
                          leurs besoins métrologiques.
                        </p>
                      </div>

                      <div className="timeline_item">
                        <h4 className="timeline_title">
                          2. Inventaire des équipements
                        </h4>
                        <p className="timeline_content">
                          Identifier tous les équipements et appareils de mesure
                          utilisés.
                          <br />
                          Récupérer les informations utiles à leur
                          fonctionnement (manuel utilisateur, factures,
                          historique des maintenances et réparations ...)
                        </p>
                      </div>

                      <div className="timeline_item">
                        <h4 className="timeline_title">3. Base fiche de vie</h4>
                        <p className="timeline_content">
                          Au CSTB, l'outil de gestion des équipements est Fiche
                          de Vie, accessible par tous.
                          <br />
                          Enregistrer tous les équipements de mesure dans cette
                          base avec les informations utiles à leur
                          fonctionnement.
                        </p>
                      </div>

                      <div className="timeline_item">
                        <h4 className="timeline_title">
                          4. Raccordement au SI
                        </h4>
                        <p className="timeline_content">
                          Identifier par type d'équipement et par utilisation
                          les besoins en terme de traçabilité au SI.
                          <br />
                          Type de raccordement, plage et incertitude.
                        </p>
                      </div>

                      <div className="timeline_item">
                        <h4 className="timeline_title">
                          5. Documents et traçabilité
                        </h4>
                        <p className="timeline_content">
                          Documenter par des procédures et enregistrements
                          toutes les preuves de traçabilité (raccordement,
                          calibrages, contrôles ...)
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
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
