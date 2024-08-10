import { getOrSetTodoProjects } from '../modules/todo_project_controllers/todoProjectController.js';
import { parse, isWithinInterval, addHours, addDays, addWeeks } from 'date-fns';

const updatedTodoTaskList = getOrSetTodoProjects()
  .getCurrentTodoProjects()
  .flatMap((allTodoProjects) =>
    allTodoProjects.tasks.map((eachTask) => {
      return eachTask.taskDueDate;
    })
  );

const updatedTodoTaskListTwo = getOrSetTodoProjects()
  .getCurrentTodoProjects()
  .flatMap((allTodoProjects) =>
    allTodoProjects.tasks.map((eachTask) => {
      return eachTask;
    })
  );

getOrSetAllTodoTask().setNewTodoTask(updatedTodoTaskList);

import { getOrSetAllTodoTask } from './modules/todo_project_controllers/todoTaskController.js';

const todoTaskDueDate = getOrSetAllTodoTask().getAllTodoTask();

console.log(todoTaskDueDate);

const parsedDates = todoTaskDueDate.map((date) =>
  parse(date, 'MMM do, yyyy', new Date())
);

const todaysDate = new Date();

const isWithin24Hours = (date) =>
  isWithinInterval(date, {
    start: todaysDate,
    end: addHours(todaysDate, 24),
  });

const specificTodoTaskDueDates = [];

parsedDates.forEach((date, index) => {
  if (isWithin24Hours(date)) {
    specificTodoTaskDueDates.push(updatedTodoTaskListTwo[index]);
  }
});

console.log(specificTodoTaskDueDates);
