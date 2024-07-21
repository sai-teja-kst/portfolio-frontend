import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Github, Linkedin, FileText } from 'react-bootstrap-icons';
import './index.css';


const onClickGithub = () => {
  window.open('https://github.com/sai-teja-kst', '_blank', 'noopener,noreferrer');
}

const onClickLinkedIn = () => {
  window.open('https://www.linkedin.com/in/saitejakarri/', '_blank', 'noopener,noreferrer');
}


const onClickResume = () => {
  window.open('https://docs.google.com/document/d/1EdtWCA9cLArdv3L_F8GeMJLkYU2gjW5N/edit?usp=sharing&ouid=108017358106292755918&rtpof=true&sd=true', '_blank', 'noopener,noreferrer');
}

const FloatingButton = () => {
  return (
    <div className="floating-button shadow-lg">
      <ButtonGroup vertical>
        <Button variant="light" className="icon-wrapper" onClick={onClickGithub} title="github">
          <Github className="icon" />
        </Button>
        <Button variant="light" className="icon-wrapper" onClick={onClickLinkedIn} title="linkedin">
          <Linkedin className="icon" />
        </Button>
        <Button variant="light" className="icon-wrapper" onClick={onClickResume} title="resume" >
          <FileText className="icon" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default FloatingButton;
