// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Task from './Task';
import './tasks.scss';

// == Composant
const Tasks = ({ tasks, setDone }) => (
  <ul>
    {tasks.map((task) => (
      <Task
        key={task.id}
        // enveloppe -> déverse toutes les données de la task
        // si nouveau éléments les ajouter dans task.js !
        {...task}
        setDone={setDone}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  // tasks: PropTypes.array.isRequired, (pas préci)
  // tasks: PropTypes.arrayOf(PropTypes.object).isRequired, (plus préci)
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  setDone: PropTypes.func.isRequired,
};

export default Tasks;
