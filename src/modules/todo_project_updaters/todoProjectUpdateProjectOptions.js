import { getOrSetTodoProjects } from '../todo_project_controllers/todoProjectController';

// Update available TODO project options in the select elements option list when a TODO project is added/removed
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

  // Create TODO project select element and option container
  const todoProjectTaskAddOptionContainer = document.createElement('div');

  todoProjectTaskAddOptionContainer.classList.add(
    'todo-project-task-add-option-container'
  );

  // Create TODO project select and label elements
  const todoProjectAddLabel = document.createElement('label');
  const todoProjectAddSelect = document.createElement('select');

  todoProjectAddLabel.setAttribute('for', 'todo-projects');
  todoProjectAddLabel.textContent = 'Chose a project:';

  todoProjectAddSelect.id = 'todo-projects';

  // Based on available TODO projects, add them as options to the select element based on the project titles name
  getOrSetTodoProjects()
    .getCurrentTodoProjects()
    .forEach((project) => {
      const todoProjectAddOption = document.createElement('option');

      // Make the option elements value lower case and kebob style for consistency using the project titles name
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
