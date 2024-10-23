import React, { useState, useEffect } from "react";
import { Button, Col, Collapse, Container, Row } from "reactstrap";
import CardImage from "../../assets/images/Images-Maestro/New Assets/ComposerBg.png";
import { accordianData } from "./RhythmData";
import diagram from "../../assets/images/Images-Maestro/New Assets/Staff diagram with numbers.png";
import player from "../../assets/images/Images-Maestro/New Assets/player.png";
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
			<Container>
				<Row>
					<div>
						<img className="mw-100 h-auto" src={diagram} alt="Staff Diagram" />
					</div>
					<div>
						{accordianData.map((item) => (
							<div key={item.id} className="mb-3">
								<Button
									className="d-flex border-0 text-dark align-items-center fw-morebold"
									style={{ background: "transparent" }}
									onClick={() => toggleAccordion(item.id)}>
									<div
										style={{ background: item.colorcode }}
										className="me-4 rounded-circle px-2 py-1">
										{item.id}
									</div>
									<span>{item.Name}</span>
								</Button>
								<Collapse isOpen={openAccordions[item.id]}>
									<div
										className="ms-5 ps-3 text-light fw-light w-75"
										style={{ background: "transparent" }}>
										{item.Details}
									</div>
									<div className="ms-5 mt-3">
										<Col className="ms-3" md={5}>
										<img
										className="w-100 h-auto"
											role="button"
											src={player}
											onClick={() => toggleAudio(item.audio)}
										/>
										<audio src={item.audio} preload="auto"></audio>
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
