import { homeSection } from "../pages/home";
import { aboutSection } from "../pages/about";
import { projectSection } from "../pages/projects";
import { resumeSection } from "../pages/resume";
import { contactSection } from "../pages/contact";
import { createNewDiv } from "./DOMlogic";

const createMobileMainContent = () => {
  createNewDiv("mobileMainContent", "container");

  createNewDiv("mainContentHome", "mobileMainContent");
  homeSection();

  createNewDiv("mainContentAbout", "mobileMainContent");
  aboutSection();

  createNewDiv("mainContentProjects", "mobileMainContent");
  projectSection();

  createNewDiv("mainContentResume", "mobileMainContent");
  resumeSection();

  createNewDiv("mainContentContact", "mobileMainContent");
  contactSection();
};

export { createMobileMainContent };
