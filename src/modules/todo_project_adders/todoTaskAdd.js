import { getOrSetTodoProjects } from '../todo_project_controllers/todoProjectController';

import {
  getTodoTasksDOMList,
  addTodoTaskToArray,
} from '../todo_project_controllers/todoTaskController';

import { fetchAndUpdateTodoTasksInList } from '../todo_project_list_updaters/todoTaskListUpdater';
import { deleteAndUpdateCurrentTodoTasks } from '../todo_project_removers/todoTaskRemove';

import { updateCurrentProjectTitle } from '../todo_project_title_updater/todoProjectTitleUpdater';

import { saveArrayToLocalStorage } from '../../utils/helpers';

import { format, parseISO } from 'date-fns';

function addTodoTaskToDisplay(
  todoTaskDialog,
  taskName,
  taskDescription,
  taskDueDate,
  taskPriority
) {
  const todoProjects = getOrSetTodoProjects().getCurrentTodoProjects();
  const todoProjectOption = document.querySelector(
    '#todo-tasks-dialog form select'
  );
  const todoProjectToAddTaskTo =
    todoProjectOption.options[todoProjectOption.selectedIndex];

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
    todoProjectToAddTaskTo.text,
    todoProjects,
    taskName.value,
    taskDescription.value,
    validTaskDueDate,
    taskPriority.toUpperCase()
  );

  fetchAndUpdateTodoTasksInList(
    getTodoTasksDOMList(),
    todoProjectOption.selectedIndex
  );
  deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

  updateCurrentProjectTitle(todoProjectToAddTaskTo.text);

  saveArrayToLocalStorage('todoProjects', todoProjects);

  todoTaskDialog.close();
}

export { addTodoTaskToDisplay };
