import React, { useState } from "react";
import { Button, Container, Label, Row, Col, Badge } from "reactstrap";
import { Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { cards } from "./CardsData";
const CardsSection = () => {
  const [modal_xlarge, setmodal_xlarge] = useState(false);
  function tog_xlarge() {
    setmodal_xlarge(!modal_xlarge);
  }
  const bgColorStyle = {
    backgroundColor: "#60D3F7",
  };
  const spanStyle = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    position: "absolute",
    bottom: "-10px",
    left: "0",
    backgroundColor: "#5CC5EF",
  };
  return (
    <div className="bg-white py-3">
      <div className="bg-white px-sm-5 px-2 d-flex justify-content-center">
        <Row className="w-100 align-items-center d-flex justify-content-md-between justify-content-center">
          <Col xxl={2} md={3} className="my-2">
          <div>
              <select
                className="form-select rounded-pill text-center"
                aria-label="Default select example"
              >
                <option>SORT BY</option>
                <option defaultValue="Year">Year</option>
                <option defaultValue="Composer">Composer</option>
                <option defaultValue="Performed">Performed By</option>
              </select>
            </div>
            </Col>
            <Col xxl={3} md={4} className="my-2">
                <Input
                  type="text"
                  className="form-control rounded-pill text-center"
                  id="exampleInputrounded"
                  placeholder="Search"
                />
            </Col>
            <Col xl={2} md={3} className="my-2">
            <Button className="bg-transparent border-0 text-muted w-100">
                  <span className="fs-5"><i className="me-2 mdi mdi-filter-outline"></i> Filter</span>
                </Button>
            </Col>
        </Row>
      </div>
      <section style={bgColorStyle}>
        <Container className="py-5 mt-2">
          <Row>
            {cards.map((value, index) => {
              return (
                <Col
                  xl={4}
                  lg={4}
                  md={6}
                  sm={12}
                  className="pb-4 px-2"
                  key={index}
                >
                  <div className="CardSound ">
                    <div
                      style={{
                        backgroundColor: `${value.bgColor}`,
                        position: "relative",
                      }}
                      className="rounded-top-4"
                    >
                      <Button
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.25)", // 25% opacity white background
                          color: "white", // white text color
                        }}
                        // color="light"
                        onClick={() => tog_xlarge(true)}
                        className="rounded-pill position-absolute end-0 m-2 top-0 py-1 px-3 border-0"
                      >
                        <span>Video</span>
                      </Button>

                      <img
                        src={value.image}
                        className="mw-100 h-auto"
                        alt="music"
                      />
                      <span
                        className=" px-3 ms-2 text-white rounded-pill"
                        style={spanStyle}
                      >
                       <small>{value.badge}</small> 
                      </span>
                    </div>
                    <div className="bg-white p-3 rounded-bottom-4">
                      <h6 className="mt-1 text-muted">{value.subHeading}</h6>
                      <h4 className="text-black fw-semibold">{value.head}</h4>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <Modal
        size="xl"
        isOpen={modal_xlarge}
        toggle={() => {
          tog_xlarge();
        }}
      >
        <ModalHeader
          className="modal-title "
          id="myExtraLargeModalLabel"
          toggle={() => {
            tog_xlarge();
          }}
        >
          <h5 className="fw-bold text-black">BACH CELLO SUITE NO.1</h5>
        </ModalHeader>
        <ModalBody >
          {/* <h6 className="fs-15">Give your text a good structure</h6> */}
          <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/WNeLUngb-Xg?si=TTjGZduH5XrtdE-X"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </ModalBody>
       
      </Modal>
    </div>
  );
};

export default CardsSection;
