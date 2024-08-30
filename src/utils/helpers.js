import { parse } from 'date-fns';
import { getOrSetTodoProjects } from '../modules/todo_project_controllers/todoProjectController';
import { getOrSetAllTodoTask } from '../modules/todo_project_controllers/todoTaskController';

function findArrayElement(arrElement, arr) {
  return arr.find((arrayElement) => arrElement === arrayElement.projectTitle);
}

function findArrayIndex(arrElement, arr) {
  return arr.findIndex((arrayElement) => arrElement === arrayElement.id);
}

function saveArrayToLocalStorage(arrName, arr) {
  localStorage.setItem(arrName, JSON.stringify(arr));
}

function getArrayOfArrayValues(arr, arrKey) {
  return arr.flatMap((arrValue) => arrValue[arrKey]);
}

function sortTodoTasksByDate(todoTaskArr) {
  return todoTaskArr.sort(
    (a, b) =>
      parse(a.taskDueDate, 'MMM do, yyyy', new Date()) -
      parse(b.taskDueDate, 'MMM do, yyyy', new Date())
  );
}

function getArrayContainingArrayItem(projectArray, arrayItem) {
  for (let i = 0; i < projectArray.length; i++) {
    for (let j = 0; j < projectArray[i].tasks.length; j++) {
      if (projectArray[i].tasks[j].id === arrayItem)
        return projectArray[i].projectTitle;
    }
  }
}

// Update all TODO tasks array with new TODO task
function updateAllTodoTasksArray() {
  if (getOrSetAllTodoTask().getAllTodoTask().length === 0) {
    const allTodoTasks = getOrSetTodoProjects()
      .getCurrentTodoProjects()
      .flatMap((project) => project.tasks);

    getOrSetAllTodoTask().setNewTodoTask(allTodoTasks);
  }
}

export {
  findArrayElement,
  findArrayIndex,
  saveArrayToLocalStorage,
  getArrayOfArrayValues,
  sortTodoTasksByDate,
  getArrayContainingArrayItem,
  updateAllTodoTasksArray,
};
