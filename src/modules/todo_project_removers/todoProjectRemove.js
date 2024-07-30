import {
  getTodoProjects,
  deleteTodoProject,
} from '../todo_project_controllers/todoProjectController';
import { getTodoTasksDOMList } from '../todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';
import { displayTodoTasksForCurrentTodoProject } from '../todo_project_list_updaters/todoProjectCurrentTaskForTodoProject';
import { fetchAndUpdateTodoTaskList } from '../todo_project_list_updaters/todoTaskListUpdater';
import { projectUpdater } from '../todo_project_controllers/todoProjectController';

function deleteAndUpdateCurrentTodoProjects(currentTodoProjectList) {
  const currentTodoProjectListDeleteIcon =
    currentTodoProjectList.querySelectorAll('li > img');

  const currentTodoProjectListItem =
    currentTodoProjectList.querySelectorAll('li');

  currentTodoProjectListDeleteIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      deleteTodoProject(getTodoProjects()[index].id, getTodoProjects());

      currentTodoProjectList.removeChild(currentTodoProjectListItem[index]);

      fetchAndUpdateTodoProjectList(currentTodoProjectList);

      deleteAndUpdateCurrentTodoProjects(currentTodoProjectList);

      displayTodoTasksForCurrentTodoProject(currentTodoProjectList);

      fetchAndUpdateTodoTaskList(getTodoTasksDOMList(), 0);

      projectUpdater.updateCurrentDisplayedProject(0);
    });
  });
}

export { deleteAndUpdateCurrentTodoProjects };
