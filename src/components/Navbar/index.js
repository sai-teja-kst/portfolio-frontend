import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsCodeSlash,
  BsAppIndicator,
  BsEnvelopeAt,
} from "react-icons/bs";

const NavigationBar = () => {
  return (
    <Nav
      fixed="bottom"
      className="navbar-custom shadow-lg"
    >
      <Nav.Item>
        <Nav.Link as={Link} to="home" smooth={true} duration={250}>
          <span className="span-ele">
            <BsFillHouseFill size={25} />
          </span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="about" smooth={true} duration={250}>
          <span className="span-ele">
            <BsFillPersonFill size={25} />
          </span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="skills" smooth={true} duration={250}>
          <span className="span-ele">
            <BsCodeSlash size={25} />
          </span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="projects" smooth={true} duration={250}>
          <span className="span-ele">
            <BsAppIndicator size={25} />
          </span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="contact" smooth={true} duration={250}>
          <span className="span-ele">
            <BsEnvelopeAt size={25} />
          </span>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavigationBar;
