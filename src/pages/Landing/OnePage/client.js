import React from "react";

import { Col, Container, Row } from "reactstrap";
// Import Images
import charcter from "../../../assets/images/Thumbnail - portal all characters.png";

const Client = () => {
  const bannerSection = {
    backgroundColor: "#00103a",
    padding: "50px 20px 0px 20px",
  };
  const setPicture = {
    marginBottom: "-15px",
  };
  return (
    <React.Fragment>
      <div style={bannerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center mt-5">
                <h1 className="mb-4 text-white fw-morebold display-5 text-uppercase">What is Young MAESTROS?</h1>

                <h4 className="mb-4 col-md-8 col-sm-10 text-white mx-auto">
                  Welcome to YOUNG MAESTROS. This is a new web service and app
                  for kids of all ages, all about classical music. Young Maestro
                  is aimed at three different age groups; zero to five years
                  old; six to eleven and twelve to sixteen.
                </h4>
                <h4 className="text-white mb-0">Say hello to...</h4>
                <h1 className="text-white mb-0 fw-morebold display-5 text-uppercase">Manny, Alfonso and Quinn!</h1>
                <img
                  src={charcter}
                  style={setPicture}
                  className="mw-100 h-auto"
                  alt="all-chracter"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Client;
