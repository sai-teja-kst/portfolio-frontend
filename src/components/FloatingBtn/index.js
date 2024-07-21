import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { Github, Linkedin, FileText, Sun } from 'react-bootstrap-icons';
import './index.css';

const FloatingButton = () => {
  return (
    <div className="floating-button shadow-lg">
      <ButtonGroup vertical>
        <Button variant="light" className="icon-wrapper" title="github">
          <Github className="icon" />
        </Button>
        <Button variant="light" className="icon-wrapper" title="github">
          <Linkedin className="icon" />
        </Button>
        <Button variant="light" className="icon-wrapper" title="resume" >
          <FileText className="icon" />
        </Button>
        <Button variant="light" className="icon-wrapper" title="theme" >
          <Sun className="icon" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default FloatingButton;
