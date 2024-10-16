import React from "react";

const LearnBanner = () => {
    const LearnBannerStyle = {
		backgroundColor: "#ea8bb8",
		height: "36vh",
		display:'flex',
		justifyContent:'center',
		alignItems:'center'
	};
	return (
		<React.Fragment>
			<div style={LearnBannerStyle}>
				<div className="text-center">
					<h1 className="text-white fw-bold">Fun Facts</h1>
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
}

export default LearnBanner