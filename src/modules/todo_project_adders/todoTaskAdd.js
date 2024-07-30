import {
  getTodoProjects,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';
import { deleteAndUpdateCurrentTodoProjects } from '../todo_project_removers/todoProjectRemove';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';

import {
  getTodoTasksDOMList,
  addTodoTaskToArray,
} from '../todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoTaskList } from '../todo_project_list_updaters/todoTaskListUpdater';

function addTodoTaskToDisplay(
  todoTaskDialog,
  taskName,
  taskDescription,
  taskDueDate,
  taskPriority
) {
  const todoProjects = getTodoProjects();

  console.log(projectUpdater.getDisplayedProject());

  // addTodoTaskToArray(
  //   projectUpdater.getDisplayedProject().id,
  //   todoProjects,
  //   taskName.value,
  //   taskDescription.value,
  //   taskDueDate.value,
  //   taskPriority.toUpperCase()
  // );

  // fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());
  // deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());
  // displayTodoTasksForCurrentTodoProject(getTodoProjectsDOMList());
  todoTaskDialog.close();
}

export { addTodoTaskToDisplay };
