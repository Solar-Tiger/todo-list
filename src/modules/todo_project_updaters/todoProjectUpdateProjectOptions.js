import { getOrSetTodoProjects } from '../todo_project_controllers/todoProjectController';

function updateTodoProjectsForAddingTask(taskForm) {
  let updatedTaskForm;

  if (taskForm) {
    updatedTaskForm = taskForm;
  } else {
    updatedTaskForm = document.querySelector(
      '#todo-tasks-dialog form .todo-project-task-add-option-container'
    );

    updatedTaskForm.textContent = '';
  }

  const todoProjectTaskAddOptionContainer = document.createElement('div');

  todoProjectTaskAddOptionContainer.classList.add(
    'todo-project-task-add-option-container'
  );

  const todoProjectAddLabel = document.createElement('label');
  const todoProjectAddSelect = document.createElement('select');

  todoProjectAddLabel.setAttribute('for', 'todo-projects');
  todoProjectAddLabel.textContent = 'Chose a project:';

  todoProjectAddSelect.id = 'todo-projects';

  getOrSetTodoProjects()
    .getCurrentTodoProjects()
    .forEach((project) => {
      const todoProjectAddOption = document.createElement('option');

      todoProjectAddOption.value = project.projectTitle
        .toLowerCase()
        .replace(' ', '-');

      todoProjectAddOption.textContent = project.projectTitle;

      todoProjectAddSelect.appendChild(todoProjectAddOption);
    });

  todoProjectTaskAddOptionContainer.append(
    todoProjectAddLabel,
    todoProjectAddSelect
  );
  updatedTaskForm.appendChild(todoProjectTaskAddOptionContainer);
}

export { updateTodoProjectsForAddingTask };
