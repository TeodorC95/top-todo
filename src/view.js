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

  const showModal = function () {
    addItemBtn.addEventListener("click", function () {});
  };

  const showMainList = function () {
    const html = `
        <ul class="list" data-project="projekat">
          <li class="list-item" data-itemid="123456">
            <div class="item-left">
              <h2>Implement this</h2>
              <p>Implemementation of the new feature.</p>
            </div>
            <div class="item-right">
              <form class="date-priority-form">
                <label for="date">Due</label>
                <input type="date" id="dueDate" /><br />
                <label for="priority">Priority</label>
                <input type="number" min="1" max="5" value="1" id="priority" />
                <input type="submit" value="OK" />
              </form>
            </div>
          </li>
        </ul>
    `;
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
