import React from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import image from "../../assets/images/Images-Maestro/New Assets/screenshot.png";
const ComposerInnerDetailModal = ({ isOpen, toggle }) => {
  return (
    <div>
      <Modal size="xl" isOpen={isOpen} toggle={toggle} centered backdropClassName="modal-backdrop-dark">
        <ModalHeader toggle={toggle} className="text-white Learn modal-header-dark"></ModalHeader>
        <ModalBody className="p-0">
          <img src={image} className="mw-100 h-auto" />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ComposerInnerDetailModal;
