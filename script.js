// Get references to the form, input field, and task list elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add an event listener for the form submission
// This handles adding a new task to the list
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the trimmed value of the input field
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // Exit if the input is empty

  // Create a new list item to represent the task
  const taskItem = document.createElement('li');

  // Create a span to hold the task text and set its content
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  // Create a delete button for removing the task
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete'; // Set button text
  deleteButton.classList.add('delete'); // Add a class for styling

  // Add a click event listener to the delete button to remove the task
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(taskItem); // Remove the task item from the list
  });

  // Add a click event listener to the task text to toggle its completion state
  taskSpan.addEventListener('click', function() {
    taskSpan.classList.toggle('completed'); // Toggle the 'completed' class for styling
  });

  // Append the task text and delete button to the task item
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteButton);

  // Add the task item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field for the next task
  taskInput.value = '';
});
// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check and apply saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

// Add click event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode'); // Toggle dark mode class

  // Save the current mode in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

