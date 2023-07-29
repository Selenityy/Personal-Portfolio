import { homeSection } from "../pages/home";
import { createNewDiv } from "./DOMlogic";

const createMobileMainContent = () => {
  createNewDiv("mobileMainContent", "container");

  createNewDiv("mainContentHome", "mobileMainContent");
  homeSection();
  
  createNewDiv("mainContentAbout", "mobileMainContent");
  createNewDiv("mainContentProjects", "mobileMainContent");
  createNewDiv("mainContentResume", "mobileMainContent");
  createNewDiv("mainContentContact", "mobileMainContent");
};

export { createMobileMainContent };
