import {
  getTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
} from '../todo_project_controllers/todoProjectController';
import { deleteAndUpdateCurrentTodoProjects } from '../todo_project_removers/todoProjectRemove';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';

import {
  getTodoTasksDOMList,
  addTodoTaskToArray,
} from '../todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoTaskList } from '../todo_project_list_updaters/todoTaskListUpdater';

function addTodoTaskToDisplay(todoTaskDialog, todoTaskName) {
  console.log(todoTaskDialog, todoTaskName);

  // const todoProjects = getTodoProjects();
  // addTodoTaskToArray(todoProjects, todoProjectName.value);
  // fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());
  // deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());
  // displayTodoTasksForCurrentTodoProject(getTodoProjectsDOMList());
  // todoTaskDialog.close();
}

export { addTodoTaskToDisplay };
