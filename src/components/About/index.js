import React from 'react';
import { Chrono } from "react-chrono";
import './index.css';

const items = [{
  title: "2020",
  cardTitle: "Visakha Institue of Engineering and Technology",
  cardDetailedText: ["Graduation","2017-2020"],
  media: {
    type: "IMAGE",
    source: {
      url: "./graduation.jpg",
      height: "200px",
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
      height: "200px",
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
      height: "200px",
      width:"150px"
    }
  }
}];


const About = () => {
  return (
    <div id="about" className="section about-card p-3 shadow">
      <h1 className='text-danger'>About Me</h1>
      <Chrono
        items={items} 
        mode="VERTICAL_ALTERNATING"
        theme=
          {{ primary: 'red', 
             secondary: "black", 
             cardBgColor: 'white', 
             titleColor: 'black', 
             titleColorActive: 'white'
          }}
          scrollable={{ scrollbar: false }}
          mediaSettings={{ align: 'center', fit: 'contain' }}
      />
    </div>
  );
};

export default About;