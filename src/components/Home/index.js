import React from 'react';
import { Button, Row, Col, Nav } from 'react-bootstrap';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id="home" className="section">
      <Row>
        <Col sm={12} lg={6} className='d-flex flex-column align-items-center justify-content-center text-center vh-100'>
            <h1>
              <span className='text-danger'>Hello,</span>
              <TypeAnimation
                style={{
                  height: '20rem',
                  width: '20rem',
                  display: 'block',
                  wordBreak: 'no-break',
                  textAlign: 'center',
                  margin: 0
                }}
                sequence={['This is Sai Teja', 1500, 'I am Software Developer', 1500, 'Welcome to my Portfolio...']}
                repeat={0}
                speed={50}
                wrap="span"
              />
            </h1>  
              <Button variant='danger' title="about">
                <Nav.Link>
                  <Link to="contact" smooth={true} duration={10}>Contact Me</Link>
                </Nav.Link>
              </Button>
        </Col>
        {/*
        <Col lg={6} sm={12} className='d-flex flex-column align-items-center justify-content-center text-center vw-100 vh-50'>
            <img alt="profile-pic" src="profile-pic.png" style={{width: '20rem'}}/>
        </Col>
        */}
      </Row>
    </div>
  );
};

export default Home;
