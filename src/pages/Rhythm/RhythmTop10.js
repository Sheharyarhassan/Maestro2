import React, { useState, useEffect } from "react";
import { Button, Col, Collapse, Container, Row } from "reactstrap";
import CardImage from "../../assets/images/Images-Maestro/New Assets/ComposerBg.png";
import { accordianData } from "./RhythmData";
import diagram from "../../assets/images/Images-Maestro/New Assets/Staff diagram with numbers.png";
import player from "../../assets/images/Images-Maestro/New Assets/player.png";
import AudioPlayer from "./AudioPlayer";
const RhythmDetails = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	const cardImageStyle = {
		backgroundImage: `url(${CardImage})`,
		backgroundPosition: "center center",
		backgroundSize: "cover",
		backgroundRepeate: "no-repeate",
	};
	const [openAccordions, setOpenAccordions] = useState({ 1: true });

	const toggleAccordion = (id) => {
		setOpenAccordions((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};
	const [audio, setAudio] = useState(null); // State to hold the audio element
	const [isPlaying, setIsPlaying] = useState(false);
	const toggleAudio = (audioSrc) => {
		if (audio) {
			if (isPlaying) {
				audio.pause();
			} else {
				audio.play();
			}
			setIsPlaying(!isPlaying);
		} else {
			const newAudio = new Audio(audioSrc);
			setAudio(newAudio);
			newAudio.play();
			setIsPlaying(true);

			newAudio.onended = () => {
				setIsPlaying(false);
			};
		}
	};
	return (
		<React.Fragment>
			<Container className="px-0">
				<Row>
					<div className="px-0">
						<img className="mw-100 h-auto" src={diagram} alt="Staff Diagram" />
					</div>
					<div className="px-0">
						{accordianData.map((item) => (
							<div key={item.id} className="mb-3">
								<Button
									className="d-flex border-0 text-dark align-items-center"
									style={{ background: "transparent" }}
									onClick={() => toggleAccordion(item.id)}>
									<div
										style={{ background: item.colorcode }}
										className="me-3 rounded-circle avatar-sm border border-dark">
										<span className="d-flex align-items-center justify-content-center fs-4 h-100 fw-morebold">{item.id}</span>
									</div>
									<h3 className="fw-morebold text-dark mb-0">{item.Name}</h3>
								</Button>
								<Collapse isOpen={openAccordions[item.id]} className="ps-0 ps-md-4">
									<div
										className="ms-0 ps-5 text-light fw-light col-lg-12"
										style={{ background: "transparent" }}>
										<h4 className="text-light">{item.Details}</h4>
									</div>
									<div className="ms-5 mt-3">
										<Col className="ms-3" lg={5} md={7}>
										<AudioPlayer src={item.audio}/>
										</Col>
									</div>
								</Collapse>
							</div>
						))}
					</div>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default RhythmDetails;
