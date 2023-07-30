import { addBtn, addHElement, createNewDiv } from "../components/DOMlogic";

const projectSection = () => {
  let parentDiv = document.getElementById("mainContentProjects");

  addHElement("h2", "mainContentProjects", "homeProjects", "Projects");
  let projectsH2 = document.getElementById("homeProjects");
  projectsH2.setAttribute("class", "sectionTitle");

  // PROJECT 1: CALCULATOR
  createNewDiv("projectOne", "mainContentProjects");
  let projectOne = document.getElementById("projectOne");
  projectOne.setAttribute("class", "projects");

  let calcImg = document.createElement("img");
  calcImg.setAttribute("id", "calcImg");
  projectOne.appendChild(calcImg);

  addHElement("h3", "projectOne", "projectCalcTitle", "Calculator");
  addHElement(
    "h4",
    "projectOne",
    "projectCalcDescription",
    "A simple calculator."
  );

  createNewDiv("calcLinkButtons", "projectOne");
  addBtn("liveButtonCalc", "calcLinkButtons");
  let liveButtonCalc = document.getElementById("liveButtonCalc");
  liveButtonCalc.setAttribute("class", "calcLinkButtons");

  addBtn("repoButtonCalc", "calcLinkButtons");
  let repoButtonCalc = document.getElementById("repoButtonCalc");
  repoButtonCalc.setAttribute("class", "calcLinkButtons");

  // PROJECT 2: TIC-TAC-TOE
  createNewDiv("projectTwo", "mainContentProjects");
  let projectTwo = document.getElementById("projectTwo");
  projectTwo.setAttribute("class", "projects");

  let ticImg = document.createElement("img");
  ticImg.setAttribute("id", "ticImg");
  projectTwo.appendChild(ticImg);

  addHElement("h3", "projectTwo", "projectTicTitle", "Tic-Tac-Toe");
  addHElement("h4", "projectTwo", "projectTicDescription", "Tic-Tac-Toe game.");

  createNewDiv("ticLinkButtons", "projectTwo");
  addBtn("liveButtonTic", "ticLinkButtons");
  let liveButtonTic = document.getElementById("liveButtonTic");
  liveButtonTic.setAttribute("class", "ticLinkButtons");

  addBtn("repoButtonTic", "ticLinkButtons");
  let repoButtonTic = document.getElementById("repoButtonTic");
  repoButtonTic.setAttribute("class", "ticLinkButtons");

  // PROJECT 3: WEATHER APP
  createNewDiv("projectThree", "mainContentProjects");
  let projectThree = document.getElementById("projectThree");
  projectThree.setAttribute("class", "projects");

  let weatherImg = document.createElement("img");
  weatherImg.setAttribute("id", "weatherImg");
  projectThree.appendChild(weatherImg);

  addHElement("h3", "projectThree", "projectWeatherTitle", "Weather App");
  addHElement(
    "h4",
    "projectThree",
    "projectWeatherDescription",
    "Tells you the weather."
  );

  createNewDiv("weatherLinkButtons", "projectThree");
  addBtn("liveButtonWeather", "weatherLinkButtons");
  let liveButtonWeather = document.getElementById("liveButtonWeather");
  liveButtonWeather.setAttribute("class", "weatherLinkButtons");

  addBtn("repoButtonWeather", "weatherLinkButtons");
  let repoButtonWeather = document.getElementById("repoButtonWeather");
  repoButtonWeather.setAttribute("class", "weatherLinkButtons");

  // PROJECT 4: CV APPLICATION
  createNewDiv("projectFour", "mainContentProjects");
  let projectFour = document.getElementById("projectFour");
  projectFour.setAttribute("class", "projects");

  let cvImg = document.createElement("img");
  cvImg.setAttribute("id", "cvImg");
  projectFour.appendChild(cvImg);

  addHElement("h3", "projectFour", "projectCVTitle", "CV Application");
  addHElement(
    "h4",
    "projectFour",
    "projectCVDescription",
    "Create your own CV."
  );

  createNewDiv("cvLinkButtons", "projectFour");
  addBtn("liveButtonCV", "cvLinkButtons");
  let liveButtonCV = document.getElementById("liveButtonCV");
  liveButtonCV.setAttribute("class", "cvLinkButtons");

  addBtn("repoButtonCV", "cvLinkButtons");
  let repoButtonCV = document.getElementById("repoButtonCV");
  repoButtonCV.setAttribute("class", "cvLinkButtons");

  // PROJECT 5: TO-DO
  createNewDiv("projectFive", "mainContentProjects");
  let projectFive = document.getElementById("projectFive");
  projectFive.setAttribute("class", "projects");

  let toDoImg = document.createElement("img");
  toDoImg.setAttribute("id", "toDoImg");
  projectFive.appendChild(toDoImg);

  addHElement("h3", "projectFive", "projectToDoTitle", "To-Do List");
  addHElement(
    "h4",
    "projectFive",
    "projectToDoDescription",
    "Inspired by Asana."
  );

  createNewDiv("toDoLinkButtons", "projectFive");
  addBtn("liveButtonToDo", "toDoLinkButtons");
  let liveButtonToDo = document.getElementById("liveButtonToDo");
  liveButtonToDo.setAttribute("class", "toDoLinkButtons");

  addBtn("repoButtonToDo", "toDoLinkButtons");
  let repoButtonToDo = document.getElementById("repoButtonToDo");
  repoButtonToDo.setAttribute("class", "toDoLinkButtons");

  // PROJECT 6: RESTAURANT PAGE
  createNewDiv("projectSix", "mainContentProjects");
  let projectSix = document.getElementById("projectSix");
  projectSix.setAttribute("class", "projects");

  let restaurantImg = document.createElement("img");
  restaurantImg.setAttribute("id", "restaurantImg");
  projectSix.appendChild(restaurantImg);

  addHElement("h3", "projectSix", "projectRestaurantTitle", "Restaurant Page");
  addHElement(
    "h4",
    "projectSix",
    "projectRestaurantDescription",
    "Totoro Cafe."
  );

  createNewDiv("restaurantLinkButtons", "projectSix");
  addBtn("liveButtonRestaurant", "restaurantLinkButtons");
  let liveButtonRestaurant = document.getElementById("liveButtonRestaurant");
  liveButtonRestaurant.setAttribute("class", "restaurantLinkButtons");

  addBtn("repoButtonRestaurant", "restaurantLinkButtons");
  let repoButtonRestaurant = document.getElementById("repoButtonRestaurant");
  repoButtonRestaurant.setAttribute("class", "restaurantLinkButtons");
};

export { projectSection };
