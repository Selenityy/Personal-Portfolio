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

  addHElement("h4", "projectOne", "projectCalcTitle", "Calculator");
  let calcTitle = document.getElementById("projectCalcTitle");
  calcTitle.setAttribute("class", "titles");
  addHElement(
    "p",
    "projectOne",
    "projectCalcDescription",
    "A simple calculator."
  );
  let calcDescription = document.getElementById("projectCalcDescription");
  calcDescription.setAttribute("class", "descriptions");

  createNewDiv("calcLinkButtons", "projectOne");
  let calButtons = document.getElementById("calcLinkButtons");
  calButtons.setAttribute("class", "projectButtons");

  addBtn("liveButtonCalc", "calcLinkButtons");
  let liveButtonCalc = document.getElementById("liveButtonCalc");
  liveButtonCalc.setAttribute("class", "linkButtons");
  liveButtonCalc.innerHTML = "App";
  liveButtonCalc.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/Calculator/";
  });

  addBtn("repoButtonCalc", "calcLinkButtons");
  let repoButtonCalc = document.getElementById("repoButtonCalc");
  repoButtonCalc.setAttribute("class", "linkButtons");
  repoButtonCalc.innerHTML = "Repo";
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

  addHElement("h4", "projectTwo", "projectTicTitle", "Tic-Tac-Toe");
  let tictacTitle = document.getElementById("projectTicTitle");
  tictacTitle.setAttribute("class", "titles");

  addHElement("p", "projectTwo", "projectTicDescription", "Tic-Tac-Toe game.");
  let tictacDescription = document.getElementById("projectTicDescription");
  tictacDescription.setAttribute("class", "descriptions");

  createNewDiv("ticLinkButtons", "projectTwo");
  let tictacButtons = document.getElementById("ticLinkButtons");
  tictacButtons.setAttribute("class", "projectButtons");

  addBtn("liveButtonTic", "ticLinkButtons");
  let liveButtonTic = document.getElementById("liveButtonTic");
  liveButtonTic.setAttribute("class", "linkButtons");
  liveButtonTic.innerHTML = "App";
  liveButtonTic.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/Tic-Tac-Toe/";
  });

  addBtn("repoButtonTic", "ticLinkButtons");
  let repoButtonTic = document.getElementById("repoButtonTic");
  repoButtonTic.setAttribute("class", "linkButtons");
  repoButtonTic.innerHTML = "Repo";
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

  addHElement("h4", "projectThree", "projectWeatherTitle", "Weather App");
  let weatherTitle = document.getElementById("projectWeatherTitle");
  weatherTitle.setAttribute("class", "titles");

  addHElement(
    "p",
    "projectThree",
    "projectWeatherDescription",
    "Tells you the weather."
  );
  let weatherDescription = document.getElementById("projectWeatherDescription");
  weatherDescription.setAttribute("class", "descriptions");

  createNewDiv("weatherLinkButtons", "projectThree");
  let weatherButtons = document.getElementById("weatherLinkButtons");
  weatherButtons.setAttribute("class", "projectButtons");

  addBtn("liveButtonWeather", "weatherLinkButtons");
  let liveButtonWeather = document.getElementById("liveButtonWeather");
  liveButtonWeather.setAttribute("class", "linkButtons");
  liveButtonWeather.innerHTML = "App";
  liveButtonWeather.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/Weather_App/";
  });

  addBtn("repoButtonWeather", "weatherLinkButtons");
  let repoButtonWeather = document.getElementById("repoButtonWeather");
  repoButtonWeather.setAttribute("class", "linkButtons");
  repoButtonWeather.innerHTML = "Repo";
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

  addHElement("h4", "projectFour", "projectCVTitle", "CV Application");
  let cvTitle = document.getElementById("projectCVTitle");
  cvTitle.setAttribute("class", "titles");

  addHElement(
    "p",
    "projectFour",
    "projectCVDescription",
    "Create your own CV."
  );
  let cvDescription = document.getElementById("projectCVDescription");
  cvDescription.setAttribute("class", "descriptions");

  createNewDiv("cvLinkButtons", "projectFour");
  let cvButtons = document.getElementById("cvLinkButtons");
  cvButtons.setAttribute("class", "projectButtons");

  addBtn("liveButtonCV", "cvLinkButtons");
  let liveButtonCV = document.getElementById("liveButtonCV");
  liveButtonCV.setAttribute("class", "linkButtons");
  liveButtonCV.innerHTML = "App";
  liveButtonCV.addEventListener("click", function () {
    window.location.href =
      "https://github.com/Selenityy/Project-CV-Application/tree/main";
  });

  addBtn("repoButtonCV", "cvLinkButtons");
  let repoButtonCV = document.getElementById("repoButtonCV");
  repoButtonCV.setAttribute("class", "linkButtons");
  repoButtonCV.innerHTML = "Repo";
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

  addHElement("h4", "projectFive", "projectToDoTitle", "To-Do List");
  let todoTitle = document.getElementById("projectToDoTitle");
  todoTitle.setAttribute("class", "titles");

  addHElement(
    "p",
    "projectFive",
    "projectToDoDescription",
    "Inspired by Asana."
  );
  let todoDescription = document.getElementById("projectToDoDescription");
  todoDescription.setAttribute("class", "descriptions");

  createNewDiv("toDoLinkButtons", "projectFive");
  let todoButtons = document.getElementById("toDoLinkButtons");
  todoButtons.setAttribute("class", "projectButtons");

  addBtn("liveButtonToDo", "toDoLinkButtons");
  let liveButtonToDo = document.getElementById("liveButtonToDo");
  liveButtonToDo.setAttribute("class", "linkButtons");
  liveButtonToDo.innerHTML = "App";
  liveButtonToDo.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/To-Do-List/";
  });

  addBtn("repoButtonToDo", "toDoLinkButtons");
  let repoButtonToDo = document.getElementById("repoButtonToDo");
  repoButtonToDo.setAttribute("class", "linkButtons");
  repoButtonToDo.innerHTML = "Repo";
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

  addHElement("h4", "projectSix", "projectRestaurantTitle", "Restaurant Page");
  let restaurantTitle = document.getElementById("projectRestaurantTitle");
  restaurantTitle.setAttribute("class", "titles");

  addHElement(
    "p",
    "projectSix",
    "projectRestaurantDescription",
    "Totoro Cafe."
  );
  let restaurantDescription = document.getElementById(
    "projectRestaurantDescription"
  );
  restaurantDescription.setAttribute("class", "descriptions");

  createNewDiv("restaurantLinkButtons", "projectSix");
  let restaurantButtons = document.getElementById("restaurantLinkButtons");
  restaurantButtons.setAttribute("class", "projectButtons");

  addBtn("liveButtonRestaurant", "restaurantLinkButtons");
  let liveButtonRestaurant = document.getElementById("liveButtonRestaurant");
  liveButtonRestaurant.setAttribute("class", "linkButtons");
  liveButtonRestaurant.innerHTML = "App";
  liveButtonRestaurant.addEventListener("click", function () {
    window.location.href = "https://selenityy.github.io/Restaurant-Page/";
  });

  addBtn("repoButtonRestaurant", "restaurantLinkButtons");
  let repoButtonRestaurant = document.getElementById("repoButtonRestaurant");
  repoButtonRestaurant.setAttribute("class", "linkButtons");
  repoButtonRestaurant.innerHTML = "Repo";
  repoButtonRestaurant.addEventListener("click", function () {
    window.location.href = "https://github.com/Selenityy/Restaurant-Page";
  });
};

export { projectSection };
