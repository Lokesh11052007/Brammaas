import React from "react";
import chairmanImg from "../../assets/chairman.jpg";
import correspondentImg from "../../assets/correspondent.jpg";
import bgImage from "../../assets/PioneersPanel.png";
import panel from '../../assets/panel.jpg'
const PioneersPanel = () => {
  
        const title= "From starting a First Offset Printing Press in the early 2000s to starting a monolith and dynamic academic institutions, Ln. R.P. Sendhil has come along"
        const content = `way in pioneering what he is today with the Brammaas Group of Schools, 
        known best for its extraordinary education quality and holistic development. 
        Hailing from the coastal town of Gudiyattam, Vellore district in Tamil Nadu. 
        Ln. R.P. Sendhil began his dream of venturing into a new space of education with a significant vision to educate and build young minds 
        towards innovative achievements in science and technology. The scope of his vision expanded in multitudinous folds, contributing ever 
        since to the growth of his academic ventures. The ultimate aim of the founder is to bring quality education to the rural area so far 
        enjoyed by the urban people.`
    

  return (
    <div className="position-relative">
      {/* Background Image with opacity */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${panel})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div className="position-relative p-5" style={{ zIndex: 1 }}>
        <div className="container bg-white rounded shadow p-4">
          <h2 className="text-center fw-bold mb-5">
            <span className=" text-white px-4 py-2 rounded" style={{backgroundColor:"#000C92"}}>
              PIONEERS PANEL
            </span>
          </h2>

          {/* CHAIRMAN */}
          <div className="row align-items-center mb-5">
            <div className="col-md-4 mb-4 mb-md-0">
              <img
                src={chairmanImg}
                alt="Chairman"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-8">
              <h4 className="text-primary fw-bold mb-3">CHAIRMAN</h4>
              <p style={{ textAlign: "justify" }}>{title}</p>
              <p>{content}</p>
            </div>
          </div>

          {/* CORRESPONDENT */}
          <div className="row align-items-center flex-md-row-reverse">
            <div className="col-md-4 mb-4 mb-md-0">
              <img
                src={correspondentImg}
                alt="Correspondent"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-8">
              <h4 className="text-primary fw-bold mb-3">CORRESPONDENT</h4>
              <p style={{ textAlign: "justify" }}>{title}</p>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PioneersPanel;
