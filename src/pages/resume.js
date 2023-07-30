import { addHElement, createNewDiv } from "../components/DOMlogic";

const resumeSection = () => {
  let parentDiv = document.getElementById("mainContentResume");

  // RESUME H2
  addHElement("h2", "mainContentResume", "homeResume", "Resume");
  let resumeH2 = document.getElementById("homeResume");
  resumeH2.setAttribute("class", "sectionTitle");

  // RESUME EDUCATION H4
  addHElement("h4", "mainContentResume", "resumeEdu", "Education");
  let resumeEdu = document.getElementById("resumeEdu");
  resumeEdu.setAttribute("class", "resumeHeaders");

  // -- SCHOOL NAME
  let educationSchool = document.createElement("ul");
  educationSchool.setAttribute("class", "school");
  educationSchool.setAttribute("id", "schoolName");
  educationSchool.textContent = "The University of Texas at Austin";
  resumeEdu.appendChild(educationSchool);

  // -- SCHOOL DEGREE
  let educationDegree = document.createElement("li");
  educationDegree.setAttribute("class", "school");
  educationDegree.setAttribute("id", "schoolDegree");
  educationDegree.textContent = "B.A. Psychology";
  educationSchool.appendChild(educationDegree);

  // -- SCHOOL LOCATION
  let educationLocal = document.createElement("li");
  educationLocal.setAttribute("class", "school");
  educationLocal.setAttribute("id", "schoolLocation");
  educationLocal.textContent = "Austin, TX";
  educationSchool.appendChild(educationLocal);

  // -- SCHOOL YEARS
  let educationYr = document.createElement("li");
  educationYr.setAttribute("class", "school");
  educationYr.setAttribute("id", "schoolYrs");
  educationYr.textContent = "08/2011 - 05/2014";
  educationSchool.appendChild(educationYr);

  // RESUME WORK EXPERIENCE H4
  addHElement("h4", "mainContentResume", "resumeExp", "Work Experience");
  let resumeExp = document.getElementById("resumeExp");
  resumeExp.setAttribute("class", "resumeHeaders");

  // JOB 1
  let jobOne = document.createElement("div");
  jobOne.setAttribute("class", "jobOne");
  resumeExp.appendChild(jobOne);

  // - JOB 1: WHERE
  let jobOneWhere = document.createElement("ul");
  jobOneWhere.setAttribute("class", "jobDetails");
  jobOneWhere.setAttribute("id", "jobOneWhere");
  jobOne.appendChild(jobOneWhere);

  // ---- JOB 1: TITLE
  let jobOneTitle = document.createElement("li");
  jobOneTitle.setAttribute("class", "jobWhereBullets");
  jobOneTitle.setAttribute("id", "jobOneTitle");
  jobOneTitle.textContent = "Director of Product Management";
  jobOneWhere.appendChild(jobOneTitle);

  // ---- JOB 1: YEAR
  let jobOneYear = document.createElement("li");
  jobOneYear.setAttribute("class", "jobWhereBullets");
  jobOneYear.setAttribute("id", "jobOneYear");
  jobOneYear.textContent = "07/2022 - 09/2022";
  jobOneWhere.appendChild(jobOneYear);

  // ---- JOB 1: COMPANY
  let jobOneCompany = document.createElement("li");
  jobOneCompany.setAttribute("class", "jobWhereBullets");
  jobOneCompany.setAttribute("id", "jobOneCompany");
  jobOneCompany.textContent = "Wisdom Gaming";
  jobOneWhere.appendChild(jobOneCompany);

  // ---- JOB 1: LOCATION
  let jobOneLocation = document.createElement("li");
  jobOneLocation.setAttribute("class", "jobWhereBullets");
  jobOneLocation.setAttribute("id", "jobOneLocation");
  jobOneLocation.textContent = "Minneapolis, MN";
  jobOneWhere.appendChild(jobOneLocation);

  // - JOB 1: WHAT
  let jobOneWhat = document.createElement("ul");
  jobOneWhat.setAttribute("class", "jobDetails");
  jobOneWhat.setAttribute("id", "jobOneWhat");
  jobOne.appendChild(jobOneWhat);

  // ---- JOB 1: BULLET 1
  let jobOneBulletOne = document.createElement("li");
  jobOneBulletOne.setAttribute("class", "jobWhatBullets");
  jobOneBulletOne.setAttribute("id", "jobOneBulletOne");
  jobOneBulletOne.textContent = "bullet point 1";
  jobOneWhat.appendChild(jobOneBulletOne);

  // ---- JOB 1: BULLET 2
  let jobOneBulletTwo = document.createElement("li");
  jobOneBulletTwo.setAttribute("class", "jobWhatBullets");
  jobOneBulletTwo.setAttribute("id", "jobOneBulletTwo");
  jobOneBulletTwo.textContent = "bullet point 2";
  jobOneWhat.appendChild(jobOneBulletTwo);

  // ---- JOB 1: BULLET 3
  let jobOneBulletThree = document.createElement("li");
  jobOneBulletThree.setAttribute("class", "jobWhatBullets");
  jobOneBulletThree.setAttribute("id", "jobOneBulletThree");
  jobOneBulletThree.textContent = "bullet point 3";
  jobOneWhat.appendChild(jobOneBulletThree);

  // JOB 2
  let jobTwo = document.createElement("div");
  jobTwo.setAttribute("class", "jobTwo");
  resumeExp.appendChild(jobTwo);

  // - JOB 2: WHERE
  let jobTwoWhere = document.createElement("ul");
  jobTwoWhere.setAttribute("class", "jobDetails");
  jobTwoWhere.setAttribute("id", "jobTwoWhere");
  jobTwo.appendChild(jobTwoWhere);

  // ---- JOB 2: TITLE
  let jobTwoTitle = document.createElement("li");
  jobTwoTitle.setAttribute("class", "jobWhereBullets");
  jobTwoTitle.setAttribute("id", "jobTwoTitle");
  jobTwoTitle.textContent = "Senior Brand Manager";
  jobTwoWhere.appendChild(jobTwoTitle);

  // ---- JOB 2: YEAR
  let jobTwoYear = document.createElement("li");
  jobTwoYear.setAttribute("class", "jobWhereBullets");
  jobTwoYear.setAttribute("id", "jobTwoYear");
  jobTwoYear.textContent = "12/2021 - 06/2022";
  jobTwoWhere.appendChild(jobTwoYear);

  // ---- JOB 2: COMPANY
  let jobTwoCompany = document.createElement("li");
  jobTwoCompany.setAttribute("class", "jobWhereBullets");
  jobTwoCompany.setAttribute("id", "jobTwoCompany");
  jobTwoCompany.textContent = "Wisdom Gaming";
  jobTwoWhere.appendChild(jobTwoCompany);

  // ---- JOB 2: LOCATION
  let jobTwoLocation = document.createElement("li");
  jobTwoLocation.setAttribute("class", "jobWhereBullets");
  jobTwoLocation.setAttribute("id", "jobTwoLocation");
  jobTwoLocation.textContent = "Minneapolis, MN";
  jobTwoWhere.appendChild(jobTwoLocation);

  // - JOB 2: WHAT
  let jobTwoWhat = document.createElement("ul");
  jobTwoWhat.setAttribute("class", "jobDetails");
  jobTwoWhat.setAttribute("id", "jobTwoWhat");
  jobTwo.appendChild(jobTwoWhat);

  // ---- JOB 2: BULLET 1
  let jobTwoBulletOne = document.createElement("li");
  jobTwoBulletOne.setAttribute("class", "jobWhatBullets");
  jobTwoBulletOne.setAttribute("id", "jobTwoBulletOne");
  jobTwoBulletOne.textContent = "bullet point 1";
  jobTwoWhat.appendChild(jobTwoBulletOne);

  // ---- JOB 2: BULLET 2
  let jobTwoBulletTwo = document.createElement("li");
  jobTwoBulletTwo.setAttribute("class", "jobWhatBullets");
  jobTwoBulletTwo.setAttribute("id", "jobTwoBulletTwo");
  jobTwoBulletTwo.textContent = "bullet point 2";
  jobTwoWhat.appendChild(jobTwoBulletTwo);

  // ---- JOB 2: BULLET 3
  let jobTwoBulletThree = document.createElement("li");
  jobTwoBulletThree.setAttribute("class", "jobWhatBullets");
  jobTwoBulletThree.setAttribute("id", "jobTwoBulletThree");
  jobTwoBulletThree.textContent = "bullet point 3";
  jobTwoWhat.appendChild(jobTwoBulletThree);

  // JOB 3
  let jobThree = document.createElement("div");
  jobThree.setAttribute("class", "jobThree");
  resumeExp.appendChild(jobThree);

  // - JOB 3: WHERE
  let jobThreeWhere = document.createElement("ul");
  jobThreeWhere.setAttribute("class", "jobDetails");
  jobThreeWhere.setAttribute("id", "jobThreeWhere");
  jobThree.appendChild(jobThreeWhere);

  // ---- JOB 3: TITLE
  let jobThreeTitle = document.createElement("li");
  jobThreeTitle.setAttribute("class", "jobWhereBullets");
  jobThreeTitle.setAttribute("id", "jobThreeTitle");
  jobThreeTitle.textContent = "Project Manager";
  jobThreeWhere.appendChild(jobThreeTitle);

  // ---- JOB 3: YEAR
  let jobThreeYear = document.createElement("li");
  jobThreeYear.setAttribute("class", "jobWhereBullets");
  jobThreeYear.setAttribute("id", "jobThreeYear");
  jobThreeYear.textContent = "12/2020 - 12/2021";
  jobThreeWhere.appendChild(jobThreeYear);

  // ---- JOB 3: COMPANY
  let jobThreeCompany = document.createElement("li");
  jobThreeCompany.setAttribute("class", "jobWhereBullets");
  jobThreeCompany.setAttribute("id", "jobThreeCompany");
  jobThreeCompany.textContent = "Wisdom Gaming";
  jobThreeWhere.appendChild(jobThreeCompany);

  // ---- JOB 3: LOCATION
  let jobThreeLocation = document.createElement("li");
  jobThreeLocation.setAttribute("class", "jobWhereBullets");
  jobThreeLocation.setAttribute("id", "jobThreeLocation");
  jobThreeLocation.textContent = "Minneapolis, MN";
  jobThreeWhere.appendChild(jobThreeLocation);

  // - JOB 3: WHAT
  let jobThreeWhat = document.createElement("ul");
  jobThreeWhat.setAttribute("class", "jobDetails");
  jobThreeWhat.setAttribute("id", "jobThreeWhat");
  jobThree.appendChild(jobThreeWhat);

  // ---- JOB 3: BULLET 1
  let jobThreeBulletOne = document.createElement("li");
  jobThreeBulletOne.setAttribute("class", "jobWhatBullets");
  jobThreeBulletOne.setAttribute("id", "jobThreeBulletOne");
  jobThreeBulletOne.textContent = "bullet point 1";
  jobThreeWhat.appendChild(jobThreeBulletOne);

  // ---- JOB 3: BULLET 2
  let jobThreeBulletTwo = document.createElement("li");
  jobThreeBulletTwo.setAttribute("class", "jobWhatBullets");
  jobThreeBulletTwo.setAttribute("id", "jobThreeBulletTwo");
  jobThreeBulletTwo.textContent = "bullet point 2";
  jobThreeWhat.appendChild(jobThreeBulletTwo);

  // ---- JOB 3: BULLET 3
  let jobThreeBulletThree = document.createElement("li");
  jobThreeBulletThree.setAttribute("class", "jobWhatBullets");
  jobThreeBulletThree.setAttribute("id", "jobThreeBulletThree");
  jobThreeBulletThree.textContent = "bullet point 3";
  jobThreeWhat.appendChild(jobThreeBulletThree);

  // JOB 4
  let jobFour = document.createElement("div");
  jobFour.setAttribute("class", "jobFour");
  resumeExp.appendChild(jobFour);

  // - JOB 4: WHERE
  let jobFourWhere = document.createElement("ul");
  jobFourWhere.setAttribute("class", "jobDetails");
  jobFourWhere.setAttribute("id", "jobFourWhere");
  jobFour.appendChild(jobFourWhere);

  // ---- JOB 4: TITLE
  let jobFourTitle = document.createElement("li");
  jobFourTitle.setAttribute("class", "jobWhereBullets");
  jobFourTitle.setAttribute("id", "jobFourTitle");
  jobFourTitle.textContent = "Content Creator";
  jobFourWhere.appendChild(jobFourTitle);

  // ---- JOB 4: YEAR
  let jobFourYear = document.createElement("li");
  jobFourYear.setAttribute("class", "jobWhereBullets");
  jobFourYear.setAttribute("id", "jobFourYear");
  jobFourYear.textContent = "01/2015 - 12/2020";
  jobFourWhere.appendChild(jobFourYear);

  // ---- JOB 4: COMPANY
  let jobFourCompany = document.createElement("li");
  jobFourCompany.setAttribute("class", "jobWhereBullets");
  jobFourCompany.setAttribute("id", "jobFourCompany");
  jobFourCompany.textContent = "Self Employed";
  jobFourWhere.appendChild(jobFourCompany);

  // ---- JOB 4: LOCATION
  let jobFourLocation = document.createElement("li");
  jobFourLocation.setAttribute("class", "jobWhereBullets");
  jobFourLocation.setAttribute("id", "jobFourLocation");
  jobFourLocation.textContent = "Austin, TX";
  jobFourWhere.appendChild(jobFourLocation);

  // - JOB 4: WHAT
  let jobFourWhat = document.createElement("ul");
  jobFourWhat.setAttribute("class", "jobDetails");
  jobFourWhat.setAttribute("id", "jobFourWhat");
  jobFour.appendChild(jobFourWhat);

  // ---- JOB 4: BULLET 1
  let jobFourBulletOne = document.createElement("li");
  jobFourBulletOne.setAttribute("class", "jobWhatBullets");
  jobFourBulletOne.setAttribute("id", "jobFourBulletOne");
  jobFourBulletOne.textContent = "bullet point 1";
  jobFourWhat.appendChild(jobFourBulletOne);

  // ---- JOB 4: BULLET 2
  let jobFourBulletTwo = document.createElement("li");
  jobFourBulletTwo.setAttribute("class", "jobWhatBullets");
  jobFourBulletTwo.setAttribute("id", "jobFourBulletTwo");
  jobFourBulletTwo.textContent = "bullet point 2";
  jobFourWhat.appendChild(jobFourBulletTwo);

  // ---- JOB 4: BULLET 3
  let jobFourBulletThree = document.createElement("li");
  jobFourBulletThree.setAttribute("class", "jobWhatBullets");
  jobFourBulletThree.setAttribute("id", "jobFourBulletThree");
  jobFourBulletThree.textContent = "bullet point 3";
  jobFourWhat.appendChild(jobFourBulletThree);
};

export { resumeSection };
