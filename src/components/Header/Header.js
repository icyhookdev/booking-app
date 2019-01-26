import React from 'react';
import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

export default props => {
  return (
    <header className={classes.Header}>
      <h2>Booking place</h2>
      <SearchForm />
      <nav className={classes.navbar}>
        <ul className={classes.navbar__items}>
          <li className={classes.navbar__item}>
            <NavLink
              activeClassName={classes.active}
              className={classes.navbar__link}
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li className={classes.navbar__item}>
            <NavLink
              activeClassName={classes.active}
              className={classes.navbar__link}
              to="/signUp"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
