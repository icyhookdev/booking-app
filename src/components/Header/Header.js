import React from 'react';
import classes from './Header.module.scss';
import SearchForm from '../SearchForm/SearchForm';

export default props => {
  return (
    <header className={classes.Header}>
      <h2>Booking App</h2>
      <SearchForm />
    </header>
  );
};
