import React from "react";
import { Container, Col, Row } from "reactstrap";
import bannerImage from "../../assets/images/heroBackground.jpg";
const HeroSection = () => {
  const headerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <React.Fragment>
      <section style={headerStyle} className="py-md-5 py-4">
        <Container className="py-md-5 py-4">
          <Row className="py-3">
            <Col lg={12} className="text-center">
              <h1 className="text-black display-4 fw-extrabold">WATCH</h1>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
