// Add event delgation to checkmark button

// When checkmark button is clicked strikethrough and darken card

// Retain checkmark when projects are loaded up again

function toggleTaskCompletion() {
  const taskListContainer = document.querySelector('#todo-task-list');

  taskListContainer.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.id === 'todo-task-complete-icon') {
      e.target.parentElement.parentElement.classList.toggle('task-complete');
    }
  });
}

export { toggleTaskCompletion };
