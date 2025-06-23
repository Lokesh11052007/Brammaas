import React from 'react';
import './admin.css';

import Form from './Form.jsx';
import Banners from'./banners.jsx';


function Admission() {
  return (
    <>
  
      
      <section className="hero">
        <div>
          <h1>ADMISSION ENQUIRY</h1>
          <p>Home &gt; Admission Enquiry</p>
        </div>
      </section>
      <Form/>
      <Banners/>
      
    </>
  );
}

export default Admission;
