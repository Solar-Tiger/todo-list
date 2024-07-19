import {
  getTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
  fetchAndUpdateTodoProjectList,
} from '../todo_project_controllers/todoProjectController';
import { deleteAndUpdateCurrentTodoProjects } from '../todoProjectRemovers.js/todoProjectRemove';

function addTodoProjectToSidebar(todoProjectDialog, todoProjectName) {
  const todoProjects = getTodoProjects();

  addTodoToArray(todoProjects, todoProjectName.value);

  fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());

  deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());

  todoProjectDialog.close();
}

export { addTodoProjectToSidebar };
