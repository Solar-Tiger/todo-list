import { getTodoTasksDOMList } from "../todo_project_controllers/todoTaskController";
import { fetchAndUpdateTodoTaskList } from "./todoTaskListUpdater";
  
  function displayTodoTasksForCurrentTodoProject(currentTodoProjectList) {
    const clickedTodoProject = currentTodoProjectList.querySelectorAll("li > p")
    
    clickedTodoProject.forEach((project, index) => {
        project.addEventListener("click", () => {
            fetchAndUpdateTodoTaskList(getTodoTasksDOMList(), index)
        })
    })
  }
  
  export { displayTodoTasksForCurrentTodoProject };
  