import React from "react";

class RessourcesSection extends React.Component {
  render() {
    return (
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
    );
  }
}

export { RessourcesSection };
