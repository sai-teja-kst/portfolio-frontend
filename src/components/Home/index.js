import React from 'react';
import { Button, Container, Row, Col, Nav } from 'react-bootstrap';
import './index.css';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id="home" className="section d-flex align-items-center vh-100">
      <Container>
          <Row className="align-items-center">
            <Col className='d-flex flex-column align-items-center justify-content-center'>
            <h1>
              Hello, This is
            <br/>
            <TypeAnimation
              sequence={[
                'Sai Teja Karri', 3000
              ]}
              wrapper="span"
              cursor={false}
              style={{ color: 'red' }}
              repeat={0}
            />
            </h1>  
              <Button variant='danger' title="about" className='mt-3'>
                <Nav.Link>
                  <Link to="contact" smooth={true} duration={10}>Contact Me</Link>
                </Nav.Link>
              </Button>
            </Col>
            <Col className='d-flex justify-content-center'>
              <img alt="profile-pic" src="profile-pic.png" style={{width: '20rem'}}/>
            </Col>
          </Row>
        
      </Container>
    </div>
  );
};

export default Home;
