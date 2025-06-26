import React from 'react';
import sportsDay from '../../assets/sportsday.png';
import graduationDay from '../../assets/graduationday.jpg';
import pongal from '../../assets/pongal.jpg';
import extra from '../../assets/extra.jpg';
import tour from '../../assets/tour.jpg';
import exhibitions from '../../assets/exhibitions.jpg';
import annual from '../../assets/annual.jpg';
import food from '../../assets/food.jpg';
import { useNavigate } from 'react-router-dom';

const galleryData = [
  { title: 'Sports day', img: sportsDay },
  { title: 'Graduation day', img: graduationDay },
  { title: 'Pongal Celebration', img: pongal },
  { title: 'Extra circular', img: extra },
  { title: 'Tour', img: tour },
  { title: 'Exhibitions', img: exhibitions },
  { title: 'Annual day', img: annual },
  { title: 'Food Feast', img: food }
];

const GalleryImage = () => {
  const navigate = useNavigate();
  const handleAnnual = () => navigate('/annual');

  return (
    <div className="text-center py-5" style={{ background: 'linear-gradient(to bottom right, #eec8ae, #f9f2f2, #efc9af)' }}>
      <h2 className="fw-bold mb-5 mt-4 fs-4 text-primary-emphasis">
        EVENTS PHOTO GALLERY
      </h2>

      <div className="container">
        <div className="row justify-content-center g-4">
          {galleryData.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div
                className="position-relative rounded overflow-hidden shadow w-100 gallery-card cursor-pointer"
                style={{ maxWidth: '250px', height: '220px' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ transition: 'transform 0.3s' }}
                />
                <div
                  className="position-absolute bottom-0 w-100 text-white fw-bold text-center py-2"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}
                  onClick={index === 6 ? handleAnnual : undefined}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-card {
          transition: transform 0.3s;
        }

        @media (max-width: 767px) {
          .gallery-card {
            max-width: 180px !important;
            height: 160px !important;
          }
          .gallery-card img {
            height: 100% !important;
            width: 100% !important;
          }
          .gallery-card div {
            font-size: 14px !important;
            padding: 6px 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryImage;
