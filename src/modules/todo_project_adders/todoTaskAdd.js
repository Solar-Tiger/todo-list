import {
  getOrSetTodoProjects,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';

import {
  getTodoTasksDOMList,
  addTodoTaskToArray,
} from '../todo_project_controllers/todoTaskController';

import { fetchAndUpdateTodoTaskList } from '../todo_project_list_updaters/todoTaskListUpdater';
import { deleteAndUpdateCurrentTodoTasks } from '../todo_project_removers/todoTaskRemove';

import { findArrayIndex } from '../../utils/helpers';

function addTodoTaskToDisplay(
  todoTaskDialog,
  taskName,
  taskDescription,
  taskDueDate,
  taskPriority
) {
  const todoProjects = getOrSetTodoProjects().getCurrentTodoProjects();

  if (todoProjects.length === 0) {
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
    todoProjects
  );

  fetchAndUpdateTodoTaskList(getTodoTasksDOMList(), currentProjectIndex);
  deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

  todoTaskDialog.close();
}

export { addTodoTaskToDisplay };
