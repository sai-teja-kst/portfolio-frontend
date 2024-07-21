import React from 'react';
import { Card,Row, Col, Container, CardGroup} from 'react-bootstrap';
import { Buildings } from 'react-bootstrap-icons';
import { Cloud } from 'react-bootstrap-icons';
import { CodeSlash } from 'react-bootstrap-icons';
import { DatabaseFillGear } from 'react-bootstrap-icons';

import './index.css';

const Skills = () => {
  return (
    <div id="skills" className="section">
      <Container className='d-flex justify-content-center align-items-center'>
        <Row>
          <Col> 
            <CardGroup style={{ width: '50rem' }}>
              <Card>
                <Card.Body>
                  <Card.Img as={Buildings} className="m-3" style={{ width: '10rem', height: '5rem' }} />
                  <Card.Title><strong className='text-danger'>IoT & IIoT</strong></Card.Title>
                  <Card.Text>
                    Industrial IoT to automate the flows.
                    <br/>
                    <small>Technologies & Tools : Apache NiFi, RabbitMQ, ActiveMQ, Kibana</small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                <Card.Img as={Cloud} className="m-3" style={{ width: '10rem', height: '5rem' }} />
                  <Card.Title><strong className='text-danger'>Cloud Environment</strong></Card.Title>
                  <Card.Text>
                    AWS Cloud Services
                    <br/>
                    <small>Cloud Environments: AWS </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
            <CardGroup style={{ width: '50rem' }}>
            <Card>
                <Card.Body>
                <Card.Img as={CodeSlash} className="m-3" style={{ width: '10rem', height: '5rem' }} />
                  <Card.Title><strong className='text-danger'>Frontend</strong></Card.Title>
                  <Card.Text>
                    Web sites development.
                    <br/>
                    <small>Languages & Frameworks : HTML, CSS, JS, React</small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                <Card.Img as={DatabaseFillGear} className="m-3" style={{ width: '10rem', height: '5rem' }} />
                  <Card.Title><strong className='text-danger'>Backend</strong></Card.Title>
                  <Card.Text>
                    Programming Skills
                    <br/>
                    <small>Languages & Database : Core Python, NodeJS, ExpressJS, MongoDB</small>
                  </Card.Text>
                </Card.Body>
              </Card>
              
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;