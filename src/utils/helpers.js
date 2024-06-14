export function findArrayElement(personId, arr) {
    return arr.find((arrayElement) => personId === arrayElement.id);
}
  
export function findArrayIndex(personId, arr) {
    return arr.findIndex((arrayElement) => personId === arrayElement.id);
}