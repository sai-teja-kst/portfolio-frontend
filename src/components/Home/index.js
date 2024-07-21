import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div id="home" className="section vh-100 d-flex align-items-center">
      <Container fluid="md">
        
          <Row className="align-items-center">
            <Col className='d-flex flex-column align-items-center justify-content-center vh-75'>
            <h1>
              Hi, Welcome to My Portfolio..
            <br />
              This is
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
                About me
              </Button>
            </Col>
            <Col className='d-flex justify-content-center'>
              <img alt="profile-pic" src="profile-pic.png" className='vh-25'/>
            </Col>
          </Row>
        
      </Container>
    </div>
  );
};

export default Home;
