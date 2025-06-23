import React from "react";
import bannerBg from "../../assets/RS_SCHOOL.jpg";
import { Link } from "react-router-dom";
const InfrastructureBanner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
        position: "relative",
      }}
    >
      {/* Optional dark overlay for better text visibility */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="position-relative container"
        style={{ zIndex: 2 }}
      >
        <h1 className="fw-bold display-5">INFRASTRUCTURE</h1>
       <nav aria-label="breadcrumb" >
          <ol className="breadcrumb mb-0 fw-medium fs-5">
            <li className="breadcrumb-item">
              <Link to="/" className="text-white text-decoration-none fw-semibold">
                Home
              </Link>
            </li>
            <i className="bi bi-chevron-right mx-2 text-white"></i>
            <li className="breadcrumb-item active text-white" aria-current="page">
              Infrastructure
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default InfrastructureBanner;
