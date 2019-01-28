import React, { Fragment } from 'react';

const RentalBookings = ({ displayRentals }) => {
  return <Fragment>{displayRentals()}</Fragment>;
};

export default RentalBookings;
