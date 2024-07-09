function showTodoProjects() {
  const hamMenu = document.querySelector('.ham-menu');

  const projectList = document.querySelector(
    '.todo-projects-container-sidebar'
  );

  hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    projectList.classList.toggle('active');
  });
}

export { showTodoProjects };
