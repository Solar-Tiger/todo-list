import './style.css';
import { addTodoToArray as createProject } from './modules/todo_projects/addProjectToArray.js';
import { addTodoTaskToArray as createTask } from './modules/todo_task/addTaskToProject.js';

const todoProjects = [];

// EXAMPLE
createProject(todoProjects, 'Food to make');

createProject(todoProjects, 'Games to play');

window.createProject = createProject;
window.todoProjects = todoProjects;
window.createTask = createTask;

console.log(todoProjects[0].id);

createTask(
  todoProjects[0].id,
  todoProjects,
  'Crash Bandicoot 1',
  "A game I've been meaning to play",
  new Date(),
  'VERY HIGH'
);
