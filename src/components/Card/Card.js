import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.module.scss';

export default props => (
  <div className={classes.card}>
    <div className={classes.card__image}>
      <img src="https://via.placeholder.com/350" alt="not load" />
    </div>
    <div className={classes.card__info}>
      <h2 className={classes.title}>Full Apartment</h2>
      <p className={classes.location}>
        <span>whole apartment</span>-<span>New york</span>
      </p>

      <p className={classes.price}>$240 per Night</p>
      <Link to="/">More info</Link>
    </div>
  </div>
);
