import { createId } from '@paralleldrive/cuid2';
import { findArrayElement, findArrayIndex } from '../../utils/helpers';

let allTodoTask = [];

// Create function to get all TODO tasks and store them in allTodoTask array
function getOrSetAllTodoTask() {
  return {
    getAllTodoTask: () => {
      return allTodoTask;
    },
    setNewTodoTask: (updatedAllTodoTask) => {
      allTodoTask = updatedAllTodoTask;
    },
  };
}

// Master Todo Tasks DOM List
function getTodoTasksDOMList() {
  const todoTasksDOMList = document.querySelector('#todo-task-list');

  return todoTasksDOMList;
}

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
  selectedProject,
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

  const currentProject = findArrayElement(selectedProject, todoProjects);

  currentProject.tasks.push(newTask);
}

// Delete TODO task from Project Task Array
function deleteTodoTask(projectId, taskId, arr) {
  const correctProject = findArrayElement(projectId, arr);

  const correctTaskIndex = findArrayIndex(taskId, correctProject.tasks);

  correctProject.tasks.splice(correctTaskIndex, 1);
}

export {
  getOrSetAllTodoTask,
  addTodoTaskToArray,
  deleteTodoTask,
  getTodoTasksDOMList,
};
