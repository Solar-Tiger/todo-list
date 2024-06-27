import { getTodoProjects } from '../modules/todoProjectController';

export function loadSidebar() {
  const todoContent = document.querySelector('#todo-content');

  //  Create and append sidebar to todo content container
  const todoProjectSidebar = document.createElement('div');

  todoProjectSidebar.classList.add('todo-projects-sidebar');

  todoContent.appendChild(todoProjectSidebar);

  //  Create and append title to sidebar
  const todoProjectHeader = document.createElement('h1');
  todoProjectHeader.classList.add('todo-projects-header');

  todoProjectHeader.textContent = 'Todo Projects';

  todoProjectSidebar.appendChild(todoProjectHeader);

  // Create and append list of TODO Projects to sidebar

  const todoProjectsList = document.createElement('ul');

  todoProjectsList.classList.add('todo-projects-list');

  getTodoProjects().forEach((project) => {
    const li = document.createElement('li');
    const h2 = document.createElement('h2');

    h2.textContent = project.projectTitle;

    li.appendChild(h2);

    todoProjectsList.appendChild(li);
  });

  todoProjectSidebar.appendChild(todoProjectsList);
}
