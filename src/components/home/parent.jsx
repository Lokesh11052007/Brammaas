import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import leftArrow from '../../assets/left.png';
import rightArrow from '../../assets/right.png';
import star from '../../assets/star.png';

const testimonials = [
  {
    name: "K. Rajesh Kumar",
    text: "I’m Surya parents, We love Brammaas School because it provides the basic foundation to prepare our child Surya for the challenges of the real world.",
    image: require('../../assets/parent 1.jpg'),
  },
  {
    name: "Nivin Paul Isaac",
    text: "I’m Surya parents, We love Brammaas School because it provides the basic foundation to prepare our child Surya for the challenges of the real world.",
    image: require('../../assets/parent 2.jpg'),
  },
  {
    name: "Janani Iyer Nivetha",
    text: "I’m Surya parents, We love Brammaas School because it provides the basic foundation to prepare our child Surya for the challenges of the real world.",
    image: require('../../assets/parent 3.jpg'),
  },
];

const ParentsTestimonials = () => {
  return (
    <div className="position-relative py-5" style={{ background: '#FFF4E6' }}>
      <h2 className="text-center text-primary fw-bold mb-5" style={{ fontSize: '32px' }}>
        PARENTS TESTIMONIALS
      </h2>

      {/* Left Arrow */}
      <button className="position-absolute top-50 start-0 translate-middle-y bg-light border-0 rounded p-2">
        <img src={leftArrow} alt="Previous" style={{ width: '20px' }} />
      </button>

      {/* Testimonial Cards */}
      <div className="container">
        <div className="row justify-content-center g-4">
          {testimonials.map((item, index) => (
            <div className="col-12 col-sm-6 col-lg-4 " key={index}>
              <div className="bg-white rounded shadow p-4 pt-5 position-relative text-center h-100 mt-3 mb-sm-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="position-absolute top-0 start-50 translate-middle rounded-circle border border-4 border-white"
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h5 className="mt-5 fw-bold">{item.name}</h5>
                <p className="text-muted small mt-2">{item.text}</p>
                <p className="text-secondary small">
                  Lorem ipsum dolor sit amet, adipiscing elit, vivamus nibh dolor gravida at eleifend
                </p>
                <div className="d-flex justify-content-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={star} alt="star" className="mx-1" style={{ width: '20px' }} />
                  ))}
                </div>
                {/* <button className="btn btn-warning text-white fw-bold">
                  Read More ➔
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button className="position-absolute top-50 end-0 translate-middle-y bg-light border-0 rounded p-2">
        <img src={rightArrow} alt="Next" style={{ width: '20px' }} />
      </button>
    </div>
  );
};

export default ParentsTestimonials;
