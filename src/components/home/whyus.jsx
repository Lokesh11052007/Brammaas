import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const whyUsData = [
  {
    title: 'Expert Faculty',
    description: 'Lorem ipsum dolor sit amet, adipiscing elit, vivamus nibh dolor gravida at eleifend',
    bgColor: '#ffa726',
    icon: require('../../assets/expert faculty.png'),
  },
  {
    title: 'Quality Education',
    description: 'Lorem ipsum dolor sit amet, adipiscing elit, vivamus nibh dolor gravida at eleifend',
    bgColor: '#073ef8',
    icon: require('../../assets/quality education.png'),
  },
  {
    title: 'Scholarship News',
    description: 'Lorem ipsum dolor sit amet, adipiscing elit, vivamus nibh dolor gravida at eleifend',
    bgColor: '#fc2b5c',
    icon: require('../../assets/scholarship inform.png'),
  },
  {
    title: 'Sports and Games',
    description: 'Lorem ipsum dolor sit amet, adipiscing elit, vivamus nibh dolor gravida at eleifend',
    bgColor: '#0585f4',
    icon: require('../../assets/g sports.png'),
  },
];

const WhyUs = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-5">WHY US</h2>
      <div className="row g-4">
        {whyUsData.map((item, index) => (
          <div className="col-12 col-sm-6 col-lg-3" key={index}>
            <div className="text-white rounded p-4 h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: item.bgColor }}>
              <div className="text-center mb-3">
                <img src={item.icon} alt={item.title} style={{ width: '60px', height: '60px' }} />
              </div>
              <div className="text-center">
                <h5 className="fw-bold">{item.title}</h5>
                <hr className="border-white" />
                <p>{item.description}</p>
              </div>
              <div className="text-center mt-3">
                <button className="btn btn-light text-dark fw-bold">
                  View More <span>➔</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
