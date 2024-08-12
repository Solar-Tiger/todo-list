import { getOrSetTodoProjects } from '../modules/todo_project_controllers/todoProjectController.js';
import { getArrayOfArrayValues } from './helpers.js';
import { parse, isWithinInterval, add } from 'date-fns';

function getArrayOfTaskByDate() {
  // Get all TODO tasks from all TODO projects
  const allTodoTask = getOrSetTodoProjects()
    .getCurrentTodoProjects()
    .flatMap((project) => project.tasks);

  // Get all TODO Tasks by date
  const todoTaskDueDates = getArrayOfArrayValues(allTodoTask, 'taskDueDate');

  // Parse date srings to date objects to use in date-fns functions
  const parsedDates = todoTaskDueDates.map((date) =>
    parse(date, 'MMM do, yyyy', new Date())
  );

  // Make current day always the start date
  const todaysDate = new Date();

  // Functions used to return a boolean for specific date ranges
  function check24Hours(date) {
    return isWithinInterval(date, {
      start: todaysDate,
      end: add(todaysDate, { hours: 24 }),
    });
  }

  function check7Days(date) {
    return isWithinInterval(date, {
      start: todaysDate,
      end: add(todaysDate, { days: 7 }),
    });
  }

  function check1Month(date) {
    return isWithinInterval(date, {
      start: todaysDate,
      end: add(todaysDate, { months: 1 }),
    });
  }

  // Functions used to find dates within a specific range and push those into an array
  const specificTodoTaskDueDates = parsedDates.filter((date, index) => {
    if (check1Month(date) && todaysDate.getMonth() === date.getMonth()) {
      return allTodoTask[index];
    }
  });

  console.log(specificTodoTaskDueDates);

  return specificTodoTaskDueDates;
}

export { getArrayOfTaskByDate };
