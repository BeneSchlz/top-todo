import { ToDo } from './logic.js';
import { newProject } from './project.js';


let myProject = new NewProject("Work Project");
let myTask = new ToDo("Write report", "Finish quarterly report", "High", "2024-09-25");

myProject.addTaskToProject(myTask);  // Adds the task to the project
console.log(myProject.tasks);  // Should log the array with the added task