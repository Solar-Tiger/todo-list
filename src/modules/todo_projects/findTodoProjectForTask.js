export function findTodoProjectForTask(personId, arr) {
    return arr.find((arrayElement) => personId === arrayElement.id);
  }