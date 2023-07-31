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

  // PROJECT 1: CV
  createNewDiv("projectCV", "mainContentProjects");
  let projectCV = document.getElementById("projectCV");
  projectCV.setAttribute("class", "projects");

  let cvImg = document.createElement("img");
  cvImg.setAttribute("id", "cvImg");
  cvImg.setAttribute("class", "screenshot");
  cvImg.src = cvScreenshot;
  projectCV.appendChild(cvImg);

  addHElement("h4", "projectCV", "projectCVTitle", "CV Application");
  let cvTitle = document.getElementById("projectCVTitle");
  cvTitle.setAttribute("class", "titles");

  addHElement("p", "projectCV", "projectCVDescription", "Create your own CV.");
  let cvDescription = document.getElementById("projectCVDescription");
  cvDescription.setAttribute("class", "descriptions");

  createNewDiv("cvLinkButtons", "projectCV");
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

  // PROJECT 2: WEATHER
  createNewDiv("projectWeather", "mainContentProjects");
  let projectWeather = document.getElementById("projectWeather");
  projectWeather.setAttribute("class", "projects");

  let weatherImg = document.createElement("img");
  weatherImg.setAttribute("id", "weatherImg");
  weatherImg.setAttribute("class", "screenshot");
  weatherImg.src = weatherScreenshot;
  projectWeather.appendChild(weatherImg);

  addHElement("h4", "projectWeather", "projectWeatherTitle", "Weather App");
  let weatherTitle = document.getElementById("projectWeatherTitle");
  weatherTitle.setAttribute("class", "titles");

  addHElement(
    "p",
    "projectWeather",
    "projectWeatherDescription",
    "Tells you the weather."
  );
  let weatherDescription = document.getElementById("projectWeatherDescription");
  weatherDescription.setAttribute("class", "descriptions");

  createNewDiv("weatherLinkButtons", "projectWeather");
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

  // PROJECT 3: TODO
  createNewDiv("projectTodo", "mainContentProjects");
  let projectTodo = document.getElementById("projectTodo");
  projectTodo.setAttribute("class", "projects");

  let toDoImg = document.createElement("img");
  toDoImg.setAttribute("id", "toDoImg");
  toDoImg.setAttribute("class", "screenshot");
  toDoImg.src = todoScreenshot;
  projectTodo.appendChild(toDoImg);

  addHElement("h4", "projectTodo", "projectToDoTitle", "To-Do List");
  let todoTitle = document.getElementById("projectToDoTitle");
  todoTitle.setAttribute("class", "titles");

  addHElement(
    "p",
    "projectTodo",
    "projectToDoDescription",
    "Inspired by Asana."
  );
  let todoDescription = document.getElementById("projectToDoDescription");
  todoDescription.setAttribute("class", "descriptions");

  createNewDiv("toDoLinkButtons", "projectTodo");
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

  // PROJECT 4: RESTAURANT
  createNewDiv("projectRestaurant", "mainContentProjects");
  let projectRestaurant = document.getElementById("projectRestaurant");
  projectRestaurant.setAttribute("class", "projects");

  let restaurantImg = document.createElement("img");
  restaurantImg.setAttribute("id", "restaurantImg");
  restaurantImg.setAttribute("class", "screenshot");
  restaurantImg.src = restaurantScreenshot;
  projectRestaurant.appendChild(restaurantImg);

  addHElement(
    "h4",
    "projectRestaurant",
    "projectRestaurantTitle",
    "Restaurant Page"
  );
  let restaurantTitle = document.getElementById("projectRestaurantTitle");
  restaurantTitle.setAttribute("class", "titles");

  addHElement(
    "p",
    "projectRestaurant",
    "projectRestaurantDescription",
    "Totoro Cafe."
  );
  let restaurantDescription = document.getElementById(
    "projectRestaurantDescription"
  );
  restaurantDescription.setAttribute("class", "descriptions");

  createNewDiv("restaurantLinkButtons", "projectRestaurant");
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

  // PROJECT 5: TIC-TAC-TOE
  createNewDiv("projectTicTacToe", "mainContentProjects");
  let projectTicTacToe = document.getElementById("projectTicTacToe");
  projectTicTacToe.setAttribute("class", "projects");

  let ticImg = document.createElement("img");
  ticImg.setAttribute("id", "ticImg");
  ticImg.setAttribute("class", "screenshot");
  ticImg.src = tictactoeScreenshot;
  projectTicTacToe.appendChild(ticImg);

  addHElement("h4", "projectTicTacToe", "projectTicTitle", "Tic-Tac-Toe");
  let tictacTitle = document.getElementById("projectTicTitle");
  tictacTitle.setAttribute("class", "titles");

  addHElement(
    "p",
    "projectTicTacToe",
    "projectTicDescription",
    "Tic-Tac-Toe game."
  );
  let tictacDescription = document.getElementById("projectTicDescription");
  tictacDescription.setAttribute("class", "descriptions");

  createNewDiv("ticLinkButtons", "projectTicTacToe");
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

  // PROJECT 6: CALCULATOR
  createNewDiv("projectCalc", "mainContentProjects");
  let projectCalc = document.getElementById("projectCalc");
  projectCalc.setAttribute("class", "projects");

  let calcImg = document.createElement("img");
  calcImg.setAttribute("id", "calcImg");
  calcImg.setAttribute("class", "screenshot");
  calcImg.src = calcScreenshot;
  projectCalc.appendChild(calcImg);

  addHElement("h4", "projectCalc", "projectCalcTitle", "Calculator");
  let calcTitle = document.getElementById("projectCalcTitle");
  calcTitle.setAttribute("class", "titles");
  addHElement(
    "p",
    "projectCalc",
    "projectCalcDescription",
    "A simple calculator."
  );
  let calcDescription = document.getElementById("projectCalcDescription");
  calcDescription.setAttribute("class", "descriptions");

  createNewDiv("calcLinkButtons", "projectCalc");
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
};

export { projectSection };
