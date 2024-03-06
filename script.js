// project data to represent
// project name
// project priority
// project due date
// project description
// proejct todo object
let allProjects = [
  {
    name: "Make Components For Website",
    priorityLevel: "High",
    dueDate: "6 March 2024",
    description:
      "The components have to be made for an Australia based startup. The problem statement is to design something fun and Gen-Z.",
    todos: [
      { name: "Make login form for the website", date: "20th March" },
      {
        name: "Make stylised components to maintain consistency",
        date: "12th March",
      },
      { name: "Make login form for the website", fdate: "24th March" },
    ],
  },
  {
    name: "Design Homepage Layout",
    priorityLevel: "High",
    dueDate: "6 March 2024",
    description:
      "The components have to be made for an Australia based startup. The problem statement is to design something fun and Gen-Z.",
    todos: [
      { name: "Make login form for the website", date: "20th March" },
      {
        name: "Make stylised components to maintain consistency",
        date: "12th March",
      },
      { name: "Make login form for the website", fdate: "24th March" },
    ],
  },
  {
    name: "E-Commerce Software App Design",
    priorityLevel: "High",
    dueDate: "6 March 2024",
    description:
      "The components have to be made for an Australia based startup. The problem statement is to design something fun and Gen-Z.",
    todos: [
      { name: "Make login form for the website", date: "20th March" },
      {
        name: "Make stylised components to maintain consistency",
        date: "12th March",
      },
      { name: "Make login form for the website", fdate: "24th March" },
    ],
  },
];

const clickedLi = document.querySelectorAll("li");

clickedLi.forEach((li) => {
  li.addEventListener("click", function () {
    const text = li.textContent;
    console.log(text);
    const h1 = document.getElementsByClassName("main-content-h1")[0];
    console.log(h1);
    h1.textContent = text;
  });
});

const ul = document.querySelector("ul");
console.log(allProjects);
for (let i = 0; i < allProjects.length; i++) {
  const element = document.createElement("li");
  element.textContent = allProjects[i].name;
  ul.appendChild(element);
  ul.className = "project-names";
}




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
  
  const li=document.createElement('li');
  ul.appendChild(li)
  li.textContent=title;
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
