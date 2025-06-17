// Updated Responsive Code for TopBar, NavBar, AllCourses, and Footer
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import SearchButton from './SearchBox/SearchBox';
import logo from '../assets/footerLogo.jpg';
import next from '../../assets/next.png';
import { FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// TopBar.jsx
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { MdCall } from "react-icons/md";

export function TopBar() {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <div className="d-flex flex-wrap align-items-center gap-3">
          <div className="d-flex align-items-center">
            <FaEnvelope className="me-2" /> principle@bramaasschool.com
          </div>
          <div className="vr d-none d-md-block" />
          <div className="d-flex align-items-center">
            <MdCall className="me-2" /> +95667 95556 / +95667 955566
          </div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <span>Online Payment</span>
        </div>
      </div>
    </div>
  );
}

// NavBar.jsx



export function NavBar() {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="80" height="80" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="mx-auto fw-bold">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">ADMISSION</Nav.Link>
            <NavDropdown title="ACADEMICS">
              <NavDropdown.Item href="#">Curriculum</NavDropdown.Item>
              <NavDropdown.Item href="#">Subjects</NavDropdown.Item>
              <NavDropdown.Item href="#">Time Table</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">TOPPERS</Nav.Link>
            <Nav.Link href="#">GALLERY</Nav.Link>
            <Nav.Link href="#">INFRASTRUCTURE</Nav.Link>
            <Nav.Link href="#">ABOUT US</Nav.Link>
            <Nav.Link href="#">CONTACT US</Nav.Link>
          </Nav>
          <div className="d-none d-lg-block">
            <SearchButton />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// AllCourses.jsx



export function AllCourses({ academic }) {
  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <h4 className="mb-4">ALL COURSES</h4>
        <div className="row g-4 justify-content-center">
          {academic.map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-4" key={idx}>
              <div className="bg-white rounded shadow-sm p-3 h-100">
                <img
                  src={item.images}
                  alt={item.title}
                  className="img-fluid rounded mb-3"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <h5>{item.title}</h5>
                <p>{item.description}</p>
                <button className="btn btn-warning w-100">
                  View More <img src={next} alt="next" width="20" className="ms-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Footer.jsx



export function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3 text-center">
            <img src={logo} alt="Logo" className="img-fluid rounded-circle mb-3" />
            <p>Brammaas Vidhyalaya CBSE Senior Secondary School. Brammaas gives global edge to every student through International Olympiads.</p>
          </div>
          <div className="col-md-3">
            <h5>EXPLORE</h5>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Academics</li>
              <li>Our Toppers</li>
              <li>Latest News</li>
              <li>Application Form</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>CONTACT</h5>
            <p>5/222, Railway Station Rd, Gandhi Nagar, Gudiyatham, Tamil Nadu 632602</p>
            <p><FaPhone /> +91 8045134590</p>
            <p><FaEnvelope /> brammaascbse@gmail.com</p>
          </div>
          <div className="col-md-3">
            <h5>FOLLOW US</h5>
            <div className="d-flex gap-3">
              <FaFacebook /> <FaInstagram /> <FaTwitter />
            </div>
            <div className="mt-3">
              <input type="email" placeholder="Your email" className="form-control mb-2" />
              <button className="btn btn-outline-light w-100">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 border-top pt-3">
          <p className="mb-0">&copy; Brammaas Vidhyalaya School</p>
        </div>
      </div>
    </footer>
  );
}
