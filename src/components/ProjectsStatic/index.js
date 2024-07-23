import { Card, CardGroup, Col, Row} from "react-bootstrap";
import { ArrowRightSquare, Play, HeadsetVr, Cart} from "react-bootstrap-icons";

const ProjectsStatic = () => {
    return(
        <Row>
            <Col className="p-1">
            <CardGroup>
                <Card style={{ width: '100%', height:'75vh'}}>
                    <Card.Body>
                        <Card.Img variant="top" alt="vr-page" className="card-image" src="./VRPage.png" />
                        <Card.Title className="mt-1 text-danger">VR Product Page<HeadsetVr className="m-2"/></Card.Title>
                        <Card.Subtitle className="mb-2">Static Responsive Website</Card.Subtitle>
                            <Card.Text>
                                Developed a responsive web page showcasing a VR product using HTML, CSS, and Bootstrap. The page features static content optimized for various devices, providing an engaging and visually appealing user experience.
                            </Card.Text>
                        <Card.Link 
                            href="https://saitejavrpage.ccbp.tech/"
                            target="_blank"
                            className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        >
                            Source Code
                            <ArrowRightSquare className="m-2"/>
                        </Card.Link>
                        <br/>
                        <Card.Link 
                            href="https://saitejavrpage.ccbp.tech/"
                            target="_blank"
                            className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        >
                            Open Website
                            <ArrowRightSquare className="m-2"/>
                        </Card.Link>
                        </Card.Body>
                        <Card.Footer className="text-danger"><Play/>11-Jun-2021</Card.Footer>
                </Card>
                <Card style={{ width: '100%', height:'75vh'}}>
                    <Card.Body>
                        <Card.Img variant="top" alt="flybuy-img" className="card-image" src="./FlyBuy.png"/>
                        <Card.Title className="mt-1 text-danger">FlyBuy E-commerce<Cart className="m-2"/></Card.Title>
                        <Card.Subtitle className="mb-2">Static Responsive Website</Card.Subtitle>
                            <Card.Text>
                                Designed and developed a comprehensive e-commerce website for FLYBUY, integrating product listings, shopping cart functionality, and user authentication. Utilized modern web technologies to deliver a seamless and intuitive online shopping experience.
                            </Card.Text>
                        <Card.Link 
                            href="https://saitejaecom.ccbp.tech/"
                            target="_blank"
                            className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        >
                            Source Code
                            <ArrowRightSquare className="m-2"/>
                        </Card.Link>
                        <br/>
                        <Card.Link 
                            href="https://saitejaecom.ccbp.tech/"
                            target="_blank"
                            className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        >
                            Open Website
                            <ArrowRightSquare className="m-2"/>
                        </Card.Link>
                        </Card.Body>
                        <Card.Footer className="text-danger"><Play/>18-Jun-2021</Card.Footer>
                </Card>
                </CardGroup>
            </Col>
        </Row>
    )
}

export default ProjectsStatic;