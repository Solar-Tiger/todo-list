import { getOrSetTodoProjects } from '../modules/todo_project_controllers/todoProjectController.js';
import { getOrSetAllTodoTask } from '../modules/todo_project_controllers/todoTaskController.js';
import { parse, isWithinInterval, addHours, addDays, addWeeks } from 'date-fns';

function getArrayOfTaskByDate() {
  // Get all TODO tasks from all TODO projects
  const allTodoTask = getOrSetTodoProjects()
    .getCurrentTodoProjects()
    .flatMap((project) => project.tasks);

  // Get all TODO Tasks by date
  const updatedTodoTaskListDueDate = getUpdatedTodoTaskListKey(
    allTodoTask,
    'taskDueDate'
  );

  // Parse date srings to date objects to see if they fall within a certain date range
  const parsedDates = updatedTodoTaskListDueDate.map((date) =>
    parse(date, 'MMM do, yyyy', new Date())
  );

  console.log(parsedDates);

  // Make current day always the start date
  const todaysDate = new Date();

  // Functions used to return a boolean for specific date ranges
  const isWithin24Hours = (date) =>
    isWithinInterval(date, {
      start: todaysDate,
      end: addHours(todaysDate, 24),
    });

  // Array to hold TODO tasks that fall within a date range
  const specificTodoTaskDueDates = [];

  // Functions used to find dates within a specific range and push those into an array
  parsedDates.forEach((date, index) => {
    if (isWithin24Hours(date)) {
      specificTodoTaskDueDates.push(allTodoTask[index]);
    }
  });

  console.log(specificTodoTaskDueDates);

  return specificTodoTaskDueDates;
}

function getUpdatedTodoTaskListKey(todoTaskArr, taskKey) {
  return todoTaskArr.flatMap((eachTask) => eachTask[taskKey]);
}

export { getArrayOfTaskByDate };
