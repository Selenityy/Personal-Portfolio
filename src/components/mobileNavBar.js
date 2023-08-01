import menuIcon from "../assets/menu-icon-white-2.png";
import { addHElement, createNewDiv } from "./DOMlogic";
import { menuDropDown, toggleMenuDisplay } from "./mobileNavMenuDropDown";

const createMobileNavBar = () => {
  createNewDiv("mobileNavBar", "container");
  let parentDiv = document.getElementById("mobileNavBar");

  let button = document.createElement("button");
  button.setAttribute("id", "menuButton");
  let img = document.createElement("img");
  img.setAttribute("id", "burgerMenu");
  img.setAttribute("class", "burger");
  img.src = menuIcon;
  button.appendChild(img);
  parentDiv.appendChild(button);

  addHElement("h2", "mobileNavBar", "myName", "Selena Rodriguez");

  menuDropDown();

  button.onclick = function (e) {
    e.preventDefault();
    toggleMenuDisplay();
  };
};

export { createMobileNavBar };
