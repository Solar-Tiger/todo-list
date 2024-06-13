import { createTodoTask } from './createTodoTask';
import { findTodoProject } from '../../utils/helpers';

// Add TODO task to Project Task Array
export function addTodoTaskToArray(
  projectID,
  todoProjects,
  taskTitle,
  taskDescription,
  taskDueDate,
  taskPriority
) {
  const newTask = createTodoTask({
    title: taskTitle,
    description: taskDescription,
    dueDate: taskDueDate,
    priority: taskPriority,
  });

  // For debugging purposes
  console.log(newTask);

  const currentProject = findTodoProject(projectID, todoProjects);

  currentProject.task.push(newTask);
}
