import "./style.css";
import model from "./model";
import views from "./view";

const controlProjects = function () {
  const test = views.addProject();

  model[test] = test;
  // views.addProject();
  console.log(model);
};
console.log(model);
controlProjects();
