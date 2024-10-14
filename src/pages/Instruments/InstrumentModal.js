import React from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";

const InstrumentModal = ({
  isOpen,
  toggle,
  image,
  description,
  category,
  instrument,
}) => {
  return (
    <Modal size="lg" isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader
        toggle={toggle}
        className="bg-black text-white instrument"
      ></ModalHeader>
      <ModalBody className="bg-black p-0">
        <Row className="py-5 px-5 justify-content-between">
          <Col lg={5}>
            <img src={image} alt="Instrument" className="w-100" />
          </Col>
          <Col lg={5}>
            <h5 className="text-white text-uppercase">{category} section</h5>
            <h3 className="text-white text-uppercase">{instrument}</h3>
            <p className="text-white w-75">{description}</p>
          </Col>
        </Row>
        <div
          className="w-100 d-flex justify-content-between px-3"
          style={{ backgroundColor: "#f9cf51" }}
        >
          <div>
            <i className="mdi mdi-play fs-1"></i>
          </div>
          <div>
            <i className="mdi mdi-volume-high fs-1"></i>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default InstrumentModal;
