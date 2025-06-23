import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

// Sample gallery items
const galleryItems = [
  { title: "Sports day", image: require("../../assets/sports day.jpg") },
  // { title: "", image: require("../../assets/sport 1.jpg") },
  { title: "Graduation day", image: require("../../assets/graduation.jpg") },
  // { title: "", image: require("../../assets/graduation.jpg") },
  { title: "Extra circular", image: require("../../assets/extra.webp") },
  { title: "Tour", image: require("../../assets/Schooltours.png") },
  { title: "Virtual Reality", image: require("../../assets/tour 1.jpg") },
  { title: "Exhibitions", image: require("../../assets/graduation.jpg") },
  { title: "Annual day", image: require("../../assets/anual day.jpg") },
  { title: "Dance Program", image: require("../../assets/annual 2.jpg") },
];

const Gallery = () => {
  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate('/gallery')
  }
  return (
    <div className="py-5 mt-5 mb-4 "
     style={{
    background:' #FFF3E2E5'
  }}>
      <h2 className="text-center fw-bold mb-4">GALLERY</h2>
      <div className="container">
        <div className="row g-4">
          {galleryItems.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 position-relative" key={index}>
              <div className="card h-100 border-0 shadow-sm  overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title || `Gallery image ${index + 1}`}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "200px" }}
                />
              {item.title && (
    <div
      className="position-absolute w-100 text-white text-center py-2"
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        fontSize: '1rem',
        fontWeight: '600',
        bottom:0
      }}
    >
      {item.title}
  </div>
)}

              </div>
            </div>
          ))}
        </div>

        <div className="text-end mt-4">
          <button className="btn btn-outline-primary  fw-bold px-4 py-2 rounded-pill " onClick={handleViewAll}>
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
