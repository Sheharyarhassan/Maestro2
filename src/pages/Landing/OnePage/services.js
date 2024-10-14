import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import noteRed from "../../../assets/images/Images-Maestro/New Assets/NoteRed.png";
import noteGreen from "../../../assets/images/Images-Maestro/New Assets/NoteGreen.png";
const Services = () => {
	return (
		<React.Fragment>
			<section>
				<div style={{backgroundColor:'#f6cf37'}} className="py-5 position-relative">
        <img className="position-absolute mw-100 h-auto" style={{left:'-15px',top:'5px'}} src={noteRed}/>
        <img className="position-absolute mw-100 h-auto" style={{right:'-15px',top:'-65px'}} src={noteGreen}/>
					<Container>
						<Row className="justify-content-center">
							<Col lg={12}>
								<div className="text-center">
									<h1 className="text-black display-6 fw-extrabold">
										OUR PARTNERS
									</h1>
									<h4 className="text-black mb-4 col-md-9 col-sm-11 mx-auto fw-semibold">
										Repre eturite conserum estrum atio. Liquation nihicim
										voluptam id qui sinullo blaut optas seque omnis apit et
										occum et dolenienda nihicipitas id quodi aut is res evendus
										reperer. Turepudi tiurepe occae dolor aut dolupic temodit
										fugias era cus assiti nonse magnatem quos dolendusda evel.
									</h4>
									<h4 className="text-black col-md-9 col-sm-11 mx-auto fw-semibold">
										milluptiat erchil modi cuscidi volecea quiberf eritem et
										faccabo rerspis volo consenti voluptatius perum earciis il
										ide molorion plignihil idem dolenim ustotatios ime nihil
										iderfer spitaqui am faccus consed molesti accupta
										taectatissus quo dolupta testio. Erumendendi ut et quae et
										evendant, con net, veris maioneste siminvernat.
									</h4>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Services;
