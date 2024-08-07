import React from 'react';
import { Fade, Nav, Row, Tab, Col, CardGroup} from 'react-bootstrap';
import { Play, Cart2, HeadsetVr, Cloud, ListCheck, Key } from 'react-bootstrap-icons';
import './index.css';
import ProjectsInfoCard from '../ProjectsInfoCard';

const Projects = () => {
  return (
    <div id="projects" className="section projects-card p-5 mb-2">
      <h1 className='text-danger text-start'>My Projects</h1>
      <Tab.Container id="projects" defaultActiveKey="static">
        <div className='d-flex text-light flex-row justify-content-start align-item-start p-3'>
          <Row>
            <Nav variant="underline">
              <Nav.Item>
                <Nav.Link eventKey="static">
                  <span className='text-light'>Static</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="dynamic">
                  <span className='text-light'>Dynamic</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="react">
                <span className='text-light'>React</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
        </div>
        <Row>
          <Tab.Content>
            <Tab.Pane eventKey="static">
              <Col>
                <Fade in={true} timeout={500}>
                  <Col>
                    <CardGroup>
                    <ProjectsInfoCard
                        title="VR Page"
                        imgSrc="./VRPage.png"
                        cardTitle="VR Product Page"
                        cardSubtitle="Static Responsive Website"
                        cardText="Developed a responsive web page showcasing a VR product using HTML, CSS, and Bootstrap. The page features static content optimized for various devices, providing an engaging and visually appealing user experience."
                        sourceCodeLink="https://github.com/sai-teja-kst/vrpage.git"
                        websiteLink="https://saitejavrpage.ccbp.tech/"
                        footerText="11-Jun-2021"
                        footerIcon={<Play />}
                        techTools="Technologies & Tools : HTML, CSS, Bootstrap"
                        cardIcon={<HeadsetVr className='m-2'/>}
                    />

                    <ProjectsInfoCard
                        title="Fly Buy"
                        imgSrc="./FlyBuy.png"
                        cardTitle="FlyBuy E-Commerce Website"
                        cardSubtitle="Static Responsive Website"
                        cardText="Designed and developed a comprehensive e-commerce website for FLYBUY, integrating product listings, shopping cart functionality, and user authentication. Utilized modern web technologies to deliver a seamless and intuitive online shopping experience."
                        sourceCodeLink="https://github.com/sai-teja-kst/flybuy.git"
                        websiteLink="https://kstflybuy.ccbp.tech/"
                        footerText="18-Jun-2021"
                        footerIcon={<Play />}
                        techTools="Technologies & Tools : HTML, CSS, Bootstrap"
                        cardIcon={<Cart2 className='m-2'/>}
                    />

                    </CardGroup>
                  </Col>
                </Fade>
              </Col>
            </Tab.Pane>
            <Tab.Pane eventKey="dynamic">
              <Fade in={true} timeout={500}>
              <Col>
                    <CardGroup>

                    <ProjectsInfoCard
                        title="Simple To-Do Application"
                        imgSrc="./Todo.png"
                        cardTitle="Simple To-Do Application"
                        cardSubtitle="CRUD Dynamic Responsive Website"
                        cardText="Created a straightforward to-do application using HTML, CSS, Bootstrap, and JavaScript. The application enables users to add, edit, and delete tasks, providing an intuitive interface for effective task management."
                        sourceCodeLink="https://github.com/sai-teja-kst/todo-js.git"
                        websiteLink="https://kstejatodoapp.ccbp.tech/"
                        footerText="18-Jun-2021"
                        footerIcon={<Play />}
                        techTools="Technologies & Tools : HTML, CSS, Bootstrap, JS"
                        cardIcon={<ListCheck className='m-2'/>}
                    />

                    <ProjectsInfoCard
                        title="Real-Time Weather Application"
                        imgSrc="./WeatherApp.png"
                        cardTitle="Weather Info Application"
                        cardSubtitle="Dynamic Responsive Website"
                        cardText="Built a real-time weather application utilizing HTML, CSS, JavaScript, Bootstrap, and REST APIs. The app provides current weather updates and forecasts with an intuitive and responsive design, leveraging API data for accurate weather information."
                        sourceCodeLink="https://github.com/sai-teja-kst/weather.git"
                        websiteLink="https://saitejaweather.ccbp.tech"
                        footerText="05-Mar-2022"
                        footerIcon={<Play />}
                        techTools="Technologies & Tools : HTML, CSS, Bootstrap, JS, REST APIs"
                        cardIcon={<Cloud className='m-2'/>}
                    />
                    
                    </CardGroup>
                  </Col>
              </Fade>
            </Tab.Pane>
            <Tab.Pane eventKey="react">
            <Fade in={true} timeout={500}>
                <Col>
                <CardGroup>
                <ProjectsInfoCard
                        title="Password Manager"
                        imgSrc="./PasswdManager.png"
                        cardTitle="Password Manager"
                        cardSubtitle="React CRUD Application"
                        cardText="Developed a user-friendly password manager application using React, implementing CRUD operations. The application allows users to securely store, retrieve, update, and delete their passwords, ensuring efficient password management."
                        sourceCodeLink="https://github.com/sai-teja-kst/password-manager.git"
                        websiteLink="https://kstpassmanager.ccbp.tech"
                        footerText="20-April-2024"
                        footerIcon={<Play />}
                        techTools="Technologies & Tools : React JS, React Bootstrap"
                        cardIcon={<Key className='m-2'/>}
                    />
                <ProjectsInfoCard
                        title="Nxt Trendz E-Commerce Website"
                        imgSrc="./NxtTrendz.png"
                        cardTitle="Nxt Trendz E-Commerce Website"
                        cardSubtitle="MERN Stack"
                        cardText="Developed a dynamic e-commerce application using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. The application features product listings, a shopping cart, user authentication, and a responsive design, providing a smooth and efficient online shopping experience."
                        sourceCodeLink="https://github.com/sai-teja-kst/nxttrendz.git"
                        websiteLink="https://kstejaecom.ccbp.tech/"
                        footerText="03-May-2024"
                        footerIcon={<Play />}
                        techTools="Technologies & Tools : MongoDB, Node, Express, React"
                        cardIcon={<Cart2 className='m-2'/>}
                    />
                    </CardGroup>
                </Col>
              </Fade>
            </Tab.Pane>
          </Tab.Content>
        </Row>
      </Tab.Container>
      
    </div>
  );
}

export default Projects;
