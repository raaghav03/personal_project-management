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
