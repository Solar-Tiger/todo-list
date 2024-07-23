import projectAdd from '../assets/images/icons/playlist_add.svg';
import { showDialogModal } from './TodoProjectModal';
import { deleteAndUpdateCurrentTodoProjects } from '../modules/todo_project_removers/todoProjectRemove';
import { getTodoProjectsDOMList } from '../modules/todo_project_controllers/todoProjectController';
import { fetchAndUpdateTodoProjectList } from '../modules/todo_project_list_updaters/todoProjectListUpdate';

function loadSidebar() {
  const todoContent = document.querySelector('#todo-content');

  //  Create and append sidebar to todo content container
  const todoProjectSidebar = document.createElement('div');

  todoProjectSidebar.classList.add('todo-projects-container-sidebar');

  todoContent.appendChild(todoProjectSidebar);

  //  Create and append title to sidebar with "add TODO project" button
  const todoProjectHeader = document.createElement('h1');
  const addTodoProjectButton = document.createElement('img');

  todoProjectHeader.classList.add('todo-projects-header');

  todoProjectHeader.textContent = 'TODO Projects';

  addTodoProjectButton.id = 'add-todo-project';
  addTodoProjectButton.src = projectAdd;
  addTodoProjectButton.width = '48';
  addTodoProjectButton.addEventListener('click', () => {
    showDialogModal();
  });

  todoProjectSidebar.appendChild(todoProjectHeader);
  todoProjectHeader.appendChild(addTodoProjectButton);

  // Create and append list of TODO Projects to sidebar

  const todoProjectsList = document.createElement('ul');

  todoProjectsList.classList.add('todo-projects-list__desktop');
  todoProjectsList.id = 'todo-projects-list';

  todoProjectSidebar.appendChild(todoProjectsList);

  // Display preloaded TODO projects or ones from Local Storage

  fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());
  deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());
}

export { loadSidebar };
