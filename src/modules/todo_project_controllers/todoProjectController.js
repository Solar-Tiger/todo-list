import { createId } from '@paralleldrive/cuid2';
import { findArrayIndex } from '../../utils/helpers';

// Array to store TODO projects
const todoProjects = [];

function getTodoProjects() {
  return todoProjects;
}

// Master Todo Projects DOM List
function getTodoProjectsDOMList() {
  const todoProjectsDOMList = document.querySelector('#todo-projects-list');

  return todoProjectsDOMList;
}

// Create TODO projects
function createTodoProject(title) {
  return {
    id: createId(), // Generate unique ID
    projectTitle: title,
    task: [],
  };
}

// Add TODO projects to Array
function addTodoToArray(todoProjects, projectTitle) {
  const newTodoProject = createTodoProject(projectTitle);

  // For debugging purposes
  console.log(newTodoProject);

  todoProjects.push(newTodoProject);
}

// Delete TODO Projects
function deleteTodoProject(personId, arr) {
  const correctProjectIndex = findArrayIndex(personId, arr);

  arr.splice(correctProjectIndex, 1);
}

export {
  getTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
  deleteTodoProject,
};
