import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

// Import Images
import logolight from "../../assets/images/Images-Maestro/Young-maestros-logo-linear-black on white.png";
import logodark from "../../assets/images/Images-Maestro/Young-maestros-logo-linear-white on black12.png";

import logolightMobile from "../../assets/images/Images-Maestro/Young-maestros-logo-stacked-black on white-UPDATED.png";

//Contact Us Images
import Apple from "../../assets/images/Images-Maestro/app-store-icon-black.png";
import Tiktok from "../../assets/images/Images-Maestro/Tiktok-black.png";
import Instagram from "../../assets/images/Images-Maestro/instagram-logo-black.png";
import Facebook from "../../assets/images/Images-Maestro/iconfinder_icon-02_2515845 (2).png";
import AppleLight from "../../assets/images/Images-Maestro/New Assets/app-store-icon-white.png";
import TiktokLight from "../../assets/images/Images-Maestro/Tiktok-white.png";
import InstagramLight from "../../assets/images/Images-Maestro/cropped-black-instagram-logo-white.png";
import FacebookLight from "../../assets/images/Images-Maestro/iconfinder_icon-02_2515845 (2)_white.png";

const Footer = ({ publicRoute }) => {
	const bgDark = {
		backgroundColor: "#00103a",
	};
	const bgLight = {
		backgroundColor: "white",
	};
	return (
		<React.Fragment>
			<footer
				className="custom-footer py-5 position-relative"
				style={publicRoute ? bgDark : bgLight}>
				<div className="container-fluid px-5">
					<Row className="align-items-center justify-content-between">
						<Col lg={3} className="mt-4 fs-13">
							<div>
								<div className="d-flex justify-content-lg-start justify-content-center">
									{publicRoute ? (
										<img src={logodark} alt="logo dark" height="35" />
									) : (
										<img src={logolight} alt="logo dark" height="35" />
									)}
								</div>
								<div className="mt-2">
									<h5
										className={`text-lg-start text-center fw-semibold ${
											publicRoute ? " text-white " : "text-black "
										}`}>
										© {new Date().getFullYear()} Young Maestros. All rights
										reserved.
									</h5>
								</div>
							</div>
						</Col>
						{publicRoute ? null : (
							<Col lg={6}>
								<ul className="list-unstyled d-flex flex-wrap ff-secondary mb-0 justify-content-center align-items-center">
									<li className="ps-2 pe-2 border-end border-dark align">
										<h5 className="mb-0">
											<Link to="/game" className="text-black fw-semibold">
												Game
											</Link>
										</h5>
									</li>
									<li className="ps-2 pe-2 border-end border-dark">
										<h5 className="mb-0">
											<Link to="/rhythm" className="text-black fw-semibold">
												Rhythm
											</Link>
										</h5>
									</li>
									<li className="ps-2 pe-2 border-end border-dark">
										<h5 className="mb-0">
											<Link to="/instruments" className="text-black fw-semibold">
												Instruments
											</Link>
										</h5>
									</li>
									<li className="ps-2 pe-2 border-end border-dark">
										<h5 className="mb-0">
											<Link to="/composer" className="text-black fw-semibold">
												Composers
											</Link>
										</h5>
									</li>
									<li className="ps-2 pe-2 border-end border-dark">
										<h5 className="mb-0">
											<Link to="/learn" className="text-black fw-semibold">
												Learn
											</Link>
										</h5>
									</li>
									<li className="ps-2 pe-2 border-end border-dark">
										<h5 className="mb-0">
											<Link to="/login" className="text-black fw-semibold">
												Login
											</Link>
										</h5>
									</li>
									<li className="ps-2 pe-2 ">
										<h5 className="mb-0">
											<Link to="/portal" className="text-black fw-semibold">
												Portal
											</Link>
										</h5>
									</li>
								</ul>
							</Col>
						)}
						<Col lg={2} className="fs-13 text-lg-end text-center mt-3">
							<div>
								<h5
									className={`text-black fw-semibold ${
										publicRoute ? " text-white " : " text-black "
									}`}>
									Contact Us
								</h5>
							</div>
							<div className="d-flex justify-content-lg-end justify-content-center mt-2">
								<img
									src={publicRoute ? AppleLight : Apple}
									width="30"
									className="ms-2"
								/>
								<img
									src={publicRoute ? TiktokLight : Tiktok}
									width="30"
									className="ms-2"
								/>
								<img
									src={publicRoute ? InstagramLight : Instagram}
									width="30"
									className="ms-2"
								/>
								<img
									src={publicRoute ? FacebookLight : Facebook}
									width="30"
									className="ms-2"
								/>
							</div>
						</Col>
					</Row>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
