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

  const addTask = () => {
    console.log('ajout d\'une tâche');
  };

  return (
    <div className="todo">
      <h1 className="bg-header">Liste de tâches</h1>
      <Form addTask={addTask} />
      <Counter nbTasks={nbTasksNotDone} />
      <Tasks tasks={initialTasks} />
      <footer className="footer">
        <img src="https://dimitri-basseguy.github.io/assets/img/portrait-web.jpg" alt="me" />
        <p>Made by <a href="https://dimitri-basseguy.github.io" target="_blank" rel="noopener noreferrer">Dimitri Basseguy</a></p>
      </footer>
    </div>
  );
};

// == Export
export default App;
