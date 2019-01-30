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
          <div className={classes.booking__img}>
            <img src={rental.image} alt="not found" />
          </div>
          <div className={classes.booking__location} />
        </div>
        <div className={classes.booking__details} />
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
