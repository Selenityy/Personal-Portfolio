import { addHElement, createNewDiv } from "../components/DOMlogic";
import htmlLogo from "../assets/Logos/html5-logo.png";
import cssLogo from "../assets/Logos/css3-logo.png";
import jestLogo from "../assets/Logos/jest-logo.png";
import jsLogo from "../assets/Logos/js-logo.png";
import nodeLogo from "../assets/Logos/node-logo.png";
import npmLogo from "../assets/Logos/npm-logo.png";
import reactLogo from "../assets/Logos/react-logo.png";
import webpackLogo from "../assets/Logos/webpack-logo.png";

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

  // LOGOS
  createNewDiv("aboutLogoIcons", "mainContentAbout");
  let logos = document.getElementById("aboutLogoIcons");

  // HTML LOGO
  let htmlImg = document.createElement("img");
  htmlImg.setAttribute("class", "languageLogos");
  htmlImg.setAttribute("id", "htmlLogo");
  htmlImg.src = htmlLogo;
  logos.appendChild(htmlImg);

  let htmlText = document.createElement("p");
  htmlText.setAttribute("class", "languageNames");
  htmlText.setAttribute("id", "htmlText");
  htmlText.innerHTML = "HTML";
  logos.appendChild(htmlText);

  // CSS LOGO
  let cssImg = document.createElement("img");
  cssImg.setAttribute("class", "languageLogos");
  cssImg.setAttribute("id", "cssLogo");
  cssImg.src = cssLogo;
  logos.appendChild(cssImg);

  let cssText = document.createElement("p");
  cssText.setAttribute("class", "languageNames");
  cssText.setAttribute("id", "cssText");
  cssText.innerHTML = "CSS";
  logos.appendChild(cssText);

  // JS LOGO
  let jsImg = document.createElement("img");
  jsImg.setAttribute("class", "languageLogos");
  jsImg.setAttribute("id", "jsLogo");
  jsImg.src = jsLogo;
  logos.appendChild(jsImg);

  let jsText = document.createElement("p");
  jsText.setAttribute("class", "languageNames");
  jsText.setAttribute("id", "jsText");
  jsText.innerHTML = "Javascript";
  logos.appendChild(jsText);

  // REACT LOGO
  let reactImg = document.createElement("img");
  reactImg.setAttribute("class", "languageLogos");
  reactImg.setAttribute("id", "reactLogo");
  reactImg.src = reactLogo;
  logos.appendChild(reactImg);

  let reactText = document.createElement("p");
  reactText.setAttribute("class", "languageNames");
  reactText.setAttribute("id", "reactText");
  reactText.innerHTML = "React";
  logos.appendChild(reactText);

  // NODE LOGO
  let nodeImg = document.createElement("img");
  nodeImg.setAttribute("class", "languageLogos");
  nodeImg.setAttribute("id", "nodeLogo");
  nodeImg.src = nodeLogo;
  logos.appendChild(nodeImg);

  let nodeText = document.createElement("p");
  nodeText.setAttribute("class", "languageNames");
  nodeText.setAttribute("id", "nodeText");
  nodeText.innerHTML = "Node";
  logos.appendChild(nodeText);

  // WEBPACK LOGO
  let webpackImg = document.createElement("img");
  webpackImg.setAttribute("class", "languageLogos");
  webpackImg.setAttribute("id", "webpackLogo");
  webpackImg.src = webpackLogo;
  logos.appendChild(webpackImg);

  let webpackText = document.createElement("p");
  webpackText.setAttribute("class", "languageNames");
  webpackText.setAttribute("id", "webpackText");
  webpackText.innerHTML = "Webpack";
  logos.appendChild(webpackText);

  // JEST LOGO
  let jestImg = document.createElement("img");
  jestImg.setAttribute("class", "languageLogos");
  jestImg.setAttribute("id", "jestLogo");
  jestImg.src = jestLogo;
  logos.appendChild(jestImg);

  let jestText = document.createElement("p");
  jestText.setAttribute("class", "languageNames");
  jestText.setAttribute("id", "jestText");
  jestText.innerHTML = "Jest";
  logos.appendChild(jestText);

  // NPM LOGO
  let npmImg = document.createElement("img");
  npmImg.setAttribute("class", "languageLogos");
  npmImg.setAttribute("id", "npmLogo");
  npmImg.src = npmLogo;
  logos.appendChild(npmImg);

  let npmText = document.createElement("p");
  npmText.setAttribute("class", "languageNames");
  npmText.setAttribute("id", "npmText");
  npmText.innerHTML = "NPM";
  logos.appendChild(npmText);
};

export { aboutSection };
