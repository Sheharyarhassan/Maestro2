import React, { useState } from "react";
import { Col, Container, NavLink, Row } from "reactstrap";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { bannerCards } from "./CardsBannerData";
import sliderimage1 from "../../../assets/images/heroBackground.jpg";
import noteImage from "../../../assets/images/Images-Maestro/New Assets/Note.png";
import musicNotes from "../../../assets/images/Images-Maestro/New Assets/MusicNotes.png";
import rightBottom from "../../../assets/images/Images-Maestro/New Assets/landingRightBottom.png"
const Home = () => {
	const [selectedCard, setSelectedCard] = useState("");
	console.log("SeelctedArea", selectedCard);
	const handleCardClick = (heading) => {
		setSelectedCard(heading);
	};
	const HeaderStyle = {
		backgroundColor: "#f6cf37",
		width: "100%",
		// height:"71.3vh"
	};
	return (
		<React.Fragment>
			<section
				className={`py-5 hero-section position-relative`}
				style={HeaderStyle}
				id="hero">
				<img
					className="position-absolute"
					style={{ left: "-0.65%", top: "45%" }}
					src={noteImage}
					alt="Note Image"
				/>
				<img
					className="position-absolute"
					style={{ right: "5%", top: "15%" }}
					src={musicNotes}
					alt="Music Notes"
				/>
				<img
					className="position-absolute"
					style={{ right: "-0.25%", top: "65%" }}
					src={rightBottom}
					alt="Music Notes"
				/>
				<Container className="py-5">
					<Row className="justify-content-center">
						<Col xl={12} lg={12} sm={12}>
							<div className="text-center">
								<h1 className="text-black fw-morebold display-6">
									CHOOSE YOUR COMPOSER
								</h1>
							</div>
						</Col>
					</Row>
					<Row className="justify-content-center py-5">
						{bannerCards.map((value, index) => {
							return (
								<Col xl={4} lg={4} md={6} sm={12} key={index}>
									<NavLink href={value.link}>
										<div
											className="text-center mb-3"
											onClick={() => handleCardClick(value.area)}
											style={{
												cursor: "pointer",
												border:
													selectedCard === value.area
														? "2px solid blue"
														: "none",
												borderRadius: "5px",
											}}>
											<img
												src={value.image}
												className="w-100 rounded-top"
												alt="yellow"
											/>
											<div className="bg-white text-center rounded-bottom py-2">
												<h4
													className=" pt-2 fw-extrabold"
													style={{
														color: `${value.textColor}`,
													}}>
													{value.heading}
												</h4>
												<h4
													className=" pb-2 mb-0 fw-medium"
													style={{
														color: `${value.textColor}`,
													}}>
													{value.ageGroup} Years Old
												</h4>
											</div>
										</div>
									</NavLink>
								</Col>
							);
						})}
					</Row>
				</Container>
			</section>
		</React.Fragment>
	);
};

export default Home;
