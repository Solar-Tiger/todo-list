import './style.css';
import { addTodoTaskToArray as createTask } from './modules/todo_task/addTaskToProject.js';
import { deleteTodoTask } from './modules/todo_task/deleteTodoTask.js';
import {
  getTodoProjects,
  addTodoToArray as createTodoProject,
  deleteTodoProject,
} from './modules/todoProjectController.js';

// EXAMPLE
createTodoProject(getTodoProjects(), 'Food to make');

createTodoProject(getTodoProjects(), 'Games to play');

createTodoProject(getTodoProjects(), 'Places to visit');

deleteTodoProject(getTodoProjects()[0].id, getTodoProjects());

window.getTodoProjects = getTodoProjects;
window.createTodoProject = createTodoProject;
window.deleteTodoProject = deleteTodoProject;
window.createTask = createTask;
window.deleteTodoTask = deleteTodoTask;

createTask(
  getTodoProjects()[1].id,
  getTodoProjects(),
  'Crash Bandicoot 1',
  "A game I've been meaning to play",
  new Date().toDateString(),
  'VERY HIGH'
);

createTask(
  getTodoProjects()[1].id,
  getTodoProjects(),
  'Crash Bandicoot 2: Cortex Strikes Back',
  "A sequel to the game I've been meaning to play",
  new Date().toDateString(),
  'VERY HIGH'
);

createTask(
  getTodoProjects()[1].id,
  getTodoProjects(),
  'Rayman Legends',
  "Another sequel to a game I've been meaning to play",
  new Date().toDateString(),
  'VERY HIGH'
);

deleteTodoTask(
  getTodoProjects()[1].id,
  getTodoProjects()[1].task[1].id,
  getTodoProjects()
);
