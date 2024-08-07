import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Envelope, Linkedin,GeoAlt } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div id="contact" className="d-flex flex-column align-items-center justify-content-center p-2">
      <Row>
        <Col sm={12}>
          <Card className='rounded mb-2'>
              <p className='m-3'><Envelope />   karrisaiteja32@gmail.com</p>
              <p className='m-3'><Linkedin />   saitejakarri</p>
              <p className='m-3'><GeoAlt />   Andhra Pradesh, India</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
