import {
  getTodoProjects,
  deleteTodoProject,
} from '../todo_project_controllers/todoProjectController';
import { fetchAndUpdateTodoProjectList } from '../todo_project_list_updaters/todoProjectListUpdate';

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
    });
  });
}

export { deleteAndUpdateCurrentTodoProjects };
