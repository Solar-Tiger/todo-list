import {
  getOrSetTodoProjects,
  deleteTodoProject,
} from '../todo_project_controllers/todoProjectController';
import { getTodoTasksDOMList } from '../todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';
import { fetchAndUpdateTodoTasksInList } from '../todo_project_list_updaters/todoTaskListUpdater';
import { deleteAndUpdateCurrentTodoTasks } from './todoTaskRemove';
import { projectUpdater } from '../todo_project_controllers/todoProjectController';
import { saveArrayToLocalStorage } from '../../utils/helpers';
import { updateCurrentProjectTitle } from '../todo_project_title_updater/todoProjectTitleUpdater';

function deleteAndUpdateCurrentTodoProjects(currentTodoProjectList) {
  const currentTodoProjectListDeleteIcon =
    currentTodoProjectList.querySelectorAll('li > img');

  const currentTodoProjectListItem =
    currentTodoProjectList.querySelectorAll('li');

  currentTodoProjectListDeleteIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      deleteTodoProject(
        getOrSetTodoProjects().getCurrentTodoProjects()[index].id,
        getOrSetTodoProjects().getCurrentTodoProjects()
      );

      currentTodoProjectList.removeChild(currentTodoProjectListItem[index]);

      fetchAndUpdateTodoProjectList(currentTodoProjectList);

      deleteAndUpdateCurrentTodoProjects(currentTodoProjectList);

      displayTodoTasksForCurrentTodoProject(currentTodoProjectList);

      fetchAndUpdateTodoTasksInList(getTodoTasksDOMList(), 0);

      deleteAndUpdateCurrentTodoTasks(getTodoTasksDOMList());

      projectUpdater.updateCurrentDisplayedProject(0);

      if (projectUpdater.getDisplayedProject() === undefined) {
        updateCurrentProjectTitle();
      } else {
        updateCurrentProjectTitle(
          projectUpdater.getDisplayedProject().projectTitle
        );
      }

      saveArrayToLocalStorage(
        'todoProjects',
        getOrSetTodoProjects().getCurrentTodoProjects()
      );
    });
  });
}

export { deleteAndUpdateCurrentTodoProjects };
