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
}

function displayTodoTasksForCurrentTodoProject(currentTodoProjectList) {
  const clickedTodoProject = currentTodoProjectList.querySelectorAll('li > p');

  clickedTodoProject.forEach((project, index) => {
    project.addEventListener('click', () => {
      fetchAndUpdateTodoTasksInList(getTodoTasksDOMList(), index);

      deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

      projectUpdater.updateCurrentDisplayedProject(index);

      updateCurrentProjectTitle(
        projectUpdater.getDisplayedProject().projectTitle
      );
    });
  });
}

export {
  displayTodoTasksForCurrentTodoProject,
  displayTodoTasksForAllTodoProjects,
};
