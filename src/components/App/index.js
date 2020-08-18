// == Import npm
import React from 'react';

// == Import
import Counter from 'src/components/Counter';
import Form from 'src/components/Form';
import Tasks from 'src/components/Tasks';
import './app.scss';

// == Composant
const App = () => (
  // <h1>Simple Todo-List React</h1>
  <div className="todo">
    <Form />
    <Counter nbTasks={2} />
    <Tasks />
  </div>
);

// == Export
export default App;
