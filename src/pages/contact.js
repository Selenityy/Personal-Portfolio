import { addHElement } from "../components/DOMlogic";

const contactSection = () => {
  let parentDiv = document.getElementById("mainContentContact");

  addHElement("h2", "mainContentContact", "homeContact", "Contact");
  let contactH2 = document.getElementById("homeContact");
  contactH2.setAttribute("class", "sectionTitle");

  addHElement(
    "p",
    "mainContentContact",
    "contactDescription",
    "If you have any opportunities or questions, please leave your details below."
  );
};

export { contactSection };
