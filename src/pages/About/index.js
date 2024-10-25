import React from "react";
import About from "./About";
import Partners from "./Partners";
import noteRed from "../../assets/images/Images-Maestro/New Assets/NoteRed.png";
import noteGreen from "../../assets/images/Images-Maestro/New Assets/NoteGreen.png";
import noteblue from "../../assets/images/Images-Maestro/New Assets/Note.png";
import topTwo from "../../assets/images/Images-Maestro/New Assets/MusicNotes.png"
const index = () => {
	return (
		<div className="overflow-hidden position-relative">
			<img
				className="position-fixed mw-100 h-auto"
				style={{ left: "-.5%", top: "43%" }}
				src={noteblue}
				alt="Note Red"
			/>
			<img
				className="position-fixed mw-100 h-auto"
				style={{ left: "-.75%", top: "90%"}}
				src={noteRed}
				alt="Note Red"
			/>
			<img
				className="position-fixed mw-100 h-auto"
				style={{ right: "-.75%", top: "75%" }}
				src={noteGreen}
				alt="Note Green"
			/>
            <img
				className="position-fixed mw-100 h-auto"
				style={{ right: "1%", top: "25%" }}
				src={topTwo}
				alt="Note Green"
			/>
			<About />
			<Partners />
		</div>
	);
};

export default index;
