import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Envelope, Linkedin, GeoAlt } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [activetab, setActiveTab] = useState("mail");

  return (
    <div id="contact" className="section mb-5 text-center">
      <Row>
        <Col xs={12} lg={6}>
          <h1 className="d-flex text-danger">Contact</h1>

          <div className="d-flex flex-row gap-2">
            <Button className="border rounded-pill" variant="outline-danger" onClick={()=>setActiveTab("mail")}>
              <Envelope size={20} />
            </Button>
            <Button className="border rounded-pill" variant="outline-danger" onClick={()=>setActiveTab("linkedin")}>
              <Linkedin size={20} />
            </Button>
            <Button className="border rounded-pill" variant="outline-danger" onClick={()=>setActiveTab("address")}>
              <GeoAlt size={20} />
            </Button>
          </div>
          <div style={{width: "18rem", marginTop: "20px"}}>
            {activetab === "mail" && <strong>karrisaiteja32@gmail.com</strong>}
            {activetab === "linkedin" && <strong>saitejakarri</strong>}
            {activetab === "address" && <strong>visakhapatnam</strong>}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
