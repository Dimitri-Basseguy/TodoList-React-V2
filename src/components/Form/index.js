// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './form.scss';

// == Composant
const Form = () => (
  <form className="form-addTask">
    <input
      type="text"
      placeholder="Ajouter une tâche"
      className="input"
    />
  </form>
);

Form.propTypes = {

};

export default Form;
