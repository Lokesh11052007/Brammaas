import React from 'react';

import waveImage from '../../assets/Line 35.png';
import paperplane from '../../assets/paperplane.png';
import Jet from '../../assets/plane.png';
import Kidseating from '../../assets/img1.png';
import Labs from '../../assets/img2.png';
import School from '../../assets/img3.png';
import Meeting from '../../assets/img4.png';
import Sports from '../../assets/img5.png';
import Teaching from '../../assets/img6.png';
import Coach from '../../assets/img7.png';

const Banners = () => {
  return (
    <div>
      <div className="text-center position-relative py-5">
  <img src={waveImage} alt="Wave" className="w-100" style={{ marginTop: '-120px', objectFit: 'fill' }} />
  <h2 className="fw-bold display-6" style={{ marginTop: '-60px' }}>WHY CHOOSE BRAMMAAS?</h2>
  <img src={paperplane} alt="Paper Plane" className="position-absolute" style={{ top: 400, left: -40, width: 200, transform: 'rotate(66deg)' }} />
  <img src={paperplane} alt="Paper Plane" className="position-absolute" style={{ top: 400, right: -60, width: 200, transform: 'rotate(300deg)' }} />
  <img src={Jet} alt="Jet" className="position-absolute" style={{ top: -70, left: -90, width: 300, transform: 'rotate(290deg)' }} />
</div>

<div className="container py-5 bg-light">
  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
    {[Kidseating, Labs, School, Meeting, Sports, Teaching, Coach].map((img, idx) => (
      <div className="col text-center" key={idx}>
        <div className="p-3 border border-warning rounded shadow-sm bg-white h-100 d-flex flex-column align-items-center">
          <img src={img} alt="Feature" className="mb-3" style={{ width: '100px' }} />
          <p className="fw-bold text-primary"> {/* Add actual text here manually if needed */} Feature Text </p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Banners;
