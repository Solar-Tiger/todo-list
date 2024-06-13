export function findTodoProject(personId, arr) {
  return arr.find((test) => personId === test.id);
}
