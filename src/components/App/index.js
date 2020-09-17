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

  const date = new Date();

  return (
    <div>
      <img src="https://img.icons8.com/clouds/2x/todo-list.png" alt="logo" />
      <div className="todo">
        <header className="bg-header">
          <h1>Liste de tâches</h1>
          <p className="bg-header__date">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
          <Counter nbTasks={nbTasksNotDone} />
        </header>
        <div className="container">
          <Form addTask={addTask} />
          <Tasks tasks={initialTasks} />
        </div>
        <footer className="footer">
          <img src="https://dimitri-basseguy.github.io/assets/img/portrait-web.jpg" alt="me" />
          <p>Made by <a href="https://dimitri-basseguy.github.io" target="_blank" rel="noopener noreferrer">Dimitri Basseguy</a></p>
        </footer>
      </div>
    </div>
  );
};

// == Export
export default App;
