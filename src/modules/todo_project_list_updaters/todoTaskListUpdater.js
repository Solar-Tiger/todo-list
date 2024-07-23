import { getTodoProjects } from "../todo_project_controllers/todoProjectController";

// Add and update TODO project list via DOM
function fetchAndUpdateTodoTaskList(currentTodoTasks, clickedProjectIndex) {
    currentTodoTasks.textContent = '';

    let clickedProjectTasks

    if (clickedProjectIndex === undefined) {
        clickedProjectTasks = getTodoProjects()[0].task
    } else {
        clickedProjectTasks = getTodoProjects()[clickedProjectIndex].task
    }

    clickedProjectTasks.forEach((task) => {
        const todoTask = document.createElement('li');
        const todoTaskName = document.createElement('h2')
        const todoTaskDescription = document.createElement('p')
        const todoTaskDueDate = document.createElement('p')
        const todoTaskPriority = document.createElement('p')

        todoTask.classList.add('todo-task');
        todoTaskName.textContent = task.taskTitle
        todoTaskDescription.textContent = task.taskDescription
        todoTaskDueDate.textContent = task.taskDueDate
        todoTaskPriority.textContent = task.taskPriority
        
        todoTask.append(todoTaskName, todoTaskDescription, todoTaskDueDate, todoTaskPriority)
    
        currentTodoTasks.appendChild(todoTask);
      });
  }

  export { fetchAndUpdateTodoTaskList }