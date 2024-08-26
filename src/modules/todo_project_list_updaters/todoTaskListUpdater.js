import todoTaskComplete from '../../assets/images/icons/check_circle.svg';
import todoTaskDelete from '../../assets/images/icons/delete.svg';
import { getOrSetTodoProjects } from '../todo_project_controllers/todoProjectController';
import { updateCurrentProjectTitle } from '../todo_project_title_updater/todoProjectTitleUpdater';
import { getArrayOfTaskByClickedDeadline } from '../../utils/dateRangeFinder';
import { sortTodoTasksByDate } from '../../utils/helpers';
import { setTodoTaskPriorityColor } from '../todo_project_adders/todoTaskAdd';

// Add and update TODO tasks list via DOM of ALL TODO tasks or specific date
function fetchAndUpdateAllTodoTaskInList(
  currentDisplayedTodoTasksList,
  currentTodoTaskOptionName
) {
  currentDisplayedTodoTasksList.textContent = '';

  createAndAppendTodoTaskToDOM(
    currentDisplayedTodoTasksList,
    getArrayOfTaskByClickedDeadline(currentTodoTaskOptionName)
  );

  updateCurrentProjectTitle(currentTodoTaskOptionName);
}

// Add and update TODO tasks list via DOM for specific project
function fetchAndUpdateTodoTasksInList(currentTodoTasks, clickedProjectIndex) {
  currentTodoTasks.textContent = '';

  let clickedProjectTasks;
  let currentTodoProjects = getOrSetTodoProjects().getCurrentTodoProjects();

  if (clickedProjectIndex === undefined) {
    if (currentTodoProjects.length === 0) {
      return;
    } else {
      clickedProjectTasks = sortTodoTasksByDate(currentTodoProjects[0].tasks);
    }
  } else {
    if (currentTodoProjects.length === 0) {
      return;
    }
    clickedProjectTasks = sortTodoTasksByDate(
      currentTodoProjects[clickedProjectIndex].tasks
    );
  }

  createAndAppendTodoTaskToDOM(currentTodoTasks, clickedProjectTasks);
}

function createAndAppendTodoTaskToDOM(displayedTodoTask, projectTasks) {
  projectTasks.forEach((task) => {
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

    displayedTodoTask.appendChild(todoTask);

    setTodoTaskPriorityColor(task.taskPriority);
  });
}

export {
  fetchAndUpdateTodoTasksInList,
  fetchAndUpdateAllTodoTaskInList,
  createAndAppendTodoTaskToDOM,
};
