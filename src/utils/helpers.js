import { parse } from 'date-fns';

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

export {
  findArrayElement,
  findArrayIndex,
  saveArrayToLocalStorage,
  getArrayOfArrayValues,
  sortTodoTasksByDate,
  getArrayContainingArrayItem,
};
