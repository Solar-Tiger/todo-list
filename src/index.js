import './style.css';
import { addTodoToArray as createProject } from './modules/todo_projects/addProjectToArray.js';
import { addTodoTaskToArray as createTask } from './modules/todo_task/addTaskToProject.js';
import {deleteTodoProject} from './modules/todo_projects/deleteTodoProject.js'

let todoProjects = [];

// EXAMPLE
createProject(todoProjects, 'Food to make');

createProject(todoProjects, 'Games to play');

window.todoProjects = todoProjects;
window.createProject = createProject;
window.createTask = createTask;
window.deleteTodoProject = deleteTodoProject

createTask(
  todoProjects[1].id,
  todoProjects,
  'Crash Bandicoot 1',
  "A game I've been meaning to play",
  new Date(),
  'VERY HIGH'
);

deleteTodoProject(todoProjects[0].id, todoProjects);