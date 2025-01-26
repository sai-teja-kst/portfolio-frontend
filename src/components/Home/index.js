import React from 'react';
import { Button, Row, Col,Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <Container id="home" className="bg-home section">
      <Row>
        <Col className='d-flex flex-column align-items-center justify-content-center text-center vh-50'>
            <h1 className='mb-4'>
              <span className='text-danger'>Hello,</span>
              <TypeAnimation
                style={{
                  display: 'block',
                  wordBreak: 'no-break',
                  textAlign: 'center',
                  margin: 0
                }}
                sequence={['This is Sai Teja', 1500, 'I am Software Developer', 1500, 'Welcome to my Portfolio...']}
                repeat={0}
                speed={200}
                wrap="span"
              />
            </h1>  
              <Button variant='danger' title="projects">
                <Link to="projects">my works</Link>
              </Button>
        </Col>
        {/*
        <Col lg={6} sm={12} className='d-flex flex-column align-items-center justify-content-center text-center vw-100 vh-50'>
            <img alt="profile-pic" src="profile-pic.png" style={{width: '20rem'}}/>
        </Col>
        */}
      </Row>
    </Container>
  );
};

export default Home;
