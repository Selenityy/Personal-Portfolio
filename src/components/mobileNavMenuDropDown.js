import { createNewDiv, addHElement } from "./DOMlogic";
import closeBtn from "../assets/close-icon.png";
import menuIcon from "../assets/menu-icon-white.png";

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
  let img = document.getElementById("burgerMenu");
  allMenuButtons.forEach((button) => {
    if (button.style.display === "none" || button.style.display === "") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
  if (img.classList.contains("burger")) {
    img.src = closeBtn;
    img.classList.remove("burger");
    img.classList.add("close");
  } else {
    img.src = menuIcon;
    img.classList.remove("close");
    img.classList.add("burger");
  }
};

export { menuDropDown, toggleMenuDisplay };
