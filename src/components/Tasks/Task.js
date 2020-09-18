// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// librairie pour asembler des noms de classes conditionnellement
import classNames from 'classnames';

// == Composant
const Task = ({
  id,
  label,
  done,
  setDone,
}) => {
  // en utilisant la librairie classnames
  const classCss = classNames('task', { 'task--done': done });
  const checkboxId = `checkbox-${id}`;

  const handleChange = (event) => {
    setDone(id, event.target.checked);
  };

  return (
    <li className={classCss}>
      <input
        className="checkbox"
        type="checkbox"
        checked={done}
        id={checkboxId}
        onChange={handleChange}
      />
      <label htmlFor={checkboxId}>{label}</label>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool,
  setDone: PropTypes.func.isRequired,
};

Task.defaultProps = {
  done: false,
};

export default Task;
