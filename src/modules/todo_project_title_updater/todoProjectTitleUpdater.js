function updateCurrentProjectTitle(updatedDisplayTitle) {
  const currentTodoProjectTitle = document.querySelector(
    '.todo-projects-sidebar-two h2'
  );

  if (updatedDisplayTitle !== undefined) {
    currentTodoProjectTitle.textContent = updatedDisplayTitle;
  } else {
    currentTodoProjectTitle.textContent = 'No projects!';
  }
}

export { updateCurrentProjectTitle };
