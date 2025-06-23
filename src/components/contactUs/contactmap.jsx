import React from 'react';
import './ContactUs.css';

const Contactmap = () => {
  return (
    <div className="map-container">
      <div className="map-overlay">
        <a
          href="https://www.google.com/maps/place/BRAMMAAS+VIDHYALAYA+CBSE+SENIOR+SECONDARY+RESIDENTIAL+SCHOOL/@12.9377755,78.9085187,20z/data=!4m6!3m5!1s0x3bad6cb51f7ee3e3:0x1dd5ded4a5427c14!8m2!3d12.9376696!4d78.9088433!16s%2Fg%2F11c5s64hn1?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          <div>
            5/222, Railway Station, Gandhi Nagar,<br />
            Gudiyatham, Tamil Nadu 632602
          </div>
          <button type="button">View large map</button>
        </a>
      </div>

      <iframe
        title="School Location"
        src="https://www.google.com/maps?q=5/222,+Railway+Station+Rd,+Gandhi+Nagar,+Gudiyatham,+Tamil+Nadu+632602&output=embed"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contactmap;
