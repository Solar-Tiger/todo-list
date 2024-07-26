import {
  getTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
} from '../todo_project_controllers/todoProjectController';
import { deleteAndUpdateCurrentTodoProjects } from '../todo_project_removers/todoProjectRemove';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';

function addTodoProjectToSidebar(todoProjectDialog, todoProjectName) {
  const todoProjects = getTodoProjects();

  addTodoToArray(todoProjects, todoProjectName.value);

  fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());

  deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());

  displayTodoTasksForCurrentTodoProject(getTodoProjectsDOMList());

  todoProjectDialog.close();
}

export { addTodoProjectToSidebar };
