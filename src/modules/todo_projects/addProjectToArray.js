import { createTodoProject } from './createTodoProject';

// Add TODO projects to Array
export function addTodoToArray(todoProjects, projectTitle) {
  const newTodoProject = createTodoProject({
    title: projectTitle,
  });

  // For debugging purposes
  console.log(newTodoProject);

  todoProjects.push(newTodoProject);
}
