import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { Envelope, Linkedin,GeoAlt } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <Container id="contact" className="d-flex flex-column align-items-center justify-content-center mt-3">
      <Row>
        <Card className='bg-danger vw-75 rounded-pill mb-2 d-flex flex-row align-items-center justify-content-center'>
            <p className='m-3'><Envelope />   karrisaiteja32@gmail.com</p>
            <p className='m-3'><Linkedin />   saitejakarri</p>
            <p className='m-3'><GeoAlt />   Andhra Pradesh, India</p>
        </Card>
      </Row>
    </Container>
  );
};

export default Contact;
