import React from 'react';
import './annual.css';

import Annualday from './AnnualDay.jsx'; // your actual page component




function Annual() {
  return (
    <>
      

      <section className="annual">
        <div>
          <h1>ANNUAL DAY 2025</h1>
          <p>Home &gt; Annual Day</p>
        </div>
      </section>
      <Annualday/>
      
    </>
  );
}

export default Annual;