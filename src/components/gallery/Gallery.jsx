import React from 'react';
import './gallery.css';

import GalleryImage from './GalleryImage.jsx';
import { Link } from 'react-router-dom';


function Gallery() {
  return (
    <>

      <section className="gallery">
        <div>
          <h1>GALLERY</h1>
          <p><Link to={'/'} className="text-white text-decoration-none fw-semibold">Home</Link> &gt; Gallery</p>
        </div>
      </section>
      <GalleryImage/>
 
    </>
  );
}

export default Gallery;