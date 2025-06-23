import React from 'react';
import schoolImage from '../../assets/playschool.jpg'; // Ensure correct path
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const AboutSchool = () => {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate('/AboutUs')
  }
  return (
    <section className=" bg-light mb-0">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* Image Section */}
          <div className="col-12 col-md-6">
            <img
              src={schoolImage}
              alt="School Building"
              className="img-fluid rounded shadow mt-4 ml-3"
            />
          </div>

          {/* Text Content Section */}
          <div className="col-12 col-md-6">
            <h2 className="fw-bold pr mb-3" style={{color:'#000863', fontSize:'70px'}}>About Our School</h2>
            <h4 className="mb-3">
              Brammaas Vidhyalaya CBSE Senior Secondary School
            </h4>
            <p className="mb-4">
              A monolith and dynamic academic institution was started by Ln. R. P. Senthil,
              who has come a long way in pioneering what he is today with the Brammaas
              Group of Schools. Known for its extraordinary education quality and holistic
              development, hailing from the coastal town…
            </p>
            <button className="btn  btn-outline-primary mt-5" 
            onClick={handleViewAll}>
              Read more <span className="ms-1">&#10140;</span>
            </button>
          </div>
        </div>
      </div>
      <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ba48b900aaeaf0506a33fcaf297b4400147b2a5?placeholderIfAbsent=true&apiKey=e21b74e9a59543a1829d05a9e69daf64"
          className="img-fluid w-100 mt-4  shadow-sm " 
          alt=""
        />
    </section>
  );
};

export default AboutSchool;
