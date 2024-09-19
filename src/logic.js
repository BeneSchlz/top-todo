export let openModalBtn = document.querySelector(".add-task-modal");
export let modal = document.getElementsByClassName("modal")[0]; // Access the first modal element
export let overlay = document.querySelector(".overlay"); // Make sure you define overlay too

// Object for Todos
export function ToDo(title, description, priorities, due) {
    this.taskName = title;
    this.description = description;
    this.priorities = priorities;
    this.dueDate = due;
    this.completed = false;

    // Change completed
    this.toggleCompleted = function() {
        this.completed = !this.completed; 
    };
}

export const openModal = function() {
    if (modal) {
        modal.classList.remove("hidden");
    } else {
        console.error("Modal not found");
    }
    
    if (overlay) {
        overlay.classList.remove("hidden"); // Check if overlay is defined
    } else {
        console.error("Overlay not found");
    }
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden")
  };

// Add event listener to openModalBtn
if (openModalBtn) {
    openModalBtn.addEventListener("click", openModal);
}

overlay.addEventListener("click", closeModal);

