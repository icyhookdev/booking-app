import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Booking from './components/Bookings/Bookings';
import BookingDetails from './components/Bookings/BookingDetails/BookingDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact component={Booking} />
            <Route path="/login" />
            <Route path="/register" />
            <Route path="/booking/:id" component={BookingDetails} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
