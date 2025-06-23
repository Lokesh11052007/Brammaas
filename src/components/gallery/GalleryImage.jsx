import React from 'react';
import './gallery.css'; // for styling
import { Link } from 'react-router-dom';

import sportsday from '../../assets/sportsday.png';
import graduationday from '../../assets/graduationday.jpg';
import pongal from '../../assets/pongal.jpg';
import extra from '../../assets/extra.jpg';
import tour from '../../assets/tour.jpg';
import exhibitions from '../../assets/exhibitions.jpg';
import annual from '../../assets/annual.jpg';
import food from '../../assets/food.jpg';


const galleryData = [
  { title: 'sportsday', img: sportsday},
  { title: 'graduationday', img: graduationday},
  { title: 'pongal Celebration', img: pongal},
  { title: 'extra circular', img: extra},
  { title: 'tour', img: tour },
  { title: 'exhibitions', img: exhibitions},
  { title: 'annual day', img: annual,link:'/annual'},
  { title: 'food Feast', img: food}
];

const GalleryImage = () => {
  return (
    <div className="gallery-section">
      <h2>EVENTS PHOTO GALLERY</h2>
      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-card">

            {item.link ? (
          <Link to={item.link}>
            <img src={item.img} alt={item.title} />
            <div className="gallery-title">{item.title}</div>
          </Link>
        ) : (
          <>
            <img src={item.img} alt={item.title} />
            <div className="gallery-title">{item.title}</div>
          
          </>
        )}
        </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImage;
