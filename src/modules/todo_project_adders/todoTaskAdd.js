import {
  getTodoProjects,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';

import {
  getTodoTasksDOMList,
  addTodoTaskToArray,
} from '../todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoTaskList } from '../todo_project_list_updaters/todoTaskListUpdater';

import { findArrayIndex } from '../../utils/helpers';

function addTodoTaskToDisplay(
  todoTaskDialog,
  taskName,
  taskDescription,
  taskDueDate,
  taskPriority
) {
  const todoProjects = getTodoProjects();

  if (getTodoProjects().length === 0) {
    todoTaskDialog.close();

    return;
  }

  addTodoTaskToArray(
    projectUpdater.getDisplayedProject().id,
    todoProjects,
    taskName.value,
    taskDescription.value,
    taskDueDate.value,
    taskPriority.toUpperCase()
  );

  const currentProjectIndex = findArrayIndex(
    projectUpdater.getDisplayedProject().id,
    getTodoProjects()
  );

  fetchAndUpdateTodoTaskList(getTodoTasksDOMList(), currentProjectIndex);

  todoTaskDialog.close();
}

export { addTodoTaskToDisplay };
