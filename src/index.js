// Import CSS styles
import './style.css';
import './reset.css';

// Import TODO Project functions
import {
  getTodoProjects,
  addTodoToArray as createTodoProject,
  deleteTodoProject,
} from './modules/todo_project_controllers/todoProjectController.js';
import { loadTodoProjectModal } from './components/TodoProjectModal.js';
import { loadTodoTaskModal } from './components/TodoTaskModal.js';

// Import TODO Task functions
import {
  addTodoTaskToArray as createTodoTask,
  deleteTodoTask,
} from './modules/todo_project_controllers/todoTaskController.js';

// Import TODO Projects displayers
import { loadSidebar } from './components/TodoProjectSidebar.js';
import { loadTodoTaskDisplay } from './components/TodoTaskDisplay.js';
import { loadNavHamburgerMenu } from './components/TodoProjectHamNavMenu.js';

// Add TODO modal in the backgroun to be opened and closed
loadTodoProjectModal();
loadTodoTaskModal();

// EXAMPLE
createTodoProject(getTodoProjects(), 'Food to make');

createTodoProject(getTodoProjects(), 'Games to play');

createTodoProject(getTodoProjects(), 'Places to visit');

window.getTodoProjects = getTodoProjects;
window.createTodoProject = createTodoProject;
window.deleteTodoProject = deleteTodoProject;
window.createTodoTask = createTodoTask;
window.deleteTodoTask = deleteTodoTask;

// Food added to the "Food to make" TODO Project

createTodoTask(
  getTodoProjects()[0].id,
  getTodoProjects(),
  'Chicken pot pie',
  'A southern favorite dinner-like pie',
  new Date().toDateString(),
  'LOW'
);

createTodoTask(
  getTodoProjects()[0].id,
  getTodoProjects(),
  'Stromboli',
  'A burrito like folded pizza',
  new Date().toDateString(),
  'MEDIUM'
);

// Games added to the "Games to play" TODO Project

createTodoTask(
  getTodoProjects()[1].id,
  getTodoProjects(),
  'Crash Bandicoot 1',
  'The first game in the Crash Bandicoot series for the PS1',
  new Date().toDateString(),
  'MEDIUM'
);

createTodoTask(
  getTodoProjects()[1].id,
  getTodoProjects(),
  'Ratchet & Clank: Rift Apart',
  'The most recent installment in the Ratcht & Clank series for PS5 and recently released on Steam!',
  new Date().toDateString(),
  'VERY HIGH'
);

createTodoTask(
  getTodoProjects()[1].id,
  getTodoProjects(),
  'Darksiders',
  'The first game in a series of games featuring the 4 horsemen of the apocalypse',
  new Date().toDateString(),
  'HIGH'
);

// Places to visit add to the "Places to visit" TODO Project

createTodoTask(
  getTodoProjects()[2].id,
  getTodoProjects(),
  'Paris, France',
  'The city of love and romance but also home to a bunch of underground tunnels decorated with bones!',
  new Date().toDateString(),
  'LOW'
);

createTodoTask(
  getTodoProjects()[2].id,
  getTodoProjects(),
  'Tokyo, Japan',
  'Home of everything anime and video game',
  new Date().toDateString(),
  'HIGH'
);

createTodoTask(
  getTodoProjects()[2].id,
  getTodoProjects(),
  'Orlando, Florida',
  'Disney Land! Or is it Disney World? I never remember!',
  new Date().toDateString(),
  'MEDIUM'
);

createTodoTask(
  getTodoProjects()[2].id,
  getTodoProjects(),
  'Austin, Texas',
  'Someone very important to me lives out this way... Only real reason',
  new Date().toDateString(),
  'VERY HIGH'
);

loadSidebar();
loadNavHamburgerMenu();
loadTodoTaskDisplay();
