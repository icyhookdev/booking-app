import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Card.module.scss';

export default ({ title, city, img, price, id }) => (
  <Link className={classes.link__card} to={`/booking/${id}`}>
    <div className={classes.card}>
      <div className={classes.card__image}>
        <img src={img} alt="not load" />
      </div>
      <div className={classes.card__info}>
        <p className={classes.location}>
          <span>whole apartment</span>-<span>{city}</span>
        </p>
        <h2 className={classes.title}>{title}</h2>

        <p className={classes.price}>${price} per Night</p>
      </div>
    </div>
  </Link>
);
