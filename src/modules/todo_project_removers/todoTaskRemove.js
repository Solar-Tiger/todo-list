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

      // Delete TODO task from the containing TODO project array
      deleteTodoTask(
        projectUpdater.getDisplayedProject().projectTitle,
        projectUpdater.getDisplayedProject().tasks[index].id,
        allTodoProjects
      );

      // Remove TODO task from DOM
      currentTodoTasksList.removeChild(currentTodoTaskListItem[index]);

      // Update displayed TODO tasks with TODO task removed
      const currentProjectIndex = findArrayIndex(
        projectUpdater.getDisplayedProject().id,
        allTodoProjects
      );

      fetchAndUpdateTodoTasksInList(currentTodoTasksList, currentProjectIndex);

      // Re-add event listeners to each TODO task delete icon
      deleteAndUpdateCurrentTodoTasks(currentTodoTasksList);

      saveArrayToLocalStorage('todoProjects', allTodoProjects);
    });
  });
}

// Update all TODO tasks based on current task displayer option and stay on that display option with the removed TODO task
function deleteAndUpdateAllTodoTasks(currentTodoTasksList) {
  const currentTodoTaskListDeleteIcon = currentTodoTasksList.querySelectorAll(
    'li #todo-task-delete-icon'
  );

  const currentTodoTaskListItem = currentTodoTasksList.querySelectorAll('li');

  currentTodoTaskListDeleteIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      const allTodoProjects = getOrSetTodoProjects().getCurrentTodoProjects();
      const allTodoTasks = getOrSetAllTodoTask().getAllTodoTask();

      // Delete TODO task from the containing TODO project array
      deleteTodoTask(
        getArrayContainingArrayItem(allTodoProjects, allTodoTasks[index].id),
        allTodoTasks[index].id,
        allTodoProjects
      );

      // Delete TODO task from array containing all todo tasks used in task displayer options
      deleteTodoProject(allTodoTasks[index].id, allTodoTasks);

      // Remove TODO task from the DOM
      currentTodoTasksList.removeChild(currentTodoTaskListItem[index]);

      // Display updated TODO tasks in DOM with removed TODO task
      fetchAndUpdateAllTodoTaskInList(
        currentTodoTasksList,
        projectUpdater.getDisplayedProject()
      );

      // Re-add event listeners to each TODO tasks delete icon
      deleteAndUpdateAllTodoTasks(currentTodoTasksList);

      saveArrayToLocalStorage('todoProjects', allTodoProjects);
    });
  });
}

export { deleteAndUpdateCurrentTodoTasks, deleteAndUpdateAllTodoTasks };
