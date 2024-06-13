import { createId } from '@paralleldrive/cuid2';

// Create TODO task
export function createTodoTask({ title, description, dueDate, priority }) {
  return {
    id: createId(), // Generate unique ID
    taskTitle: title,
    taskDescription: description,
    taskDueDate: dueDate,
    taskPriority: priority,
  };
}
