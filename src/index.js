// Import CSS styles
import './style.css';
import './reset.css';

// Import TODO Project modals for adding new projects or tasks
import { loadTodoProjectModal } from './components/TodoProjectModal.js';
import { loadTodoTaskModal } from './components/TodoTaskModal.js';

// Import initial TODO Projects
import { loadInitialTodoProjects } from './modules/todo_project_initial_loadout/todoProjectInitialLoadout.js';

// Import TODO Projects displayers
import { loadSidebar } from './components/TodoProjectSidebar.js';
import { loadTodoTaskDisplay } from './components/TodoTaskDisplay.js';
import { loadNavHamburgerMenu } from './components/TodoProjectHamNavMenu.js';

// Load initital TODO projects as placeholders
loadInitialTodoProjects();

// Add TODO modal in the backgroun to be opened and closed
loadTodoProjectModal();
loadTodoTaskModal();

// Load TODO project menus
loadSidebar();
loadNavHamburgerMenu();
loadTodoTaskDisplay();

import { projectUpdater } from './modules/todo_project_controllers/todoProjectController.js';

window.projectUpdater = projectUpdater;

import { toggleTaskCompletion } from './modules/todo_project_updaters/todoProjectTaskComplete.js';

toggleTaskCompletion();
