// Import CSS styles
import './style.css';
import './reset.css';

// Import TODO Project functions
import {
  getTodoProjects,
  addTodoToArray as createTodoProject,
  deleteTodoProject,
} from './modules/todo_project_controllers/todoProjectController.js';
import { todoProjectModal } from './components/TodoProjectModal.js';

// Import TODO Task functions
import {
  addTodoTaskToArray as createTodoTask,
  deleteTodoTask,
} from './modules/todo_project_controllers/todoTaskController.js';

// Import TODO Projects displayers
import { loadSidebar } from './components/TodoProjectSidebar.js';
import { loadTodoTaskDisplay } from './components/TodoTaskDisplay.js';
import { loadNavHamburgerMenu } from './components/TodoProjectHamNavMenu.js';

// Add TODO modal in the backgroun to be opened and closed
todoProjectModal();

// EXAMPLE
createTodoProject(getTodoProjects(), 'Food to make');

createTodoProject(getTodoProjects(), 'Games to play');

createTodoProject(getTodoProjects(), 'Places to visit');

window.getTodoProjects = getTodoProjects;
window.createTodoProject = createTodoProject;
window.deleteTodoProject = deleteTodoProject;
window.createTodoTask = createTodoTask;
window.deleteTodoTask = deleteTodoTask;

createTodoTask(
  getTodoProjects()[1].id,
  getTodoProjects(),
  'Crash Bandicoot 1',
  "A game I've been meaning to play",
  new Date().toDateString(),
  'VERY HIGH'
);

loadSidebar();
loadNavHamburgerMenu();
loadTodoTaskDisplay();
