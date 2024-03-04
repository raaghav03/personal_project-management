const tasks = document.querySelectorAll(".tasks");

tasks.forEach((task) => {
  task.addEventListener("click", function () {
    const titleElement = this.querySelector(".title");
    const titleText = titleElement.textContent;
    const detailsCardTitle = document.querySelector(
      ".specific-details-card h1"
    );
    detailsCardTitle.textContent = titleText;
  });
});

const addTask = document.querySelector(".addTask");

addTask.addEventListener("click", function () {
  const title = document.getElementById("projectTitle").value;
  const subtitle = document.getElementById("projectSubtitle").value;
  let priority;
  const radios = document.querySelectorAll('input[name="priorityLevel"]');
  radios.forEach((radio) => {
    if (radio.checked) {
      priority = radio.value;
    }
  });
});

const li = document.createElement("li");
li.className = "tasks";

const todoListContainer = document.createElement("div");
todoListContainer.className = "todoListContainer";

const svgContainer = document.createElement("div");
svgContainer.className = "svg-container";

svgContainer.innerHTML = `<svg
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
fill="none"
stroke="#D0D5DD"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round"
class="lucide lucide-circle"
>
<circle cx="12" cy="12" r="10" />
</svg>`;

const titleSubtitle = document.createElement("div");
titleSubtitle.className = "title_subtitle";

const pTitle = document.createElement("p");
pTitle.className = "title";
pTitle.textContent = title;
const pSubtitle = document.createElement("p");
pSubtitle.className = "subtitle";
pSubtitle.textContent = subtitle;

const priorityDiv = document.createElement("div");
priorityDiv.className = "priorityLevel";
priorityDiv.textContent = priority.replace("-", " ");

titleSubtitle.appendChild(pTitle);
titleSubtitle.appendChild(pSubtitle);

todoListContainer.appendChild(svgContainer);
todoListContainer.appendChild(titleSubtitle);
todoListContainer.appendChild(priorityDiv);

li.appendChild(todoListContainer);

document.querySelector(".project-container").appendChild(li);
