import {
  getTodoProjects,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController';
import { deleteTodoTask } from '../todo_project_controllers/todoTaskController';
// import { getTodoTasksDOMList } from '../todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoTaskList } from '../todo_project_list_updaters/todoTaskListUpdater';
// import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';
// import { fetchAndUpdateTodoTaskList } from '../todo_project_list_updaters/todoTaskListUpdater';

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
        getTodoProjects()
      );

      currentTodoTasksList.removeChild(currentTodoTaskListItem[index]);

      fetchAndUpdateTodoTaskList(currentTodoTasksList);

      deleteAndUpdateCurrentTodoTasks(currentTodoTasksList);

      //   displayTodoTasksForCurrentTodoProject(currentTodoTasksList);

      //   fetchAndUpdateTodoTaskList(getTodoTasksDOMList(), 0);

      //   projectUpdater.updateCurrentDisplayedProject(0);
    });
  });
}

export { deleteAndUpdateCurrentTodoTasks };
