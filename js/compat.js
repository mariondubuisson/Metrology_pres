import { detect } from "detect-browser";
const browser = detect();

export const detectBrowser = () => {
  switch (browser && browser.name) {
    case "ie":
      displayNotCompatible();
      break;

    case "edge":
      displayNotCompatible();

    default:
      console.log("browser supported !");
  }
};

const displayNotCompatible = () => {
  window.alert(
    "Oups ! Il semblerait que ton navigateur ne soit pas compatible ! Essaie avec Chrome ou Firefox ;)"
  );
  window.location.href = "https://www.google.com/intl/fr_fr/chrome/";
};
