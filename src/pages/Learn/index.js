import React, { useEffect, useState } from "react";
import LearnBanner from "./LearnBanner";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { content } from "./Content";
import chick from "../../assets/images/Images-Maestro/New Assets/Chick2.png";
import playicon from "../../assets/images/Images-Maestro/New Assets/playIcon.png";
import LearnModal from "./LearnModal";
import VideoPlayer from "../../Components/Common/VideoPlayer";
const video = require("../../assets/images/Images-Maestro/New Assets/BentleyContinentalGTV8.mp4")
const index = () => {
	const tags = [
		{ time: 10, text: "Intro" },
		{ time: 30, text: "Chorus" },
		{ time: 50, text: "Verse 1" },
		
	  ];
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	const [modalOpen, setModalOpen] = useState(false);
	const toggleModal = () => setModalOpen(!modalOpen);
	return (
		<React.Fragment>
			<LearnBanner />
			<div style={{ backgroundColor: "#41b2d8" }} className="py-5 mt-5">
				<Container>
					<Row>
						{content.map((item, index) => (
							<Col md="6" lg="4" xs="12" key={index}>
								<Card
									className="border-0 shadow-sm rounded-4 "
									onClick={toggleModal}
									role="button">
									<CardBody className="p-0">
										<div className="cardImage text-center pb-0 position-relative">
											<img
												src={item.Image}
												alt="composer"
												className="w-100 h-auto rounded-top-4"
											/>
											<div className="position-absolute bottom-0 start-0 w-100">
												<div className="row justify-content-between align-items-end">
													<div className="col-md-5 col-4 mb-3 ms-sm-0 ms-2">
														<img
															src={playicon}
															className="mw-100 h-auto"
															alt="playicon"
														/>
													</div>
													<div className="col-6">
														<img
															src={chick}
															className="w-100 h-auto"
															alt="chick"
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="p-3 rounded-bottom">
											<h5 className="mb-0 fw-morebold">{item.Details}</h5>
										</div>
									</CardBody>
								</Card>
							</Col>
						))}
					</Row>
					<Row className="w-100">
						<Col sm={12}>
						<VideoPlayer videoSrc={video} tags={tags}/>
						</Col>
					</Row>
				</Container>
			</div>
			<LearnModal isOpen={modalOpen} toggle={toggleModal} />
		</React.Fragment>
	);
};

export default index;
