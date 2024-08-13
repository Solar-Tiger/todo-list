import { getTodoTasksDOMList } from '../todo_project_controllers/todoTaskController';
import {
  fetchAndUpdateTodoTasksInList,
  fetchAndUpdateAllTodoTaskInList,
} from './todoTaskListUpdater';
import { deleteAndUpdateCurrentTodoTasks } from '../todo_project_removers/todoTaskRemove';
import { projectUpdater } from '../todo_project_controllers/todoProjectController';
import { updateCurrentProjectTitle } from '../todo_project_title_updater/todoProjectTitleUpdater';

function displayTodoTasksForCurrentTodoProject(currentTodoProjectList) {
  const clickedTodoProject = currentTodoProjectList.querySelectorAll('li > p');

  clickedTodoProject.forEach((project, index) => {
    project.addEventListener('click', () => {
      fetchAndUpdateTodoTasksInList(getTodoTasksDOMList(), index);

      deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

      updateCurrentProjectTitle(
        projectUpdater.getDisplayedProject().projectTitle
      );
    });
  });
}

function displayTodoTasksForAllTodoProjects(
  currentTodoProjectList,
  currentTodoTaskOptionName
) {
  fetchAndUpdateAllTodoTaskInList(
    currentTodoProjectList,
    currentTodoTaskOptionName
  );

  deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

  updateCurrentProjectTitle(currentTodoTaskOptionName);
}

export {
  displayTodoTasksForCurrentTodoProject,
  displayTodoTasksForAllTodoProjects,
};
