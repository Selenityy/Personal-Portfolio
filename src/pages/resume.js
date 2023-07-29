import { addHElement } from "../components/DOMlogic";

const resumeSection = () => {
  let parentDiv = document.getElementById("mainContentResume");

  addHElement("h2", "mainContentResume", "homeResume", "Resume");
};

export { resumeSection };
