// project data to represent
// project name
// project priority
// project due date
// project description
// proejct todo object

let projects = [];
function addProject(name, priorityLevel, dueDate, description, todos) {
  return {
    name: name,
    priorityLevel: priorityLevel,
    dueDate: dueDate,
    description: description,
    todo: todos,
  };
}

let todosForNewProject = [
  {
    name: "Design UI",
    date: "12/03/24",
  },
  {
    name: "Design UI2",
    date: "13/03/24",
  },
];

let newProject = addProject(
  "New Web App",
  "Medium",
  "2023-06-30",
  "Build a new web application.",
  todosForNewProject
);
let newProject2 = addProject(
  "ABC",
  "Hard",
  "2023-06-311110",
  "totoott",
  todosForNewProject
);

projects.push(newProject)
projects.push(newProject2)
// console.log(projects);
const ul = document.querySelector("ul");

for (let i = 0; i < projects.length; i++) {
  const element = document.createElement("li");
  element.textContent = projects[i].name;
  ul.appendChild(element);
  element.className = "project-names";
}
const h1 = document.getElementsByClassName("main-content-h1")[0];
h1.textContent=projects[0].name;

const clickedLi=document.querySelectorAll(".project-names");
console.log(clickedLi);

clickedLi.forEach((li) => {
  li.addEventListener("click", function () {
    const text = li.textContent;
    console.log(text);
    const h1 = document.getElementsByClassName("main-content-h1")[0];
    console.log(h1);
    h1.textContent = text;
  });
});







// const ul = document.querySelector("ul");
// ul.addEventListener("click", function (event) {
//   const taskClicked = event.target.closest(".tasks");
//   if (taskClicked) {
//     const titleElement = taskClicked.querySelector(".title");
//     const subtitleElement = taskClicked.querySelector(".subtitle");

//     const subTitleText = subtitleElement ? subtitleElement.textContent : "";
//     const titleText = titleElement ? titleElement.textContent : "";
//     const detailCardSubtitle = document.querySelector(
//       ".specific-details-card h2"
//     );
//     const detailsCardTitle = document.querySelector(
//       ".specific-details-card h1"
//     );
//     detailsCardTitle.textContent = titleText;
//     detailCardSubtitle.textContent = subTitleText;
//   }
// });

const addTask = document.querySelector(".addTask");

addTask.addEventListener("click", function (event) {
  event.preventDefault();
  // Retrieve input values
  const title = document.getElementById("projectTitle").value;
  const subtitle = document.getElementById("projectSubtitle").value;
  let priority;
  const radios = document.querySelectorAll('input[name="priorityLevel"]');
  radios.forEach((radio) => {
    if (radio.checked) {
      priority = radio.value; // Make sure to get the value of the radio
    }
  });

  const li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = title;
  // Create the task elements

  // const todoListContainer = document.createElement("div");
  // todoListContainer.className = "todoListContainer";

  // const titleSubtitle = document.createElement("div");
  // titleSubtitle.className = "title_subtitle";

  // const pTitle = document.createElement("p");
  // pTitle.className = "title";
  // pTitle.textContent = title;

  // const pSubtitle = document.createElement("p");
  // pSubtitle.className = "subtitle";
  // pSubtitle.textContent = subtitle;
  // document.querySelectorAll(".priorityLevel").forEach((div) => {
  //   if (div.textContent === "high") {
  //     div.className = "priorityLevelHigh";
  //   } else {
  //     div.className = "priorityLevelLow";
  //   }
  // });

  // const priorityDiv = document.createElement("div");
  // priority == "high"
  //   ? (priorityDiv.className = "priorityLevelHigh")
  //   : (priorityDiv.className = "priorityLevelLow");
  // priorityDiv.textContent = priority.replace("-", " ");

  // titleSubtitle.appendChild(pTitle);
  // titleSubtitle.appendChild(pSubtitle);
  // todoListContainer.appendChild(titleSubtitle);

  // todoListContainer.appendChild(priorityDiv);

  // li.appendChild(todoListContainer);

  // // Append the new task to the project container
  // ul.appendChild(li);

  // // Optional: Clear form fields after adding the task
  // document.getElementById("projectTitle").value = "";
  // document.getElementById("projectSubtitle").value = "";
  // radios.forEach((radio) => (radio.checked = false));
});
