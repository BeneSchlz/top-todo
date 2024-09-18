//Object for Todos
export function ToDo(title, description, priorities, due) {
    this.taskName = title;
    this.description = description;
    this.priorities = priorities;
    this.dueDate = due;
    this.completed = false;

//change completed
    this.toggleCompleted = function() {
        this.completed = !this.completed; 
    };
}
