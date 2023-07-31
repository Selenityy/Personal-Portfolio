import { addBtn, addHElement, createNewDiv } from "../components/DOMlogic";
import calcScreenshot from "../assets/Screenshots/calculator.png";
import tictactoeScreenshot from "../assets/Screenshots/tictactoe.png";
import weatherScreenshot from "../assets/Screenshots/weather.png";
import cvScreenshot from "../assets/Screenshots/cv.png";
import todoScreenshot from "../assets/Screenshots/todo.png";
import restaurantScreenshot from "../assets/Screenshots/restaurant.png";

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
  calcImg.setAttribute("class", "screenshot");
  calcImg.src = calcScreenshot;
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
  liveButtonCalc.innerHTML = "Live App";
  liveButtonCalc.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/Calculator/";
  });

  addBtn("repoButtonCalc", "calcLinkButtons");
  let repoButtonCalc = document.getElementById("repoButtonCalc");
  repoButtonCalc.setAttribute("class", "calcLinkButtons");
  repoButtonCalc.innerHTML = "Repository";
  repoButtonCalc.addEventListener("click", function () {
    window.location.href = "https://github.com/Selenityy/Calculator";
  });

  // PROJECT 2: TIC-TAC-TOE
  createNewDiv("projectTwo", "mainContentProjects");
  let projectTwo = document.getElementById("projectTwo");
  projectTwo.setAttribute("class", "projects");

  let ticImg = document.createElement("img");
  ticImg.setAttribute("id", "ticImg");
  ticImg.setAttribute("class", "screenshot");
  ticImg.src = tictactoeScreenshot;
  projectTwo.appendChild(ticImg);

  addHElement("h3", "projectTwo", "projectTicTitle", "Tic-Tac-Toe");
  addHElement("h4", "projectTwo", "projectTicDescription", "Tic-Tac-Toe game.");

  createNewDiv("ticLinkButtons", "projectTwo");
  addBtn("liveButtonTic", "ticLinkButtons");
  let liveButtonTic = document.getElementById("liveButtonTic");
  liveButtonTic.setAttribute("class", "ticLinkButtons");
  liveButtonTic.innerHTML = "Live App";
  liveButtonTic.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/Tic-Tac-Toe/";
  });

  addBtn("repoButtonTic", "ticLinkButtons");
  let repoButtonTic = document.getElementById("repoButtonTic");
  repoButtonTic.setAttribute("class", "ticLinkButtons");
  repoButtonTic.innerHTML = "Repository";
  repoButtonTic.addEventListener("click", function () {
    window.location.href = "https://github.com/Selenityy/Tic-Tac-Toe";
  });

  // PROJECT 3: WEATHER APP
  createNewDiv("projectThree", "mainContentProjects");
  let projectThree = document.getElementById("projectThree");
  projectThree.setAttribute("class", "projects");

  let weatherImg = document.createElement("img");
  weatherImg.setAttribute("id", "weatherImg");
  weatherImg.setAttribute("class", "screenshot");
  weatherImg.src = weatherScreenshot;
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
  liveButtonWeather.innerHTML = "Live App";
  liveButtonWeather.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/Weather_App/";
  });

  addBtn("repoButtonWeather", "weatherLinkButtons");
  let repoButtonWeather = document.getElementById("repoButtonWeather");
  repoButtonWeather.setAttribute("class", "weatherLinkButtons");
  repoButtonWeather.innerHTML = "Repository";
  repoButtonWeather.addEventListener("click", function () {
    window.location.href = "https://github.com/Selenityy/Weather_App";
  });

  // PROJECT 4: CV APPLICATION
  createNewDiv("projectFour", "mainContentProjects");
  let projectFour = document.getElementById("projectFour");
  projectFour.setAttribute("class", "projects");

  let cvImg = document.createElement("img");
  cvImg.setAttribute("id", "cvImg");
  cvImg.setAttribute("class", "screenshot");
  cvImg.src = cvScreenshot;
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
  liveButtonCV.innerHTML = "Live App";
  liveButtonCV.addEventListener("click", function () {
    window.location.href =
      "https://github.com/Selenityy/Project-CV-Application/tree/main";
  });

  addBtn("repoButtonCV", "cvLinkButtons");
  let repoButtonCV = document.getElementById("repoButtonCV");
  repoButtonCV.setAttribute("class", "cvLinkButtons");
  repoButtonCV.innerHTML = "Repository";
  repoButtonCV.addEventListener("click", function () {
    window.location.href =
      "https://github.com/Selenityy/Project-CV-Application/tree/main";
  });

  // PROJECT 5: TO-DO
  createNewDiv("projectFive", "mainContentProjects");
  let projectFive = document.getElementById("projectFive");
  projectFive.setAttribute("class", "projects");

  let toDoImg = document.createElement("img");
  toDoImg.setAttribute("id", "toDoImg");
  toDoImg.setAttribute("class", "screenshot");
  toDoImg.src = todoScreenshot;
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
  liveButtonToDo.innerHTML = "Live App";
  liveButtonToDo.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/To-Do-List/";
  });

  addBtn("repoButtonToDo", "toDoLinkButtons");
  let repoButtonToDo = document.getElementById("repoButtonToDo");
  repoButtonToDo.setAttribute("class", "toDoLinkButtons");
  repoButtonToDo.innerHTML = "Repository";
  repoButtonToDo.addEventListener("click", function () {
    window.location.href = "https://github.com/Selenityy/To-Do-List";
  });

  // PROJECT 6: RESTAURANT PAGE
  createNewDiv("projectSix", "mainContentProjects");
  let projectSix = document.getElementById("projectSix");
  projectSix.setAttribute("class", "projects");

  let restaurantImg = document.createElement("img");
  restaurantImg.setAttribute("id", "restaurantImg");
  restaurantImg.setAttribute("class", "screenshot");
  restaurantImg.src = restaurantScreenshot;
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
  liveButtonRestaurant.innerHTML = "Live App";
  liveButtonRestaurant.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/Restaurant-Page/";
  });

  addBtn("repoButtonRestaurant", "restaurantLinkButtons");
  let repoButtonRestaurant = document.getElementById("repoButtonRestaurant");
  repoButtonRestaurant.setAttribute("class", "restaurantLinkButtons");
  repoButtonRestaurant.innerHTML = "Repository";
  repoButtonRestaurant.addEventListener("click", function () {
    window.location.href = "https://github.com/Selenityy/Restaurant-Page";
  });
};

export { projectSection };
