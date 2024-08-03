import todoTaskComplete from '../../assets/images/icons/check_circle.svg';
import todoTaskDelete from '../../assets/images/icons/delete.svg';
import { getOrSetTodoProjects } from '../todo_project_controllers/todoProjectController';

// Add and update TODO tasks list via DOM
function fetchAndUpdateTodoTaskList(currentTodoTasks, clickedProjectIndex) {
  currentTodoTasks.textContent = '';

  let clickedProjectTasks;

  if (clickedProjectIndex === undefined) {
    if (getOrSetTodoProjects().getCurrentTodoProjects().length === 0) {
      return;
    } else {
      clickedProjectTasks =
        getOrSetTodoProjects().getCurrentTodoProjects()[0].task;
    }
  } else {
    if (getOrSetTodoProjects().getCurrentTodoProjects().length === 0) {
      return;
    }
    clickedProjectTasks =
      getOrSetTodoProjects().getCurrentTodoProjects()[clickedProjectIndex].task;
  }

  clickedProjectTasks.forEach((task) => {
    const todoTask = document.createElement('li');
    const todoTaskName = document.createElement('h2');
    const todoTaskDescription = document.createElement('p');
    const todoTaskDueDate = document.createElement('p');
    const todoTaskPriority = document.createElement('p');

    const todoTaskIconsContainer = document.createElement('div');
    const todoTaskCompleteIcon = document.createElement('img');
    const todoTaskDeleteIcon = document.createElement('img');

    todoTaskIconsContainer.classList.add('todo-task-icons-container');

    todoTask.classList.add('todo-task');
    todoTaskName.textContent = task.taskTitle;
    todoTaskDescription.textContent = task.taskDescription;
    todoTaskDueDate.textContent = `Due Date: ${task.taskDueDate}`;
    todoTaskPriority.textContent = task.taskPriority;

    todoTaskCompleteIcon.id = 'todo-task-complete-icon';
    todoTaskCompleteIcon.src = todoTaskComplete;
    todoTaskCompleteIcon.width = '32';

    todoTaskDeleteIcon.id = 'todo-task-delete-icon';
    todoTaskDeleteIcon.src = todoTaskDelete;
    todoTaskDeleteIcon.width = '32';

    todoTaskIconsContainer.append(todoTaskCompleteIcon, todoTaskDeleteIcon);

    todoTask.append(
      todoTaskName,
      todoTaskDescription,
      todoTaskDueDate,
      todoTaskPriority,
      todoTaskIconsContainer
    );

    currentTodoTasks.appendChild(todoTask);
  });
}

export { fetchAndUpdateTodoTaskList };
