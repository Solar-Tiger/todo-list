// Import CSS styles
import './style.css';
import './reset.css';

// Import TODO Project functions
import {
  getTodoProjects,
  addTodoToArray as createTodoProject,
  deleteTodoProject,
} from './modules/todoProjectController.js';

// Import TODO Task functions
import {
  addTodoTaskToArray as createTodoTask,
  deleteTodoTask,
} from './modules/todoTaskController.js';

// Import TODO Projects hamburger menu displayer
import { showTodoProjects } from './modules/todoHamMenuController.js';

// EXAMPLE
createTodoProject(getTodoProjects(), 'Food to make');

createTodoProject(getTodoProjects(), 'Games to play');

createTodoProject(getTodoProjects(), 'Places to visit');

createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');
createTodoProject(getTodoProjects(), 'Places to visit');

// deleteTodoProject(getTodoProjects()[0].id, getTodoProjects());

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

// createTodoTask(
//   getTodoProjects()[0].id,
//   getTodoProjects(),
//   'Crash Bandicoot 2: Cortex Strikes Back',
//   "A sequel to the game I've been meaning to play",
//   new Date().toDateString(),
//   'VERY HIGH'
// );

// createTodoTask(
//   getTodoProjects()[0].id,
//   getTodoProjects(),
//   'Rayman Legends',
//   "Another sequel to a game I've been meaning to play",
//   new Date().toDateString(),
//   'VERY HIGH'
// );

// deleteTodoTask(
//   getTodoProjects()[0].id,
//   getTodoProjects()[0].task[1].id,
//   getTodoProjects()
// );

import { loadSidebar } from './components/TodoProjectSidebar.js';
import { loadTodoTaskDisplay } from './components/TodoTaskDisplay.js';
import { loadNavHamburgerMenu } from './components/TodoProjectHamNavMenu.js';

loadSidebar();
loadNavHamburgerMenu();
loadTodoTaskDisplay();
showTodoProjects();
