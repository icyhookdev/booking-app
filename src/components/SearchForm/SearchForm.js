import React from 'react';
import classes from './SearchForm.module.scss';

export default props => (
  <form className={classes.search}>
    <input
      className={classes.search__input}
      type="text"
      name="booking"
      placeholder="City ex. New York"
      autoComplete="off"
    />
    <button className={classes.search__btn}>
      <div className={classes.search__icon} />
    </button>
  </form>
);
