import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', class: '', phone: '' });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const renderStar = (field) =>
    form[field].trim() === '' && (
      <span className="text-danger position-absolute end-0 pe-3 top-50 translate-middle-y" style={{ fontSize: '20px', pointerEvents: 'none' }}>
        *
      </span>
    );
      const handleCall = () => {
    window.location.href = 'tel:+91 8045134590';
  };

  const handleEmail = () => {
    window.location.href = 'brammaascbse@gmail.com<';
  };

  const handleExternalLink = () => {
    window.open('https://brammaascbse.in', '_blank');
  };

  return (
    <div className="container py-5 bg-white" style={{ fontFamily: 'Poppins, sans-serif', overflowX: 'hidden' }}>
      <h2 className="mb-4 fw-bold text-center text-lg-start" style={{ color: '#0a1d5d', fontSize: '28px' }}>
        GET IN TOUCH
      </h2>

      <div className="row gy-4 gx-5">
        {/* Contact Form */}
        <div className="col-12 col-lg-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted!');
            }}
            className="d-flex flex-column gap-4"
          >
            <div className="row g-4">
              {['name', 'class'].map((field) => (
                <div key={field} className="col-12 col-md-6 position-relative">
                  {field === 'class' ? (
                    <select
                      name="class"
                      required
                      value={form.class}
                      onChange={handleChange}
                      className="form-select shadow-sm"
                    >
                      <option value="">Select Class</option>
                      <option>Pre-KG</option>
                      <option>LKG</option>
                      <option>UKG</option>
                      <option>Grade 1</option>
                    </select>
                  ) : (
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter Student Name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="form-control shadow-sm"
                    />
                  )}
                  {renderStar(field)}
                </div>
              ))}
            </div>

            <div className="row g-4">
              <div className="col-12 col-md-6 position-relative">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Enter Mobile Number"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="form-control shadow-sm"
                />
                {renderStar('phone')}
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className="form-control shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="row g-4 align-items-end">
              <div className="col-12 col-md-6">
                <textarea
                  className="form-control shadow-sm"
                  placeholder="Enter Your Message"
                  rows="1"
                  style={{ height: '40px', resize: 'none' }}
                ></textarea>
              </div>
              <div className="col-12 col-md-6">
                <div className="d-flex justify-content-md-end justify-content-center pt-2">
                  <button
                    type="submit"
                    className="btn text-white shadow-sm"
                    style={{
                      backgroundColor: 'orange',
                      padding: '5px 45px',
                      margin:'0 90px',
                      fontSize: '14px',
                      borderRadius: '4px',
                      border: 'none',
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="col-12 col-lg-4 text-dark d-flex flex-column gap-3" style={{ fontSize: '15px' }}>
          <p onClick={handleCall}>
            <FaPhoneAlt className="text-warning me-2" /> +91 8045134590
          </p>
          <p onClick={handleEmail}>
            <FaEnvelope className="text-warning me-2" /> brammaascbse@gmail.com
          </p>
          <p onClick={handleExternalLink}>
            <FaGlobe className="text-warning me-2" /> https://brammaascbse.in
          </p>
          <p>
            <FaMapMarkerAlt className="text-warning me-2" /> 5/222, Railway Station Rd,<br />
            Gandhi Nagar, Gudiyatham,<br />
            Tamil Nadu 632602
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
