import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import logobox from '../../assets/images/Images-Maestro/New Assets/LogoBox.png'
const Partners = () => {
	return (
		<React.Fragment>
			<section>
				<div style={{backgroundColor:'#f6cf37'}} className="py-5">
      
					<Container className="pb-5">
						<Row className="justify-content-center">
							<Col lg={12}>
								<div className="text-center">
									<h1 className="text-black fw-extrabold">
										OUR PARTNERS
									</h1>
									<h4 className="text-black mb-4 col-md-8 col-sm-11 mx-auto fw-semibold">
										Repre eturite conserum estrum atio. Liquation nihicim
										voluptam id qui sinullo blaut optas seque omnis apit et
										occum et dolenienda nihicipitas id quodi aut is res evendus
										reperer. Turepudi tiurepe occae dolor aut dolupic temodit
										fugias era cus assiti nonse magnatem quos dolendusda evel.
									</h4>
									<h4 className="text-black col-md-8 col-sm-11 mx-auto fw-semibold">
										milluptiat erchil modi cuscidi volecea quiberf eritem et
										faccabo rerspis volo consenti voluptatius perum earciis il
										ide molorion plignihil idem dolenim ustotatios ime nihil
										iderfer spitaqui am faccus consed molesti accupta
										taectatissus quo dolupta testio. Erumendendi ut et quae et
										evendant, con net, veris maioneste siminvernat.
									</h4>
								</div>
							</Col>
							<Col>
							<Row className="mt-5 justify-content-center align-items-center">
								<Col lg={3} md={6}>
								<img src={logobox} className="mw-100 h-auto" alt="logo box"/>
								</Col>
								<Col lg={3} md={6}>
								<img src={logobox} className="mw-100 h-auto" alt="logo box"/>

								</Col>
								<Col lg={3} md={6}>
								<img src={logobox} className="mw-100 h-auto" alt="logo box"/>

								</Col>
								<Col lg={3} md={6}>
								<img src={logobox} className="mw-100 h-auto" alt="logo box"/>

								</Col>
							</Row>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Partners;
