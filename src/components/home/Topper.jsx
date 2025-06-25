import React from "react";
import { useNavigate } from "react-router-dom";
import ribbon from "../../assets/ribbon.png";

const toppers = [
  {
    name: "K.RamyaSree",
    grade: "XII CBSE",
    profession: "SOFTWARE ENGINEER",
    image: require("../../assets/topper1.jpg"),
  },
  {
    name: "priyanka",
    grade: "XII CBSE",
    profession: "MBBS Doctor",
    image: require("../../assets/topper2.jpg"),
  },
  {
    name: "M.hanshika",
    grade: "XII CBSE",
    profession: "IAS",
    image: require("../../assets/topper3.jpg"),
  },
];

const Toppers = () => {
  const navigate = useNavigate(); // 👈 initialize navigate

  const handleViewAll = () => {
    navigate("/topper"); // 👈 replace with your target route
  };
  return (
    <>
    <div className="container-fluid py-3 mt-5" style={{ overflowX: 'hidden',  background: 'linear-gradient(to right,90deg, #FFEAC8 0%, rgba(255, 243, 226, 0.85) 50%, rgba(255, 234, 200, 0.7) 100%)' }}>
  <h2 className="course-h4 mb-4 text-left mt-4 fw-bold ms-lg-5 py-3 px-2" style={{ color: '#000863' }}>
    OUR TOPPERS
  </h2>

  <div className="container">
    <div className="toppers-container d-flex flex-column flex-lg-row justify-content-center align-items-center flex-wrap" style={{gap: '70px'}}>
      {toppers.map((topper, index) => (
        <div className="topper-card text-center" key={index}>
          <div className="topper-image-wrapper position-relative">
            <img
              src={topper.image}
              alt="Topper"
              className="topper-image img-fluid rounded-circle"
              style={{ height: '300px', width: '300px', objectFit: 'cover' }}
            />
            <div
              className="score-badge d-flex flex-column align-items-center justify-content-center"
              style={{ position: 'absolute' }}
            >
              <img
                src={require("../../assets/score.png")}
                alt="Score Badge"
                className="score-badge-img"
              />
              <div className="score-text text-white">
                <span className="score-part">470</span>
                <span className="divider"></span>
                <span className="score-part">500</span>
              </div>
            </div>
          </div>
          <div className="ribbon-wrapper mt-3">
            <img src={ribbon} alt="Ribbon" className="ribbon-img" />
            <div className="ribbon-text">
              <p className="mb-0">{topper.grade}</p>
              <p className="mb-0">{topper.name}</p>
              <p className="mb-0">{topper.profession}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-end mt-3 mb-5 px-4">
      <button
        className="btn btn-outline-primary fw-bold px-4 py-2 rounded-pill"
        onClick={handleViewAll}
      >
        View All
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Toppers;
