const views = (function () {
  const addProjectBtn = document.getElementById("new-project");
  const addItemBtn = document.getElementById("new-item");
  const projectList = document.querySelector(".projects");
  const projectForm = document.querySelector(".project-name-form");
  const addDiv = document.querySelector(".add-and-form");

  const addProject = function () {
    const project = prompt("Enter project name");
    const html = `
      <li class="projects-item" data-project-name="${project.toLowerCase()}">${project}</li>
      `;
    projectList.insertAdjacentHTML("beforeend", html);
    return project;
  };

  const makeActive = function (el) {
    projectList.addEventListener("click", e => {
      if (!e.target.classList.contains("projects-item")) return;
      document.querySelectorAll(".projects-item").forEach(project => {
        project.classList.remove("projects-active");
      });
      e.target.classList.add("projects-active");
    });
  };

  return {
    addProjectBtn,
    addItemBtn,
    projectList,
    addProject,
    makeActive,
  };
})();
export default views;
