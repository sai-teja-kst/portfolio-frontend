import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <Navbar expand="md" fixed="top" className="bg-body-secondary shadow-sm p-2">
      <Navbar.Brand href="/" className="text-danger">Sai Teja's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="home" smooth={true} duration={250}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="about" smooth={true} duration={250}>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="skills" smooth={true} duration={250}>Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="projects" smooth={true} duration={250}>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="contact" smooth={true} duration={250}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
