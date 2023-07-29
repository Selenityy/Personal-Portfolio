import { addHElement } from "../components/DOMlogic";
import profilePic from "../assets/star-guardian.png";

const homeSection = () => {
  let parentDiv = document.getElementById("mainContentHome");
  let profilePicImg = document.createElement("img");
  profilePicImg.setAttribute("id", "profilePic");
  profilePicImg.src = profilePic;
  parentDiv.appendChild(profilePicImg);

  addHElement("h2", "mainContentHome", "homeName", "Selena Rodriguez");
  addHElement("h5", "mainContentHome", "homeJob", "Front End Developer");
};

export { homeSection };
