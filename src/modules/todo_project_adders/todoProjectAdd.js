import {
  getOrSetTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';
import { deleteAndUpdateCurrentTodoProjects } from '../todo_project_removers/todoProjectRemove';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';

function addTodoProjectToSidebar(todoProjectDialog, todoProjectName) {
  const todoProjects = getOrSetTodoProjects().getCurrentTodoProjects();

  addTodoToArray(todoProjects, todoProjectName.value);

  fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());

  deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());

  displayTodoTasksForCurrentTodoProject(getTodoProjectsDOMList());

  if (todoProjects.length === 1) {
    projectUpdater.updateCurrentDisplayedProject(0);
  }

  todoProjectDialog.close();
}

export { addTodoProjectToSidebar };
