import "./style.css";
import model from "./model";
import views from "./view";

const controlProjects = function () {
  views.addProjectBtn.addEventListener("click", () => {
    const test = views.addProject();
    model[test] = [];
  });

  window.addEventListener("load", console.log(model));
  views.showModal();
  views.projectList.addEventListener("click", e => {
    if (!e.target.classList.contains("projects-item")) return;
    views.makeActive();
    model.active = views.activeProject;
    console.log(model);
  });
};
controlProjects();
