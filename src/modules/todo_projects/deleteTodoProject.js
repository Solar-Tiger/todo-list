export function deleteTodoProject(personId, arr) {
    const index = arr.findIndex((arrayElement) => personId === arrayElement.id);

    arr.splice(index, 1)
  }
  