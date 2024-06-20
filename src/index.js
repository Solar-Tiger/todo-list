// Import CSS styles
import './style.css';

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

// EXAMPLE
createTodoProject(getTodoProjects(), 'Food to make');

createTodoProject(getTodoProjects(), 'Games to play');

createTodoProject(getTodoProjects(), 'Places to visit');

// deleteTodoProject(getTodoProjects()[0].id, getTodoProjects());

console.log(getTodoProjects());

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
