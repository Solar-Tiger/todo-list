import {
  getOrSetTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';
import { deleteAndUpdateCurrentTodoProjects } from '../todo_project_removers/todoProjectRemove';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';
import { saveArrayToLocalStorage } from '../../utils/helpers';
import { updateCurrentProjectTitle } from '../todo_project_title_updater/todoProjectTitleUpdater';
import { updateTodoProjectsForAddingTask } from '../todo_project_updaters/todoProjectUpdateProjectOptions';

function addTodoProjectToSidebar(todoProjectDialog, todoProjectName) {
  const todoProjects = getOrSetTodoProjects().getCurrentTodoProjects();
  const currentTodoProjectTitle = document.querySelector(
    '.todo-projects-sidebar-two h2'
  );
  const projectName = document.querySelector('#project-name');

  // Add new TODO project to projects array
  addTodoToArray(todoProjects, todoProjectName.value);

  // Update TODO project list to include new TODO project
  fetchAndUpdateTodoProjectList(getTodoProjectsDOMList());

  // Add event listener to each TODO project delete icon for removing TODO projects
  deleteAndUpdateCurrentTodoProjects(getTodoProjectsDOMList());

  // Add event listener to each TODO project "p" element for displaying TODO tasks each time a TODO project is clicked
  displayTodoTasksForCurrentTodoProject(getTodoProjectsDOMList());

  // Update displayed project title based on if there are no projects or if at least 1 project exist
  if (typeof projectUpdater.getDisplayedProject() === 'string') {
    updateCurrentProjectTitle(projectUpdater.getDisplayedProject());
  } else if (currentTodoProjectTitle.textContent === 'No projects!') {
    updateCurrentProjectTitle(projectName.value);
  }

  // Update TODO projects in the select elements option list
  updateTodoProjectsForAddingTask();

  // Save TODO projects array to local storage along with TODO task objects inside the TODO projects array
  saveArrayToLocalStorage('todoProjects', todoProjects);

  todoProjectDialog.close();
}

export { addTodoProjectToSidebar };
