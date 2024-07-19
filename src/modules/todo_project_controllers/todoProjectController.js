import { createId } from '@paralleldrive/cuid2';
import { findArrayIndex } from '../../utils/helpers';
import deleteProjectIcon from '../../assets/images/icons/delete.svg';

// Array to store TODO projects
const todoProjects = [];

function getTodoProjects() {
  return todoProjects;
}

// Master Todo Projects DOM List
function getTodoProjectsDOMList() {
  const todoProjectsDOMList = document.querySelector(
    '.todo-projects-list__desktop'
  );

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

// Add and update TODO project list via DOM
function fetchAndUpdateTodoProjectList(currentTodoProjects) {
  currentTodoProjects.textContent = '';

  getTodoProjects().forEach((project) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const deleteIcon = document.createElement('img');

    p.textContent = project.projectTitle;

    deleteIcon.src = deleteProjectIcon;
    deleteIcon.width = '32';

    li.append(p, deleteIcon);

    currentTodoProjects.appendChild(li);
  });
}

export {
  getTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
  deleteTodoProject,
  fetchAndUpdateTodoProjectList,
};
