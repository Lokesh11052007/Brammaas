import React from 'react';
import './gallery.css';

import GalleryImage from './GalleryImage.jsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}    // start state
      animate={{ opacity: 1, y: 0 }}     // end state
      exit={{ opacity: 0, y: -50 }}      // when navigating away
      transition={{ duration: 0.4 }}
    >

      <section className="gallery">
        <div>
          <h1>GALLERY</h1>
          <p><Link to={'/'} className="text-white text-decoration-none fw-semibold">Home</Link> &gt; Gallery</p>
        </div>
      </section>
      <GalleryImage/>
 
    </motion.div>
  );
}

export default Gallery;