import { createNewDiv, addHElement } from "./DOMlogic";

const menuDropDown = () => {
  createNewDiv("menuOptions", "menuButton");
  let parentDiv = document.getElementById("menuOptions");

  let homeButton = document.createElement("button");
  homeButton.setAttribute("id", "homeButton");
  homeButton.setAttribute("class", "menuButtons");
  homeButton.textContent = "Home";
  parentDiv.appendChild(homeButton);

  let aboutButton = document.createElement("button");
  aboutButton.setAttribute("id", "aboutButton");
  aboutButton.setAttribute("class", "menuButtons");
  aboutButton.textContent = "About";
  parentDiv.appendChild(aboutButton);

  let projectsButton = document.createElement("button");
  projectsButton.setAttribute("id", "projectsButton");
  projectsButton.setAttribute("class", "menuButtons");
  projectsButton.textContent = "Projects";
  parentDiv.appendChild(projectsButton);

  let contactButton = document.createElement("button");
  contactButton.setAttribute("id", "contactButton");
  contactButton.setAttribute("class", "menuButtons");
  contactButton.textContent = "Contact";
  parentDiv.appendChild(contactButton);
};

const toggleMenuDisplay = () => {
  let allMenuButtons = document.querySelectorAll(".menuButtons");
  allMenuButtons.forEach((button) => {
    if (button.style.display === "none" || button.style.display === "") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

export { menuDropDown, toggleMenuDisplay };
