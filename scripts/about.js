// JavaScript code for your about.html

// Task List functionality
const taskNameInput = document.getElementById("taskName");
const addTaskButton = document.getElementById("addTask");
const tasksList = document.getElementById("tasks");

addTaskButton.addEventListener("click", () => {
    const taskName = taskNameInput.value.trim();
    if (taskName) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskName;
        tasksList.appendChild(taskItem);
        taskNameInput.value = "";
    }
});
