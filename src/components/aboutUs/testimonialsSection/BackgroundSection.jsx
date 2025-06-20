import React from "react";
import bgImage from "../../../assets/aboutUsBottom.png"; // replace with your image path
import search from '../../../assets/search.png'
import what from '../../../assets/what.png'
export default function BackgroundSection() {
  const section = [
    {
      img: search,
      title:"Find Your Academics.",
      content:"we have an array of Academics to choose from",
      field:"BROWSE ACADEMICS"
    },
    {
      img: what,
      title:"Need Help",
      content:"Write your query & we’ll be happy to help",
      field:"GET IN TOUCH"
    }
  ]

  return (
    <div className="container-fluid py-5">
      <div className="row gap-5 justify-content-center py-5">
        {
          section.map((item,index) => (
            <div
          className=" position-relative text-white d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(0, 8, 99, 0.75), rgba(255, 149, 0, 0.8),rgba(255, 149, 0, 0.7)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '400px',
            width: '736px'
          }}
          key={index}
        >
          <div className="text-center">
            <img src={item.img} alt="search" />
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <button className="border-1 border-white text-white" style={{padding:'5px 25px', backgroundColor:'#FF9500'}}>{item.field}</button>
          </div>
        </div>
          ))
        }
      </div>
    </div>
  );
}
