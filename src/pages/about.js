import { addHElement, createNewDiv } from "../components/DOMlogic";
import gitHubPNG from "../assets/Logos/github-mark.png";
import linkedInPNG from "../assets/Logos/linkedin-logo.png";

const aboutSection = () => {
  let parentDiv = document.getElementById("mainContentAbout");

  addHElement("h2", "mainContentAbout", "homeAbout", "About");
  let aboutH2 = document.getElementById("homeAbout");
  aboutH2.setAttribute("class", "sectionTitle");

  createNewDiv("aboutTextPara", "mainContentAbout");
  let aboutTextPara = document.getElementById("aboutTextPara");

  let pElementIntro = document.createElement("p");
  //   pElementIntro.setAttribute("id", "aboutDescription");
  pElementIntro.setAttribute("class", "aboutText");
  pElementIntro.textContent = "Hi, my name is Selena Rodriguez!";
  aboutTextPara.appendChild(pElementIntro);

  let pElementDetails = document.createElement("p");
  pElementDetails.setAttribute("class", "aboutText");
  pElementDetails.textContent =
    "I have always been a very curious person and someone who wants to keep learning. With a background in psychology, content creation, gaming, and esports, I have a very unique skill set that blends my creative mind with my analytical one. Being adaptable and a fast learner brought me to teaching myself how to code and create websites! I bring my energy to all my creations and love expressing emotions, aesthetics, or personality to my websites.";
  aboutTextPara.appendChild(pElementDetails);

  createNewDiv("aboutLogoIcons", "mainContentAbout");
  let logos = document.getElementById("aboutLogoIcons");

  let gitHubLogo = document.createElement("img");
  gitHubLogo.setAttribute("class", "aboutLogos");
  gitHubLogo.setAttribute("id", "gitHub");
  gitHubLogo.src = gitHubPNG;
  logos.appendChild(gitHubLogo);

  let linkedInLogo = document.createElement("img");
  linkedInLogo.setAttribute("class", "aboutLogos");
  linkedInLogo.setAttribute("id", "linkedIn");
  linkedInLogo.src = linkedInPNG;
  logos.appendChild(linkedInLogo);
};

export { aboutSection };
