import {
  getOrSetTodoProjects,
  deleteTodoProject,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';
import { getTodoTasksDOMList } from '../todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';
import { fetchAndUpdateTodoTasksInList } from '../todo_project_list_updaters/todoTaskListUpdater';
import { deleteAndUpdateCurrentTodoTasks } from './todoTaskRemove';
import { saveArrayToLocalStorage } from '../../utils/helpers';
import { updateCurrentProjectTitle } from '../todo_project_title_updater/todoProjectTitleUpdater';
import { updateTodoProjectsForAddingTask } from '../todo_project_updaters/todoProjectUpdateProjectOptions';

function deleteAndUpdateCurrentTodoProjects(currentTodoProjectList) {
  const currentTodoProjectListDeleteIcon =
    currentTodoProjectList.querySelectorAll('li > img');

  const currentTodoProjectListItem =
    currentTodoProjectList.querySelectorAll('li');

  currentTodoProjectListDeleteIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      // Delete TODO project from projects array
      deleteTodoProject(
        getOrSetTodoProjects().getCurrentTodoProjects()[index].id,
        getOrSetTodoProjects().getCurrentTodoProjects()
      );

      // Remove TODO project from DOM
      currentTodoProjectList.removeChild(currentTodoProjectListItem[index]);

      // Update TODO projects in DOM with removed TODO project
      fetchAndUpdateTodoProjectList(currentTodoProjectList);

      // Re-add event listeners to TODO projects delete icon
      deleteAndUpdateCurrentTodoProjects(currentTodoProjectList);

      // Re-add event listeners for TODO projects "p" element
      displayTodoTasksForCurrentTodoProject(currentTodoProjectList);

      // Remove and update TODO tasks of the first TODO project in the array
      fetchAndUpdateTodoTasksInList(getTodoTasksDOMList(), 0);

      // Re-add event listeners to the TODO tasks delete icon
      deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

      // Update current displayed TODO project to the first in the projects array
      projectUpdater.updateCurrentDisplayedProject(0);

      // Handle error if no TODO projects exist and set current displayed TODO project accordingly or to default if none exist
      if (projectUpdater.getDisplayedProject() === undefined) {
        updateCurrentProjectTitle();
      } else {
        updateCurrentProjectTitle(
          projectUpdater.getDisplayedProject().projectTitle
        );
      }

      // Update TODO projects in the select elements option list
      updateTodoProjectsForAddingTask();

      // Save update TODO projects array to local storage
      saveArrayToLocalStorage(
        'todoProjects',
        getOrSetTodoProjects().getCurrentTodoProjects()
      );
    });
  });
}

export { deleteAndUpdateCurrentTodoProjects };
