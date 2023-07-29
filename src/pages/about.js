import { addHElement } from "../components/DOMlogic";

const aboutSection = () => {
  let parentDiv = document.getElementById("mainContentAbout");

  addHElement("h2", "mainContentAbout", "homeAbout", "About");
};

export { aboutSection };
