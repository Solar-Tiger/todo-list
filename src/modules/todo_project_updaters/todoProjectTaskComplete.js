import { getOrSetTodoProjects } from '../todo_project_controllers/todoProjectController';
import { getOrSetAllTodoTask } from '../todo_project_controllers/todoTaskController';
import { saveArrayToLocalStorage } from '../../utils/helpers';

function toggleTaskCompletion() {
  const taskListContainer = document.querySelector('#todo-task-list');

  taskListContainer.addEventListener('click', (e) => {
    e.preventDefault();

    const todoProjects = getOrSetTodoProjects().getCurrentTodoProjects();
    const allTodoTask = getOrSetAllTodoTask().getAllTodoTask();

    if (e.target.id === 'todo-task-complete-icon') {
      const correctTask = allTodoTask.find(
        (task) => task.id === e.target.closest('.todo-task').dataset.taskId
      );

      const taskCard = e.target.closest('.todo-task');

      correctTask.isComplete = !correctTask.isComplete;

      taskCard.classList.toggle('task-complete');

      saveArrayToLocalStorage('todoProjects', todoProjects);
    }
  });
}

export { toggleTaskCompletion };
