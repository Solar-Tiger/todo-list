import {
  getTodoProjects,
  deleteTodoProject,
  fetchAndUpdateTodoProjectList,
} from '../todo_project_controllers/todoProjectController';

function deleteAndUpdateCurrentTodoProjects(currentTodoProjectList) {
  const currentTodoProjectListDeleteIcon = document.querySelectorAll(
    '.todo-projects-list__desktop li > img'
  );

  const currentTodoProjectListItem = document.querySelectorAll(
    '.todo-projects-list__desktop li'
  );

  currentTodoProjectListDeleteIcon.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      deleteTodoProject(getTodoProjects()[index].id, getTodoProjects());

      currentTodoProjectList.removeChild(currentTodoProjectListItem[index]);

      fetchAndUpdateTodoProjectList(currentTodoProjectList);

      deleteAndUpdateCurrentTodoProjects();
    });
  });
}

export { deleteAndUpdateCurrentTodoProjects };
