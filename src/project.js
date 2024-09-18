export let projectList = [];

export let inbox = new NewProject("Inbox");
projectList.push(inbox);

export function NewProject (name) {
    this.name = name,
    this.tasks = [];

    this.addTaskToProject = function(task) {
        this.tasks.push(task);
    }
}


