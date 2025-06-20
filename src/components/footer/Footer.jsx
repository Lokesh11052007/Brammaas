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

const Footer = () => {
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
              <li>About us</li>
              <li>Academics</li>
              <li>Our Toppers</li>
              <li>Latest News</li>
              <li>Application Form</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3">
            <h5>CONTACT</h5>
            <div className="border-bottom border-3 w-25 mb-2" />
            <p>
              5/222, Railway Station Rd,<br />
              Gandhi Nagar, Gudiyatham,<br />
              Tamil Nadu 632602
            </p>
            <h6 className="mt-3">STUDENTS HELP LINE</h6>
            <div className="border-bottom border-3 w-25 mb-2" />
            <p><FaPhone style={{ transform: 'rotate(90deg)' }} /> +91 8045134590</p>
            <p><FaEnvelope /> brammaascbse@gmail.com</p>
            <p
              className="pointer"
              onClick={() => window.open('https://brammaascbse.in', '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <TbWorldQuestion /> https://brammaascbse.in
            </p>
          </div>

          {/* Social + Subscribe */}
          <div className="col-md-3">
            <h5>FOLLOW US ON</h5>
            <div className="border-bottom border-3 w-25 mb-2" />
            <div className="social-icons d-flex gap-3 mb-3 fs-5">
              <FaFacebook />
              <FaSquareInstagram />
              <FaSquareTwitter />
              <FaLinkedin />
              <FaPinterest />
            </div>

            <div className="subscribe-box d-flex flex-wrap">
              <input
                type="text"
                placeholder="Your e-mail address"
                className="form-control"
                style={{ flex: '1 1 auto', minWidth: '150px' }}
              />
              <button className="btn btn-warning">SUBSCRIBE</button>
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
          <span><FaPhone style={{ transform: 'rotate(90deg)' }} /> Call us</span>
          <span><FaEnvelope /> Email us</span>
          <span><FaQuestion /> Enquiry Now</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
