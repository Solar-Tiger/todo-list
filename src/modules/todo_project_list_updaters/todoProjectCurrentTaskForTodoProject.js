import { getTodoTasksDOMList } from '../todo_project_controllers/todoTaskController';
import {
  fetchAndUpdateTodoTasksInList,
  fetchAndUpdateAllTodoTaskInList,
} from './todoTaskListUpdater';
import {
  deleteAndUpdateCurrentTodoTasks,
  deleteAndUpdateAllTodoTasks,
} from '../todo_project_removers/todoTaskRemove';
import { projectUpdater } from '../todo_project_controllers/todoProjectController';
import { updateCurrentProjectTitle } from '../todo_project_title_updater/todoProjectTitleUpdater';
import { hideTodoProjects } from '../todo_project_controllers/todoHamMenuController';
import { updateAllTodoTasksArray } from '../../utils/helpers';

// Displays all TODO tasks for a given tasks displayer option, updates the project title with that task displayer option and assigns event listeners to the icon buttons
function displayTodoTasksForAllTodoProjects(
  currentDisplayedTasksList,
  currentTodoTaskOptionName
) {
  fetchAndUpdateAllTodoTaskInList(
    currentDisplayedTasksList,
    currentTodoTaskOptionName
  );

  // Add event listeners to the delete button on TODO tasks
  deleteAndUpdateAllTodoTasks(getTodoTasksDOMList());

  // Updates displayed project title to be accessed later
  updateCurrentProjectTitle(currentTodoTaskOptionName);

  // Updates displayed project title
  projectUpdater.updateCurrentDisplayedProjectOfAllTask(
    currentTodoTaskOptionName
  );

  // Updates TODO tasks array if it's empty to use as event listener for completing TODO tasks
  updateAllTodoTasksArray();

  // Collapse TODO projects menu on mobile
  hideTodoProjects();
}

// Displays all TODO tasks for a given project, updates the project title and assigns event listeners to the icon buttons
function displayTodoTasksForCurrentTodoProject(currentTodoProjectList) {
  const clickedTodoProject = currentTodoProjectList.querySelectorAll('li > p');

  clickedTodoProject.forEach((project, index) => {
    project.addEventListener('click', () => {
      fetchAndUpdateTodoTasksInList(getTodoTasksDOMList(), index);

      // Add event listeners to the delete button on TODO tasks
      deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

      // Update TODO project title based on selected TODO project
      projectUpdater.updateCurrentDisplayedProject(index);

      // Updates displayed project title to be accessed later
      updateCurrentProjectTitle(
        projectUpdater.getDisplayedProject().projectTitle
      );

      // Updates TODO tasks array if it's empty to use as event listener for completing TODO tasks
      updateAllTodoTasksArray();

      // Collapse TODO projects menu on mobile
      hideTodoProjects();
    });
  });
}

export {
  displayTodoTasksForCurrentTodoProject,
  displayTodoTasksForAllTodoProjects,
};
