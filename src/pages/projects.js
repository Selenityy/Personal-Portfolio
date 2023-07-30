import { addHElement } from "../components/DOMlogic";

const projectSection = () => {
  let parentDiv = document.getElementById("mainContentProjects");

  addHElement("h2", "mainContentProjects", "homeProjects", "Projects");
  let projectsH2 = document.getElementById("homeProjects");
  projectsH2.setAttribute("class", "sectionTitle");
};

export { projectSection };
