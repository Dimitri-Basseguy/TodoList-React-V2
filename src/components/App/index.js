// == Import npm
import React from 'react';

// == Import
import Counter from 'src/components/Counter';
import Form from 'src/components/Form';
import Tasks from 'src/components/Tasks';

// import des données
import initialTasks from 'src/data/tasks';

import './app.scss';

// == Composant
const App = () => {
  // on crée un tableau avec seulement les tâches non terminées
  const tasksNotDone = initialTasks.filter((task) => !task.done);
  // On retourne true si on veut conserver l'élément, false sinon
  // return task.done === false; NOT task.done => négation

  // nombre de tâches non terminées
  const nbTasksNotDone = tasksNotDone.length;
  // Version racourcie
  // const nbTasksNotDone = initialTasks.filter((task) => !task.done).length;

  return (
    <div className="todo">
      <Form />
      <Counter nbTasks={nbTasksNotDone} />
      <Tasks tasks={initialTasks} />
    </div>
  );
};

// == Export
export default App;
