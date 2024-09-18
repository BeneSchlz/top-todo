let project = [];

export function NewProject (name) {
    this.name = name,
    this.tasks = [];

    this.addTaskToProject = function(task) {
        this.tasks.push(task);
    }
}

