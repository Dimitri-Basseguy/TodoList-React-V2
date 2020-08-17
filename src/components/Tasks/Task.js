// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// librairie pour asembler des noms de classes conditionnellement
import classNames from 'classNames';

// == Composant
const Task = ({ id, label, done }) => {
  const classCss = classNames('task', { 'task--done': done });

  return (
    <li className={classCss}>
      <input className="checkbox" type="checkbox" checked={done} />
      <label>{label}</label>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default Task;
