let userTask = document.querySelector(".title");

const priorityButton = document.getElementById('priority-button');
const priorityOptions = document.getElementById('priority-options');

export { priorityButton, priorityOptions };

// Function to handle priority selection
export const handlePrioritySelection = (event) => {
    const selectedPriority = event.target.getAttribute('data-priority');
    priorityButton.value = selectedPriority; // Update button text
    priorityOptions.classList.add("hidden-priority"); // Hide options
};

// Add event listeners for priority options if needed
const priorityOptionButtons = document.querySelectorAll('.priority-option');
priorityOptionButtons.forEach(button => {
    button.addEventListener('click', handlePrioritySelection);
});