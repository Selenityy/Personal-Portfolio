import { addHElement, createNewDiv } from "../components/DOMlogic";

const resumeSection = () => {
  let parentDiv = document.getElementById("mainContentResume");

  addHElement("h2", "mainContentResume", "homeResume", "Resume");
  let resumeH2 = document.getElementById("homeResume");
  resumeH2.setAttribute("class", "sectionTitle");

  addHElement("h4", "mainContentResume", "resumeEdu", "Education");
  let resumeEdu = document.getElementById("resumeEdu");
  resumeEdu.setAttribute("class", "resumeHeaders");

  let educationSchool = document.createElement("ul");
  educationSchool.textContent = "The University of Texas at Austin";
  resumeEdu.appendChild(educationSchool);

  let educationDegree = document.createElement("li");
  educationDegree.textContent = "B.A. Psychology";
  educationSchool.appendChild(educationDegree);

  let educationLocal = document.createElement("li");
  educationLocal.textContent = "Austin, TX";
  educationSchool.appendChild(educationLocal);

  let educationYr = document.createElement("li");
  educationYr.textContent = "08/2011 - 05/2014";
  educationSchool.appendChild(educationYr);

  addHElement("h4", "mainContentResume", "resumeExp", "Work Experience");
  let resumeExp = document.getElementById("resumeExp");
  resumeExp.setAttribute("class", "resumeHeaders");
};

export { resumeSection };
