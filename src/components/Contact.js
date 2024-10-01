import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container-fluid text-light" style={{ backgroundColor: 'black', height: '100vh' }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="contact-box bg-white text-center text-black p-4 rounded" style={{ border: '2px solid blue' }}>
          <h1 className="contact-title">CONTACT US</h1>
          <div className="mt-4">
            <p><i className="bi bi-envelope"></i> tishisakura@gmail.com</p>
            <p><i className="bi bi-whatsapp"></i> 081234567890</p>
            <p><i className="bi bi-instagram"></i> @tishisakura</p>
            <a className="btn btn-primary" href="https://wa.me/081234567890" role="button">Link ke WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
