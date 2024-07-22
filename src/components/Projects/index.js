import React from 'react';
import {Nav, Row, Tab } from 'react-bootstrap';
import './index.css';

const Projects = () => {
  return (
    <div id="projects" className="section projects-card p-3 shadow">
      <h1 className='text-danger'>My Projects</h1>
            <Tab.Container id="projects" defaultActiveKey="static">
                <div className='d-flex flex-row justify-content-center align-item-center mt-3'>
                <Row>
                    <Nav variant="underline">
                        <Nav.Item>
                            <Nav.Link eventKey="static">
                                Static
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="responsive">
                                Responsive
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="react">
                                React
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                </div>
                <Row>                    
                    <Tab.Content>
                        <Tab.Pane eventKey="static">
                            <p>Hello</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="responsive">
                            <p>Hello2</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="react">
                            <p>Hello3</p>
                        </Tab.Pane>  
                    </Tab.Content>
                </Row>
                
            </Tab.Container>
            </div>
  );
}

export default Projects;