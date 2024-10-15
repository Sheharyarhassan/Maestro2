import React, { useEffect, useState } from "react";
import mainImage from "../../assets/images/Images-Maestro/New Assets/8c.jpg";
import bach from "../../assets/images/Images-Maestro/New Assets/Johann_Sebastian_Bach_OUTLINE.png";
import frederic from "../../assets/images/Images-Maestro/New Assets/Frederic Chopin_OUTLINE.png";
import boulanger from "../../assets/images/Images-Maestro/New Assets/Boulanger_OUTLINE.png";
import mozart from "../../assets/images/Images-Maestro/New Assets/Mozart cutout white outline.png";
import BannerSection from "../ComposerDetails/BannerSection";
import { tabContent } from "./ComposerCategory";
import { Card, CardBody, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import categoryBg from "../../assets/images/Images-Maestro/New Assets/ComposerBg.png"
import leftgreen from '../../assets/images/Images-Maestro/New Assets/leftgreennote.png';
import leftblue from '../../assets/images/Images-Maestro/New Assets/leftbluenote.png'
import leftgreenbottom from '../../assets/images/Images-Maestro/New Assets/leftbottomgreen.png'
import rightgreen from '../../assets/images/Images-Maestro/New Assets/rightgreennote.png'
import rightorange from '../../assets/images/Images-Maestro/New Assets/rightorangenote.png'
import rightblue from '../../assets/images/Images-Maestro/New Assets/rightbluenote.png'
import rightbottomorange from '../../assets/images/Images-Maestro/New Assets/rightorangebottom.png'

const index = () => {
  const imageBg ={
    backgroundImage:`url(${categoryBg})`,
    backgroundPosition:'center center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    maxWidth:'100%',
  }
	const [customActiveTab, setCustomActiveTab] = useState("1");

	const toggleCustom = (tab) => {
		if (customActiveTab !== tab) {
			setCustomActiveTab(tab);
		}
	};

	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

	// Create a filtered tabContent array for each letter in the alphabet
	alphabet.forEach((char, index) => {
		tabContent[index + 2] = tabContent["1"].filter((item) =>
			item.Name.trim().startsWith(char)
		);
	});

	const [visibleImages, setVisibleImages] = useState([
		false,
		false,
		false,
		false,
	]);
	const [showNextSection, setShowNextSection] = useState(false);
	const mainSection = {
		backgroundImage: `url(${mainImage})`,
		height: "90vh",
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		position: "relative",
		overflow: "hidden",
		opacity: showNextSection ? 0 : 1,
		transition: "opacity 1s",
	};

	const handleVisibility = () => {
		// Delays for images
		[500, 1500, 2500, 3500].forEach((delay, index) => {
			setTimeout(() => {
				setVisibleImages((prev) => {
					const updated = [...prev];
					updated[index] = true;
					return updated;
				});
			}, delay);
		});

		// Delay to switch to next section
		setTimeout(() => {
			// setShowNextSection(true);
		}, 4500); // Adjust timing to match your needs
	};

	useEffect(() => {
		handleVisibility();
	}, []);

	const imageStyles = (index) => {
		const styles = [
			{
				position: "absolute",
				bottom: "-24%",
				left: "-40px",
				width: "30%",
				zIndex: "1",
			},
			{
				position: "absolute",
				bottom: "-20px",
				left: "20%",
				width: "35%",
				zIndex: "2",
			},
			{
				position: "absolute",
				bottom: "-30%",
				right: "18%",
				width: "35%",
				zIndex: "0",
			},
			{
				position: "absolute",
				bottom: "-30%",
				right: "-2%",
				width: "35%",
				zIndex: "1",
			},
		];
		return {
			...styles[index],
			opacity: visibleImages[index] ? 1 : 0,
			transition: "opacity 1s ease-in",
		};
	};
	return (
		<React.Fragment>
			{!showNextSection && (
				<div style={mainSection} className="ComposerMainSection">
					<img style={imageStyles(0)} className="bachImage" src={bach} alt="Bach" />
					<img style={imageStyles(1)} className="fredericImage" src={frederic} alt="Frederic" />
					<img style={imageStyles(2)} className="boulangerImage" src={boulanger} alt="Boulanger" />
					<img style={imageStyles(3)} className="mozartImage" src={mozart} alt="Mozart" />
				</div>
			)}

			{showNextSection && (
				<div style={{ height: "100%"}}>
					<BannerSection />
					<div className="mt-5 pt-5" style={{backgroundColor: "#f4e652",position:'relative', overflowX:'hidden'}}>
            <img className="position-absolute" style={{left:'-2%',top:'24%'}} src={leftgreen}/>
            <img className="position-absolute" style={{left:'4%',top:'44%'}} src={leftblue}/>
            <img className="position-absolute" style={{left:'-2%',top:'70%'}} src={leftgreenbottom}/>
            <img className="position-absolute" style={{right:'1%',top:'17%'}} src={rightgreen}/>
            <img className="position-absolute" style={{right:'2.5%',top:'24%'}} src={rightorange}/>
            <img className="position-absolute" style={{right:'-2%',top:'50%'}} src={rightblue}/>
            <img className="position-absolute" style={{right:'-.25%',top:'85%'}} src={rightbottomorange}/>

						<Container >
							<Row>
								<Col>
									<div className="galleryContent">
										<h3 className="text-primary fw-morebold">FIND COMPOSERS</h3>
										<h3 className="text-dark fw-morebold">A-Z of composers.</h3>
									</div>
								</Col>
								<Card style={{ background: "transparent", boxShadow: "none" }}>
									<CardBody className="p-0 glosarry-tabs-wrapper">
										<Nav
											tabs
											className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3 border-0">
											<NavItem>
												<NavLink
													style={{
														cursor: "pointer",
														fontWeight: "bold",
														color:
															customActiveTab === "1"
																? "rgb(0,159,227)"
																: "rgb(0 0 0 / 40%)",
													}}
													className={classnames({
														active: customActiveTab === "1",
													})}
													onClick={() => toggleCustom("1")}>
													ALL
												</NavLink>
											</NavItem>
											{alphabet.map((char, index) => (
												<NavItem key={index}>
													<NavLink
														style={{
															cursor: "pointer",
															fontWeight: "bold",
                              padding:'0.5rem 0.5rem',
															color:
																customActiveTab === (index + 2).toString()
																	? "rgb(0,159,227)"
																	: "rgb(0 0 0)",
														}}
														className={classnames({
															active:
																customActiveTab === (index + 2).toString(),
														})}
														onClick={() =>
															toggleCustom((index + 2).toString())
														}>
														{char}
													</NavLink>
												</NavItem>
											))}
										</Nav>

										<Container className="mt-5">
											<TabContent
												activeTab={customActiveTab}
												className="text-muted">
												{Object.keys(tabContent).map((tabId) => (
													<TabPane tabId={tabId} key={tabId}>
														{tabContent[tabId].length > 0 ? (
															tabContent[tabId].map((item, index) => (
																<div key={index} className="cnt-wrapper mb-4">
																	<h5
																		style={{ color: "rgb(0,159,227)" }}
																		className="text-uppercase fw-semibold text-primary mb-0 fw-bold">
																		{item.Name}
																	</h5>
																	<h5 className="text-dark fw-bold fs-5">
																		{item.Period}
																	</h5>
                                  <NavLink href="/composerdetails">
                                    <Row>
                                      <Col lg={2} md={3} className="position-relative">
                                      <div style={imageBg} className="rounded-3 d-flex justify-content-center">
                                        <img className="mw-100 h-auto px-2 pt-2" src={item.Image}/>
                                      </div>
                                      </Col>
                                      <Col lg={10} md={9}>
                                        <h5 className="text-dark mt-2 fw-normal">{item.Details}</h5>
                                      </Col>
                                    </Row>
                                  </NavLink>
																</div>
															))
														) : (
															<div className="cnt-wrapper">
																<p className="text-dark fw-bold fs-5">
																	No content found
																</p>
															</div>
														)}
													</TabPane>
												))}
											</TabContent>
										</Container>
									</CardBody>
								</Card>
							</Row>
						</Container>
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default index;
