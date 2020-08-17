// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Task = ({ id, label, done }) => {
  let classCss = 'task';
  if (done) {
    classCss += 'task--done';
  }

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
