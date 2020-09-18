// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './form.scss';

// == Composant
const Form = ({ addTask, value, setValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // event.target représente le form
    // console.log(event.target.childNodes[0].value);
    // le composant est controlé, à tout moment le state de App connait la valeur de l'input
    // (state) donc pas besoin d'envoyer d'infos supplémentaire ay submit
    addTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        className="input"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </form>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Form;
