import React from 'react';
import { Chrono } from "react-chrono";
import { Col } from 'react-bootstrap';
import './index.css';

const items = [{
  title: "2020",
  cardTitle: "Visakha Institue of Engineering and Technology",
  cardDetailedText: ["Graduation","2017-2020"],
  media: {
    type: "IMAGE",
    source: {
      url: "./graduation.jpg",
      height: "250px",
      width:"150px"
    }
  }
},{
  title: "2021",
  cardTitle: "Grid2Chip",
  cardDetailedText: ["Site Engineer","2021-2022"],
  media: {
    type: "IMAGE",
    source: {
      url: "./G2C.jpg",
      height: "250px",
      width:"150px"
    }
  }
},{
  title: "2022",
  cardTitle: "Onward Technologies Limited",
  cardDetailedText: ["Software Developer","2022-Ongoing"],
  media: {
    type: "IMAGE",
    source: {
      url: "./Onward.jpg",
      height: "250px",
      width:"150px"
    }
  }
}];


const About = () => {
  return (
    <div id="about" className="vw-75 border-0 about-card section">
      <h1 className='text-danger'>About Me</h1>
      <Col>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        theme={{
          primary: 'red',
          secondary: 'white',
          cardBgColor: 'radial-gradient(circle,pink,red)',
          titleColor: 'white',
          titleColorActive: 'red',
        }}
        style={{ height: "50vh", width: "50vw" }}
        mediaSettings={{ align: 'center', fit: 'cover' }}
        cardWidth={"50vw"}
        cardHeight={"50vh"}
        contentDetailsHeight={100}
      />

      </Col>
    </div>
  );
};

export default About;