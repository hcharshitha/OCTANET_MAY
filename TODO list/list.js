// Selecting elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create li element
    const li = document.createElement("li");

    // Create text node and append it to li
    li.appendChild(document.createTextNode(taskText));

    // Create buttons for completion and deletion
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "Completed";
    completeButton.onclick = toggleCompleted;
    li.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = deleteTask;
    li.appendChild(deleteButton);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }
}

// Function to toggle completed status
function toggleCompleted() {
  const listItem = this.parentNode;
  listItem.classList.toggle("completed");
}

// Function to delete a task
function deleteTask() {
  const listItem = this.parentNode;
  taskList.removeChild(listItem);
}
