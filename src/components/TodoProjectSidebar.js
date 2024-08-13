import projectAdd from '../assets/images/icons/playlist_add.svg';
import { showTodoProjectDialogModal } from './TodoProjectModal';
import { deleteAndUpdateCurrentTodoProjects } from '../modules/todo_project_removers/todoProjectRemove';
import {
  projectUpdater,
  getOrSetTodoProjects,
  getTodoProjectsDOMList,
} from '../modules/todo_project_controllers/todoProjectController';
import { fetchAndUpdateTodoProjectList } from '../modules/todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../modules/todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';

// TODO Tasks displayer options
import { fetchAndUpdateAllTodoTaskInList } from '../modules/todo_project_list_updaters/todoTaskListUpdater';
import { getTodoTasksDOMList } from '../modules/todo_project_controllers/todoTaskController';

function loadSidebar() {
  const todoContent = document.querySelector('#todo-content');

  //  Create and append sidebar to todo content container
  const todoProjectSidebar = document.createElement('div');

  todoProjectSidebar.classList.add('todo-projects-container-sidebar');

  todoContent.appendChild(todoProjectSidebar);

  // Create and append options to display various task from all projects
  const taskDisplayerOptions = document.createElement('ul');

  taskDisplayerOptions.classList.add('todo-task-displayer-options');

  const taskDisplayerChoices = ['All tasks', 'Todays tasks', 'Weekly tasks'];

  taskDisplayerChoices.forEach((taskChoice) => {
    const taskOptionLi = document.createElement('li');
    const taskDisplayOption = document.createElement('p');

    taskDisplayOption.textContent = taskChoice;

    taskDisplayOption.addEventListener('click', () => {
      fetchAndUpdateAllTodoTaskInList(getTodoTasksDOMList(), taskChoice);
    });

    taskOptionLi.appendChild(taskDisplayOption);
    taskDisplayerOptions.appendChild(taskOptionLi);
  });

  todoProjectSidebar.appendChild(taskDisplayerOptions);

  //  Create and append title to sidebar with "add TODO project" button
  const todoProjectHeader = document.createElement('h1');
  const addTodoProjectButton = document.createElement('img');

  todoProjectHeader.classList.add('todo-projects-header');

  todoProjectHeader.textContent = 'TODO Projects';

  addTodoProjectButton.id = 'add-todo-project';
  addTodoProjectButton.src = projectAdd;
  addTodoProjectButton.width = '48';
  addTodoProjectButton.addEventListener('click', () => {
    showTodoProjectDialogModal();
  });

  todoProjectSidebar.appendChild(todoProjectHeader);
  todoProjectHeader.appendChild(addTodoProjectButton);

  // Create and append list of TODO Projects to sidebar
  const todoProjectsList = document.createElement('ul');

  todoProjectsList.classList.add('todo-projects-list__desktop');
  todoProjectsList.id = 'todo-projects-list';

  todoProjectSidebar.appendChild(todoProjectsList);

  // Display preloaded TODO projects or ones from Local Storage and related TODO tasks
  fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());
  deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());
  displayTodoTasksForCurrentTodoProject(getTodoProjectsDOMList());

  // Load proper displayed project when page is refreshed if projects are available
  if (getOrSetTodoProjects().getCurrentTodoProjects().length >= 1) {
    projectUpdater.updateCurrentDisplayedProject(0);
  }
}

export { loadSidebar };
