import React from 'react';
import './Contact.scss';

function Contact() {
  return (
    <section className="contact" id="contact">
        <h2>Contact</h2>
        <div className="contact-wrapper">
          <div className="management">
            <h3>Management</h3>
            <p>Squared Agency
              <br/>Mylène Berghs
              <br/>mylene@squared-agency.com
              <br/>+31 (0)6 25 478 947
            </p>
          </div>
          <div className="bookings">
            <h3>Bookings</h3>
            <p>Radar Agency
              <br/>Ties Timmers
              <br/>ties@radar-agency.com
              <br/>+31 (0)20 2 333 697
            </p>
          </div>
          <div className="label">
            <h3>Label</h3>
            <p>V2 Records
              <br/>Jelle Stavasius
              <br/>jelle.stavasius@v2benelux.com
              <br/>+31 (0)35 6 461 238
            </p>
          </div>
        </div>
    </section>
  )
}

export default Contact;