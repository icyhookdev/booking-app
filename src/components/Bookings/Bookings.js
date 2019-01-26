import React from 'react';

import classes from './Bookings.module.scss';
import RentalBookings from './RentalBookings/RentalBookings';

export default class Booking extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Best price Around the world!</h1>
        <div className={classes.booking}>
          <RentalBookings />
        </div>
      </React.Fragment>
    );
  }
}
