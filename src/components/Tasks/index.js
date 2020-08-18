// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import Task from './Task';
import './tasks.scss';

// == Composant
const Tasks = () => (
  <ul>
    <Task id={1} label="Do somethings" done />
    <Task id={2} label="Do nothings" done={false} />
  </ul>
);

Tasks.propTypes = {

};

export default Tasks;
