function updateCurrentProjectTitle(updatedDisplayTitle) {
  const currentTodoProjectTitle = document.querySelector(
    '.todo-projects-sidebar-two h2'
  );
  const currentSelectedTodoProject = document.querySelector(
    '.current-selected-todo-project'
  );

  if (updatedDisplayTitle !== undefined) {
    currentTodoProjectTitle.textContent = updatedDisplayTitle;
    currentSelectedTodoProject.textContent = updatedDisplayTitle;
  } else {
    currentTodoProjectTitle.textContent = 'No projects!';
    currentSelectedTodoProject.textContent = 'No projects!';
  }
}

export { updateCurrentProjectTitle };
