import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';

function Booking() {
  return (
    <div className="container-fluid booking-container text-light">
      <div className="row justify-content-center">
        <div className="card booking-card mx-4 mb-5">
          <img src="/img/hotel.jpg" className="card-img-top" alt="Hotel" />
          <div className="card-body">
            <h5 className="card-title">Hotel & Villa Booking</h5>
            <p className="card-text">Book hotels & villas with us to get cheap and easy prices without reducing your comfort and enjoyment.</p>
            <a href="https://wa.me/081234567890" className="btn btn-dark">Villa</a>
            <a href="https://wa.me/081234567890" className="btn btn-dark">Hotel</a>
          </div>
        </div>
        <div className="card booking-card mx-4 mb-5">
          <img src="/img/tiket.jpg" className="card-img-top" alt="Cruise" />
          <div className="card-body">
            <h5 className="card-title">Cruise Booking and Tickets</h5>
            <p className="card-text">Order tickets in an easy and fast way for plane tickets, ship tickets, and also tickets to the tourist attractions you want.</p>
            <Link to="/driver-guide-profile" className="btn btn-dark">Cruise</Link>
            <a href="https://wa.me/081234567890" className="btn btn-dark">Tickets</a>
          </div>
        </div>
        <div className="card booking-card mx-4 mb-5">
          <img src="/img/transport.jpg" className="card-img-top" alt="Transport" />
          <div className="card-body">
            <h5 className="card-title">Transportation Booking</h5>
            <p className="card-text">Serves other transportation rentals that will make your trip easier. Key removal service available or with a professional driver.</p>
            <Link to="/bus-schedule" className="btn btn-dark">Bus</Link>
            <Link to="/car-schedule" className="btn btn-dark">Car</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
