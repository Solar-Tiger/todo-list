export function loadTodoTaskDisplay() {
  const todoContent = document.querySelector('#todo-content');

  // Create and append containing div for todo task display

  const todoTaskContainer = document.createElement('div');

  todoTaskContainer.classList.add('todo-task-container');

  todoContent.appendChild(todoTaskContainer);

  // Create and append title to todo task display

  const h2 = document.createElement('h2');

  h2.textContent = 'TODO Tasks';
  h2.classList.add('todo-task-title');

  todoTaskContainer.appendChild(h2);

  // Create todo task display and append to todo content container
  const todoTaskDisplay = document.createElement('div');

  todoTaskDisplay.classList.add('todo-task-display');

  todoTaskContainer.appendChild(todoTaskDisplay);

  // Create and append n amount of todo task to the todo task display
  for (let i = 0; i < 11; i++) {
    const todoTask = document.createElement('div');

    todoTask.classList.add('todo-task');

    todoTaskDisplay.appendChild(todoTask);
  }
}
