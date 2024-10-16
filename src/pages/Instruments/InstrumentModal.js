import React from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import image from "../../assets/images/Images-Maestro/New Assets/Instruments brass.png";
const InstrumentModal = ({ isOpen, toggle }) => {
	return (
		<Modal size="xl" isOpen={isOpen} toggle={toggle} centered>
			<ModalHeader
				toggle={toggle}
				className="bg-black text-white instrument"></ModalHeader>
			<ModalBody className="bg-black p-0">
				<Row className="py-5 px-5 justify-content-between align-items-center">
					<Col lg={5} className="d-flex justify-content-end">
						<img src={image} alt="Instrument" className="mw-100 h-auto" />
					</Col>
					<Col lg={6}>
						<h4 className="text-white text-uppercase fw-morebold">BRASS SECTION</h4>
						<h1 className="text-white text-uppercase fw-extrabold">FRENCH HORN</h1>
						<p className="text-white fw-light fs-5">
							The French horn is a brass instrument with a long, coiled tube and
							a wide bell at the end, which makes a rich, warm sound. To play
							it, you buzz your lips into the mouthpiece and use your right hand
							to help control the pitch by placing it in the bell. It’s a fun
							and challenging instrument that you often hear in orchestras,
							playing both beautiful melodies and powerful, dramatic music.
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
};

export default InstrumentModal;
