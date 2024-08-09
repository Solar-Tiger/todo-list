import { projectUpdater } from '../todo_project_controllers/todoProjectController';

function updateCurrentProjectTitle() {
  const currentTodoProjectTitle = document.querySelector(
    '.todo-projects-sidebar-two h2'
  );

  if (projectUpdater.getDisplayedProject() === undefined) {
    currentTodoProjectTitle.textContent = 'No projects!';
  } else {
    currentTodoProjectTitle.textContent =
      projectUpdater.getDisplayedProject().projectTitle;
  }
}

function updateCurrentProjectTitleTwo(currenctDisplayedTitle) {
  const currentTodoProjectTitle = document.querySelector(
    '.todo-projects-sidebar-two h2'
  );

  if (currenctDisplayedTitle === undefined) {
    currentTodoProjectTitle.textContent = 'No projects!';
  } else {
    currentTodoProjectTitle.textContent = currenctDisplayedTitle;
  }
}

export { updateCurrentProjectTitle, updateCurrentProjectTitleTwo };
