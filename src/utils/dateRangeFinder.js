import { getOrSetTodoProjects } from '../modules/todo_project_controllers/todoProjectController.js';
import { getOrSetAllTodoTask } from '../modules/todo_project_controllers/todoTaskController.js';
import { getArrayOfArrayValues, sortTodoTasksByDate } from './helpers.js';
import { parse, isWithinInterval, add } from 'date-fns';

function getArrayOfTaskByClickedDeadline(clickedTaskDeadline) {
  // Get all TODO tasks from all TODO projects
  const allTodoTasks = getOrSetTodoProjects()
    .getCurrentTodoProjects()
    .flatMap((project) => project.tasks);

  // Update all available TODO tasks
  getOrSetAllTodoTask().setNewTodoTask(allTodoTasks);

  sortTodoTasksByDate(allTodoTasks);

  // Get an array of all TODO tasks by their key
  const todoTaskDueDates = getArrayOfArrayValues(allTodoTasks, 'taskDueDate');

  // Parse date srings to date objects of due date array
  const parsedDates = todoTaskDueDates.map((date) =>
    parse(date, 'MMM do, yyyy', new Date())
  );

  // Set all TODO tasks by correct clicked task displayer option in the correct date order
  getOrSetAllTodoTask().setNewTodoTask(
    getArrayOfCorrectTasksByDeadline(
      parsedDates,
      allTodoTasks,
      clickedTaskDeadline
    )
  );

  return getArrayOfCorrectTasksByDeadline(
    parsedDates,
    allTodoTasks,
    clickedTaskDeadline
  );
}

// Function for getting an array correct TODO tasks due dates
function getArrayOfCorrectTasksByDeadline(
  taskDueDateArray,
  allCurrentTodoTasks,
  taskDeadline
) {
  let specificTodoTaskDueDates = [];
  let todaysDate = new Date();

  if (taskDeadline === 'All tasks') {
    return allCurrentTodoTasks;
  } else {
    taskDueDateArray.forEach((date, index) => {
      if (checkTimeFrame(todaysDate, date, taskDeadline)) {
        specificTodoTaskDueDates.push(allCurrentTodoTasks[index]);
      }
    });
    return specificTodoTaskDueDates;
  }
}

// Functions used to return a boolean for specific date ranges
function checkTimeFrame(startDate, date, currentTaskDeadline) {
  if (currentTaskDeadline === 'Todays tasks') {
    return isWithinInterval(date, {
      start: startDate,
      end: add(startDate, { hours: 24 }),
    });
  } else if (currentTaskDeadline === 'Weekly tasks') {
    return isWithinInterval(date, {
      start: startDate,
      end: add(startDate, { days: 7 }),
    });
  }
}

export { getArrayOfTaskByClickedDeadline };
