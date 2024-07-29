import { getTodoProjects } from '../todo_project_controllers/todoProjectController';
import deleteProjectIcon from '../../assets/images/icons/delete.svg';

// Add and update TODO project list via DOM
function fetchAndUpdateTodoProjectList(currentTodoProjects) {
  currentTodoProjects.textContent = '';

  getTodoProjects().forEach((project) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const deleteIcon = document.createElement('img');

    p.textContent = project.projectTitle;

    deleteIcon.src = deleteProjectIcon;
    deleteIcon.width = '32';

    li.append(p, deleteIcon);

    currentTodoProjects.appendChild(li);
  });
}

export { fetchAndUpdateTodoProjectList };
