import {
  getOrSetTodoProjects,
  projectUpdater,
  deleteTodoProject,
} from '../todo_project_controllers/todoProjectController';
import { deleteTodoTask } from '../todo_project_controllers/todoTaskController';
import { getOrSetAllTodoTask } from '../todo_project_controllers/todoTaskController';
import {
  fetchAndUpdateTodoTasksInList,
  fetchAndUpdateAllTodoTaskInList,
} from '../todo_project_list_updaters/todoTaskListUpdater';
import {
  findArrayIndex,
  saveArrayToLocalStorage,
  getArrayContainingArrayItem,
} from '../../utils/helpers';

function deleteAndUpdateCurrentTodoTasks(currentTodoTasksList) {
  const currentTodoTaskListDeleteIcon = currentTodoTasksList.querySelectorAll(
    'li #todo-task-delete-icon'
  );

  const currentTodoTaskListItem = currentTodoTasksList.querySelectorAll('li');

  currentTodoTaskListDeleteIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      const allTodoProjects = getOrSetTodoProjects().getCurrentTodoProjects();

      deleteTodoTask(
        projectUpdater.getDisplayedProject().id,
        projectUpdater.getDisplayedProject().tasks[index].id,
        allTodoProjects
      );

      currentTodoTasksList.removeChild(currentTodoTaskListItem[index]);

      const currentProjectIndex = findArrayIndex(
        projectUpdater.getDisplayedProject().id,
        allTodoProjects
      );

      fetchAndUpdateTodoTasksInList(currentTodoTasksList, currentProjectIndex);

      deleteAndUpdateCurrentTodoTasks(currentTodoTasksList);

      saveArrayToLocalStorage('todoProjects', allTodoProjects);
    });
  });
}

function deleteAndUpdateAllTodoTasks(currentTodoTasksList) {
  const currentTodoTaskListDeleteIcon = currentTodoTasksList.querySelectorAll(
    'li #todo-task-delete-icon'
  );

  const currentTodoTaskListItem = currentTodoTasksList.querySelectorAll('li');

  currentTodoTaskListDeleteIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      const allTodoProjects = getOrSetTodoProjects().getCurrentTodoProjects();
      const allTodoTasks = getOrSetAllTodoTask().getAllTodoTask();

      console.log(allTodoTasks[index].id);

      deleteTodoTask(
        getArrayContainingArrayItem(allTodoProjects, allTodoTasks[index].id),
        allTodoTasks[index].id,
        allTodoProjects
      );

      deleteTodoProject(allTodoTasks[index].id, allTodoTasks);

      currentTodoTasksList.removeChild(currentTodoTaskListItem[index]);

      fetchAndUpdateAllTodoTaskInList(
        currentTodoTasksList,
        projectUpdater.getDisplayedProject()
      );

      deleteAndUpdateAllTodoTasks(currentTodoTasksList);

      saveArrayToLocalStorage('todoProjects', allTodoProjects);
    });
  });
}

export { deleteAndUpdateCurrentTodoTasks, deleteAndUpdateAllTodoTasks };
