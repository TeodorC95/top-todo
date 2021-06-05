const views = (function () {
  const addProjectBtn = document.getElementById("new-project");
  const addItemBtn = document.getElementById("new-item");
  const projectList = document.querySelector(".projects");
  const projectForm = document.querySelector(".project-name-form");
  const addDiv = document.querySelector(".add-and-form");

  const addProject = function () {
    views.addProjectBtn.addEventListener("click", () => {
      const project = prompt("Enter project name");
      const html = `
      <li class="projects-item" data-project-name="${project.toLowerCase()}">${project}</li>
      `;
      projectList.insertAdjacentHTML("beforeend", html);
      return project;
    });
  };

  return {
    addProjectBtn,
    addItemBtn,
    projectList,
    addProject,
  };
})();
export default views;
