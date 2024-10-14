import React, { useEffect } from "react";
import LearnBanner from "./LearnBanner";
import { Col, Container, Row } from "reactstrap";
import ws from "../../assets/images/Images-Maestro/Worksheet single.jpg";
import ws2 from "../../assets/images/Images-Maestro/Worksheet single 2.jpg";
import ws3 from "../../assets/images/Images-Maestro/Worksheet single 3.jpg";
import ws4 from "../../assets/images/Images-Maestro/Worksheet single 4.jpg";
import ws5 from "../../assets/images/Images-Maestro/Worksheet single 5.jpg";
import ws6 from "../../assets/images/Images-Maestro/Worksheet single 6.jpg";
import ws7 from "../../assets/images/Images-Maestro/Worksheet single 7.jpg";
import ws8 from "../../assets/images/Images-Maestro/Worksheet single 8.jpg";

const index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  
}, []);
  return (
    <React.Fragment>
      <LearnBanner />
      <div className="bg-white">
        <Container>
          <div>
            <h3 className="text-uppercase text-center text-black pt-4 fw-semibold">
              download worksheets
            </h3>
            <p className="text-center fw-semibold text-black">
              Printable activites that includes coloring sheets, puzzles,
              crosswords, connect the dots and many more!
              <br />
              These sheets open as PDF files on a new window.
            </p>
            <Row className="justify-content-center  px-sm-0 px-3">
              <Col md={4} className="border border-black">
                <img src={ws} className="mw-100 h-auto" />
              </Col>
              <Col md={4} className="border border-black">
                <img src={ws2} className="mw-100 h-auto" />
              </Col>
            </Row>
            <Row className="justify-content-center  px-sm-0 px-3">
              <Col md={4} className="border border-black">
                <img src={ws3} className="mw-100 h-auto" />
              </Col>
              <Col md={4} className="border border-black">
                <img src={ws4} className="mw-100 h-auto" />
              </Col>
            </Row>
            <Row className="justify-content-center  px-sm-0 px-3">
              <Col md={4} className="border border-black">
                <img src={ws6} className="mw-100 h-auto" />
              </Col>
              <Col md={4} className="border border-black">
                <img src={ws5} className="mw-100 h-auto" />
              </Col>
            </Row>
            <Row className="justify-content-center  px-sm-0 px-3">
              <Col md={4} className="border border-black">
                <img src={ws7} className="mw-100 h-auto" />
              </Col>
              <Col md={4} className="border border-black">
                <img src={ws8} className="mw-100 h-auto" />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default index;
