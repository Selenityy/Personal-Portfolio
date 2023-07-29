import { addHElement } from "../components/DOMlogic";

const contactSection = () => {
  let parentDiv = document.getElementById("mainContentContact");

  addHElement("h2", "mainContentContact", "homeContact", "Contact");
};

export { contactSection };
