import {
  getOrSetTodoProjects,
  getTodoProjectsDOMList,
  addTodoToArray,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';
import { getTodoTasksDOMList } from '../todo_project_controllers/todoTaskController';
import { deleteAndUpdateCurrentTodoProjects } from '../todo_project_removers/todoProjectRemove';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';
import { saveArrayToLocalStorage } from '../../utils/helpers';
import { updateCurrentProjectTitle } from '../todo_project_title_updater/todoProjectTitleUpdater';
import { updateTodoProjectsForAddingTask } from '../todo_project_updaters/todoProjectUpdateProjectOptions';
import { findArrayIndex, highlightTodoProject } from '../../utils/helpers';

function addTodoProjectToSidebar(todoProjectDialog, todoProjectName) {
  const todoProjects = getOrSetTodoProjects().getCurrentTodoProjects();
  const projectName = document.querySelector('#project-name');
  const todoProjectDomList = getTodoProjectsDOMList();

  if (findDuplicateName(projectName.value, todoProjects)) {
    return;
  }

  addTodoToArray(todoProjectName.value);

  // Update TODO project list to include new TODO project
  fetchAndUpdateTodoProjectList(todoProjectDomList);

  // Add event listener to each TODO project delete icon for removing TODO projects
  deleteAndUpdateCurrentTodoProjects(todoProjectDomList);

  // Add event listener to each TODO project "p" element for displaying TODO tasks each time a TODO project is clicked
  displayTodoTasksForCurrentTodoProject(todoProjectDomList);

  // Update displayed project title and switch to it immediately
  const projectArrayIndex = findArrayIndex(
    todoProjects[todoProjects.length - 1].id,
    todoProjects
  );

  getTodoTasksDOMList().textContent = '';
  updateCurrentProjectTitle(projectName.value);
  projectUpdater.updateCurrentDisplayedProject(projectArrayIndex);

  // Update TODO projects in the select elements option list
  updateTodoProjectsForAddingTask();

  // Highlight last TODO project when one is added
  highlightTodoProject(true);

  // Save TODO projects array to local storage along with TODO task objects inside the TODO projects array
  saveArrayToLocalStorage('todoProjects', todoProjects);

  todoProjectDialog.close();
}

function findDuplicateName(userProjectNameInput, projectArr) {
  for (let i = 0; i < projectArr.length; i++) {
    if (projectArr[i].projectTitle === userProjectNameInput) {
      alert('No duplicate names!');

      return true;
    }
  }
}

export { addTodoProjectToSidebar };
