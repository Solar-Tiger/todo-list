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
function addTodoToArray(projectTitle) {
  const newTodoProject = createTodoProject(projectTitle);

  todoProjects.push(newTodoProject);
}

// Delete TODO Projects
function deleteTodoProject(personId, arr) {
  const correctProjectIndex = findArrayIndex(personId, arr);

  arr.splice(correctProjectIndex, 1);
}

// Update current displayed project when adding/removing TODO projects/tasks or chaning between projects/display all task
function getCurrentDisplayedProject() {
  let currentDisplayedProject;

  return {
    updateCurrentDisplayedProjectOfAllTask: (clickedTaskOptionName) => {
      currentDisplayedProject = clickedTaskOptionName;
    },
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
