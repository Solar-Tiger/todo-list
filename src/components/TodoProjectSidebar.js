import { getTodoProjects } from '../modules/todoProjectController';
import projectAdd from '../assets/images/icons/playlist_add.svg';

function loadSidebar() {
  const todoContent = document.querySelector('#todo-content');

  //  Create and append sidebar to todo content container
  const todoProjectSidebar = document.createElement('div');

  todoProjectSidebar.classList.add('todo-projects-container-sidebar');

  todoContent.appendChild(todoProjectSidebar);

  //  Create and append title to sidebar
  const todoProjectHeader = document.createElement('h1');
  const addTodoProjectButton = document.createElement('img');

  addTodoProjectButton.id = 'add-todo-project';
  addTodoProjectButton.src = projectAdd;
  addTodoProjectButton.width = '48';

  todoProjectHeader.classList.add('todo-projects-header');

  todoProjectHeader.textContent = 'TODO Projects';

  todoProjectHeader.appendChild(addTodoProjectButton);
  todoProjectSidebar.appendChild(todoProjectHeader);

  // Create and append list of TODO Projects to sidebar

  const todoProjectsList = document.createElement('ul');

  todoProjectsList.classList.add('todo-projects-list__desktop');

  getTodoProjects().forEach((project) => {
    const li = document.createElement('li');
    const p = document.createElement('p');

    p.textContent = project.projectTitle;

    li.appendChild(p);

    todoProjectsList.appendChild(li);
  });

  todoProjectSidebar.appendChild(todoProjectsList);
}

function addTodoProjectToList() {
  const addTodoProject = document.querySelector('#add-todo-project');

  addTodoProject.addEventListener('click', () => {
    console.log('Test');

    modal.showModal();
  });
}

export { loadSidebar, addTodoProjectToList };
