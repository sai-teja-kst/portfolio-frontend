import { useState } from 'react';
import { Card, Modal, Button} from "react-bootstrap";
import { ArrowRightSquare, Play, Cart, ArrowUpRightSquare} from "react-bootstrap-icons";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='bg-danger' closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='text-light'>
          Nxt Trendz E-Commerence
        </Modal.Title>
      </Modal.Header>
        <Card style={{ width: '100%', height:'100%'}}>
            <Card.Body>
                <Card.Img variant="top" alt="vr-page" style={{width:'60%'}} src="./VRPage.png" />
                    <Card.Title className="mt-1 text-danger">Nxt Trendz<Cart className="m-2"/></Card.Title>
                        <Card.Subtitle className="mb-2 text-secondary">React E-commerece Application</Card.Subtitle>
                            <Card.Text>
                                Developed a dynamic e-commerce application using HTML, CSS, JavaScript, React, Node.js, Express, 
                                and MongoDB. The application features product listings, a shopping cart, user authentication, 
                                and a responsive design, providing a smooth and efficient online shopping experience.
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
    </Modal>
  );
}

const P1NxtTrendz = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
        
              <Card>
                <Card.Body>
                  <Card.Img as={Cart} className='mb-3' style={{ width: '5rem', height: '5rem' }} />
                  <Card.Title><strong className='text-danger'>Nxt Trendz</strong></Card.Title>
                  <Card.Text>
                    E-commerence React Application
                    <br/>
                    <small>Technologies & Tools : MongoDB, NodeJS, ExpressJS, ReactJS</small>
                  </Card.Text>
                  <Button variant="danger" className="text-light" onClick={() => setModalShow(true)}>
                    Show more <ArrowUpRightSquare className="m-2"/>
                  </Button>
                </Card.Body>
              </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default P1NxtTrendz;