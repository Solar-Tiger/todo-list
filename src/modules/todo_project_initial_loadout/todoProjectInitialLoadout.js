// Import TODO Project functions
import {
  getOrSetTodoProjects,
  addTodoToArray as createTodoProject,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController.js';

import { saveArrayToLocalStorage } from '../../utils/helpers.js';

// Import TODO Task functions
import { addTodoTaskToArray as createTodoTask } from '../todo_project_controllers/todoTaskController.js';

function loadInitialTodoProjects() {
  if (localStorage.getItem('todoProjects') === null) {
    // Initial TODO Projects
    createTodoProject(
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Food to make'
    );

    createTodoProject(
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Games to play'
    );

    // Make sure by default the first project selected is loaded
    projectUpdater.updateCurrentDisplayedProject(0);

    // Food added to the "Food to make" TODO Project
    createTodoTask(
      getOrSetTodoProjects().getCurrentTodoProjects()[0].id,
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Chicken pot pie',
      'A southern favorite dinner-like pie',
      new Date().toDateString(),
      'LOW'
    );

    createTodoTask(
      getOrSetTodoProjects().getCurrentTodoProjects()[0].id,
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Stromboli',
      'A burrito like folded pizza',
      new Date().toDateString(),
      'MEDIUM'
    );

    // Games added to the "Games to play" TODO Project
    createTodoTask(
      getOrSetTodoProjects().getCurrentTodoProjects()[1].id,
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Crash Bandicoot 1',
      'The first game in the Crash Bandicoot series for the PS1',
      new Date().toDateString(),
      'MEDIUM'
    );

    createTodoTask(
      getOrSetTodoProjects().getCurrentTodoProjects()[1].id,
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Ratchet & Clank: Rift Apart',
      'The most recent installment in the Ratcht & Clank series for PS5 and recently released on Steam!',
      new Date().toDateString(),
      'VERY HIGH'
    );

    createTodoTask(
      getOrSetTodoProjects().getCurrentTodoProjects()[1].id,
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Darksiders',
      'The first game in a series of games featuring the 4 horsemen of the apocalypse',
      new Date().toDateString(),
      'HIGH'
    );

    saveArrayToLocalStorage(
      'todoProjects',
      getOrSetTodoProjects().getCurrentTodoProjects()
    );
  } else {
    console.log(localStorage.getItem('todoProjects') === null);

    getOrSetTodoProjects().setNewTodoProjects(
      JSON.parse(localStorage.getItem('todoProjects'))
    );
  }
}

export { loadInitialTodoProjects };
