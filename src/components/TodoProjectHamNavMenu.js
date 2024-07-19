import { showTodoProjects } from '../modules/todo_project_controllers/todoHamMenuController';

function loadNavHamburgerMenu() {
  const todoContent = document.querySelector('#todo-content');

  // Create and append nav bar to todo content container
  const nav = document.createElement('nav');

  nav.classList.add('todo-projects-sidebar-two');

  todoContent.appendChild(nav);

  // Create and append ham menu onctainer to nav bar
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
