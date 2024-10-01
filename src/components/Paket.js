import React from 'react';
import './Paket.css';

function Paket() {
  return (
    <div className="container-fluid paket-container text-light">
      <div className="row justify-content-center">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card paket-card">
              <img src="/img/bali.jpg" className="card-img-top" alt="Paket Tour Bali" />
              <div className="card-body">
                <h5 className="card-title">Paket Tour Bali</h5>
                <p className="card-text">Enjoy a trip with us at a very affordable cost and be able to enjoy the beauty of the Island of the Gods, Bali.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paket;
