import { getTodoTasksDOMList } from '../modules/todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoTaskList } from '../modules/todo_project_list_updaters/todoTaskListUpdater';

export function loadTodoTaskDisplay() {
  const todoContent = document.querySelector('#todo-content');

  // Create and append containing div for todo task display
  const todoTaskContainer = document.createElement('div');

  todoTaskContainer.classList.add('todo-task-container');

  todoContent.appendChild(todoTaskContainer);

  // Create and append title to todo task display
  const h2 = document.createElement('h2');

  h2.textContent = 'TODO Tasks';
  h2.classList.add('todo-task-header');

  todoTaskContainer.appendChild(h2);

  // Create todo task display and append to todo content container
  const todoTaskDisplay = document.createElement('ul');

  todoTaskDisplay.classList.add('todo-task-list');
  todoTaskDisplay.id = 'todo-task-list';

  todoTaskContainer.appendChild(todoTaskDisplay);

  fetchAndUpdateTodoTaskList(getTodoTasksDOMList());
}
