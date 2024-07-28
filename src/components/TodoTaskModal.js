import { addTodoTaskToArray } from '../modules/todo_project_controllers/todoTaskController';

function loadTodoTaskModal() {
  // Create and append TODO tasks dialog to TODO content
  const todoContent = document.querySelector('#todo-content');

  const dialog = document.createElement('dialog');

  dialog.classList.add('todo-task-dialog');
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

  taskNameInputContainer.classList.add('todo-task-name-input-container');

  const taskName = document.createElement('label');

  taskName.for = 'task-name';
  taskName.textContent = 'Enter Task Name:';

  const taskNameInput = document.createElement('input');

  taskNameInput.type = 'text';
  taskNameInput.id = 'task-name';
  taskNameInput.name = 'task-name';

  form.appendChild(taskNameInputContainer);
  taskNameInputContainer.append(taskName, taskNameInput);

  //   Create and append date input to form
  const dateInput = document.createElement('input');

  dateInput.classList.add('todo-task-date-input');

  dateInput.type = 'date';

  form.appendChild(dateInput);

  // Create and append task priority buttons to div container than to form
  const priorityButtonsContainer = document.createElement('div');

  priorityButtonsContainer.classList.add('todo-task-priority-button-container');

  const todoTaskPriorityButtons = [
    {
      type: 'radio',
      id: 'low-priority',
      name: 'priority-button',
      value: 'low-priority',
      textContet: 'Low',
    },
    {
      type: 'radio',
      id: 'medium-priority',
      name: 'priority-button',
      value: 'medium-priority',
      textContet: 'Medium',
    },
    {
      type: 'radio',
      id: 'high-priority',
      name: 'priority-button',
      value: 'high-priority',
      textContet: 'High',
    },
  ];

  todoTaskPriorityButtons.forEach((priority) => {
    const priorityButtonContainer = document.createElement('div');

    const priorityBtn = document.createElement('input');
    const priorityLabel = document.createElement('label');

    priorityBtn.type = priority.type;
    priorityBtn.id = priority.id;
    priorityBtn.name = priority.name;
    priorityBtn.value = priority.value;

    priorityLabel.setAttribute('for', priority.value);
    priorityLabel.textContent = priority.textContet;

    priorityButtonContainer.append(priorityBtn, priorityLabel);
    priorityButtonsContainer.appendChild(priorityButtonContainer);
  });

  form.appendChild(priorityButtonsContainer);

  // Create and append confirm or deny button container to dialog
  const btnContainer = document.createElement('div');

  btnContainer.classList.add('todo-task-button-container');

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
}

function showTodoTaskDialogModal() {
  const todoTaskAddDialog = document.querySelector('#todo-tasks-dialog');

  todoTaskAddDialog.showModal();
}

export { loadTodoTaskModal, showTodoTaskDialogModal };
