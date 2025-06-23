import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './HeroSection.css'; // Optional: For background styling

const HeroSection = () => {
  return (
    <div className="hero-section position-relative text-white">
      {/* Hero Content */}
      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center px-3 py-5">
        <h1 className="fw-bold display-5 text-uppercase mb-2">
          BRAMMAAS VIDHYALAYA CBSE
        </h1>
        <h2 className="fw-semibold h4 mb-4 text-uppercase">
          Senior Secondary School
        </h2>

        {/* Buttons */}
        <div className="d-flex gap-3 mt-3 flex-wrap justify-content-center">
          <button className="btn btn-warning fw-bold px-4 py-2">
            Admission Open 2025–2026 <span className="ms-2">&#8594;</span>
          </button>
          <button className="btn btn-light fw-bold text-primary px-4 py-2">
            Today’s Update <span className="ms-2">&#8594;</span>
          </button>
        </div>
      </div>

      {/* Bottom Strip / Marquee */}
      <div className="position-absolute bottom-0 w-100 bg-warning text-dark py-2 px-3 overflow-hidden">
  <div className="scroll-container">
    <div className="scroll-text">
      Admissions Open 2025 - 2026 | Contact us Today &nbsp;&nbsp;&nbsp;&nbsp;
      Merit Scholarship Assessment Test For 2025–2026 – Duration 1hr &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>
</div>





    </div>
  );
};

export default HeroSection;
