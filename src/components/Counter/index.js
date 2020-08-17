// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './counter.scss';

const Counter = ({ nbTasks }) => {
  let text;
  if (nbTasks > 1) {
    text = `${nbTasks} tâches en cours`;
  }
  else {
    text = `${nbTasks} tâche en cours`;
  }

  return (
    <p className="counter">{text}</p>
  );
};

Counter.propTypes = {
  nbTasks: PropTypes.number.isRequired,
};

export default Counter;
