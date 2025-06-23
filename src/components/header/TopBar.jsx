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
              <a href="mailto:principle@brammasschool.com" className="text-decoration-none text-white">
                <FaEnvelope className="me-2" />
                <span>principle@brammasschool.com</span>
              </a>

            </div>
            <div className="vr d-none d-md-block" />
            <div className="d-flex align-items-center">
              <a href="tel:+9566795556" className="text-decoration-none text-white">
                <FaPhone className="me-2" style={{ transform: 'rotate(90deg)' }} />
                <span>+91 95667 95556</span> </a>&nbsp;  / &nbsp;
              <a href="tel:+9195667955566" className="text-decoration-none text-white"> 
                <span> +91 95667 955566</span>
              </a>
            </div>
          </div>

          {/* Right: Social icons and payment */}
          <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-end align-items-center gap-3 flex-wrap">
            <a href="https://www.facebook.com/BRAMMAASVIDHYALAYACBSESCHOOL" className="text-decoration-none text-white"><FaFacebookF /></a>
            <a href="#h" className='text-decoration-none text-white'><FaInstagram /></a>
            <a href="#f" className='text-decoration-none text-white'><FaTwitter /></a>
            <a href="https://youtube.com/@brammaasvidhyalayaseniorse7601?si=RbkrgW2SUTwCHIz7" className='text-decoration-none text-white'><FaYoutube /></a>
            <a href="mailto:principle@brammasschool.com" className='text-decoration-none text-white'><FaEnvelope /> </a>
            <a href="tel:+9566795556" className='text-decoration-none text-white'><FaPhone style={{ transform: 'rotate(90deg)' }}/> </a>
            <span className="border-start ps-3 ms-2">Online Payment</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopBar;
