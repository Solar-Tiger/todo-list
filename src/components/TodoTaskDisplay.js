import taskAdd from '../assets/images/icons/playlist_add.svg';
import { showTodoTaskDialogModal } from './TodoTaskModal';
import { getTodoTasksDOMList } from '../modules/todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoTaskList } from '../modules/todo_project_list_updaters/todoTaskListUpdater';

export function loadTodoTaskDisplay() {
  const todoContent = document.querySelector('#todo-content');

  // Create and append containing div for todo task display
  const todoTaskContainer = document.createElement('div');

  todoTaskContainer.classList.add('todo-task-container');

  todoContent.appendChild(todoTaskContainer);

  // Create and append title to todo task display
  const todoTaskHeader = document.createElement('header');
  const todoTaskHeaderName = document.createElement('h2');
  const addTodoTaskButton = document.createElement('img');

  todoTaskHeader.classList.add('todo-task-header');

  todoTaskHeaderName.textContent = 'TODO Tasks';

  addTodoTaskButton.id = 'add-todo-task';
  addTodoTaskButton.src = taskAdd;
  addTodoTaskButton.width = '48';
  addTodoTaskButton.addEventListener('click', () => {
    showTodoTaskDialogModal();
  });

  todoTaskContainer.appendChild(todoTaskHeader);
  todoTaskHeader.append(todoTaskHeaderName, addTodoTaskButton);

  // Create todo task display and append to todo content container
  const todoTaskDisplay = document.createElement('ul');

  todoTaskDisplay.classList.add('todo-task-list');
  todoTaskDisplay.id = 'todo-task-list';

  todoTaskContainer.appendChild(todoTaskDisplay);

  fetchAndUpdateTodoTaskList(getTodoTasksDOMList());
}
