import { createId } from '@paralleldrive/cuid2';
import { findArrayIndex } from '../../utils/helpers';

// Array to store TODO projects
let todoProjects = [];

function getOrSetTodoProjects() {
  return {
    getCurrentTodoProjects: () => {
      return todoProjects;
    },
    setNewTodoProjects: (newTodoProjects) => {
      todoProjects = newTodoProjects;
    },
  };
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
    tasks: [],
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

// Get current project to use to add new task to
function getCurrentDisplayedProject() {
  let currentDisplayedProject;

  return {
    updateCurrentDisplayedProject: (updatedDisplayedProjectIndex) => {
      currentDisplayedProject =
        getOrSetTodoProjects().getCurrentTodoProjects()[
          updatedDisplayedProjectIndex
        ];
    },
    getDisplayedProject: () => {
      return currentDisplayedProject;
    },
  };
}

const projectUpdater = getCurrentDisplayedProject();

export {
  getOrSetTodoProjects,
  projectUpdater,
  getTodoProjectsDOMList,
  addTodoToArray,
  deleteTodoProject,
};
