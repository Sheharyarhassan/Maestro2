import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import CardImage from "../../assets/images/Images-Maestro/New Assets/ComposerBg.png";
import { Top10data } from "./RhythmData";
import RhythmModal from "./RhythmModal";
const RhythmDetails = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item

  const toggleModal = (item = null) => {
    setSelectedItem(item); // Update selected item
    setModalOpen(!modalOpen);
  };

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
  const cardImageStyle = {
		backgroundImage: `url(${CardImage})`,
		backgroundPosition: "center center",
		backgroundSize: "cover",
		backgroundRepeate: "no-repeate",
	};
	return (
		<React.Fragment>
      <Container>
			<Row>
				{Top10data.map((item, index) => (
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
				))}
			</Row>
      </Container>
      <RhythmModal
        isOpen={modalOpen}
        toggle={toggleModal}
        item={selectedItem} 
      />
		</React.Fragment>
	);
};

export default RhythmDetails;
