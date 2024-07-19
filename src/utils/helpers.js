function findArrayElement(arrElement, arr) {
  return arr.find((arrayElement) => arrElement === arrayElement.id);
}

function findArrayIndex(arrElement, arr) {
  return arr.findIndex((arrayElement) => arrElement === arrayElement.id);
}

export { findArrayElement, findArrayIndex };
