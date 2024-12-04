import React, { useEffect, useState, useRef } from "react";
import Banner from "./Banner";
import InstrumentModal from "./InstrumentModal";
import Instruments from "../../assets/images/Images-Maestro/New Assets/Instruments - yellow.png";
import precussion from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - precussion.png";
import piano from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - harp and piano.png";
import horns from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - horns.png";
import trumpet from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - trumpets.png";
import trumbones from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - trumbones.png";
import tuba from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - tuba.png";
import violins1 from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - first violins.png";
import violins2 from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - second violins.png";
import clarinets from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - clarinets.png";
import bassoons from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - bassoons.png";
import flute from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - piccolo and flute.png";
import oboes from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - oboes.png";
import violas from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - violas.png";
import cellos from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - cellos.png";
import bass from "../../assets/images/Images-Maestro/Individual pieces/Downloads/Instruments - double bass.png";
import chick from "../../assets/images/Images-Maestro/Individual pieces/Downloads/16.png";

import audioFile from "../../assets/images/Images-Maestro/New Assets/INSTRUMENTS.mp3";
import { Container } from "reactstrap";
const Index = () => {
	document.title = "Instruments - Young Maestro";
	const [modalOpen, setModalOpen] = useState(false);
	const toggleModal = () => setModalOpen(!modalOpen);
	const audioRef = useRef(null);

	useEffect(() => {
		const handlePlay = async () => {
			try {
				audioRef.current.muted = false;
			} catch (error) {
				console.error("Audio playback failed:", error);
			}
		};

		handlePlay();
	}, []);

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<React.Fragment>
			<Banner />
			<audio ref={audioRef} src={audioFile} muted autoPlay />
			<div style={{ backgroundColor: "#21264c", height: "100%" }}>
				<Container className="mw-100 d-flex align-items-center justify-content-center">
					<div
						style={{
							maxWidth: "100%",
							overflowX: "auto", // Enable horizontal scrolling
							overflowY: "hidden", // Optional, restrict vertical scrolling
							height: "750px", // Ensure fixed height
						}}>
						<div
							style={{
								width: "1000px",
								height: "750px",
								position: "relative",
							}}>
							<img
								src={precussion}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={piano}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={horns}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={trumpet}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={trumbones}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={tuba}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={violins1}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={violins2}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={clarinets}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={bassoons}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={flute}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={oboes}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={violas}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={cellos}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={bass}
								alt="Instrument"
								style={{ top: "0%", right: "0%" }}
								className="position-absolute"
								role="button"
							/>
							<img
								src={chick}
								alt="Instrument"
								style={{ width: "190px", bottom: "7.8%", right: "47%" }}
								className="position-absolute"
								role="button"
							/>
						</div>
					</div>
				</Container>
			</div>
			<InstrumentModal isOpen={modalOpen} toggle={toggleModal} />
		</React.Fragment>
	);
};

export default Index;
