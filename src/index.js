import "./style.css";
import model from "./model";
import views from "./view";

const controlProjects = function () {
  views.addProjectBtn.addEventListener("click", () => {
    const test = views.addProject();
    model[test] = [];
    console.log(model);
  });
};
controlProjects();
