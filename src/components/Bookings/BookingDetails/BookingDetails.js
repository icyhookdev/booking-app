import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRental } from '../../../actions';
import classes from './BookingDetails.module.scss';

class BookingDetails extends Component {
  componentDidMount() {
    this.props.getRental(this.props.match.params.id);
  }

  displayBookingDetails = () => {
    const { rental } = this.props;
    if (!rental) {
      return <h1>Loding...</h1>;
    }

    return (
      <div className={classes.booking}>
        <div className={classes.booking__show}>
          <div className={classes.img}>
            <img src={rental.image} alt="not found" />
          </div>
          <div className={classes.location}>
            <img src={rental.image} alt="not found" />
          </div>
        </div>
        <div className={classes.booking__details}>
          <h2 className={classes.details__title}>{rental.title}</h2>
          <p className={classes.details__city}>{rental.city}</p>
          <ul className={classes.details__room}>
            <li>{rental.bedrooms} bedrooms</li>
            <li>{rental.bedrooms * 3} guests</li>
            <li>{rental.bedrooms * 2} beds</li>
          </ul>
          <p className={classes.details__description}>{rental.description}</p>
        </div>
      </div>
    );
  };

  render() {
    console.log(this.props);
    return this.displayBookingDetails();
  }
}

const mapStateToProps = ({ rentalReducer }) => ({
  rental: rentalReducer.rental
});

export default connect(
  mapStateToProps,
  { getRental }
)(BookingDetails);
