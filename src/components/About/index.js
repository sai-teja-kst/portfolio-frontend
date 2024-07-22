import React from 'react';
import { Chrono } from "react-chrono";
import './index.css';

const items = [{
  title: "2020",
  cardTitle: "Visakha Institue of Engineering and Technology",
  url: "https://www.viet.edu.in/",
  cardDetailedText: ["Graduation","2017-2020"],
  media: {
    type: "IMAGE",
    source: {
      url: "https://www.viet.edu.in/img/footer-imgs/viet-logo.png",
      height: "250px",
      width:"150px"
    }
  }
},{
  title: "2021",
  cardTitle: "Grid2Chip",
  url: "https://www.grid2chip.com/",
  cardDetailedText: ["Site Engineer","2021-2022"],
  media: {
    type: "IMAGE",
    source: {
      url: "https://www.grid2chip.com/images/logos_high-04.png"
    }
  }
},{
  title: "2022",
  cardTitle: "Onward Technologies Limited",
  url: "https://www.onwardgroup.com/",
  cardDetailedText: ["Software Developer","2022-Ongoing"],
  media: {
    type: "IMAGE",
    source: {
      url: "https://www.onwardgroup.com/images/f-logo.svg",
      height: "250px",
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
          timelinePointShape="diamond"
          cardHeight={150}
          cardWidth={250}
          mediaHeight={110}
          mediaWidth={50}
          scrollable={{ scrollbar: false }}
          mediaSettings={{ align: 'center', fit: 'contain' }}
      />
    </div>
  );
};

export default About;