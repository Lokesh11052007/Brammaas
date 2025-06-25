import logo from '../../assets/footerLogo.jpg';
import { FaPhone, FaEnvelope, FaQuestion } from 'react-icons/fa';
import {
  FaFacebook,
  FaSquareInstagram,
  FaSquareTwitter,
  FaLinkedin,
  FaPinterest,
  FaCopyright
} from "react-icons/fa6";
import { TbWorldQuestion } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate('/AboutUs');  // Replace '/about' with your actual route
  };
  const handleAcademics = () => {
    navigate('/AllCourses');  // Replace '/about' with your actual route
  };
  const handleToppers = () => {
    navigate('/topper');  // Replace '/about' with your actual route
  };
  const handleHome = () => {
    navigate('/');  // Replace '/about' with your actual route
  };
  const handleAdmission = () => {
    navigate('/admission');  // Replace '/about' with your actual route
  };
  const handleContact = () => {
    navigate('/contactUs');  // Replace '/about' with your actual route
  };
  const handleCall = () => {
    window.location.href = 'tel:+91 8045134590';
  };

  const handleEmail = () => {
    window.location.href = 'brammaascbse@gmail.com<';
  };

  const handleExternalLink = () => {
    window.open('https://brammaascbse.in', '_blank');
  };
  const handleInstagramLink = () => {
    window.open('https://www.instagram.com/brammaas_cbse2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };
  const handleTwitterLink = () => {
    window.open('https://brammaascbse.in', '_blank');
  };
  const handleLinkedLink = () => {
    window.open('https://brammaascbse.in', '_blank');
  };
  const handleFacebookLink = () => {
    window.open('https://www.facebook.com/BRAMMAASVIDHYALAYACBSESCHOOL', '_blank');
  };
  const handlePrinterLink = () => {
    window.open('https://brammaascbse.in', '_blank');
  };
  const handleYoutubeLink = () => {
    window.open('https://youtube.com/@brammaasvidhyalayaseniorse7601?si=gzB2ZTyTGMNHRFkB', '_blank')
  }
  return (
    <footer className="school-footer  px-4 py-4 ">
      {/* Main Footer Section */}
      <div className="container">
        <div className="row gy-4">
          {/* Logo + Description */}
          <div className="col-md-3 text-center text-md-start">
            <img src={logo} alt="Logo" className="school-logo rounded-circle mb-3" width="80" />
            <p>
              Brammaas Vidhyalaya CBSE Senior Secondary School. Brammaas gives
              global edge to every student through International Olympiads.
            </p>
          </div>

          {/* Explore */}
          <div className="col-md-3">
            <h5>EXPLORE</h5>
            <div className="border-bottom border-3 w-25 mb-2" />
            <ul className="list-unstyled">
              <li onClick={handleAbout} style={{ cursor: 'pointer' }}>About us</li>
              <li onClick={handleAcademics} style={{ cursor: 'pointer' }}>Academics</li>
              <li onClick={handleToppers} style={{ cursor: 'pointer' }}>Our Toppers</li>
              <li onClick={handleHome} style={{ cursor: 'pointer' }}>Latest News</li>
              <li onClick={handleAdmission} style={{ cursor: 'pointer' }}>Application Form</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h5 onClick={handleContact} style={{cursor: 'pointer'}}>CONTACT</h5>
            <div className="border-bottom border-3 w-25 mb-2" />
            <p>
              5/222, Railway Station Rd,<br />
              Gandhi Nagar, Gudiyatham,<br />
              Tamil Nadu 632602
            </p>
            <h6 className="mt-3">STUDENTS HELP LINE</h6>
            <div className="border-bottom border-3 w-25 mb-2" />
            <p 
            style={{ cursor: 'pointer' }}
            onClick={handleCall}
            >
              <FaPhone style={{ transform: 'rotate(90deg)' }} /> +91 8045134590
            </p>
            <p 
            style={{ cursor: 'pointer' }} 
            onClick={handleEmail}
            >
              <FaEnvelope /> brammaascbse@gmail.com
            </p>
            <p
              style={{ cursor: 'pointer' }}
              onClick={handleExternalLink}
            >
              <TbWorldQuestion /> https://brammaascbse.in
            </p>
          </div>

          {/* Social + Subscribe */}
          <div className="col-md-3">
            <h5>FOLLOW US ON</h5>
            <div className="border-bottom border-3 w-25 mb-2" />
            <div className="social-icons d-flex gap-3 mb-3 fs-5">
              <FaFacebook onClick={handleFacebookLink}/>
              <FaSquareInstagram onClick={handleInstagramLink} />
              <FaSquareTwitter onClick={handleTwitterLink}/>
              <FaLinkedin onClick={handleLinkedLink}/>
              <FaPinterest onClick={handlePrinterLink}/>
            </div>

            <div className="subscribe-box d-flex flex-wrap">
              <input
                type="text"
                placeholder="Your e-mail address"
                className="form-control"
                style={{ flex: '1 1 auto', minWidth: '150px' }}
              />
              <button onClick={handleYoutubeLink} className="btn btn-warning">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom border-top mt-4 pt-3 text-center container">
        <p className="mb-2">
          Copyright <FaCopyright /> Brammaas Vidhyalaya School
        </p>
        <div className="d-flex justify-content-center flex-wrap gap-3 fw-bold">
          <span><FaPhone onClick={handleCall} style={{ transform: 'rotate(90deg)' }} /> Call us</span>
          <span><FaEnvelope onClick={handleExternalLink}/> Email us</span>
          <span><FaQuestion /> Enquiry Now</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
