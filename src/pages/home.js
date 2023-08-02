import { addHElement } from "../components/DOMlogic";
import profilePic from "../assets/profile-pic.png";

const homeSection = () => {
  let parentDiv = document.getElementById("mainContentHome");
  let profilePicImg = document.createElement("img");
  profilePicImg.setAttribute("id", "profilePic");
  profilePicImg.src = profilePic;
//   profilePicImg.alt = "Selena Rodriguez";
  parentDiv.appendChild(profilePicImg);

  addHElement("h1", "mainContentHome", "homeName", "Selena Rodriguez");
  addHElement("h4", "mainContentHome", "homeJob", "Front End Developer");
};

export { homeSection };
