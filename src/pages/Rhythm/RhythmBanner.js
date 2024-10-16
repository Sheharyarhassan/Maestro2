import React from "react";

const RhythmBanner = () => {
	const rhythmBannerStyle = {
		backgroundColor: "#ef5130",
		height: "36vh",
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
	};
	return (
		<React.Fragment>
			<div style={rhythmBannerStyle}>
				<div className="text-center ">
					<h1 className="text-white fw-bold">Elements of Music</h1>
					<div className="container px-5">
						<h3 className="text-white fw-light">
							Ebitat faccum volupid eos as as maximaio. Nam fugit, qui omnis aut
							la velictis cumet unt. Et adipicia qui od molupta sintist et
							dolupti stempore omniaspiente oditas.
						</h3>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default RhythmBanner;
