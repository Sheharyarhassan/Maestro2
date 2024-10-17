import React from 'react'
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import image from "../../assets/images/Images-Maestro/New Assets/Instruments brass.png";
const RhythmModal = ({ isOpen, toggle,item }) => {
    if (!item) return null;
    return (
		<Modal size="lg" isOpen={isOpen} toggle={toggle} centered>
			<ModalHeader
				toggle={toggle}
				className="bg-black text-white instrument"></ModalHeader>
			<ModalBody className="bg-black p-0">
				<Row className="py-5 px-5 justify-content-around ">
					<Col lg={4} className="d-flex justify-content-end">
						<img src={item.innerImage} alt="Instrument" className="mw-100 h-auto" />
					</Col>
					<Col lg={6}>
						<h1 className="text-white text-uppercase fw-extrabold mb-3">{item.Name}</h1>
						<p className="text-white fw-light lh-lg">
                        {item.Details}
						</p>
					</Col>
				</Row>
				<div
					className="w-100 d-flex justify-content-between px-3"
					style={{ backgroundColor: "#f9cf51" }}>
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
}

export default RhythmModal
