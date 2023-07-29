import menuIcon from "../assets/menu-icon.png";
import { createNewDiv, createImg } from "./DOMlogic";

const createMobileNavBar = () => {
  createNewDiv("mobileNavBar", "container");
  let parentDiv = document.getElementById("mobileNavBar");

  let img = document.createElement("img");
  img.src = menuIcon;
  parentDiv.appendChild(img);

  let h2Element = document.createElement("h2");
  h2Element.textContent = "Selena Rodriguez";
  parentDiv.appendChild(h2Element);
};

export { createMobileNavBar };
