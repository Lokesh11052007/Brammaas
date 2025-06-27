import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Dynamically import all 25 images
const images = Array.from({ length: 25 }, (_, i) =>
  require(`../../assets/a${i + 1}.jpg`)
);

const AnnualDay = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [hoveredArrow, setHoveredArrow] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const IMAGES_PER_SLIDE = 5;

  useEffect(() => {
    const resizeHandler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const handleArrow = (dir) => {
    const maxSlide = Math.floor(images.length / IMAGES_PER_SLIDE);
    setCurrentSlide((prev) =>
      dir === 'left' ? Math.max(prev - 1, 0) : Math.min(prev + 1, maxSlide)
    );
  };

  const renderArrow = (dir, onClick, disabled = false) => (
    <button
      className={`btn border shadow rounded d-flex align-items-center justify-content-center ${disabled ? 'disabled' : ''}`}
      style={{
        width: 42,
        height: 42,
        backgroundColor: hoveredArrow === dir ? 'orange' : 'white',
        transition: '0.3s ease',
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
      onMouseEnter={() => setHoveredArrow(dir)}
      onMouseLeave={() => setHoveredArrow(null)}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className="fw-bold"
        style={{ fontSize: 22, color: hoveredArrow === dir ? 'white' : 'orange' }}
      >
        {dir === 'left' ? '<' : '>'}
      </span>
    </button>
  );

  const visibleImages = isMobile
    ? images.slice(currentSlide * IMAGES_PER_SLIDE, (currentSlide + 1) * IMAGES_PER_SLIDE)
    : images;

  return (
    <>
      {/* 📸 Gallery Section */}
      <section
        className="py-5 px-3"
        style={{ background: 'linear-gradient(to bottom right, #efcbaf, #f3edeb, #f7c2ac)' }}
      >
        <div className="container">
          {isMobile ? (
            <>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                {visibleImages.map((img, index) => (
                  <div key={index} className="rounded overflow-hidden" style={{ width: '30vw', aspectRatio: '1 / 1' }}>
                    <img src={img} alt={`Annual Day ${index + 1}`} className="img-fluid rounded w-100 h-100" style={{ objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center gap-3 mt-4">
                {renderArrow('left', () => handleArrow('left'), currentSlide === 0)}
                {renderArrow('right', () => handleArrow('right'), (currentSlide + 1) * IMAGES_PER_SLIDE >= images.length)}
              </div>
            </>
          ) : (
            <>
              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
                {visibleImages.map((img, index) => (
                  <div key={index} className="col">
                    <div className="ratio ratio-1x1 rounded overflow-hidden">
                      <img src={img} alt={`Annual Day ${index + 1}`} className="img-fluid rounded" style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-center gap-3 mt-4">
                {renderArrow('left', () => {})}
                {renderArrow('right', () => {})}
              </div>
            </>
          )}
        </div>
      </section>

      {/* 📨 Contact Form */}
      <section className="container mt-5 pt-4 mb-5">
        <div
          className="mx-auto p-3 border rounded bg-white"
          style={{
            maxWidth: 360,
            boxShadow: '0 10px 14px -4px rgba(255,165,0,0.5)' // orange bottom box-shadow
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
            <strong>GET IN TOUCH</strong>
            <button className="btn-close btn-sm" aria-label="Close"></button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setMessageSent(true);
              setTimeout(() => setMessageSent(false), 4000);
            }}
          >
            <textarea
              className="form-control mb-2"
              rows="3"
              placeholder="Your Enquiry..."
              required
              style={{
                boxShadow: '0 4px 3px -2px rgba(255, 165, 0, 0.4)' // orange bottom shadow
              }}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter mobile number / Email id"
              required
              style={{
                boxShadow: '0 4px 3px -2px rgba(255, 165, 0, 0.4)' // orange bottom shadow
              }}
            />
            {messageSent && (
              <p className="text-success text-center small mb-2">
                Thank you for contacting us. We will get back shortly
              </p>
            )}
            <button
              type="submit"
              className="btn w-100 fw-semibold"
              style={{ backgroundColor: '#ff9900', color: 'white' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AnnualDay;
