import { Card, CardGroup } from "react-bootstrap";

const items = [
  {
    title: "2020",
    cardTitle: "Visakha Institue of Engineering and Technology",
    cardDetailedText: ["Graduation", "2017-2020"],
    media: {
      type: "IMAGE",
      source: {
        url: "./graduation.jpg",
        height: "250px",
        width: "150px",
      },
    },
  },
  {
    title: "2021",
    cardTitle: "Grid2Chip",
    cardDetailedText: ["Site Engineer", "2021-2022"],
    media: {
      type: "IMAGE",
      source: {
        url: "./G2C.jpg",
        height: "250px",
        width: "150px",
      },
    },
  },
  {
    title: "2022",
    cardTitle: "Onward Technologies Limited",
    cardDetailedText: ["Software Engineer", "2022-Ongoing"],
    media: {
      type: "IMAGE",
      source: {
        url: "./Onward.jpg",
        height: "250px",
        width: "150px",
      },
    },
  },
];


const AboutPage = () => {
  return (
    <div id="about" className="border-0 section">
      <h1 className="text-danger">About Me</h1>
      <CardGroup>
        {items.map((item, index) => (
          <Card
            style={{ width: "18rem" }}
            className="border-danger"
            key={index}
          >
            <Card.Img variant="top" src={item.media.source.url} />
            <Card.Body>
              <Card.Title>
                <legend>{item.cardDetailedText[0]}</legend>
                <br />
                <small>{item.cardDetailedText[1]}</small>
              </Card.Title>
              <Card.Text>
              <strong>{item.cardTitle}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default AboutPage;
