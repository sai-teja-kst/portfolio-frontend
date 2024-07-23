import { useState } from 'react';
import { Card, Modal, Button } from "react-bootstrap";
import { ArrowRightSquare, ArrowUpRightSquare } from "react-bootstrap-icons";

function MyVerticallyCenteredModal({
  show,
  onHide,
  title,
  imgSrc,
  cardTitle,
  cardSubtitle,
  cardText,
  sourceCodeLink,
  websiteLink,
  footerText,
  footerIcon,
  techTools,
  cardIcon
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='bg-danger' closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className='text-light'>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Card style={{ width: '100%', height: '100%' }}>
        <Card.Body>
          <Card.Img variant="top" alt="image" style={{ width: '100%' }} src={imgSrc} />
          <Card.Title className="mt-1 text-danger">{cardTitle}{cardIcon}</Card.Title>
          <Card.Subtitle className="mb-2 text-secondary">{cardSubtitle}</Card.Subtitle>
          <Card.Text>
            {cardText}
          </Card.Text>
          <Card.Link
            href={sourceCodeLink}
            target="_blank"
            className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Source Code
            <ArrowRightSquare className="m-2" />
          </Card.Link>
          <br />
          <Card.Link
            href={websiteLink}
            target="_blank"
            className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            Open Website
            <ArrowRightSquare className="m-2" />
          </Card.Link>
        </Card.Body>
        <Card.Footer className="text-danger">{footerIcon}{footerText}</Card.Footer>
      </Card>
    </Modal>
  );
}

const ProjectsInfoCard = ({
  title,
  imgSrc,
  cardTitle,
  cardSubtitle,
  cardText,
  sourceCodeLink,
  websiteLink,
  footerText,
  footerIcon,
  techTools,
  cardIcon
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title><strong className='text-danger'>{cardTitle}</strong></Card.Title>
          <Card.Text>
            {cardSubtitle}
            <br />
            <small>{techTools}</small>
          </Card.Text>
          <Button variant="danger" className="text-light" onClick={() => setModalShow(true)}>
            Show more <ArrowUpRightSquare className="m-2" />
          </Button>
        </Card.Body>
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={title}
        imgSrc={imgSrc}
        cardTitle={cardTitle}
        cardSubtitle={cardSubtitle}
        cardText={cardText}
        sourceCodeLink={sourceCodeLink}
        websiteLink={websiteLink}
        footerText={footerText}
        footerIcon={footerIcon}
        techTools={techTools}
        cardIcon={cardIcon}
      />
    </>
  );
}

export default ProjectsInfoCard;
