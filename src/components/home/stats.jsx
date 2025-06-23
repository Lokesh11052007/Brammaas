import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserFriends, FaUserCog, FaUsers, FaCheckCircle } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <div className="container-fluid py-5"
     style={{
    background: "linear-gradient(to right, #000863,#FF9500D9,#FF9500B2)",
    
  }}>
      <div className="row text-center g-4">
        {/* Happy Students */}
        <div className="col-12 col-sm-6 col-md-3">
          <FaUserFriends className="text-primary display-4 mb-3" />
          <h2 className="fw-bold">1000+</h2>
          <p>Happy Students</p>
        </div>

        {/* 13 Years */}
        <div className="col-12 col-sm-6 col-md-3">
          <FaUserCog className="text-success display-4 mb-3" />
          <h2 className="fw-bold">13 Years</h2>
          <p>of Industry Leadership</p>
        </div>

        {/* 7 Years */}
        <div className="col-12 col-sm-6 col-md-3">
          <FaUsers className="text-info display-4 mb-3" />
          <h2 className="fw-bold">7 Years</h2>
          <p>of Industry Leadership</p>
        </div>

        {/* 100% Result */}
        <div className="col-12 col-sm-6 col-md-3">
          <FaCheckCircle className="text-warning display-4 mb-3" />
          <h2 className="fw-bold">100% Result</h2>
          <p>Academic Excellence</p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
