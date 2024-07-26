import taskComplete from '../assets/images/icons/check_circle.svg';
import taskRemove from '../assets/images/icons/delete.svg';
import { addTodoTaskToArray } from '../modules/todo_project_controllers/todoTaskController';

function loadTodoTaskModal() {
  // Create and append TODO tasks dialog to TODO content
  const todoContent = document.querySelector('#todo-content');

  const dialog = document.createElement('dialog');

  dialog.id = 'todo-tasks-dialog';

  todoContent.appendChild(dialog);

  const todoTaskDialog = document.querySelector('#todo-tasks-dialog');

  todoTaskDialog.showModal();

  // Create and append TODO tasks form to dialog
  const form = document.createElement('form');

  form.action = '';
  form.method = 'get';
  form.class = 'todo-tasks-form';

  dialog.appendChild(form);

  // Create and append form contents to form

  //   Create and append task label and task name input to div container
  const taskNameInputContainer = document.createElement('div');

  taskNameInputContainer.classList.add('task-name-input-container');

  const taskName = document.createElement('label');

  taskName.for = 'task-name';
  taskName.textContent = 'Enter Task Name:';

  const taskNameInput = document.createElement('input');

  taskNameInput.type = 'text';
  taskNameInput.id = 'task-name';
  taskNameInput.name = 'task-name';

  form.appendChild(taskNameInputContainer);
  taskNameInputContainer.append(taskName, taskNameInput);

  // Create and append confirm or deny button container to dialog
  const btnContainer = document.createElement('div');

  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  confirmBtn.textContent = 'Add Project';
  confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // addTodoTaskToArray(dialog, projectNameInput);
    console.log('TEST');
  });

  cancelBtn.textContent = 'Cancel';
  cancelBtn.formMethod = 'dialog';

  btnContainer.append(confirmBtn, cancelBtn);

  form.appendChild(btnContainer);

  //   Create and append date input to form
  const dateInput = document.createElement('input');

  dateInput.type = 'date';

  form.appendChild(dateInput);

  //   Create and append complete checkmark and remove task elements to to div container than to the form

  const todoTaskUpdateButtonsContainer = document.createElement('div');

  const taskCompleted = document.createElement('img');
  const taskRemoved = document.createElement('img');

  taskCompleted.id = 'task-complete';
  taskCompleted.src = taskComplete;
  taskCompleted.width = '36';

  taskRemoved.id = 'task-remove';
  taskRemoved.src = taskRemove;
  taskRemoved.width = '36';

  todoTaskUpdateButtonsContainer.append(taskCompleted, taskRemoved);
  form.appendChild(todoTaskUpdateButtonsContainer);
}

function showTodoTaskDialogModal() {
  const todoTaskAddDialog = document.querySelector('#todo-tasks-dialog');

  todoTaskAddDialog.showModal();
}

export { loadTodoTaskModal, showTodoTaskDialogModal };
