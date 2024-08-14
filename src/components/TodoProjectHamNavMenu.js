import { showTodoProjects } from '../modules/todo_project_controllers/todoHamMenuController';
import { projectUpdater } from '../modules/todo_project_controllers/todoProjectController';
import { updateCurrentProjectTitle } from '../modules/todo_project_title_updater/todoProjectTitleUpdater';

function loadNavHamburgerMenu() {
  const todoContent = document.querySelector('#todo-content');

  // Create and append nav bar to todo content container
  const nav = document.createElement('nav');

  nav.classList.add('todo-projects-sidebar-two');

  todoContent.appendChild(nav);

  // Create and append current todo project title to nave bar

  const currentTodoProjectTitle = document.createElement('h2');

  nav.appendChild(currentTodoProjectTitle);

  if (projectUpdater.getDisplayedProject() === undefined) {
    updateCurrentProjectTitle();
  } else {
    updateCurrentProjectTitle(
      projectUpdater.getDisplayedProject().projectTitle
    );
  }

  // Create and append ham menu container to nav bar
  const div = document.createElement('div');

  div.classList.add('ham-menu');

  nav.appendChild(div);

  // Create and append 3 span elements to ham menu container
  for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');

    div.appendChild(span);
  }

  showTodoProjects();
}

export { loadNavHamburgerMenu };
