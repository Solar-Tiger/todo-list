import {
  getTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
} from '../todo_project_controllers/todoProjectController';
import { deleteAndUpdateCurrentTodoProjects } from '../todo_project_removers/todoProjectRemove';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';

function addTodoProjectToSidebar(todoProjectDialog, todoProjectName) {
  const todoProjects = getTodoProjects();

  addTodoToArray(todoProjects, todoProjectName.value);

  fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());

  deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());

  todoProjectDialog.close();
}

export { addTodoProjectToSidebar };
