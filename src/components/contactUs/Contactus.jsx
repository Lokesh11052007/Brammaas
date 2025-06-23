import React from 'react';
import './ContactUs.css';

import Contactform from './contactform.jsx';
import Contactmap from './contactmap.jsx';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <>
      <section className="school">
        <div>
          <h1>CONTACT US</h1>
          <p><Link to={'/'} className="text-white text-decoration-none fw-semibold">Home</Link> &gt; Contact us</p>
        </div>
      </section>
      <Contactform/>
      <Contactmap/>
    </>
  );
}

export default ContactUs;