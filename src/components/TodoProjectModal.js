import { addTodoProjectToSidebar } from '../modules/todo_project_adders/todoProjectAdd';

function todoProjectModal() {
  // Create and append dialog to TODO content
  const todoContent = document.querySelector('#todo-content');

  const dialog = document.createElement('dialog');

  dialog.id = 'todo-project-dialog';

  todoContent.appendChild(dialog);

  // Create and append form to dialog
  const form = document.createElement('form');

  form.action = '';
  form.method = 'get';
  form.class = 'todo-project-form';

  dialog.appendChild(form);

  // Create and append form contents to form
  const projectName = document.createElement('label');

  projectName.for = 'project-name';
  projectName.textContent = 'Enter Project Name:';

  const projectNameInput = document.createElement('input');

  projectNameInput.type = 'text';
  projectNameInput.id = 'project-name';
  projectNameInput.name = 'project-name';

  form.append(projectName, projectNameInput);

  // Create and append confirm or deny button container to dialog

  const btnContainer = document.createElement('div');

  const confirmBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  confirmBtn.textContent = 'Add Project';
  confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addTodoProjectToSidebar(dialog, projectNameInput);
  });

  cancelBtn.textContent = 'Cancel';
  cancelBtn.formMethod = 'dialog';

  btnContainer.append(confirmBtn, cancelBtn);

  form.appendChild(btnContainer);
}

function showDialogModal() {
  const todoProjectAddDialog = document.querySelector('#todo-project-dialog');

  todoProjectAddDialog.showModal();
}

export { todoProjectModal, showDialogModal };
