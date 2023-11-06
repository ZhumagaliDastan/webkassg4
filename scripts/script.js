// Task 1: Interactive To-Do List
const taskList = document.getElementById("tasks");
const taskInput = document.getElementById("taskName");
const addTaskButton = document.getElementById("addTask");

addTaskButton.addEventListener("click", () => {
    const taskName = taskInput.value;
    if (taskName.trim() !== "") {
        // Add task to the list
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${taskName}
            <button class="markComplete">Mark Complete</button>
            <button class="deleteTask">Delete</button>
        `;
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }
});

// Handle marking tasks as complete and deleting tasks
taskList.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("markComplete")) {
        target.parentElement.classList.add("completed");
    } else if (target.classList.contains("deleteTask")) {
        taskList.removeChild(target.parentElement);
    }
});

// Task 2: Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    let valid = true;
    // Your form validation code here

    if (!valid) {
        event.preventDefault(); // Prevent form submission
    }
});

// Task 3: Animated Countdown Timer
const countdownTimer = document.getElementById("countdownTimer");
const timerDisplay = document.getElementById("timer");
const durationInput = document.getElementById("duration");
const startButton = document.getElementById("start");
let countdown;

startButton.addEventListener("click", () => {
    const duration = parseInt(durationInput.value) || 600;
    let timeLeft = duration;

    countdown = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft === 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
        }

        timeLeft--;
    }, 1000);
});


// JavaScript for the drag-and-drop game

// Store a reference to the drop target
const dropTarget = document.querySelector('.drop-target');

// Add a 'dragover' event listener to allow elements to be dropped
dropTarget.addEventListener('dragover', (e) => {
  e.preventDefault();
});

// Add a 'drop' event listener to handle the drop
dropTarget.addEventListener('drop', (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  const draggableElement = document.getElementById(data);
  dropTarget.appendChild(draggableElement);
});

// Store references to the draggable elements
const draggableElements = document.querySelectorAll('.draggable');

// Add a 'dragstart' event listener to start the drag
draggableElements.forEach((element) => {
  element.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
  });
});
