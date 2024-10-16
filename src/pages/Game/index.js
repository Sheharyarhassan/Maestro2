import React, { useEffect } from "react";
import Game from "../../assets/images/Images-Maestro/Gamescreen-Yellow.png";
import { Container } from "reactstrap";
const index = () => {
	document.title = " Game- Young Maestro";
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<div>
			<div style={{ height: "100vh",overflowY:'hidden' }}>
				<img src={Game} className="mw-100 h-auto" />
			</div>
		</div>
	);
};

export default index;
