import { createId } from '@paralleldrive/cuid2';
import { findArrayElement, findArrayIndex } from '../../utils/helpers';

// Create TODO task
function createTodoTask({ title, description, dueDate, priority }) {
  return {
    id: createId(), // Generate unique ID
    taskTitle: title,
    taskDescription: description,
    taskDueDate: dueDate,
    taskPriority: priority,
  };
}

// Add TODO task to Project Task Array
function addTodoTaskToArray(
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

  const currentProject = findArrayElement(projectID, todoProjects);

  currentProject.task.push(newTask);
}

// Delete TODO task from Project Task Array
function deleteTodoTask(projectId, taskId, arr) {
  const correctProject = findArrayElement(projectId, arr);

  console.log(correctProject.task);

  const correctTaskIndex = findArrayIndex(taskId, correctProject.task);

  console.log(correctTaskIndex);

  correctProject.task.splice(correctTaskIndex, 1);
}

export { addTodoTaskToArray, deleteTodoTask };
