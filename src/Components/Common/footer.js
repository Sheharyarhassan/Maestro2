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
    backgroundColor: "#00103a"
  }
  const bgLight = {
    backgroundColor: "#fffff"
  }
	return (
		<React.Fragment>
			<footer className="custom-footer py-5 position-relative" style={publicRoute? bgDark : bgLight}>
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
									<h5 className={`text-lg-start text-center fw-semibold ${publicRoute ? " text-white ": "text-black "}`}>
										© {new Date().getFullYear()} Young Maestros. All rights
										reserved.
									</h5>
								</div>
							</div>
						</Col>
						{publicRoute ? null : (
							<Col lg={6} className="ms-auto">
								<Row className="justify-content-lg-end justify-content-center">
									<Col sm={3} className="mt-md-4 mt-0">
										<ul className="list-unstyled ff-secondary footer-list text-lg-start text-center mb-0">
											<li>
												<h5>
													<Link to="/game" className="text-black fw-semibold">
														Games
													</Link>
												</h5>
											</li>
											<li>
												<h5>
													<Link
														to="/instruments"
														className="text-black fw-semibold">
														Instruments
													</Link>
												</h5>
											</li>
										</ul>
									</Col>
									<Col sm={3} className="mt-md-4 mt-0">
										<ul className="list-unstyled ff-secondary footer-list text-lg-start text-center mb-0">
											<li>
												<h5>
													<Link to="#" className="text-black fw-semibold">
														Composers
													</Link>
												</h5>
											</li>
											<li>
												<h5>
													<Link to="/watch" className="text-black fw-semibold">
														Watch
													</Link>
												</h5>
											</li>
										</ul>
									</Col>
									<Col sm={3} className="mt-md-4 mt-0">
										<ul className="list-unstyled ff-secondary footer-list text-lg-start text-center mb-0">
											<li>
												<h5>
													<Link to="/learn" className="text-black fw-semibold">
														Learn
													</Link>
												</h5>
											</li>
											<li>
												<h5>
													<Link to="/login" className="text-black fw-semibold">
														Log in
													</Link>
												</h5>
											</li>
										</ul>
									</Col>
								</Row>
							</Col>
						)}
						<Col lg={3} className="fs-13 text-lg-end text-center mt-3">
							<div>
								<h5 className={`text-black fw-semibold ${publicRoute? " text-white " : " text-black "}`}>Contact Us</h5>
							</div>
							<div className="d-flex justify-content-lg-end justify-content-center mt-2">
								<img src={publicRoute? AppleLight: Apple} width="30" className="ms-2" />
								<img src={publicRoute? TiktokLight: Tiktok} width="30" className="ms-2" />
								<img src={publicRoute? InstagramLight: Instagram} width="30" className="ms-2" />
								<img src={publicRoute? FacebookLight: Facebook} width="30" className="ms-2" />
							</div>
						</Col>
					</Row>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default Footer;
