import React from "react";

class PourquoiSection extends React.Component {
  render() {
    return (
      <>
        <p className="content">
          Prendre en considération tous les aspects théoriques et pratiques
          ainsi que leurs limites lors d'une mesure permet d'en{" "}
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
          En identifiant avec le client le niveau de maîtrise attendu des
          résultats, on optimise les efforts à fournir et assure une traçabilité
          de l'affaire.
        </p>
      </>
    );
  }
}

export { PourquoiSection };
