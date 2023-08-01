import "./styles.css";
import { createMobileNavBar } from "./components/mobileNavBar";
import { createMobileMainContent } from "./components/mobileMainContent";

createMobileNavBar();
createMobileMainContent();

let homeButton = document.getElementById("homeButton");
let homeHElement = document.getElementById("profilePic");
homeButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let aboutButton = document.getElementById("aboutButton");
let aboutHElement = document.getElementById("homeAbout");
aboutButton.addEventListener("click", function () {
  const yOffset = -65;
  const elementPosition = aboutHElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset + yOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
});

let projectButton = document.getElementById("projectsButton");
let projectHElement = document.getElementById("homeProjects");
projectButton.addEventListener("click", function () {
  const yOffset = -65;
  const elementPosition = projectHElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset + yOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
});

let resumeButton = document.getElementById("resumeButton");
let resumeHElement = document.getElementById("homeResume");
resumeButton.addEventListener("click", function () {
  const yOffset = -65;
  const elementPosition = resumeHElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset + yOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
});

let contactButton = document.getElementById("contactButton");
let contactHElement = document.getElementById("homeContact");
contactButton.addEventListener("click", function () {
  const bottomPosition = document.documentElement.scrollHeight;
  window.scrollTo({
    top: bottomPosition,
    behavior: "smooth",
  });
});
