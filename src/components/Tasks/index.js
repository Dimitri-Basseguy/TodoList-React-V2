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
      <Task key={task.id} id={task.id} label={task.label} done={task.done} />
    ))}
  </ul>
);

Tasks.propTypes = {
  // tasks: PropTypes.array.isRequired, (pas préci)
  // tasks: PropTypes.arrayOf(PropTypes.object).isRequired, (plus préci)
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Tasks;
