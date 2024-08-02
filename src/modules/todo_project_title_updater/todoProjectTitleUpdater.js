import { projectUpdater } from '../todo_project_controllers/todoProjectController';

function updateCurrentProjectTitle() {
  const currentProjecTitle = document.querySelector(
    '.todo-projects-sidebar-two h2'
  );

  currentProjecTitle.textContent =
    projectUpdater.getDisplayedProject().projectTitle;
}

export { updateCurrentProjectTitle };
