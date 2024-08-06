import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <Navbar expand="md" fixed="top" className="bg-dark shadow-sm p-2 vw-75">
      <Navbar.Brand href="/" className="text-danger">Sai Teja's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="home" smooth={true} duration={250} activeStyle="nav-link-custom" >
              <span className="span-ele">Home</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="about" smooth={true} duration={250} className="nav-link-custom">
            <span className="span-ele">About</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="skills" smooth={true} duration={250}>
              <span className="span-ele">Skills</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="projects" smooth={true} duration={250} className="nav-link-custom">
              <span className="span-ele">Projects</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="contact" smooth={true} duration={250} className="nav-link-custom">
              <span className="span-ele">Contact</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
