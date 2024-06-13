import { createId } from '@paralleldrive/cuid2';

// Create TODO projects
export function createTodoProject({ title }) {
  return {
    id: createId(), // Generate unique ID
    projectTitle: title,
    task: [],
  };
}
