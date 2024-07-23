import React from 'react';
import { Fade, Nav, Row, Tab, Col} from 'react-bootstrap';
import './index.css';
import ProjectsStatic from '../ProjectsStatic';
import ProjectsDynamic from '../ProjectsDynamic';
import ProjectsReact from '../ProjectsReact';

const Projects = () => {

  return (
    <div id="projects" className="section projects-card">
      <h1 className='text-danger text-start'>My Projects</h1>
      <Tab.Container id="projects" defaultActiveKey="static">
        <div className='d-flex flex-row justify-content-start align-item-start p-3'>
          <Row>
            <Nav variant="underline">
              <Nav.Item>
                <Nav.Link eventKey="static">Static</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dynamic">Dynamic</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="react">React</Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
        </div>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="static">
              <Col>
                <Fade in={true} timeout={500}>
                  <div>
                    <ProjectsStatic />
                  </div>
                </Fade>
              </Col>
            </Tab.Pane>
            <Tab.Pane eventKey="dynamic">
              <Fade in={true} timeout={500}>
                <div>
                  <ProjectsDynamic/>
                </div>
              </Fade>
            </Tab.Pane>
            <Tab.Pane eventKey="react">
              <Fade in={true} timeout={500}>
                <div>
                  <ProjectsReact/>
                </div>
              </Fade>
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
      
    </div>
  );
}

export default Projects;
