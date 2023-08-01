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
  jobOne.setAttribute("id", "director");
  jobOne.setAttribute("class", "jobGroup");
  resumeExp.appendChild(jobOne);

  // - JOB 1: WHERE
  let jobOneWhere = document.createElement("ul");
  jobOneWhere.setAttribute("class", "jobWhere");
  jobOneWhere.setAttribute("id", "jobOneWhere");
  jobOne.appendChild(jobOneWhere);

  // ---- JOB 1: TITLE
  let jobOneTitle = document.createElement("li");
  jobOneTitle.setAttribute("class", "jobWhereBullets");
  jobOneTitle.setAttribute("id", "jobOneTitle");
  jobOneTitle.textContent = "Director of Product Management";
  jobOneWhere.appendChild(jobOneTitle);

  // ---- JOB 1: COMPANY
  let jobOneCompany = document.createElement("li");
  jobOneCompany.setAttribute("class", "jobWhereBullets");
  jobOneCompany.setAttribute("id", "jobOneCompany");
  jobOneCompany.textContent = "Wisdom Gaming";
  jobOneWhere.appendChild(jobOneCompany);

  // ---- JOB 1: YEAR
  let jobOneYear = document.createElement("li");
  jobOneYear.setAttribute("class", "jobWhereBullets");
  jobOneYear.setAttribute("id", "jobOneYear");
  jobOneYear.textContent = "07/2022 - 09/2022";
  jobOneWhere.appendChild(jobOneYear);

  // ---- JOB 1: LOCATION
  //   let jobOneLocation = document.createElement("li");
  //   jobOneLocation.setAttribute("class", "jobWhereBullets");
  //   jobOneLocation.setAttribute("id", "jobOneLocation");
  //   jobOneLocation.textContent = "Minneapolis, MN";
  //   jobOneWhere.appendChild(jobOneLocation);

  // - JOB 1: WHAT
  let jobOneWhat = document.createElement("ul");
  jobOneWhat.setAttribute("class", "jobWhat");
  jobOneWhat.setAttribute("id", "jobOneWhat");
  jobOne.appendChild(jobOneWhat);

  // ---- JOB 1: BULLET 1
  let jobOneBulletOne = document.createElement("li");
  jobOneBulletOne.setAttribute("class", "jobWhatBullets");
  jobOneBulletOne.setAttribute("id", "jobOneBulletOne");
  jobOneBulletOne.textContent =
    "Collaborated with executive leadership to actively manage, assess, and prioritize Wisdom’s financial initiatives.";
  jobOneWhat.appendChild(jobOneBulletOne);

  // ---- JOB 1: BULLET 2
  let jobOneBulletTwo = document.createElement("li");
  jobOneBulletTwo.setAttribute("class", "jobWhatBullets");
  jobOneBulletTwo.setAttribute("id", "jobOneBulletTwo");
  jobOneBulletTwo.textContent =
    "Cross collaborated with multiple internal teams to streamline new processes for efficiency and better workflow within projects.";
  jobOneWhat.appendChild(jobOneBulletTwo);

  // ---- JOB 1: BULLET 3
  let jobOneBulletThree = document.createElement("li");
  jobOneBulletThree.setAttribute("class", "jobWhatBullets");
  jobOneBulletThree.setAttribute("id", "jobOneBulletThree");
  jobOneBulletThree.textContent =
    "Managed, oversaw and delegated entire event projects to team members and other internal teams.";
  jobOneWhat.appendChild(jobOneBulletThree);

  // JOB 2
  let jobTwo = document.createElement("div");
  jobTwo.setAttribute("id", "seniorBrandManager");
  jobTwo.setAttribute("class", "jobGroup");
  resumeExp.appendChild(jobTwo);

  // - JOB 2: WHERE
  let jobTwoWhere = document.createElement("ul");
  jobTwoWhere.setAttribute("class", "jobWhere");
  jobTwoWhere.setAttribute("id", "jobTwoWhere");
  jobTwo.appendChild(jobTwoWhere);

  // ---- JOB 2: TITLE
  let jobTwoTitle = document.createElement("li");
  jobTwoTitle.setAttribute("class", "jobWhereBullets");
  jobTwoTitle.setAttribute("id", "jobTwoTitle");
  jobTwoTitle.textContent = "Senior Brand Manager";
  jobTwoWhere.appendChild(jobTwoTitle);

  // ---- JOB 2: COMPANY
  let jobTwoCompany = document.createElement("li");
  jobTwoCompany.setAttribute("class", "jobWhereBullets");
  jobTwoCompany.setAttribute("id", "jobTwoCompany");
  jobTwoCompany.textContent = "Wisdom Gaming";
  jobTwoWhere.appendChild(jobTwoCompany);

  // ---- JOB 2: YEAR
  let jobTwoYear = document.createElement("li");
  jobTwoYear.setAttribute("class", "jobWhereBullets");
  jobTwoYear.setAttribute("id", "jobTwoYear");
  jobTwoYear.textContent = "12/2021 - 06/2022";
  jobTwoWhere.appendChild(jobTwoYear);

  // ---- JOB 2: LOCATION
  //   let jobTwoLocation = document.createElement("li");
  //   jobTwoLocation.setAttribute("class", "jobWhereBullets");
  //   jobTwoLocation.setAttribute("id", "jobTwoLocation");
  //   jobTwoLocation.textContent = "Minneapolis, MN";
  //   jobTwoWhere.appendChild(jobTwoLocation);

  // - JOB 2: WHAT
  let jobTwoWhat = document.createElement("ul");
  jobTwoWhat.setAttribute("class", "jobWhat");
  jobTwoWhat.setAttribute("id", "jobTwoWhat");
  jobTwo.appendChild(jobTwoWhat);

  // ---- JOB 2: BULLET 1
  let jobTwoBulletOne = document.createElement("li");
  jobTwoBulletOne.setAttribute("class", "jobWhatBullets");
  jobTwoBulletOne.setAttribute("id", "jobTwoBulletOne");
  jobTwoBulletOne.textContent =
    "Built a robust network that incorporates all Wisdom brands, including Torrent, MNVL, and Wisdom Gaming Studios in collaboration with relevant stakeholders.";
  jobTwoWhat.appendChild(jobTwoBulletOne);

  // ---- JOB 2: BULLET 2
  let jobTwoBulletTwo = document.createElement("li");
  jobTwoBulletTwo.setAttribute("class", "jobWhatBullets");
  jobTwoBulletTwo.setAttribute("id", "jobTwoBulletTwo");
  jobTwoBulletTwo.textContent =
    "Worked with key parties in Marketing, Products and Operations to create and execute marketing strategies for the Wisdom brand, determine company voice and orchestrate full brand initiatives. ";
  jobTwoWhat.appendChild(jobTwoBulletTwo);

  // ---- JOB 2: BULLET 3
  let jobTwoBulletThree = document.createElement("li");
  jobTwoBulletThree.setAttribute("class", "jobWhatBullets");
  jobTwoBulletThree.setAttribute("id", "jobTwoBulletThree");
  jobTwoBulletThree.textContent =
    "Managed a team of product managers and conducted weekly syncs while providing Brand expertise and making final decisions where necessary.";
  jobTwoWhat.appendChild(jobTwoBulletThree);

  // JOB 3
  let jobThree = document.createElement("div");
  jobThree.setAttribute("id", "projectManager");
  jobThree.setAttribute("class", "jobGroup");
  resumeExp.appendChild(jobThree);

  // - JOB 3: WHERE
  let jobThreeWhere = document.createElement("ul");
  jobThreeWhere.setAttribute("class", "jobWhere");
  jobThreeWhere.setAttribute("id", "jobThreeWhere");
  jobThree.appendChild(jobThreeWhere);

  // ---- JOB 3: TITLE
  let jobThreeTitle = document.createElement("li");
  jobThreeTitle.setAttribute("class", "jobWhereBullets");
  jobThreeTitle.setAttribute("id", "jobThreeTitle");
  jobThreeTitle.textContent = "Project Manager";
  jobThreeWhere.appendChild(jobThreeTitle);

  // ---- JOB 3: COMPANY
  let jobThreeCompany = document.createElement("li");
  jobThreeCompany.setAttribute("class", "jobWhereBullets");
  jobThreeCompany.setAttribute("id", "jobThreeCompany");
  jobThreeCompany.textContent = "Wisdom Gaming";
  jobThreeWhere.appendChild(jobThreeCompany);

  // ---- JOB 3: YEAR
  let jobThreeYear = document.createElement("li");
  jobThreeYear.setAttribute("class", "jobWhereBullets");
  jobThreeYear.setAttribute("id", "jobThreeYear");
  jobThreeYear.textContent = "12/2020 - 12/2021";
  jobThreeWhere.appendChild(jobThreeYear);

  // ---- JOB 3: LOCATION
  //   let jobThreeLocation = document.createElement("li");
  //   jobThreeLocation.setAttribute("class", "jobWhereBullets");
  //   jobThreeLocation.setAttribute("id", "jobThreeLocation");
  //   jobThreeLocation.textContent = "Minneapolis, MN";
  //   jobThreeWhere.appendChild(jobThreeLocation);

  // - JOB 3: WHAT
  let jobThreeWhat = document.createElement("ul");
  jobThreeWhat.setAttribute("class", "jobWhat");
  jobThreeWhat.setAttribute("id", "jobThreeWhat");
  jobThree.appendChild(jobThreeWhat);

  // ---- JOB 3: BULLET 1
  let jobThreeBulletOne = document.createElement("li");
  jobThreeBulletOne.setAttribute("class", "jobWhatBullets");
  jobThreeBulletOne.setAttribute("id", "jobThreeBulletOne");
  jobThreeBulletOne.textContent =
    "Created production timelines and collaborated with internal teams to communicate deadlines and ensure those deadlines are met.";
  jobThreeWhat.appendChild(jobThreeBulletOne);

  // ---- JOB 3: BULLET 2
  let jobThreeBulletTwo = document.createElement("li");
  jobThreeBulletTwo.setAttribute("class", "jobWhatBullets");
  jobThreeBulletTwo.setAttribute("id", "jobThreeBulletTwo");
  jobThreeBulletTwo.textContent =
    "Organized and led weekly internal project syncs as well as client-facing syncs.";
  jobThreeWhat.appendChild(jobThreeBulletTwo);

  // ---- JOB 3: BULLET 3
  let jobThreeBulletThree = document.createElement("li");
  jobThreeBulletThree.setAttribute("class", "jobWhatBullets");
  jobThreeBulletThree.setAttribute("id", "jobThreeBulletThree");
  jobThreeBulletThree.textContent =
    "Conducted project reviews and created detailed reports for executive staff.";
  jobThreeWhat.appendChild(jobThreeBulletThree);

  // JOB 4
  let jobFour = document.createElement("div");
  jobFour.setAttribute("id", "contentCreator");
  jobFour.setAttribute("class", "jobGroup");
  resumeExp.appendChild(jobFour);

  // - JOB 4: WHERE
  let jobFourWhere = document.createElement("ul");
  jobFourWhere.setAttribute("class", "jobWhere");
  jobFourWhere.setAttribute("id", "jobFourWhere");
  jobFour.appendChild(jobFourWhere);

  // ---- JOB 4: TITLE
  let jobFourTitle = document.createElement("li");
  jobFourTitle.setAttribute("class", "jobWhereBullets");
  jobFourTitle.setAttribute("id", "jobFourTitle");
  jobFourTitle.textContent = "Content Creator";
  jobFourWhere.appendChild(jobFourTitle);

  // ---- JOB 4: COMPANY
  let jobFourCompany = document.createElement("li");
  jobFourCompany.setAttribute("class", "jobWhereBullets");
  jobFourCompany.setAttribute("id", "jobFourCompany");
  jobFourCompany.textContent = "Self Employed";
  jobFourWhere.appendChild(jobFourCompany);

  // ---- JOB 4: YEAR
  let jobFourYear = document.createElement("li");
  jobFourYear.setAttribute("class", "jobWhereBullets");
  jobFourYear.setAttribute("id", "jobFourYear");
  jobFourYear.textContent = "01/2015 - 12/2020";
  jobFourWhere.appendChild(jobFourYear);

  // ---- JOB 4: LOCATION
  //   let jobFourLocation = document.createElement("li");
  //   jobFourLocation.setAttribute("class", "jobWhereBullets");
  //   jobFourLocation.setAttribute("id", "jobFourLocation");
  //   jobFourLocation.textContent = "Austin, TX";
  //   jobFourWhere.appendChild(jobFourLocation);

  addHElement("p", "contentCreator", "twitch", "Twitch Interactive, Inc.");

  // - JOB 4: WHAT
  let twitchWhat = document.createElement("ul");
  twitchWhat.setAttribute("class", "jobWhat");
  twitchWhat.setAttribute("id", "twitchWhat");
  jobFour.appendChild(twitchWhat);

  // ---- JOB 4: BULLET 1
  let twitchBulletOne = document.createElement("li");
  twitchBulletOne.setAttribute("class", "jobWhatBullets");
  twitchBulletOne.setAttribute("id", "twitchBulletOne");
  twitchBulletOne.textContent =
    "Built my individual brand since 2015 on Twitch.tv as a live streamer.";
  twitchWhat.appendChild(twitchBulletOne);

  // ---- JOB 4: BULLET 2
  let twitchBulletTwo = document.createElement("li");
  twitchBulletTwo.setAttribute("class", "jobWhatBullets");
  twitchBulletTwo.setAttribute("id", "twitchBulletTwo");
  twitchBulletTwo.textContent =
    "Invited into the Twitch Partnership Program in April 2017 and Twitch Ambassador Program in January 2020.";
  twitchWhat.appendChild(twitchBulletTwo);

  addHElement("p", "contentCreator", "alienware", "Alienware, Dell");

  // - JOB 4: WHAT
  let alienwareWhat = document.createElement("ul");
  alienwareWhat.setAttribute("class", "jobWhat");
  alienwareWhat.setAttribute("id", "alienwareWhat");
  jobFour.appendChild(alienwareWhat);

  // ---- JOB 4: BULLET 1
  let alienwareBulletOne = document.createElement("li");
  alienwareBulletOne.setAttribute("class", "jobWhatBullets");
  alienwareBulletOne.setAttribute("id", "alienwareBulletOne");
  alienwareBulletOne.textContent =
    "Partnered with Killer Networking in 2016 to be featured on Alienware weekly streams. ";
  alienwareWhat.appendChild(alienwareBulletOne);

  // ---- JOB 4: BULLET 2
  let alienwareBulletTwo = document.createElement("li");
  alienwareBulletTwo.setAttribute("class", "jobWhatBullets");
  alienwareBulletTwo.setAttribute("id", "alienwareBulletTwo");
  alienwareBulletTwo.textContent =
    "Created and edited video content for Alienware’s YouTube and Twitch channels.";
  alienwareWhat.appendChild(alienwareBulletTwo);

  addHElement("p", "contentCreator", "dignitas", "Dignitas");

  // - JOB 4: WHAT
  let dignitasWhat = document.createElement("ul");
  dignitasWhat.setAttribute("class", "jobWhat");
  dignitasWhat.setAttribute("id", "dignitasWhat");
  jobFour.appendChild(dignitasWhat);

  // ---- JOB 4: BULLET 1
  let dignitasBulletOne = document.createElement("li");
  dignitasBulletOne.setAttribute("class", "jobWhatBullets");
  dignitasBulletOne.setAttribute("id", "dignitasBulletOne");
  dignitasBulletOne.textContent =
    "Partnered with Dignitas in 2017 to help create content and promote sponsored brands.";
  dignitasWhat.appendChild(dignitasBulletOne);

  // ---- JOB 4: BULLET 2
  let dignitasBulletTwo = document.createElement("li");
  dignitasBulletTwo.setAttribute("class", "jobWhatBullets");
  dignitasBulletTwo.setAttribute("id", "dignitasBulletTwo");
  dignitasBulletTwo.textContent =
    "Participated in research and development for new products with Champion and Mountain Dew.";
  dignitasWhat.appendChild(dignitasBulletTwo);
};

export { resumeSection };
