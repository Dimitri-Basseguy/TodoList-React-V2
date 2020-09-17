// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './form.scss';

// == Composant
const Form = ({ addTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // event.target représente le form
    // console.log(event.target.childNodes[0].value);
    console.log(event.target.childNodes[0].value);
    addTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        className="input"
      />
    </form>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Form;
