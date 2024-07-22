import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  
  return (
    <Navbar expand="md" fixed='top' className='bg-body-secondary shadow-sm p-2'>
      <Navbar.Brand href="/" className='text-danger'>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className='ml-auto'>
          <Nav.Link>
            <Link to="home" smooth={true} duration={10}>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="about" smooth={true} duration={10}>About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="skills" smooth={true} duration={10}>Skills</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="contact" smooth={true} duration={10}>Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>   
  );
};

export default NavigationBar;
