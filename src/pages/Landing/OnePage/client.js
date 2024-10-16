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
    marginTop:'50px'
  };
  return (
    <React.Fragment>
      <div style={bannerSection}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h1 className="mb-3 text-white fw-morebold text-uppercase display-6">What is Young MAESTROS?</h1>

                <p className="mb-4 col-md-7 col-sm-10 text-white mx-auto lh-base">
                  Welcome to YOUNG MAESTROS. This is a new web service and app
                  for kids of all ages, all about classical music. Young Maestro
                  is aimed at three different age groups; zero to five years
                  old; six to eleven and twelve to sixteen.
                </p>
                <h5 className="text-white mb-0 lh-base">Say hello to...</h5>
                <h1 className="text-white mb-0 fw-morebold text-uppercase">HILDEY, LUDWIG AND WOLFGANG!</h1>
                <img
                  src={charcter}
                  style={setPicture}
                  className="mw-100 h-auto col-xl-5 col-md-6 col-sm-10 position-relative z-3"
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
