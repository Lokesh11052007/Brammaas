// src/components/ContactUs.jsx

import React from 'react';
import './ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Contactform =() =>{
 const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">GET IN TOUCH</h2>

      <div className="contact-content">
        <form className="contact-form"  onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-wrapper">
            <input type="text" placeholder="Enter Student Name " required />
            <span className="red-star2">*</span>
            </div>

              <div className="input-wrapper">
              <select required>
              <option value="">Select Class</option>
              <option>Pre-KG</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Grade 1</option>
              {/* Add more classes as needed */}
            </select>
            <span className="red-star1 star-select">*</span>

          </div>
          </div>

          <div className="form-row">
            <div className="input-wrapper">
            <input type="tel" placeholder="Enter Mobile Number " required />
            <span className="red-star">*</span>
            </div>
            <div className="input-wrapper">
            <input type="email" placeholder="Enter Email Id" />
          </div>
          </div>

          <div className="form-row">
            <textarea placeholder="Enter Your Message" rows="1"></textarea>
          </div>

          <div className="form-row">
            <button type="submit">Submit</button>
          </div>
        </form>

        <div className="contact-info">
          <p><FaPhoneAlt className="icon" /> +918045134590</p>
          <p><FaEnvelope className="icon" /> brammaascbse@gmail.com</p>
          <p><FaGlobe className="icon" /> https://brammaascbse.in</p>
          <p><FaMapMarkerAlt className="icon" /> 5/222, Railway Station Rd,<br />
            Gandhi Nagar, Gudiyatham,<br /> Tamil Nadu 632602</p>
        </div>
      </div>
    </div>
  );
};

export default Contactform;