import React from "react";

const LearnBanner = () => {
    const LearnBannerStyle = {
		backgroundColor: "#ea8bb8",
		height: "36vh",
	};
	return (
		<React.Fragment>
			<div style={LearnBannerStyle}>
				<div className="text-center pt-5">
					<h1 className="text-white fw-bold pt-5">Fun Facts</h1>
					<div className="container px-5">
						<h4 className="text-white fw-semibold">
							Ebitat faccum volupid eos as as maximaio. Nam fugit, qui omnis aut
							la velictis cumet unt. Et adipicia qui od molupta sintist et
							dolupti stempore omniaspiente oditas.
						</h4>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default LearnBanner