import { getTodoTasksDOMList } from '../todo_project_controllers/todoTaskController';
import { fetchAndUpdateTodoTaskList } from './todoTaskListUpdater';
import { projectUpdater } from '../todo_project_controllers/todoProjectController';

function displayTodoTasksForCurrentTodoProject(currentTodoProjectList) {
  const clickedTodoProject = currentTodoProjectList.querySelectorAll('li > p');

  clickedTodoProject.forEach((project, index) => {
    project.addEventListener('click', () => {
      fetchAndUpdateTodoTaskList(getTodoTasksDOMList(), index);

      projectUpdater.updateCurrentDisplayedProject(index);
    });
  });
}

export { displayTodoTasksForCurrentTodoProject };
