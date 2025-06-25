import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Parents from '../aboutUs/testimonialsSection/Parents'

const ParentsTestimonials = () => {
  return (
    <>
      <div className="position-relative py-5" style={{ background: '#FFF4E6' }}>
      <h2 className="container text-start fw-bold" style={{ fontSize: '32px', color: '#000863' }}>
        PARENTS TESTIMONIALS
      </h2>
      {/* Testimonial Cards */}
       <Parents />
    </div>
    </>
  );
};

export default ParentsTestimonials;
