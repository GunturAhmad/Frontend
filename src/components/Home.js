import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container-fluid text-light home-container">
      <div className="row text-center align-items-center mt-3">
        <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/img/japan.jpg" className="d-block w-100" alt="Japan" />
              <div className="carousel-caption d-none d-md-block">
                <h5>JAPAN</h5>
                <p>LET US TRAVEL TO THE COUNTRY OF THE SUN, A CONSTITUTIONAL MONARCHY COUNTRY WITH AN EMPEROR AS HEAD OF STATE.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/singapura.jpg" className="d-block w-100" alt="France" />
              <div className="carousel-caption d-none d-md-block">
                <h5>SINGAPORE</h5>
                <p>DISCOVER THE BEAUTY OF SINGAPORE, A MODERN CITY-STATE KNOWN FOR ITS CULTURAL DIVERSITY, LUXURIOUS SHOPPING DISTRICTS, AND VIBRANT NIGHTLIFE.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/img/bromo.jpg" className="d-block w-100" alt="Indonesia" />
              <div className="carousel-caption d-none d-md-block">
                <h5>INDONESIA</h5>
                <p>DISCOVER THE RICH CULTURE AND STUNNING LANDSCAPES IN INDONESIA.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-12 mt-5">
          <img src="/img/logo_tst.jpg" alt="Logo" className="logo-image" />
          <h3 className="mt-2">TISHISAKURA TOUR</h3>
          <i>More than <span className="highlight">20 years</span> of experience throughout the world and throughout Indonesia</i>
        </div>
      </div>
      <div className="row text-black mt-5">
        <div className="col-sm-4 g-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Tour With Us</h5>
              <p className="card-text">Hi, We are ready to serve you, and invite you to travel throughout Indonesia and abroad.</p>
              <Link to="/contact" className="btn btn-dark d-block">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4 g-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Best Tour Packages</h5>
              <p className="card-text">There are various types of the best tour packages & selected tours to explore Indonesia</p>
              <Link to="/booking" className="btn btn-dark d-block">Check Package Costs</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4 g-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">Continue to monitor us on every social media and provide your reviews and feedback.</p>
              <Link to="/about" className="btn btn-dark d-block">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;