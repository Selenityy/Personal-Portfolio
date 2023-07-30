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
  createNewDiv("htmlLogoElements", "aboutLogoIcons");
  let htmlLogoElements = document.getElementById("htmlLogoElements");

  let htmlImg = document.createElement("img");
  htmlImg.setAttribute("class", "languageLogos");
  htmlImg.setAttribute("id", "htmlLogo");
  htmlImg.src = htmlLogo;
  htmlLogoElements.appendChild(htmlImg);

  let htmlText = document.createElement("p");
  htmlText.setAttribute("class", "languageNames");
  htmlText.setAttribute("id", "htmlText");
  htmlText.innerHTML = "HTML";
  htmlLogoElements.appendChild(htmlText);

  // CSS LOGO
  createNewDiv("cssLogoElements", "aboutLogoIcons");
  let cssLogoElements = document.getElementById("cssLogoElements");

  let cssImg = document.createElement("img");
  cssImg.setAttribute("class", "languageLogos");
  cssImg.setAttribute("id", "cssLogo");
  cssImg.src = cssLogo;
  cssLogoElements.appendChild(cssImg);

  let cssText = document.createElement("p");
  cssText.setAttribute("class", "languageNames");
  cssText.setAttribute("id", "cssText");
  cssText.innerHTML = "CSS";
  cssLogoElements.appendChild(cssText);

  // JS LOGO
  createNewDiv("jsLogoElements", "aboutLogoIcons");
  let jsLogoElements = document.getElementById("jsLogoElements");

  let jsImg = document.createElement("img");
  jsImg.setAttribute("class", "languageLogos");
  jsImg.setAttribute("id", "jsLogo");
  jsImg.src = jsLogo;
  jsLogoElements.appendChild(jsImg);

  let jsText = document.createElement("p");
  jsText.setAttribute("class", "languageNames");
  jsText.setAttribute("id", "jsText");
  jsText.innerHTML = "Javascript";
  jsLogoElements.appendChild(jsText);

  // REACT LOGO
  createNewDiv("reactLogoElements", "aboutLogoIcons");
  let reactLogoElements = document.getElementById("reactLogoElements");

  let reactImg = document.createElement("img");
  reactImg.setAttribute("class", "languageLogos");
  reactImg.setAttribute("id", "reactLogo");
  reactImg.src = reactLogo;
  reactLogoElements.appendChild(reactImg);

  let reactText = document.createElement("p");
  reactText.setAttribute("class", "languageNames");
  reactText.setAttribute("id", "reactText");
  reactText.innerHTML = "React";
  reactLogoElements.appendChild(reactText);

  // NODE LOGO
  createNewDiv("nodeLogoElements", "aboutLogoIcons");
  let nodeLogoElements = document.getElementById("nodeLogoElements");

  let nodeImg = document.createElement("img");
  nodeImg.setAttribute("class", "languageLogos");
  nodeImg.setAttribute("id", "nodeLogo");
  nodeImg.src = nodeLogo;
  nodeLogoElements.appendChild(nodeImg);

  let nodeText = document.createElement("p");
  nodeText.setAttribute("class", "languageNames");
  nodeText.setAttribute("id", "nodeText");
  nodeText.innerHTML = "Node";
  nodeLogoElements.appendChild(nodeText);

  // WEBPACK LOGO
  createNewDiv("webpackLogoElements", "aboutLogoIcons");
  let webpackLogoElements = document.getElementById("webpackLogoElements");

  let webpackImg = document.createElement("img");
  webpackImg.setAttribute("class", "languageLogos");
  webpackImg.setAttribute("id", "webpackLogo");
  webpackImg.src = webpackLogo;
  webpackLogoElements.appendChild(webpackImg);

  let webpackText = document.createElement("p");
  webpackText.setAttribute("class", "languageNames");
  webpackText.setAttribute("id", "webpackText");
  webpackText.innerHTML = "Webpack";
  webpackLogoElements.appendChild(webpackText);

  // JEST LOGO
  createNewDiv("jestLogoElements", "aboutLogoIcons");
  let jestLogoElements = document.getElementById("jestLogoElements");

  let jestImg = document.createElement("img");
  jestImg.setAttribute("class", "languageLogos");
  jestImg.setAttribute("id", "jestLogo");
  jestImg.src = jestLogo;
  jestLogoElements.appendChild(jestImg);

  let jestText = document.createElement("p");
  jestText.setAttribute("class", "languageNames");
  jestText.setAttribute("id", "jestText");
  jestText.innerHTML = "Jest";
  jestLogoElements.appendChild(jestText);

  // NPM LOGO
  createNewDiv("npmLogoElements", "aboutLogoIcons");
  let npmLogoElements = document.getElementById("npmLogoElements");

  let npmImg = document.createElement("img");
  npmImg.setAttribute("class", "languageLogos");
  npmImg.setAttribute("id", "npmLogo");
  npmImg.src = npmLogo;
  npmLogoElements.appendChild(npmImg);

  let npmText = document.createElement("p");
  npmText.setAttribute("class", "languageNames");
  npmText.setAttribute("id", "npmText");
  npmText.innerHTML = "NPM";
  npmLogoElements.appendChild(npmText);
};

export { aboutSection };
