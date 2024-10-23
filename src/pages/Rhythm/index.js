import React, { useEffect, useState } from "react";
import RhythmBanner from "./RhythmBanner";
import {
	Button,
	Card,
	CardBody,
	Col,
	Collapse,
	Container,
	Nav,
	NavItem,
	NavLink,
	Row,
	TabContent,
	TabPane,
} from "reactstrap";
import classnames from "classnames";
import { tabContent } from "./RhythmData";
import musicElement from "../../assets/images/Images-Maestro/New Assets/imageElement1.png";
import RhythmTop10 from "./RhythmTop10";

const Index = () => {
	document.title = " Rhythm- Young Maestro";
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	const [customActiveTab, setCustomActiveTab] = useState("1");

	const toggleCustom = (tab) => {
		if (customActiveTab !== tab) {
			setCustomActiveTab(tab);
		}
	};

	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	alphabet.forEach((char, index) => {
		tabContent[index + 2] = tabContent["1"].filter((item) =>
			item.Name.trim().startsWith(char)
		);
	});

	return (
		<React.Fragment>
			<RhythmBanner />
			<div className="mt-5" style={{ backgroundColor: "#ea8bb8" }}>
				<Container>
					<Row>
						<Card
							className="pt-5"
							style={{ background: "transparent", boxShadow: "none" }}>
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
														: "rgb(255 255 255)",
											}}
											className={classnames({
												active: customActiveTab === "1",
											})}
											onClick={() => toggleCustom("1")}>
											TOP10
										</NavLink>
									</NavItem>
									{alphabet.map((char, index) => (
										<NavItem key={index}>
											<NavLink
												style={{
													cursor: "pointer",
													fontWeight: "bold",
													padding: "0.5rem 0.5rem",
													color:
														customActiveTab === (index + 2).toString()
															? "rgb(0,159,227)"
															: "rgb(255 255 255)",
												}}
												className={classnames({
													active: customActiveTab === (index + 2).toString(),
												})}
												onClick={() => toggleCustom((index + 2).toString())}>
												{char}
											</NavLink>
										</NavItem>
									))}
								</Nav>

								<Container className="mt-5">
									{customActiveTab == "1" ? (
										<RhythmTop10 />
									) : (
										<TabContent
											activeTab={customActiveTab}
											className="text-muted">
											{Object.keys(tabContent).map((tabId) => (
												<TabPane tabId={tabId} key={tabId}>
													{tabContent[tabId].length > 0 ? (
														tabContent[tabId].map((item, index) => (
															<div key={index} className="cnt-wrapper mb-4">
																<h5 className="text-uppercase text-primary mb-0 fw-bold">
																	{item.Name}
																</h5>
																<h5 className="text-dark fw-morebold fs-5">
																	{item.Period}
																</h5>
																<NavLink href="/composerdetails">
																	<Row>
																		<Col
																			lg={2}
																			md={3}
																			className="position-relative">
																			<div
																				// style={imageBg}
																				className="rounded-3 d-flex justify-content-center">
																				<img
																					className="mw-100 h-auto px-2 pt-2"
																					src={item.Image}
																				/>
																			</div>
																		</Col>
																		<Col lg={10} md={9}>
																			<h5 className="text-dark mt-2 fw-medium">
																				{item.Details}
																			</h5>
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
									)}
								</Container>
							</CardBody>
						</Card>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	);
};

export default Index;
