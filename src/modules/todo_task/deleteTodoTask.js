import { findArrayElement, findArrayIndex } from "../../utils/helpers";

export function deleteTodoTask(projectId, taskId, arr) {
  const correctProject = findArrayElement(projectId, arr)
  
  console.log(correctProject.task);
  
  const correctTaskIndex = findArrayIndex(taskId, correctProject.task)
  
  console.log(correctTaskIndex);
  
  correctProject.task.splice(correctTaskIndex, 1)
}
