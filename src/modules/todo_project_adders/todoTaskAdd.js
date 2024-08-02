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

import { saveArrayToLocalStorage, findArrayIndex } from '../../utils/helpers';

import { format } from 'date-fns';

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
    format(taskDueDate.value, 'LLL do, y'),
    taskPriority.toUpperCase()
  );

  const currentProjectIndex = findArrayIndex(
    projectUpdater.getDisplayedProject().id,
    todoProjects
  );

  fetchAndUpdateTodoTaskList(getTodoTasksDOMList(), currentProjectIndex);
  deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

  saveArrayToLocalStorage(
    'todoProjects',
    getOrSetTodoProjects().getCurrentTodoProjects()
  );

  todoTaskDialog.close();
}

export { addTodoTaskToDisplay };
