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

// Add TODO modal in the backgroun to be opened and closed
loadTodoProjectModal();
loadTodoTaskModal();

loadInitialTodoProjects();

loadSidebar();
loadNavHamburgerMenu();
loadTodoTaskDisplay();
