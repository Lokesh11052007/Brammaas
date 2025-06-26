import React from 'react';

import waveImage from '../../assets/Line 35.png';
import paperplane from '../../assets/paperplane.png';
import Jet from '../../assets/plane.png';
import KidsEating from '../../assets/img1.png';
import Labs from '../../assets/img2.png';
import School from '../../assets/img3.png';
import Meeting from '../../assets/img4.png';
import Sports from '../../assets/img5.png';
import Teaching from '../../assets/img6.png';
import Coach from '../../assets/img7.png';

const Banners = () => {
  const features = [
    { img: KidsEating, text: 'Activity Based Learning' },
    { img: Labs, text: 'Well Equipped Labs & <br />Classrooms' },
    { img: School, text: 'Excellent Environment' },
    { img: Meeting, text: 'Individual Attention' },
    { img: Sports, text: 'Indoor & Outdoor Sports' },
    { img: Teaching, text: 'Well Qualified & <br />Experienced Teachers' },
    { img: Coach, text: 'Integrated IIT/ JEE/ <br />NEET coaching' }
  ];

  const handleMouseEnter = (e) => {
    if (window.innerWidth > 768) {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.15)';
    }
  };

  const handleMouseLeave = (e) => {
    if (window.innerWidth > 768) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleTouchStart = (e) => {
    if (window.innerWidth <= 768) {
      e.currentTarget.style.transform = 'scale(1.1)';
      e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleTouchEnd = (e) => {
    if (window.innerWidth <= 768) {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
    }
  };

  return (
    <div className="container-fluid px-0 position-relative" style={{ backgroundColor: '#FFF3E2' }}>
      {/* Decorative Planes */}
      <img src={paperplane} alt="Paper Plane Left" className="position-absolute d-none d-md-block" style={{ top: '63%', left: '-25px', width: '180px', transform: 'rotate(60deg)', zIndex: 0 }} />
      <img src={paperplane} alt="Paper Plane Right" className="position-absolute d-none d-md-block" style={{ bottom: '5%', right: '-40px', width: '180px', transform: 'rotate(-75deg)', zIndex: 0 }} />
      <img src={Jet} alt="Jet" className="position-absolute d-none d-md-block" style={{ top: '-10%', right: '86%', width: '250px', transform: 'rotate(-70deg)', zIndex: 1 }} />

      {/* Mobile Planes */}
      <img src={paperplane} alt="Plane Mobile Left" className="position-absolute d-md-none" style={{ top: '43%', left: '-5px', width: '100px', transform: 'rotate(60deg)', zIndex: 1 }} />
      <img src={paperplane} alt="Plane Mobile Right" className="position-absolute d-md-none" style={{ bottom: '70px', right: '-20px', width: '100px', transform: 'rotate(-60deg)', zIndex: 1 }} />
      <img src={Jet} alt="Jet Mobile" className="position-absolute d-md-none" style={{ top: '-30px', left: '-25px', width: '100px', transform: 'rotate(-75deg)', zIndex: 1 }} />

      {/* Wave Heading */}
      <div className="position-relative w-100 mb-4">
        <img src={waveImage} alt="Wave" className="img-fluid w-100 bg-white" />
        <h2 className="fw-bold position-absolute top-50 start-50 translate-middle text-center banner-heading"
          style={{ fontSize: '2.5vw', color: '#000', zIndex: 2 }}>
          WHY CHOOSE BRAMMAAS?
        </h2>
      </div>

      {/* Features */}
      <div className="container pb-5">
        <div className="row justify-content-center g-3 mt-2 mb-3 text-center">
          {features.map((item, index) => (
            <div className="col-6 col-sm-4 col-md-3 mb-3" key={index}>
              <div
                className="card h-100 rounded shadow-sm feature-card transition-card"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="card-body p-2 d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={item.img}
                    alt="Feature"
                    className="img-fluid mb-2"
                    style={{ maxHeight: '80px', objectFit: 'contain' }}
                  />
                  <p
                    className="card-text fw-semibold"
                    style={{ color: '#000863', fontSize: '0.9rem' }}
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        .transition-card {
          border: 1px solid #FFA500;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        @media (max-width: 768px) {
          .banner-heading {
            font-size: 5vw !important;
            white-space: normal !important;
            width: 90%;
            margin-top: 20px;
          }

          .feature-card img {
            max-height: 60px !important;
          }

          .card-text {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Banners;
