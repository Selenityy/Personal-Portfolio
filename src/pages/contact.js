import { addHElement, createNewDiv } from "../components/DOMlogic";
import gitHubLogo from "../assets/Logos/github-mark.png";
import linkedInLogo from "../assets/Logos/linkedin-logo.png";
import { createForm } from "../components/form";

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

  // CONTACT FORM
  createNewDiv("contactForm", "mainContentContact");
  createForm();

  // GITHUB & LINKEDIN LOGOS
  createNewDiv("contactLogoIcons", "mainContentContact");
  let logos = document.getElementById("contactLogoIcons");

  let gitHub = document.createElement("img");
  gitHub.setAttribute("class", "contactLogos");
  gitHub.setAttribute("id", "gitHub");
  gitHub.src = gitHubLogo;
  gitHub.addEventListener("click", function () {
    window.location.href = "https://github.com/Selenityy";
  });
  logos.appendChild(gitHub);

  let linkedIn = document.createElement("img");
  linkedIn.setAttribute("class", "contactLogos");
  linkedIn.setAttribute("id", "linkedIn");
  linkedIn.src = linkedInLogo;
  linkedIn.addEventListener("click", function () {
    window.location.href = "https://www.linkedin.com/in/selenakrodriguez/";
  });
  logos.appendChild(linkedIn);
};

export { contactSection };
