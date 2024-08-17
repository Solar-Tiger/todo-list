import {
  getOrSetTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';
import { deleteAndUpdateCurrentTodoProjects } from '../todo_project_removers/todoProjectRemove';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';
import { saveArrayToLocalStorage, findArrayIndex } from '../../utils/helpers';
import { updateCurrentProjectTitle } from '../todo_project_title_updater/todoProjectTitleUpdater';
import { updateTodoProjectsForAddingTask } from '../todo_project_updaters/todoProjectUpdateProjectOptions';

function addTodoProjectToSidebar(todoProjectDialog, todoProjectName) {
  const todoProjects = getOrSetTodoProjects().getCurrentTodoProjects();

  addTodoToArray(todoProjects, todoProjectName.value);

  fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());

  deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());

  displayTodoTasksForCurrentTodoProject(getTodoProjectsDOMList());

  if (todoProjects.length === 1) {
    projectUpdater.updateCurrentDisplayedProject(0);
  } else if (todoProjects.length >= 2) {
    const currentProjectIndex = findArrayIndex(
      projectUpdater.getDisplayedProject().id,
      todoProjects
    );

    projectUpdater.updateCurrentDisplayedProject(currentProjectIndex);
  }

  saveArrayToLocalStorage('todoProjects', todoProjects);

  updateCurrentProjectTitle(projectUpdater.getDisplayedProject().projectTitle);

  updateTodoProjectsForAddingTask();

  todoProjectDialog.close();
}

export { addTodoProjectToSidebar };
