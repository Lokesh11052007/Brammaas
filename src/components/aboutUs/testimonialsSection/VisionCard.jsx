import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import visionIcon from '../../../assets/vision.png';
import missionIcon from '../../../assets/mission.png';

function VisionCard() {
  const Vision = [
    {
      title: "Vision",
      icons: visionIcon,
      description: "To make children flourish with the right knowledge, skills and values that will enable them to adapt to any circumstance, face challenges head-on with social responsibility, emotional balance, physical fitness, confidence, self-reliance, empathy, patriotism and cultural enrichment."
    },
    {
      title: "Mission",
      icons: missionIcon,
      description: "To bring out synergy of skills, knowledge, and values in our children, to provide learning environment that enables each child to own his/her unique learning style, to help discover child’s own creative and artistic potential, and to facilitate each child to flourish in accordance with our vision."
    }
  ];

  return (
    <div className="container-fluid py-4" style={{ backgroundColor: '#FFF3E2' }}>
      <div className='container py-5'>
        <Row className="g-3 justify-content-center">
        {Vision.map((item, index) => (
          <Col xs={12} sm={10} md={8} lg={6} key={index} className='p-5'>
            <Card className="p-4  position-relative h-100 font-family" style={{ border: 'none',boxShadow: '0 3px 8px #FF9500B2', width: "90%" }}>
              {/* Icon Circle */}
              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#FF9500',
                  position: 'absolute',
                  top: '-30px',
                  right: '20px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                }}
              >
                <img src={item.icons} alt={`${item.title} Icon`} style={{ width: '30px' }} />
              </div>

              {/* Card Content */}
              <h5 className="mt-4 fw-bold  text-end" style={{color:"#000863"}}>{item.title}</h5>
              <p className="fs-6 text-secondary text-end" style={{ textAlign: 'justify' }}>
                {item.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
      </div>
    </div>
  );
}

export default VisionCard;
