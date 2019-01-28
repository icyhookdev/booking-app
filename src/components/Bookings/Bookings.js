import React from 'react';
import { connect } from 'react-redux';

import { getRentals } from '../../actions';
import classes from './Bookings.module.scss';
import RentalBookings from './RentalBookings/RentalBookings';
import Card from '../Card/Card';

class Booking extends React.Component {
  componentDidMount() {
    this.props.getRentals();
  }

  renderBookingList = ({ rental }) => {
    if (!rental.rentals) {
      setTimeout(() => {
        return <h1>Loading</h1>;
      }, 3000);
    }

    return rental.rentals.map(({ title, city, image, dailyRate, _id }) => {
      return (
        <Card
          key={_id}
          id={_id}
          title={title}
          city={city}
          img={image}
          price={dailyRate}
        />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Best price Around the world!</h1>
        <div className={classes.booking}>
          <RentalBookings
            displayRentals={() => this.renderBookingList(this.props)}
          />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ rentalReducer }) => ({
  rental: rentalReducer
});

export default connect(
  mapStateToProps,
  { getRentals }
)(Booking);
