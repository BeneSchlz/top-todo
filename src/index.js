import { ToDo, openModal, openModalBtn, modal, overlay } from './logic.js';
import { NewProject, projectList, inbox } from './project.js';
import './styles.css';


openModalBtn.addEventListener("click", openModal);

let personal = new NewProject("Personal");
projectList.push(personal);

let work = new NewProject("Work");
projectList.push(work);

console.log(projectList)

let task1 = new ToDo("Buy groceries", "Go to the supermarket", "High", "2024-09-25");
inbox.addTaskToProject(task1);  // Add a task to the inbox project

console.log(inbox.tasks);

openModalBtn.addEventListener("click", openModal);