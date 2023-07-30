import { addHElement, createNewDiv } from "../components/DOMlogic";
import gitHubLogo from "../assets/Logos/github-mark.png";
import linkedInLogo from "../assets/Logos/linkedin-logo.png";

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

  createNewDiv("contactForm", "mainContentContact");

  createNewDiv("contactLogoIcons", "mainContentContact");
  let logos = document.getElementById("contactLogoIcons");

  let gitHub = document.createElement("img");
  gitHub.setAttribute("class", "contactLogos");
  gitHub.setAttribute("id", "gitHub");
  gitHub.src = gitHubLogo;
  logos.appendChild(gitHub);

  let linkedIn = document.createElement("img");
  linkedIn.setAttribute("class", "contactLogos");
  linkedIn.setAttribute("id", "linkedIn");
  linkedIn.src = linkedInLogo;
  logos.appendChild(linkedIn);
};

export { contactSection };
