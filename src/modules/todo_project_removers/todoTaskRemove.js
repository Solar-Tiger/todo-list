import {
  getOrSetTodoProjects,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';
import { deleteTodoTask } from '../todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoTaskList } from '../todo_project_list_updaters/todoTaskListUpdater';
import { findArrayIndex } from '../../utils/helpers';

function deleteAndUpdateCurrentTodoTasks(currentTodoTasksList) {
  const currentTodoTaskListDeleteIcon = currentTodoTasksList.querySelectorAll(
    'li #todo-task-delete-icon'
  );

  const currentTodoTaskListItem = currentTodoTasksList.querySelectorAll('li');

  currentTodoTaskListDeleteIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      deleteTodoTask(
        projectUpdater.getDisplayedProject().id,
        projectUpdater.getDisplayedProject().task[index].id,
        getOrSetTodoProjects().getCurrentTodoProjects()
      );

      currentTodoTasksList.removeChild(currentTodoTaskListItem[index]);

      const currentProjectIndex = findArrayIndex(
        projectUpdater.getDisplayedProject().id,
        getOrSetTodoProjects().getCurrentTodoProjects()
      );

      fetchAndUpdateTodoTaskList(currentTodoTasksList, currentProjectIndex);

      deleteAndUpdateCurrentTodoTasks(currentTodoTasksList);
    });
  });
}

export { deleteAndUpdateCurrentTodoTasks };
