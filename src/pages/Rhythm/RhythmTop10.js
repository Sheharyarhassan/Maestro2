import React, { useState, useEffect } from "react";
import {
	Button,
	Card,
	CardBody,
	Col,
	Collapse,
	Container,
	Row,
} from "reactstrap";
import CardImage from "../../assets/images/Images-Maestro/New Assets/ComposerBg.png";
import { Top10data, accordianData } from "./RhythmData";
import RhythmModal from "./RhythmModal";
import diagram from "../../assets/images/Images-Maestro/New Assets/Staff diagram with numbers.png";

const RhythmDetails = () => {
	// const [modalOpen, setModalOpen] = useState(false);
	// const [selectedItem, setSelectedItem] = useState(null); // State for selected item

	// const toggleModal = (item = null) => {
	// 	setSelectedItem(item); // Update selected item
	// 	setModalOpen(!modalOpen);
	// };

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	const cardImageStyle = {
		backgroundImage: `url(${CardImage})`,
		backgroundPosition: "center center",
		backgroundSize: "cover",
		backgroundRepeate: "no-repeate",
	};
	const [openAccordions, setOpenAccordions] = useState({ 1: true });

	const toggleAccordion = (id) => {
		setOpenAccordions((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};
	return (
		<React.Fragment>
			<Container>
				<Row>
					<div>
						<img className="mw-100 h-auto" src={diagram} alt="Staff Diagram" />
					</div>
					<div>
						{accordianData.map((item) => (
							<div key={item.id} className="mb-3">
								<Button
									className="d-flex border-0 text-dark align-items-center fw-morebold"
									style={{ background: "transparent" }}
									onClick={() => toggleAccordion(item.id)}>
									<div
										style={{ background: item.colorcode }}
										className="me-4 rounded-circle px-2 py-1">
										{item.id}
									</div>
									<span>{item.Name}</span>
								</Button>
								<Collapse isOpen={openAccordions[item.id]}>
									<div
										className="ms-5 ps-3 text-light fw-light w-75"
										style={{ background: "transparent" }}>
										{item.Details}
									</div>
									<div className="ms-3 mt-3">
										<audio src={item.audio} preload="auto"></audio>
									</div>
								</Collapse>
							</div>
						))}
					</div>
					{/* {Top10data.map((item, index) => (
					<Col
						md="6"
						lg="4"
						sm="6"
						xs="12"
						key={index}
						// className="mb-4"
					>
						<Card
							className="border-0 shadow-sm"
							onClick={() => toggleModal(item)}
							role="button">
							<CardBody className="p-0">
								<div
									className="cardImage d-flex align-items-center justify-content-center rounded-top pb-0"
									style={cardImageStyle}>
									<img
										src={item.Image}
										alt="composer"
										className="col-md-4 col-6 h-auto py-4"
									/>
								</div>
								<div className="p-2 rounded-bottom">
									<p className="mb-0 text-center">
										<span className="fw-bold">{item.Name}</span>
									</p>
								</div>
							</CardBody>
						</Card>
					</Col>
				))} */}
				</Row>
			</Container>
			{/* <RhythmModal
				isOpen={modalOpen}
				toggle={toggleModal}
				item={selectedItem}
			/> */}
		</React.Fragment>
	);
};

export default RhythmDetails;
