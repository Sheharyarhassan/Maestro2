import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

const Services = () => {
  return (
    <React.Fragment>
      <section>
        <div className="bg-warning py-5">
          <Container>
            <Row className="justify-content-center">
              <Col lg={12}>
                <div className="text-center">
                  <h1 className="text-black display-5 fw-morebold">OUR PARTNERS</h1>
                  <h4 className="text-black mb-4 col-md-9 col-sm-11 mx-auto fw-bold">
                    Repre eturite conserum estrum atio. Liquation nihicim
                    voluptam id qui sinullo blaut optas seque omnis apit et
                    occum et dolenienda nihicipitas id quodi aut is res evendus
                    reperer. Turepudi tiurepe occae dolor aut dolupic temodit
                    fugias era cus assiti nonse magnatem quos dolendusda evel
                  </h4>
                  <h4 className="text-black col-md-9 col-sm-11 mx-auto fw-bold">
                    milluptiat erchil modi cuscidi volecea quiberf eritem et
                    faccabo rerspis volo consenti voluptatius perum earciis il
                    ide molorion plignihil idem dolenim ustotatios ime nihil
                    iderfer spitaqui am faccus consed molesti accupta
                    taectatissus quo dolupta testio. Erumendendi ut et quae et
                    evendant, con net, veris maioneste siminvernat.
                  </h4>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Services;
