function findArrayElement(arrElement, arr) {
  return arr.find((arrayElement) => arrElement === arrayElement.id);
}

function findArrayIndex(arrElement, arr) {
  return arr.findIndex((arrayElement) => arrElement === arrayElement.id);
}

function saveArrayToLocalStorage(arrName, arr) {
  localStorage.setItem(arrName, JSON.stringify(arr));
}

export { findArrayElement, findArrayIndex, saveArrayToLocalStorage };
