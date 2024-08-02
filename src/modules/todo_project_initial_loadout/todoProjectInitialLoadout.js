// Import TODO Project functions
import {
  getOrSetTodoProjects,
  addTodoToArray as createTodoProject,
  projectUpdater,
} from '../todo_project_controllers/todoProjectController.js';

import { saveArrayToLocalStorage } from '../../utils/helpers.js';

// Import TODO Task functions
import { addTodoTaskToArray as createTodoTask } from '../todo_project_controllers/todoTaskController.js';

// Import date formatter to display dues dates more clearly
import { format } from 'date-fns';

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
      format(new Date(), 'LLL do, y'),
      'LOW'
    );

    createTodoTask(
      getOrSetTodoProjects().getCurrentTodoProjects()[0].id,
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Stromboli',
      'A burrito like folded pizza',
      format(new Date(), 'LLL do, y'),
      'MEDIUM'
    );

    // Games added to the "Games to play" TODO Project
    createTodoTask(
      getOrSetTodoProjects().getCurrentTodoProjects()[1].id,
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Crash Bandicoot 1',
      'The first game in the Crash Bandicoot series for the PS1',
      format(new Date(), 'LLL do, y'),
      'MEDIUM'
    );

    createTodoTask(
      getOrSetTodoProjects().getCurrentTodoProjects()[1].id,
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Ratchet & Clank: Rift Apart',
      'The most recent installment in the Ratcht & Clank series for PS5 and recently released on Steam!',
      format(new Date(), 'LLL do, y'),
      'VERY HIGH'
    );

    createTodoTask(
      getOrSetTodoProjects().getCurrentTodoProjects()[1].id,
      getOrSetTodoProjects().getCurrentTodoProjects(),
      'Darksiders',
      'The first game in a series of games featuring the 4 horsemen of the apocalypse',
      format(new Date(), 'LLL do, y'),
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
