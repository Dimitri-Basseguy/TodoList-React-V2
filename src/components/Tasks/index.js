// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Task from './Task';
import './tasks.scss';

// == Composant
const Tasks = ( {tasks} ) => (
  <ul>
    {tasks.map((task) => (
      <Task
        key={task.id}
        // enveloppe -> deverse toutes les données du tableau task
        // si nouveau éléments les ajouter dans task.js !
        {...task}
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
};

export default Tasks;
