// NavBar.jsx
import React from 'react';

import { NavLink } from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import SearchButton from '../SearchBox/SearchBox';
import logo from '../../assets/footerLogo.jpg';

export default function NavBar() {
  return (
    <Navbar expand="lg" bg="white" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="80" height="80" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="mx-auto fw-bold">
            <Nav.Link as={NavLink} to={"/"} end>HOME</Nav.Link>
            <Nav.Link as={NavLink} to={"/admission"}>ADMISSION</Nav.Link>
            <NavDropdown title="ACADEMICS">
              <NavDropdown.Item as={NavLink} to={"/counselling"}>Counselling</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/brammaasPrograme"}>Brammaas Programe</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/DigitalClassroom"}>Digital Classroom</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to={"/AllCourses"}>All Academics</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to={'/topper'}>TOPPERS</Nav.Link>
            <Nav.Link as={NavLink} to={"/gallery"}>GALLERY</Nav.Link>
            <Nav.Link  as={NavLink} to={"/infrastructure"}>INFRASTRUCTURE</Nav.Link>
            <Nav.Link as={NavLink} to={"/AboutUs"}>ABOUT US</Nav.Link>
            <Nav.Link as={NavLink} to={"/contactUs"}>CONTACT US</Nav.Link>
          </Nav>
          <div className="d-none d-lg-block">
            <SearchButton />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}