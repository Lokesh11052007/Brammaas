import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../../App.css';

function TopBar() {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container-fluid px-4">
        <div className="row align-items-center">

          {/* Left: Email and Phone */}
          <div className="col-12 col-md d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mb-2 mb-md-0">
            <div className="d-flex align-items-center">
              <FaEnvelope className="me-2" />
              <span>principle@bramaasschool.com</span>
            </div>
            <div className="vr d-none d-md-block" />
            <div className="d-flex align-items-center">
              <FaPhone className="me-2" style={{ transform: 'rotate(90deg)' }}/>
              <span>+95667 95556 / +95667 955566</span>
            </div>
          </div>

          {/* Right: Social icons and payment */}
          <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-end align-items-center gap-3 flex-wrap">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
            <FaEnvelope />
            <FaPhone style={{ transform: 'rotate(90deg)' }}/>
            <span className="border-start ps-3 ms-2">Online Payment</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopBar;
