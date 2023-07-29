import { addHElement } from "../components/DOMlogic";

const projectSection = () => {
  let parentDiv = document.getElementById("mainContentProjects");

  addHElement("h2", "mainContentProjects", "homeProjects", "Projects");
};

export { projectSection };
