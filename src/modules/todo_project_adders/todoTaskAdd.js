import {
  getOrSetTodoProjects,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';

import {
  getTodoTasksDOMList,
  addTodoTaskToArray,
} from '../todo_project_controllers/todoTaskController';

import { fetchAndUpdateTodoTasksInList } from '../todo_project_list_updaters/todoTaskListUpdater';
import { deleteAndUpdateCurrentTodoTasks } from '../todo_project_removers/todoTaskRemove';

import { saveArrayToLocalStorage, findArrayIndex } from '../../utils/helpers';

import { format, parseISO } from 'date-fns';

function addTodoTaskToDisplay(
  todoTaskDialog,
  taskName,
  taskDescription,
  taskDueDate,
  taskPriority
) {
  const todoProjects = getOrSetTodoProjects().getCurrentTodoProjects();
  let validTaskDueDate;

  if (todoProjects.length === 0) {
    todoTaskDialog.close();

    return;
  }

  if (taskDueDate.value === '') {
    validTaskDueDate = format(new Date(), 'MMM do, yyyy');
  } else {
    validTaskDueDate = format(parseISO(taskDueDate.value), 'MMM do, yyyy');
  }

  addTodoTaskToArray(
    projectUpdater.getDisplayedProject().id,
    todoProjects,
    taskName.value,
    taskDescription.value,
    validTaskDueDate,
    taskPriority.toUpperCase()
  );

  const currentProjectIndex = findArrayIndex(
    projectUpdater.getDisplayedProject().id,
    todoProjects
  );

  fetchAndUpdateTodoTasksInList(getTodoTasksDOMList(), currentProjectIndex);
  deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

  saveArrayToLocalStorage('todoProjects', todoProjects);

  todoTaskDialog.close();
}

export { addTodoTaskToDisplay };
